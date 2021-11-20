class BelaRunner {

    constructor(options) {
        // mix in events
        Object.assign(this, w2utils.event)
        Object.assign(this, options)

        this.bela = new Bela(this)
        window.bela = this.bela // register global for convenience

        this.win = opener ? opener : parent
        // CORS check
        try { this.win.location.href }
        catch (error) {
            if (error && error.message.indexOf('from accessing a cross-origin') != -1) {
                this.crossOrigin = true
            }
        }
        this._options = {
            pauseOnError: false,
            breakPoints: []
        }
        this.timeouts = {
            all     : 4000,    // waiting on DOM
            load    : 15000,   // page load
            network : 10000,   // network requests
            delay   : 0        // delay after each step (unused)
        }
        if (!this.crossOrigin) {
            this.loc = this.parseLocation(this.win.location)
        }
        this.clear()
    }

    set options(newOptions) {
        Object.assign(this._options, newOptions)
    }

    get options() {
        return this._options
    }

    get scope() {
        return this.proc.scope
    }

    load(callback) {
        console.log('load', this.specs)
        let self = this
        let specs = this.specs.map(spec => {
            let url = spec + (spec.indexOf('?') == -1 ? '?' : '&') + (new Date()).getTime()
            return fetch(url)
        })
        Promise.all(specs)
            .then(function (responses) {
                let texts = {}
                let files = []
                self.specs.forEach(spec => {
                    responses.forEach(res => {
                        if (res.url.indexOf(spec) != -1) {
                            files.push(res.text().then((text) => {
                                texts[spec] = text
                            }))
                        }
                    })
                })
                // when all are loaded, execute in the order as in self.sepcs
                Promise.all(files).then(() => {
                    self.specs.forEach((spec) => {
                        eval(texts[spec])
                    })
                    if (typeof callback == 'function') callback()
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    clear() {
        this.steps = []
        this.options.breakPoints = []
        this.reset()
    }

    reset() {
        let edata = this.trigger({ type: 'reset', phase: 'before' })
        this.proc = {
            current: null,
            edata: null,
            index: 0,
            init: { // steps that added before run
                parents: [],
                steps: this.steps
            },
            parents: [],
            pause: false,
            pause_at: null,
            paused: false,  // pause/resume
            previous: null,
            results: {},
            resultsOrder: [],
            running: false,
            runtime: { // steps that were introduced during runtime
                parents: [],
                steps: []
            },
            waiting: [],
            scope: {}, // to store variables
            skipBreakPoint: false,
            startTime: null,
            subject: null,
            steps: null,    // currently executed steps
            timers: []
        }

        // remove runtime steps
        _remove(Array.isArray(this.steps) ? this.steps : [])
        // reset after event
        this.trigger(Object.assign(edata, { phase: 'after' }))

        // remove steps that were added by run time
        function _remove(steps) {
            for (let i = steps.length -1; i >= 0; i--) {
                if (steps[i].runtime === true) {
                    steps.splice(i, 1)
                }
                if (steps[i] && steps[i].steps) {
                    _remove(steps[i].steps)
                }
            }
        }
    }

    add(info) {
        info.id = this.getUUID()
        if (this.proc.running === true) { // add steps during execution
            info.runtime = true
            this.proc.runtime.steps.push(info)
        } else {
            this.proc.init.steps.push(info)
        }
    }

    begin(name, options) { // options: { expanded: t/f, skip: t/f, autorun: t/f }
        let info = {
            cmd: 'group',
            args: Array.from(arguments),
            options: options,
            steps: [],
            id: this.getUUID()
        }
        let init = this.proc.init
        if (this.proc.running === true) { // add groups during execution
            init = this.proc.runtime
            info.runtime = true
        }
        init.steps.push(info)
        init.parents.push(init.steps)
        init.steps = info.steps
    }

    end() {
        let init = this.proc.init
        if (this.proc.running === true) { // add context during execution
            init = this.proc.runtime
        }
        init.steps = init.parents.pop()
    }

    tag(name, options) {
        let init = this.proc.init
        if (this.proc.running === true) { // add context during execution
            init = this.proc.runtime
            // not steps, no parents
            if (init.steps.length == 0 && init.parents.length == 0) {
                if (this.proc.steps[this.proc.index]) {
                    this.proc.steps[this.proc.index].tag2 = name
                    this.proc.steps[this.proc.index].tag = name
                }
            }
        }
        if (init.steps.length > 0) {
            init.steps[init.steps.length - 1].tag = name
        } else if (init.parents.length > 0) {
            let parent = init.parents[init.parents.length - 1]
            if (parent.length > 0) {
                parent[0].tag = name
            }
        }
    }

    run(callback) {
        let timers = this.proc.timers
        if (this.steps.length == 0) {
            console.error('BELA Runner: No commands added')
            return
        }
        if (this.proc.steps == null) {
            this.reset()
            this.proc.running = true
            this.proc.paused = false
            this.proc.steps = this.steps
            this.proc.pause_at = null
            this.proc.index = 0
        }
        let self = this
        let step = this.proc.steps[this.proc.index]
        // if (step.cmd == 'then') debugger
        // check break points
        let bp = this.options.breakPoints
        if (bp.length > 0 && bp.indexOf(step.id) != -1 && step.id != this.proc.skipBreakPoint && this.proc.pause_at != 'step-done') {
            if (this.proc.current != null) {
                this.moveTo(this.proc.current.id)
            }
            this.pause()
            return
        }
        if (this.proc.current) {
            this.proc.previous = this.proc.current
        }
        this.proc.current = step
        this.proc.skipBreakPoint = null
        this.proc.startTime = (new Date()).getTime()
        this.proc.waiting = []
        if (step.options == null) step.options = {}
        if (typeof step.options != 'object') step.options = {}

        let runtime = this.proc.runtime
        let timeout = this.getTimeout(step.cmd, step.args[0])
        // timeout from third options (wait for example)
        if (step.args[2] && typeof step.args[2] == 'object' && ['wait'].indexOf(step.cmd) != -1) {
            Object.assign(step.options, step.args[2])
        }
        // timeout from options
        if (step.options && step.options.timeout != null) {
            timeout = step.options.timeout
        }

        let result = { step: { cmd: step.cmd, args: step.args, options: step.options }}
        if (step.tag) {
            result.tag = step.tag
        }
        this.proc.current.result = result

        // clean previous timers if any
        if (timers.length > 0) {
            clearTimers()
        }

        this.proc.edata = this.trigger({ type: 'command', cmd: step.cmd, phase: 'before', target: step.id, details: step })
        // console.log('EXEC', step)

        if (step.cmd == 'group') {
            this.proc.results[step.id] = {
                success: true,
                group: step.args[0],
                ...this.proc.current.result,
                time: (new Date()).getTime() - this.proc.startTime
            }
            this.proc.resultsOrder.push(step.id)
            if (step.options.skip) {
                this.proc.results[step.id].msg = '<span class="bela-alert">skipped</span>'
                this.proc.results[step.id].skipped = true
            }
            this.trigger(Object.assign(this.proc.edata, { phase: 'after', result: this.proc.results[step.id] }))
            if (typeof callback == 'function') callback()
            this.runNext()
            return
        } else {
            // remove previous runtime steps
            if (Array.isArray(step.steps) && step.steps.length > 0) {
                let edata  = this.trigger({ type: 'runtimeRemove', phase: 'before', id: step.id })
                step.steps = []
                this.trigger(Object.assign(edata, { phase: 'after' }))
            }
            runtime.steps = []
            runtime.parents = []
        }

        var _run = (function (res, resolve, reject) {
            step.options.repeat++
            if (res && res.toString() == '[object Promise]') {
                // promise returned
                res.then((res) => {
                        resolve(res)
                    })
                    .catch((error) => {
                        reject({ success: false, error: 'Error in promise', details: error })
                    })
            } else if (typeof res == 'function') { // function returned
                let res2 = res(step.args[0], step.options)
                if (typeof res2 == 'object' && (res2.repeat === true || (isFinite(res.repeat) && res.repeat > step.options.repeat))) {
                    let timer = setTimeout(() => {
                        _run(res, resolve, reject)
                    }, 20)
                    timers.push(timer)
                } else {
                    _run(res2, resolve, reject)
                }
            } else if (typeof res == 'object') {
                // if an object is returned
                if (res.repeat === true || (isFinite(res.repeat) && res.repeat > step.options.repeat)) {
                    // resubmit on a timer
                    let timer = setTimeout(() => {
                        let func = self.bela.steps[step.cmd].bind(self)
                        _run(func(step.args[0], Object.assign({ args: step.args }, step.options)), resolve, reject)
                    }, 20)
                    timers.push(timer)
                } else {
                    if (res.success != null) {
                        if (res.success === false) {
                            reject(res)
                        } else {
                            resolve(res)
                        }
                    } else {
                        resolve(res)
                    }
                }
            } else {
                // any other return is a success
                resolve(res)
            }
        }).bind(this)

        var prom = new Promise(function(resolve, reject) {
            // fail on timeout
            let timer = setTimeout(() => {
                reject({ error: `Timeout reached (${w2utils.formatNumber(timeout)} ms).` })
            }, timeout)
            timers.push(timer)
            step.options.repeat = 0
            let func = self.bela.steps[step.cmd].bind(self)
            _run(func(step.args[0], Object.assign({ args: step.args }, step.options)), resolve, reject) // step will be called multiple timers if it return false
        })

        prom.then((res) => {
            clearTimers()
            if (res && res.subject != null) {
                this.proc.subject = res.subject
            }

            this.proc.results[step.id] = {
                success: true,
                ...this.proc.current.result,
                ...res,
                subject: (res && res.subject != null ? cleanSubject(this.proc.subject) : null),
                time: (new Date()).getTime() - this.proc.startTime
            }
            this.proc.resultsOrder.push(step.id)
            if (this.proc.results[step.id].subject == null) {
                delete this.proc.results[step.id].subject
            }
            if (step.options.assertion === true) {
                this.proc.results[step.id].assertion = true
            }
            if (res && res.msg) {
                this.proc.results[step.id].msg = res.msg
            }
            if (res && res.details) {
                this.proc.results[step.id].details = res.details
            }
            if (step.options.password) {
                this.proc.results[step.id].step.args[0] = "********"
            }

            // add runtime steps, if any
            if (Array.isArray(runtime.parents) && runtime.parents.length > 0) {
                runtime.steps = runtime.parents[0]
            }
            if (Array.isArray(runtime.steps) && runtime.steps.length > 0) {
                let edata   = this.trigger({ type: 'runtimeAdd', phase: 'before', id: step.id, step })
                step.steps = runtime.steps
                this.trigger(Object.assign(edata, { phase: 'after' }))
            }
            // command completed
            this.trigger(Object.assign(this.proc.edata, { phase: 'after', result: this.proc.results[step.id] }))
            if (typeof callback == 'function') callback()
            this.runNext()
        })
        .catch((error) => {
            if (error.name == 'TypeError') {
                // JS error in promise
                console.error(error)
            }
            clearTimers()
            let parentIds = []
            this.proc.parents.forEach(parent => { parent.error = true; parentIds.push(parent.steps[parent.index].id) })
            if (!this.proc.current) { this.proc.current = { result: {} } }
            if (['get', 'find', 'closest'].includes(this.proc.current.cmd)) {
                this.proc.subject = $(null)
            }
            let result = {
                success: false,
                ...this.proc.current.result,
                ...error,
                time: (new Date()).getTime() - this.proc.startTime
            }
            if (error && error.msg) {
                result.msg = error.msg
            }
            if (error && error.details) {
                result.details = error.details
            }
            if (error && error.error && result.msg == null) {
                result.msg = error.error
                delete result.error
            }
            // will move "network" property to the end of object, so it is better for display
            if (result.network) {
                let tmp = result.network
                delete result.network
                result.network = tmp
            }
            this.proc.results[step.id] = result
            this.proc.resultsOrder.push(step.id)
            if (this.proc.edata == null) {
                this.proc.edata = { type: 'unknown' }
            }
            // add runtime steps, if any
            if (Array.isArray(runtime.parents) && runtime.parents.length > 0) {
                runtime.steps = runtime.parents[0]
            }
            if (Array.isArray(runtime.steps) && runtime.steps.length > 0) {
                let edata   = this.trigger({ type: 'runtimeAdd', phase: 'before', id: step.id, step })
                step.steps = runtime.steps
                this.trigger(Object.assign(edata, { phase: 'after' }))
            }
            // command completed
            this.trigger(Object.assign(this.proc.edata, { phase: 'after', result }))
            if (typeof callback == 'function') callback()
            if (this.options.pauseOnError && this.proc.pause_at == null) {
                this.pause(error.msg || error)
                return
            } else {
                this.runNext()
            }
            // send parent ids of the error
            let edata2 = this.trigger({ type: 'error', phase: 'before', ids: parentIds, msg: 'Sub-step  error'})
            this.trigger(Object.assign(edata2, { phase: 'after' }))
        })
        return

        function clearTimers() {
            timers.forEach(timer => {
                clearTimeout(timer)
            })
            timers.splice(0, timers.length)
        }

        function cleanSubject(subject) {
            if (subject != null) {
                if (subject instanceof jQuery) {
                    let res = []
                    subject.each((ind, el) => {
                        let inner = ''
                        if (el.hasAttributes()) {
                           let attrs = el.attributes
                           for (let i = attrs.length - 1; i >= 0; i--) {
                             inner += ' ' + attrs[i].name + '="' + attrs[i].value + '"'
                           }
                        }
                        res.push(w2utils.encodeTags(`<${String(el.tagName).toLowerCase()}${inner}>`))
                    })
                    subject = res
                } else if (subject && typeof subject == 'object') {
                    let res = {}
                    Object.keys(subject).forEach(key => {
                        if (typeof subject[key] == 'function') {
                            res[key] = 'function'
                        } else if (Array.isArray(subject[key])) {
                            res[key] = `array(${subject[key].length})`
                        } else if (subject[key] == null) {
                            res[key] = subject[key]
                        } else if (typeof subject[key] == 'object') {
                            res[key] = `{...}`
                        } else {
                            res[key] = subject[key]
                        }
                    })
                    subject = res
                }
            }
            return subject
        }
    }

    runNext() {
        if (!this.proc.running || !this.proc.steps) {
            return
        }
        let step = this.proc.steps[this.proc.index]
        if (this.proc.pause_at == 'step-done' || (this.proc.pause_at == 'step-in' && step && this.proc.pause_id == step.id)) {
            this.pause()
            return
        }
        if (step && Array.isArray(step.steps) && step.steps.length > 0 && !step.options.skip) {
            let name = step.options.name || step.id
            if (step.cmd == 'group') name = step.args[0]
            if (step.cmd == 'then') {
                name = step.options.name || step.result.msg
            }
            this.proc.parents.push({
                name,
                steps: this.proc.steps,
                index: this.proc.index,
                edata: this.trigger({ type: 'enterSub', phase: 'before', target: step.id })
            })
            this.proc.steps = step.steps
            this.proc.index = 0
            this.run()
        } else {
            this.proc.index++
            let next = this.proc.steps[this.proc.index]
            if (next != null) {
                this.run()
            } else if (this.proc.parents.length > 0) {
                let parent = this.proc.parents.pop()
                let parentStep = parent.steps[parent.index]
                if (this.proc.pause_at == 'step-out' && parent.edata && this.proc.pause_id == parentStep.id) {
                    this.proc.parents.push(parent) // return parent so next can be calculated right
                    if (parent.edata.type == null) parent.edata.type = 'enterSub' // not sure why it is not set elsewhere
                    this.trigger(Object.assign(parent.edata, { phase: 'after', success: !parent.error })) // sent sub exits event
                    this.pause()
                    return
                } else {
                    this.proc.steps = parent.steps
                    this.proc.index = parent.index + 1
                    if (parent && parent.edata) { // send after phase only if before was sent
                        this.trigger(Object.assign(parent.edata, { phase: 'after', success: !parent.error }))
                    }
                    if (this.proc.steps[this.proc.index] != null) {
                        this.run()
                    } else {
                        this.runNext()
                    }
                }
            } else {
                this.proc.running = false
                this.proc.paused = false
                this.proc.steps = null
                let edata = this.trigger({ type: 'done', phase: 'before', results: this.proc.results })
                this.trigger(Object.assign(edata, { phase: 'after' }))
            }
        }
    }

    getNext() {
        let step = this.proc.steps[this.proc.index]
        if (!step) {
            if (this.proc.parents.length > 0) {
                let parent = this.proc.parents.pop()
                this.proc.steps = parent.steps
                this.proc.index = parent.index + 1
                step = this.proc.steps[this.proc.index]
                if (!step) {
                    return this.getNext()
                } else {
                    return step
                }
            } else {
                return {}
            }
        } else {
            if (Array.isArray(step.steps) && step.steps.length > 0  && !step.options.skip) {
                return step.steps[0]
            } else {
                let next = this.proc.steps[this.proc.index + 1]
                if (next != null) {
                    return next
                } else {
                    let parents = this.getParents(step.id)
                    if (parents.length > 0) {
                        for (let i = parents.length-1; i >= 0; i--) {
                            let p = parents[i]
                            let next = p.steps[p.index + 1]
                            if (next) return next
                        }
                    }
                }
            }
        }
        return {}
    }

    moveTo(stepId, steps) {
        if (steps == null) {
            steps = this.steps
        }
        steps.forEach((step, ind) => {
            if (step.id === stepId) {
                this.proc.steps = steps
                this.proc.index = ind
                this.proc.parents = this.getParents(step.id) // .map(p => { p.index++; return p }) // it should point to next step in parent list
                return
            }
            if (Array.isArray(step.steps) && step.steps.length > 0) {
                this.moveTo(stepId, step.steps)
            }
        })
    }

    get(stepId, steps) {
        let found = null
        if (steps == null) {
            // if already running, then go to root of ran steps
            if (this.proc.parents.length > 0) {
                steps = runner.proc.parents[0].steps
            } else {
                steps = this.steps
            }
        }
        steps.forEach((step, ind) => {
            if (found != null) {
                return
            }
            if (step.id === stepId) {
                found = step
            }
            if (Array.isArray(step.steps) && step.steps.length > 0) {
                found = this.get(stepId, step.steps)
            }
        })
        return found
    }

    getParents(stepId, steps, parents, opt) {
        if (opt == null) opt = { parents: [], found: false }
        if (steps == null) steps = this.steps
        if (parents == null) parents = []
        steps.forEach((step, ind) => {
            if (opt.found) return
            if (stepId == step.id) {
                opt.found = true
                opt.parents = parents.map(p => { return { index: p.index, steps: p.steps, edata: p.edata }}) // need a copy
            }
            if (Array.isArray(step.steps) && step.steps.length > 0) {
                // TODO: check
                parents.push({ index: ind, steps, edata: { type: 'enterSub', phase: 'before', target: step.id } })
                this.getParents(stepId, step.steps, parents, opt)
                parents.pop()
            }
        })
        return opt.parents
    }

    pause(error) {
        if (this.proc.running === true) {
            if (this.proc.steps[this.proc.index]) {
                this.proc.steps[this.proc.index].error = error
            }
            this.proc.running = false
            this.proc.paused  = true
            this.proc.pause_at = null
            this.proc.pause_id = null
            let next = this.getNext()
            if (next.id) {
                if (typeof this.proc.pause_callback == 'function') {
                    let res = this.proc.pause_callback(this.proc.current, next)
                    if (res === false) return
                }
                this.proc.pause_callback = null

                this.trigger({ type: 'pause', phase: 'before', error, current: this.proc.current, next })
            } else {
                // if there is no next
                this.resume()
            }
        } else {
            console.error('BELA Runner: Test are not running')
        }
    }

    resume() {
        if (this.proc.running === false) {
            this.proc.running = true
            this.proc.paused = false
            this.proc.pause_at = null
            this.proc.pause_id = null
            this.proc.pause_callback = null
            this.runNext()
        } else {
            console.error('BELA Runner: Tests are already running')
        }
    }

    network(details) {
        // ignore network activity when no current step
        if (!this.proc.current) {
            let msg = 'because there is no current step.'
            if (this.proc.paused) msg = 'because steps are paused.'
            console.log(`Ignore Network activity ${msg}:`, details)
            return false
        }
        let result = this.proc.current.result
        result.network = result.network || []
        result.network.push(details)
        if (Array.isArray(this.proc.waiting) && this.proc.waiting.length > 0) {
            this.proc.waiting.forEach(dtl => {
                if (minimatch(details.url, dtl.url) && minimatch(details.method, dtl.method, { nocase: true })) {
                    if (dtl.count > 0) {
                        dtl.found = (dtl.found || 0) + 1
                        if (dtl.found >= dtl.count) {
                            dtl.loaded = true
                        }
                    } else {
                        dtl.found = 1
                        dtl.loaded = true
                    }
                    details.name = dtl.name
                    details.match = true
                }
            })
            // resolve waiting promise
            if (this.proc.waiting.filter(w => !w.loaded).length == 0) {
                this.proc._resolve()
            }
        }
        return true
    }

    // Utilities

    getTimeout(cmd, param) {
        let timeout = this.timeouts.all
        if (['open'].indexOf(cmd) != -1) {
            timeout = this.timeouts.load
        }
        if (['wait'].indexOf(cmd) != -1) {
            if (!isNaN(param)) {
                // one second over wait time
                timeout = parseInt(param) + 1000
            } else if (param == 'network') {
                timeout = this.timeouts.network
            } else if (param == 'page.load' || param == 'reload') {
                timeout = this.timeouts.load
            }
        }
        return timeout
    }

    parseLocation(loc) {
        let host   = loc.protocol + '//' + loc.host
        let path   = loc.href.substr(host.length)
        let file   = path.split('?')[0]
        let params = path.substr(file.length)
        let hash   = ''
        if (file.indexOf('#') != -1) {
            let tmp = file.split('#')
            file = tmp[0]
            hash = '#' + tmp[1]
        } else if (params.indexOf('#') != -1) {
            let tmp = params.split('#')
            params = tmp[0]
            hash = '#' + tmp[1]
        }
        let folder = file.substr(0, file.lastIndexOf('/') + 1)
        file = file.substr(folder.length)
        return { host, folder, file, hash, params, href: loc.href }
    }

    getUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        })
    }

    getPosition(type, rect, ret = { x: 0, y: 0 }) {
        switch (type) {
            case 'center': {
                ret.x = Math.floor(parseInt(rect.width / 2))
                ret.y = Math.floor(parseInt(rect.height / 2))
                break
            }
            case 'left': {
                ret.x = 1
                ret.y = Math.floor(parseInt(rect.height / 2))
                break
            }
            case 'right': {
                ret.x = rect.width -1
                ret.y = Math.floor(parseInt(rect.height / 2))
                break
            }
            case 'top': {
                ret.x = Math.floor(parseInt(rect.width / 2))
                ret.y = 1
                break
            }
            case 'bottom': {
                ret.x = Math.floor(parseInt(rect.width / 2))
                ret.y = rect.height - 1
                break
            }
            case 'top-left': {
                ret.x = 1
                ret.y = 1
                break
            }
            case 'top-right': {
                ret.x = rect.width - 1
                ret.y = 1
                break
            }
            case 'bottom-left': {
                ret.x = 1
                ret.y = rect.height - 1
                break
            }
            case 'bottom-right': {
                ret.x = rect.width - 1
                ret.y = rect.height - 1
                break
            }
        }
        return ret
    }
}