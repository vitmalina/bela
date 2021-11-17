class BelaSteps {
    let(key, options) {
        let data = {}
        let opt = options.args[1]
        if (typeof key == 'string') {
            // ignore @ sign if first
            if (key.substr(0, 1) === '@') {
                key = key.substr(1)
            }
            data[key] = (opt != null && typeof opt == 'object' ? $.extend(true, {}, opt) : opt)
        } else if (key != null && typeof key == 'object') {
            $.extend(true, data, key)
        }
        this.proc.scope = this.proc.scope || {}
        Object.keys(data).forEach(k => {
            if (typeof k == 'string' && k.substr(0, 1) === '@') {
                k = k.substr(1)
                data[k] = data['@' + k]
                delete data['@' + k]
            }
            if (data[k].repeat != null && typeof data[k].repeat == 'number') {
                delete data[k].repeat
            }
            this.proc.scope[k] = data[k]
        })
        let msg = ''
        let kk = Object.keys(data)
        if (kk.length == 1) {
            let tmp = data[kk[0]]
            msg = `@${kk[0]}=${tmp != null && typeof tmp == 'object' ? '[Object]' : tmp }`
        } else {
            msg = kk.map(k=>'@'+k).join(', ')
        }
        return { msg, details: data }
    }

    network(key, options) {
        // similar to let, but with type = network
        // network('@lenta', 'http://lenta.ru')
        // network('@wiki', { method: 'GET', url: 'https://en.wikipedia.org*' })
        // network({
        //     '@param1': 'http://w2ui.com',
        //     '@param2': { method: 'POST', url: 'https://w2ui.com' }
        // })
        let urls = {}
        let opt  = options.args[1]
        if (typeof key == 'string') {
            // ignore @ sign if first
            if (key.substr(0, 1) === '@') {
                key = key.substr(1)
            }
            urls[key] = (opt != null && typeof opt == 'object' ? $.extend(true, {}, opt) : opt)
        } else if (key != null && typeof key == 'object') {
            $.extend(true, urls, key)
        }
        this.proc.scope = this.proc.scope || {}
        Object.keys(urls).forEach(k => {
            if (k.substr(0, 1) === '@') {
                k = k.substr(1)
                urls[k] = urls['@' + k]
                delete urls['@' + k]
            }
            if (typeof urls[k] == 'string') {
                urls[k] = { method: '*', url: urls[k] }
            }
            if (urls[k].method == null) {
                urls[k].method = '*'
            }
            if (urls[k].repeat != null && typeof urls[k].repeat == 'number') {
                delete urls[k].repeat
            }
            urls[k].type = 'network'
            this.proc.scope[k] = urls[k]
        })
        let msg = ''
        let kk = Object.keys(urls)
        if (kk.length == 1) {
            msg = `@${kk[0]}=${urls[kk[0]].url}`
        } else {
            msg = kk.map(k => '@' + k).join(', ')
        }
        return { msg, details: urls }
    }

    listen() {
        // todo: should listen to network requests
    }

    break() {
        // jump to last task in the group
        this.proc.index = this.proc.steps.length
        return { success: true, details: 'Exit current "begin"' }
    }

    log(msg, options = {}) {
        delete options.args
        delete options.repeat
        return Object.assign({ success: true, msg: msg }, options)
    }

    error(text, options = {}) {
        delete options.args
        delete options.repeat
        return Object.assign({ success: false, error: text }, options)
    }

    pause() {
        this.pause('Paused.')
    }

    open(url, options = {}) {
        let go_url
        let result = this.proc.current ? this.proc.current.result : {}
        result.reloaded = false
        if (url.substr(0, 8) === 'https://' || url.substr(0, 7) === 'http://') {
            go_url = url
        } else if (url.substr(0, 1) === '/') {
            go_url = this.loc.host + url
        } else if (url.substr(0, 1) === '#') {
            go_url = this.loc.host + this.loc.folder + this.loc.file + url + this.loc.params
        } else {
            go_url = this.loc.host + this.loc.folder + url
        }
        if (url[0] == '@') {
            let name = String(url).substr(1)
            go_url = this.proc.scope[name]
            if (typeof go_url != 'string') {
                result.details = `Define variable ${options.args[0]} using "let" command as a string.`
                return { success: false, msg: `Undefined ${options.args[0]}` }
            }
        }
        this.proc.current.result.url = go_url
        if (options.msg) {
            this.proc.current.result.msg = options.msg
        }
        if (this.win.location.href != go_url) {
            if (!this.win.pageUnloading) {
                this.proc.subject = null // for page reload subject should be emptied
                this.win.location = go_url
            }
            result.reloaded = true
            return { repeat: true, url: go_url }
        }
        if (this.win.location.href == go_url && (options.force || options.reload)) {
            // runner/index.js sets this up
            if (!this.win.pageUnloading) {
                this.proc.subject = null // for page reload subject should be emptied
                result.reloaded = true
                this.win.location.reload()
            }
            return { repeat: true, details: go_url }
        }
        // already on the page, do not reload
    }

    // realod current page
    reload(options = {}) {
        options.reload = true
        options.msg = "Page reloaded"
        return this.bela.steps.open.call(this, this.win.location.href, options)
    }

    get(selector, options = {}) {
        // returns jQuery subject
        let result = this.proc.current ? this.proc.current.result : {}
        if (typeof selector != 'string') {
            return { success: false, details: 'Selector should be a string', msg: 'Wrong selector' }
        }
        result.selector = selector
        if (selector.substr(0, 1) === '@') {
            selector = this.proc.scope[selector.substr(1)]
            result.selector += ' = ' + selector
            if (typeof selector != 'string') {
                result.details = `Define variable ${options.args[0]} using "let" command as a string.`
                return { success: false, msg: `Undefined ${options.args[0]}` }
            }
        }
        let res = $(selector, this.win.document)
        if (res.length > 0) {
            return { subject: res, count: res.length, details: `${res.length} elements` }
        } else {
            return { repeat: true }
        }
    }

    find(selector, options = {}) {
        // returns jQuery subject
        let result = this.proc.current ? this.proc.current.result : {}
        result.selector = selector
        if (selector == null || selector === '') {
            return { success: false, error: 'Selector is not provided' }
        }
        if (selector.substr(0, 1) === '@') {
            selector = this.proc.scope[selector.substr(1)]
            if (typeof selector != 'string') {
                result.details = `Define variable ${options.args[0]} using "let" command as a string.`
                return { success: false, msg: `Undefined ${options.args[0]}` }
            }
        }
        let res = $(this.proc.subject).find(selector)
        if (res.length > 0) {
            return { subject: res, count: res.length, details: `${res.length} elements` }
        } else {
            return { repeat: true }
        }
    }

    closest(selector, options = {}) {
        // returns jQuery subject
        let result = this.proc.current ? this.proc.current.result : {}
        result.selector = selector
        if (selector == null || selector === '') {
            return { success: false, error: 'Selector is not provided' }
        }
        if (selector.substr(0, 1) === '@') {
            selector = this.proc.scope[selector.substr(1)]
            if (typeof selector != 'string') {
                result.details = `Define variable ${options.args[0]} using "let" command as a string.`
                return { success: false, msg: `Undefined ${options.args[0]}` }
            }
        }
        let res = $(this.proc.subject).closest(selector)
        if (res.length > 0) {
            return { subject: res, count: res.length, details: `${res.length} elements` }
        } else {
            return { repeat: true }
        }
    }

    invoke(method, options = {}) {
        let el = this.proc.subject
        let args = options.args.slice(1) // exclude first argument
        if (args == null) args = []
        if (!Array.isArray(args)) args = [args]
        if (typeof el[method] == 'function') {
            return { subject: el[method].apply(el, args) }
        } else {
            return { success: false, error: `The subject does not have method "${method}"` }
        }
    }

    if(selector, options = {}) {
        let result = this.proc.current ? this.proc.current.result : {}
        if (selector.substr(0, 1) === '@') {
            selector = this.proc.scope[selector.substr(1)]
            if (typeof selector != 'string') {
                result.details = `Define variable ${options.args[0]} using "let" command as a string.`
                return { success: false, msg: `Undefined ${options.args[0]}` }
            }
        }
        let res = $(selector, this.win.document)
        let cond = 'exists'
        if (options.args.length == 2 && res.length > 0) {
            let func = options.args[1]
            if (typeof func != 'function') {
                return { success: false, details: 'Third argument should be a function' }
            }
            func.call(this, { subj: res, win: this.win, self: this, scope: this.proc.scope })
            return { success: true, details: 'Element exists'}
        } else if (options.args.length == 3) {
            let func = options.args[2]
            if (typeof func != 'function') {
                return { success: false, details: 'Third argument should be a function' }
            }
            switch (options.args[1]) {
                case 'exist':
                case 'exists':
                    if (res.length > 0) {
                        func.call(this, { subj: res, win: this.win, self: this, scope: this.proc.scope })
                        return { success: true, msg: 'Condition met', details: 'Element exists' }
                    }
                    break
                case 'not.exist':
                case 'not.exists':
                case 'does.not.exists':
                    cond = 'does not exist'
                    if (res.length == 0) {
                        func.call(this, { subj: res, win: this.win, self: this, scope: this.proc.scope })
                        return { success: true, msg: 'Condition met', details: 'Element does not exist' }
                    }
                    break
                case 'visible':
                case 'is.visible':
                    cond = 'exists and is visible'
                    if (res.length > 0 && res.css('display') !== 'none' && res.css('opacity') !== 0) {
                        func.call(this, { subj: res, win: this.win, self: this, scope: this.proc.scope })
                        return { success: true, msg: 'Condition met', details: 'Element is visible' }
                    }
                    break
                case 'not.visible':
                case 'is.not.visible':
                    cond = 'exists and is not visible'
                    if (res.length > 0 && res.css('display') === 'none' || res.css('opacity') === 0) {
                        func.call(this, { subj: res, win: this.win, self: this, scope: this.proc.scope })
                        return { success: true, msg: 'Condition met', details: 'Element is not visible' }
                    }
                    break

            }
        }
        return { success: true, msg: `Condition is not met`, details: `If "${selector}" ${cond} then execute function.` }
    }

    then(func, options = {}) {
        // .then(func)
        // .then('message', func)
        // .then(func, arg1, arg2, ...) -- first argument of func is alaways event

        let result = this.proc.current ? this.proc.current.result : {}
        let edata = {
            subj: this.proc.subject,
            win: this.win,
            self: this,
            scope: this.proc.scope
        }
        if (typeof func == 'string' && typeof options.args[1] == 'function') {
            result.msg = func
            func = options.args[1]
            options.args = options.args.splice(1)
        }
        if (typeof func == 'function') {
            return func.call(this, edata, ...options.args.splice(1))
        } else {
            return { success: false, msg: 'First or second argument should be a function' }
        }
    }

    wait(param, options = {}) {
        let result = this.proc.current ? this.proc.current.result : {}
        if (!isNaN(param)) {
            options.type  = 'timer'
            result.msg = param < 10000 ? (param/1000) + ' sec' : w2utils.formatters.interval(param)
        }
        if (typeof param == 'string') {
            switch (param) {
                case 'ready':
                case 'page.ready': {
                    options.type = 'page.ready'
                    result.msg = 'Page ready'
                    result.details = 'Waiting for page to load and DOM to be ready'
                    break
                }
                case 'reload':
                case 'page.reload': {
                    options.type = 'page.reload'
                    result.msg = 'Page reloaded'
                    result.details = 'Waiting for page to reload'
                    break
                }
                case 'network': {
                    this.proc.waiting = []
                    options.type = 'network'
                    let details = options.args[1]
                    if (!Array.isArray(details)) details = [details]
                    let names = []
                    let errors = []
                    details.forEach(dtl => {
                        let data = { method: '*', url: dtl, loaded: false, count: 1 }
                        let name = '...'
                        if (typeof data.url == 'object' && data.url.url != null ) {
                            let tmp = data.url
                            delete data.url
                            Object.assign(data, tmp)
                        } else if (typeof dtl == 'string' && dtl.substr(0, 1) == '@') {
                            name = dtl
                            let tmp = this.proc.scope[dtl.substr(1)]
                            if (tmp == null) {
                                errors.push(`Undefined variable "${dtl}"`)
                            } else if (tmp.type == 'network') {
                                data = { method: tmp.method, url: tmp.url, loaded: false, count: tmp.count || 1 }
                            } else {
                                data = { method: '*', url: tmp, loaded: false, count: 1 }
                            }
                        }
                        data.name = name
                        names.push(name)
                        this.proc.waiting.push(data)
                    })
                    if (errors.length != 0) {
                        this.proc.waiting.splice(0)
                        return { success: false, error: errors[0], details: errors }
                    }
                    result.msg = `Network: ${names.length} urls`
                    result.details = this.proc.waiting
                    break
                }
                default: {
                    if (param[0] == '@') {
                        param = this.proc.scope[param.substr(1)]
                        if (typeof param != 'string') {
                            result.details = `Define variable ${options.args[0]} using "let" command.`
                            return { success: false, msg: `Undefined ${options.args[0]}`}
                        }
                        options.type = 'dom.change'
                        result.msg = `${options.args[0]} "${options.args[1]}"`
                    } else {
                        // assume it is a selector
                        options.type = 'dom.change'
                        result.selector = param
                        result.msg = `${options.args[1]} = "${options.args[2] != null ? options.args[2] : ''}"`
                        result.details = `Wait for "${param}" "${options.args[1]}" "${options.args[2] != null ? options.args[2] : ''}"`
                    }
                }
            }
        }

        let negative = false
        switch (options.type) {
            case 'timer': {
                return new Promise((resolve, reject) => {
                    setTimeout(() => { resolve({}) }, param)
                })
                break
            }
            case 'page.ready': {
                // pageUnloading set by bela frame
                // repeat at least once cycle, needed if clicked on link
                if (options.repeat === 0 || parent.document.readyState != 'complete') {
                    return { repeat: true }
                }
                break
            }
            case 'page.reload': {
                if (this.proc.current.result.reloaded !== true || parent.document.readyState != 'complete') {
                    return { repeat: true }
                }
                // pageUnloading set by bela frame
                if (parent.pageUnloading !== true) {
                    options.reloaded = true
                }
                break
            }
            case 'network': {
                // check if all loaded
                return new Promise((resolve, reject) => {
                    this.proc._resolve = resolve
                    this.proc._reject = reject
                })
                // if (options.repeat === 0 || this.proc.waiting.filter(w => !w.loaded) > 0) {
                //     return { repeat: true }
                // } else {
                //     return { success: true }
                // }
            }
            case 'dom.change': {
                let res = $(param, this.win.document)
                switch (options.args[1]) {
                    case 'not.to.have.text':
                        negative = true
                    case 'to.have.text': {
                        if ((!negative && res.text() !== options.args[2]) || (negative && res.text() === options.args[2])) {
                            return { repeat: true }
                        }
                        break
                    }
                    case 'to.have.class': {
                        result.count = res.length
                        if (!res.hasClass(options.args[2])) {
                            return { repeat: true }
                        }
                        break
                    }
                    case 'to.not.have.class': {
                        result.count = res.length
                        if (res.hasClass(options.args[2])) {
                            return { repeat: true }
                        }
                        break
                    }
                    case 'to.appear':
                    case 'to.be.visible': {
                        if (res.length == 0 || res.css('display') == 'none' || res.css('opacity') != 1) {
                            return { repeat: true }
                        }
                        result.msg = `${options.args[1]}`
                        result.details = `Element(s) are visible if (display != 'none' || opactiy == 1)`
                        result.count = res.length
                        break
                    }
                    case 'to.disappear':
                    case 'to.be.hidden': {
                        if (!(res.length == 0 || res.css('display') == 'none' || res.css('opacity') == 0)) {
                            return { repeat: true }
                        }
                        result.msg = `${options.args[1]}`
                        result.details = `Element(s) are not visible if (display == 'none' || opactiy == 0)`
                        result.count = res.length
                        break
                    }
                    case 'to.be.removed':
                    case 'to.not.exist': {
                        if (res.length > 0) {
                            return { repeat: true }
                        }
                        result.details = `Element${res.length > 1 ? 's' : ''} "${param}" ${res.length > 1 ? 'do' : 'does'} not exist`
                        break
                    }
                    case 'to.be.added':
                    case 'to.exist': {
                        if (res.length == 0) {
                            return { repeat: true }
                        }
                        result.details = `Element${res.length > 1 ? 's' : ''} "${param}" exist${res.length > 1 ? '' : 's'}`
                        result.count   = res.length
                        break
                    }
                    default: {
                        return {
                            success: false,
                            msg: options.args[1] == null || options.args[1] === ''
                                ? `Second argument cannot be empty `
                                : `Unrecognized argument "${options.args[1]}" `
                        }
                    }
                }
                break
            }
        }
    }

    click(options = {}) {
        // don't allow selector as first arg, it would interfeer with grid click
        // options.delay
        // options.multiple
        // options.*key (modifiers)
        // options.double
        // options.positon = 'center'

        if (options.delay == null) options.delay = 10
        if (options.multiple == null) options.multiple = false
        // default second arg is position
        if (options.args && typeof options.args[1] == 'string') {
            options.position = options.args[1]
        }

        let subj = this.proc.subject
        let win  = this.win
        let result = this.proc.current.result
        let events = ['mousemove', 'mouseover', 'mousedown', 'mouseup', 'click']
        if (options.double) {
            events.push('mousedown', 'mouseup', 'click')
        }
        events.push('mouseout')
        let modifiers = {
            ctrlKey: options.ctrlKey || false,
            shiftKey: options.shiftKey || false,
            altKey: options.altKey || false,
            metaKey: options.metaKey || false,
            button: options.button || 0,
            bubbles: true,
            cancelable: true,
            view: this.win
        }
        if (options.multiple !== true) {
            subj = $(subj[0])
        }
        let prom = new Promise((resolve, reject) => {
            if (subj && subj.length > 0) {
                (function process(subj, index) {
                    let el = subj[index]
                    let rect = el.getBoundingClientRect()
                    // default position is center
                    if (options.x == null && options.y == null && options.position == null) {
                        options.position = 'center'
                    }
                    let { x, y } = (options.position != null
                        ? runner.getPosition(options.position, rect)
                        : { x: options.x, y: options.y })
                    Object.assign(modifiers, {
                        x: rect.x + x,
                        y: rect.y + y,
                        clientX: x,
                        clientY: y
                    })
                    result.modifiers = Object.assign({}, modifiers)
                    delete result.modifiers.view // otherwise circular JSON
                    sendEvents(el)
                    if (subj.length > index + 1) {
                        setTimeout(() => {
                            process(subj, index + 1)
                        }, options.delay || 0)
                    } else {
                        setTimeout(() => {
                            resolve({
                                msg: 'ok',
                                events: events.join(', '),
                                multiple: options.multiple,
                                delay: options.delay,
                                position: options.position
                            })
                        }, options.delay || 0)
                    }
                })(subj, 0)
            } else {
                reject('Cannot execute CLICK command on an empty subject')
            }

            function sendEvents(el) {
                events.forEach(eventType => {
                    let event = new win.MouseEvent(eventType, modifiers)
                    event.initMouseEvent(event.type, true, true, modifiers.view, null,
                        modifiers.clientX, modifiers.clientY, modifiers.x, modifiers.y,
                        modifiers.ctrlKey, modifiers.altKey, modifiers.shiftKey, modifiers.metaKey,
                        modifiers.button, el)
                    el.dispatchEvent(event)
                })
            }
        })
        return prom
    }

    trigger(param, options = { multiple: false }) {
        // options.delay
        // options.multiple
        // options.*key (modifiers)
        // options.positon = 'center'

        if (options.delay == null) options.delay = 10
        if (options.multiple == null) options.multiple = false
        // default second arg is position
        if (options.args && typeof options.args[1] == 'string') {
            options.position = options.args[1]
        }

        let subj = this.proc.subject
        let win  = this.win
        let result = this.proc.current.result
        let obj = this
        let events = Array.isArray(param) ? param : [param]
        let modifiers = {
            ctrlKey: options.ctrlKey || false,
            shiftKey: options.shiftKey || false,
            altKey: options.altKey || false,
            metaKey: options.metaKey || false,
            button: options.button || 0,
            bubbles: true,
            cancelable: true,
            view: this.win
        }
        if (options.multiple !== true) {
            subj = $(subj[0])
        }
        let prom = new Promise((resolve, reject) => {
            if (subj && subj.length > 0) {
                (function process(subj, index) {
                    let el = subj[index]
                    let rect = el.getBoundingClientRect()
                    // default position is center
                    if (options.x == null && options.y == null && options.position == null) {
                        options.position = 'center'
                    }
                    let { x, y } = (options.position != null
                        ? runner.getPosition(options.position, rect)
                        : { x: options.x, y: options.y })
                    Object.assign(modifiers, {
                        x: rect.x + x,
                        y: rect.y + y,
                        clientX: x,
                        clientY: y
                    })
                    result.modifiers = Object.assign({}, modifiers)
                    delete result.modifiers.view // otherwise circular JSON
                    sendEvents(el)
                    if (subj.length > index + 1) {
                        setTimeout(() => {
                            process(subj, index + 1)
                        }, options.delay || 0)
                    } else {
                        setTimeout(() => {
                            resolve({
                                msg: param,
                                multiple: options.multiple,
                                delay: options.delay,
                                position: options.position
                            })
                        }, options.delay || 0)
                    }
                })(subj, 0)
            } else {
                reject('Cannot execute TRIGGER command on an empty subject')
            }

            function sendEvents(el) {
                events.forEach(eventType => {
                    let event = new win.MouseEvent(eventType, modifiers)
                    event.initMouseEvent(event.type, true, true, modifiers.view, null,
                        modifiers.clientX, modifiers.clientY, modifiers.x, modifiers.y,
                        modifiers.ctrlKey, modifiers.altKey, modifiers.shiftKey, modifiers.metaKey,
                        modifiers.button, el)
                    el.dispatchEvent(event)
                })
            }
        })
        return prom
    }

    drag(options) {
        // options.divX, options.divY - the rest as in trigger
        let { divX, divY, stepX, stepY, step, delay, ...rest } = options
        if (delay == null) delay = 0
        if (divX == null) divX = 0
        if (divY == null) divY = 0
        options = rest
        bela
            .tag('drag & drop')
            .trigger('mouseenter', options)
            .trigger('mouseover', options)
            .trigger('mousedown', options)
            .then((event) => {
                let { clientX, clientY } = event.self.proc.previous.result.modifiers
                let finalX = clientX + divX
                let finalY = clientY + divY
                if (stepX == null && step != null) stepX = step
                if (stepY == null && step != null) stepY = step
                if (stepX == null && stepY == null) {
                    bela.trigger('mousemove', { x: finalX, y: finalY })
                        .tag(`mousemove(${finalX - clientX}, ${finalY - clientY})`)
                } else {
                    let currX = clientX
                    let currY = clientY
                    let cnt = 0
                    stepX = Math.abs(stepX) * (divX >= 0 ? 1 : -1)
                    stepY = Math.abs(stepY) * (divY >= 0 ? 1 : -1)
                    while ((currX != finalX || currY != finalY) && cnt < 500) {
                        cnt++
                        if ((divX >= 0 && currX < finalX) || (divX < 0 && currX > finalX)) {
                            currX += stepX
                            if ((currX > finalX && divX >= 0) || (currX < finalX && divX < 0)) currX = finalX
                        } else {
                            currX = finalX
                        }
                        if ((divY >= 0 && currY < finalY) || (divY < 0 && currY > finalY)) {
                            currY += stepY
                            if ((currY > finalY && divY >= 0) || (currY < finalY && divY < 0)) currY = finalY
                        } else {
                            currY = finalY
                        }
                        bela.trigger('mousemove', { x: currX, y: currY, delay })
                            .tag(`mousemove(${currX - clientX}, ${currY - clientY})`)
                    }
                    if (currX != finalX || currY <= finalY) {
                        bela.trigger('mousemove', { x: finalX, y: finalY })
                            .tag(`mousemove(${finalX - clientX}, ${finalY - clientY})`)
                    }
                }
            }, options)
            .tag(`drag, divX=${divX}, divY=${divY}`)
            .trigger('mouseup', options)
            .trigger('click', options)
    }

    type(text, options = {}) {
        // options.delay
        // options.parse = false - not to use special chars
        // options.password = true - suppress clear text password

        if (options.delay == null) options.delay = 5

        let subj = this.proc.subject
        let win  = this.win
        let events = ['keydown', 'keypress', 'keyup', 'input']
        let modifiers = {
            ctrlKey: options.ctrlKey || false,
            shiftKey: options.shiftKey || false,
            altKey: options.altKey || false,
            metaKey: options.metaKey || false,
            repeat: false,
            view: this.win
        }
        let keys = {
            '{'         : '{',
            '}'         : '}',
            'selectall' : String.fromCharCode(0),
            'tab'       : String.fromCharCode(9),
            'enter'     : String.fromCharCode(13),
            'del'       : String.fromCharCode(6), // 46 is del key and also also a "." symbol ??
            'backspace' : String.fromCharCode(8),
            'insert'    : String.fromCharCode(45),

            'shift'     : String.fromCharCode(16),
            'alt'       : String.fromCharCode(18),
            'ctrl'      : String.fromCharCode(17),
            'meta'      : String.fromCharCode(17),

            'left'      : String.fromCharCode(37),
            'leftarrow' : String.fromCharCode(37),
            'up'        : String.fromCharCode(38),
            'uparrow'   : String.fromCharCode(38),
            'right'     : String.fromCharCode(39),
            'rightarrow': String.fromCharCode(39),
            'down'      : String.fromCharCode(40),
            'downarrow' : String.fromCharCode(40),
            'pageup'    : String.fromCharCode(33),
            'pagedown'  : String.fromCharCode(34),

            'esc'       : String.fromCharCode(27),
            'escape'    : String.fromCharCode(27),
            'end'       : String.fromCharCode(35),
            'home'      : String.fromCharCode(36)
        }
        text = String(text)
        if (options.parse !== false) {
            text = text.replace(/({(.*?)})/g, (token) => keys[token.substr(1, token.length-2)])
        }

        let prom = new Promise((resolve, reject) => {
            if (subj && subj.length > 0) {
                (function sendKey(text, index) {
                    let key = text[index]
                    let code = text.charCodeAt(index)
                    if (code == '0') { // select all
                        if (typeof subj[0].select == 'function') {
                            subj[0].select()
                        }
                    } else if (code == 6) {
                        // del key code is 46, but it is also a ".", so, the hack
                        sendKeyEvents(46)
                    } else {
                        sendKeyEvents(key)
                        // if selected, remove it
                        if (win.document.getSelection().toString() == subj.val()) {
                            subj.val('')
                        }
                        subj.val(subj.val() + text.substr(index, 1)) // insert actuall key
                    }
                    if (text.length > index + 1) {
                        setTimeout(() =>{
                            sendKey(text, index + 1)
                        }, options.delay)
                    } else {
                        resolve()
                    }
                })(text, 0)
            } else {
                reject('Cannot execute TYPE command on an empty subject')
            }

            function sendKeyEvents(key) {
                events.forEach(eventType => {
                    let event = new win.Event(eventType, { bubbles: true, cancelable: true })
                    event.initEvent(eventType, true, false);
                    event.key = key
                    event.keyCode = typeof(key) == 'string' ? key.charCodeAt(0) : key
                    event.which = event.keyCode
                    Object.assign(event, modifiers)
                    subj[0].dispatchEvent(event)
                })
                // if enter or tab also sent change vent
                if (key == String.fromCharCode(13) || key == String.fromCharCode(9)) {
                    let event = new win.Event('change', { bubbles: true, cancelable: true })
                    event.initEvent('change', true, false);
                    Object.assign(event, modifiers)
                    subj[0].dispatchEvent(event)
                }
            }
        })
        return prom
    }

    focus(options = {}) {
        let subj = this.proc.subject
        if (subj && subj.length > 0) {
            let el = subj[0]
            if (['INPUT', 'TEXTAREA', 'BUTTON', 'SELECT'].indexOf(el.tagName) != -1
                || ($(el).prop('tabindex') != null && $(el).prop('tabindex') != -1)
                || options.force === true) {
                el.focus()
                el.dispatchEvent(new Event('focus')) // if window is not in focus, focus will not be sent
            } else {
                return { success: false, error: 'Invalid subject', details: 'The subject cannot receive focus. Add tabindex property or use options.force = true' }
            }
        } else {
            return { success: false, error: 'Invalid subject', details: 'There is no subject to do "focus" on' }
        }
    }

    blur(options = {}) {
        let subj = this.proc.subject
        if (subj && subj.length > 0) {
            let el = subj[0]
            if (['INPUT', 'TEXTAREA', 'BUTTON', 'SELECT'].indexOf(el.tagName) != -1
                || ($(el).prop('tabindex') != null && $(el).prop('tabindex') != -1)
                || options.force === true) {
                el.blur()
                el.dispatchEvent(new Event('blur')) // if window is not in focus, blur will not be sent
            } else {
                return { success: false, error: 'Invalid subject', details: 'The subject cannot receive blur. Add tabindex property or use options.force = true' }
            }
        } else {
            return { success: false, error: 'Invalid subject', details: 'The subject is empty' }
        }
    }

    select(val, options = {}) {
        let subj = this.proc.subject
        let events = ['input', 'change']
        let result = { success: true, count: 0 }
        if (subj && subj.length > 0) {
            if (options.multiple !== true && subj.length > 1) {
                return {
                    success: false, error: 'Multiple elements',
                    details: `Multiple elements (${subj.length}), use options.multiple = true`
                }
            }
            subj.each((ind, el) => {
                if (el.tagName === 'SELECT') {
                    if (typeof val == 'number') {
                        el.selectedIndex = val
                        result.msg = 'index='+val
                        result.details = `Selected item with index=${val}`
                    } else {
                        $(el).val(val)
                        result.msg = val
                        result.details = `Selected item with value="${val}"`
                    }
                    result.count++
                    events.forEach(event => { el.dispatchEvent(new Event(event)) })
                } else if (options.force !== true) {
                    result = {
                        success: false, error: 'Invalid subject',
                        details: 'Some elements are not HTML select element. Use options.force = true to ignore',
                        count: result.count
                    }
                }
            })
        } else {
            result = { success: false, error: 'Invalid subject', details: 'The subject is empty' }
        }
        result.msg = `applied to ${result.count} of ${subj.length}`
        return result
    }

    clear(options = {}) {
        let subj = this.proc.subject
        let events = ['input', 'change']
        let result = { success: true, count: 0 }
        if (subj && subj.length > 0) {
            if (options.multiple !== true && subj.length > 1) {
                return {
                    success: false, error: 'Multiple elements',
                    details: `Multiple elements (${subj.length}), use options.multiple = true`
                }
            }
            subj.each((ind, el) => {
                if (['INPUT', 'TEXTAREA', 'SELECT'].indexOf(el.tagName) != -1) {
                    $(el).val('')
                    events.forEach(event => { el.dispatchEvent(new Event(event)) })
                    result.count++
                } else if (options.force !== true) {
                    result = {
                        success: false, error: 'Invalid subject',
                        details: 'Some elements are not input controls (input, textarea, select). Use options.force = true to ignore',
                        count: result.count
                    }
                }
            })
        } else {
            result = { success: false, error: 'Invalid subject', details: 'The subject is empty' }
        }
        result.msg = `applied to ${result.count} of ${subj.length}`
        return result
    }

    check(options = {}) {
        let subj = this.proc.subject
        let events = ['input', 'change']
        let result = { success: true, count: 0 }
        if (subj && subj.length > 0) {
            if (options.multiple !== true && subj.length > 1) {
                return {
                    success: false, error: 'Multiple elements',
                    details: `Multiple elements (${subj.length}), use options.multiple = true`
                }
            }
            subj.each((ind, el) => {
                if (el.tagName == 'INPUT' && el.type == 'checkbox') {
                    $(el).prop('checked', true)
                    events.forEach(event => { el.dispatchEvent(new Event(event)) })
                    result.count++
                } else if (options.force !== true) {
                    result = {
                        success: false, error: 'Invalid subject',
                        details: 'Some elements are not checkboxes. Use options.force = true to ignore',
                        count: result.count
                    }
                }
            })
        } else {
            result = { success: false, error: 'Invalid subject', details: 'The subject is empty' }
        }
        result.msg = `applied to ${result.count} of ${subj.length}`
        return result
    }

    uncheck(options = {}) {
        let subj = this.proc.subject
        let events = ['input', 'change']
        let result = { success: true, count: 0 }
        if (subj && subj.length > 0) {
            if (options.multiple !== true && subj.length > 1) {
                return {
                    success: false, error: 'Multiple elements',
                    details: `Multiple elements (${subj.length}), use options.multiple = true`
                }
            }
            subj.each((ind, el) => {
                if (el.tagName == 'INPUT' && el.type == 'checkbox') {
                    $(el).prop('checked', false)
                    events.forEach(event => { el.dispatchEvent(new Event(event)) })
                    result.count++
                } else if (options.force !== true) {
                    result = {
                        success: false, error: 'Invalid subject',
                        details: 'Some elements are not checkboxes. Use options.force = true to ignore',
                        count: result.count
                    }
                }
            })
        } else {
            result = { success: false, error: 'Invalid subject', details: 'The subject is empty' }
        }
        result.msg = `applied to ${result.count} of ${subj.length}`
        return result
    }

    should(param, options) {
        // does not wait
        // should('exists', selector)
        // should('not.exists', selector)
        let subj = this.proc.subject
        let details = {}
        if (param != null) {
            if (typeof param == 'object') {
                let total = 0, good = 0, error
                Object.keys(param).forEach(key => {
                    // remove digits, "*.XXXXX" at the end
                    // not.contain.text.1
                    // not.contain.text.2
                    // ...
                    let tmp = process(key.replace(/\.\d{1,5}$/g, '').toLowerCase(), param[key])
                    if (tmp.success === false && error == null) {
                        error = tmp
                    }
                    if (tmp.total == null) {
                        if (tmp.success === true) {
                            tmp.good  = 1
                            tmp.total = 1
                            bela.log(tmp.msg || tmp.details, { assertion: true, details: tmp.details })
                        } else {
                            tmp.good  = 0
                            tmp.total = 1
                            bela.error(tmp.msg || tmp.details, { assertion: true, details: tmp.details })
                        }
                    }
                    good += tmp.good
                    total += tmp.total
                })
                if (error && Object.keys(param).length == 1) {
                    details.error = error.details
                }
                Object.assign(details, {
                    success: good === total,
                    msg: `${good} of ${total} passed, ${total - good} failed`
                })
            }
            if (typeof param == 'string') {
                let tmp = process(param.toLowerCase(), options.args[1])
                if (tmp.total != null) {
                    details = {
                        success: tmp.good === tmp.total,
                        msg: `${tmp.good} of ${tmp.total} passed, ${tmp.total - tmp.good} failed`
                    }
                } else {
                    return tmp
                }
            }
        } else {
            details = { msg: 'Wrong arguments', success: false }
        }
        return details

        function process(param, value) {
            let details = {
                success: true,
                msg: `${param} = "${value}"`,
                details: `Subject should "${param}" ${value ? `"${value}"` : ''}`
            }
            let negative = false
            switch (param) {
                case 'not.exist':
                    negative = true
                case 'exist': {
                    if (value.substr(0, 1) == '@') {
                        value = runner.proc.scope[value.substr(1)]
                    }
                    let count = $(value, runner.win.document).length
                    if ((negative && count !== 0) || (!negative && count === 0)) {
                        details = {
                            msg: `Element(s) should ${negative ? 'not ': ''} exist`,
                            details: `Expected ${negative ? 'not ': ''}to find element(s) with selector "${value}".`,
                            success: false
                        }
                    }
                    Object.assign(details, { count, selector: value })
                    break
                }
                case 'have.length': {
                    if (subj.length != value) {
                        details = {
                            msg: 'Incorect length',
                            details: `Expected length ${value}, but ${subj.length} found.`,
                            success: false
                        }
                    }
                    break
                }
                case 'have.value': {
                    if (subj.length == 0 || subj.val() != value) {
                        details = {
                            msg: 'Incorect value',
                            details: `Expected value "${value}", but "${subj.val()}" found.`,
                            success: false
                        }
                    }
                    break
                }
                case 'not.have.class':
                    negative = true
                case 'have.class': {
                    if ((negative && subj.hasClass(value)) || (!negative && !subj.hasClass(value))) {
                        details = {
                            msg: 'Incorect class',
                            details: `Expected ${negative ? 'not ' : ''}to have class "${value}"`,
                            success: false
                        }
                    }
                    break
                }
                case 'have.prop':
                case 'have.attr':
                case 'have.css': {
                    let tmp = check(param.split('.')[1], value)
                    if (tmp.total == 1) {
                        Object.assign(details, { msg: tmp.msg || param, details: tmp.details })
                        if (tmp.success === false) details.success = false
                    } else {
                        Object.assign(details, { msg: param }, tmp)
                    }
                    break
                }
                case 'have.text': {
                    // seems to be a bug in jquery where it introduces extra spaces and new lines
                    let txt = subj.text().replace(/\n/g, '').replace(/\s\s+/g, ' ')
                    if (subj.length == 0 || txt != value) {
                        details = {
                            msg: 'Incorect text',
                            details: `Expected text "${value}", but "${txt}" found.`,
                            success: false
                        }
                    }
                    break
                }
                case 'not.contain.text':
                    negative = true
                case 'contain.text': {
                    if (!Array.isArray(value)) {
                        value = [value]
                    }
                    details = { total: value.length, good: 0 }
                    value.forEach(val => {
                        // seems to be a bug in jquery where it introduces extra spaces and new lines
                        let txt = subj.text().replace(/\n/g, '').replace(/\s\s+/g, ' ')
                        let isThere = txt.indexOf(val) != -1
                        let msg = ''

                        if (!negative && isThere)  msg = 'Text found.'
                        if (!negative && !isThere) msg = 'Text not found.'
                        if (negative && isThere)   msg = 'Text found, but it should not exist.'
                        if (negative && !isThere)  msg = 'Text not found.'

                        if (subj.length > 0 && ((isThere && !negative) || (!isThere && negative))) {
                            Object.assign(details, { success: true, details: msg })
                            details.good++
                            if (value.length > 1) {
                                bela.log(`${param} = "${val}"`, { assertion: true })
                            }
                        } else {
                            Object.assign(details, { success: false, details: msg })
                            if (value.length > 1) {
                                bela.error(`${param} = "${val}"`, { assertion: true, details: details.details })
                            }
                        }
                    })
                    if (value.length == 1) {
                        Object.assign(details, {
                            msg: `${param} "${value}"`,
                            total: undefined,
                            good: undefined
                        })
                    }
                    break
                }
                case 'be.visible': {
                    if (subj.length == 0 || subj.css('display') == 'none' || subj.css('opacity') == 0) {
                        details = { msg: `Element should be visible (display != 'none && opacity > 0)`, success: false }
                    }
                    details.msg = param
                    break
                }
                case 'be.hidden': {
                    if (!(subj.length == 0 || subj.css('display') == 'none' || subj.css('opacity') == 0)) {
                        details = { msg: `Element should be visible (display != 'none' && opacity != 0)`, success: false }
                    }
                    details.msg = param
                    break
                }
                default:
                    details = { msg: `Unrecognized parameter "${param}"`, success: false }
            }
            return details
        }

        function check(type, obj) {
            let total = 0
            let good  = 0
            let len   = Object.keys(obj).length
            let res   = {}
            Object.keys(obj).forEach(val => {
                total++
                let prop = obj[val]
                let real = subj[type](val)
                if (!isNaN(prop)) prop = parseFloat(prop)
                if (!isNaN(real)) real = parseFloat(real)
                if (['css', 'prop', 'attr'].includes(type) && prop !== real) { // should be !==
                    res.details = `Expected subject's "${val}" to be "${obj[val]}", not "${subj[type](val)}"`
                    if (len > 1) {
                        bela.error(`have.${type.toUpperCase()}, ${val}="${obj[val]}"`, { assertion: true, details: res.details })
                    } else {
                        res.msg = `have.${type.toUpperCase()}, ${val}="${obj[val]}"`
                        res.success = false
                    }
                } else {
                    good++
                    res.details = `Subject's "${val}" should be "${obj[val]}"`
                    if (len > 1) {
                        bela.log(`have.${type.toUpperCase()}, ${val}="${obj[val]}"`, { assertion: true, details: res.details })
                    } else {
                        res.msg = `have.${type.toUpperCase()}, ${val}="${obj[val]}"`
                        res.success = false
                    }
                }
            })
            res.total = total
            res.good = good
            res.success = (good === total)
            return res
        }
    }
}