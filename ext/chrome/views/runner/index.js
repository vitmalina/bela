/** This script runs inside an iframe and controls Bela Runner */
var app = (function () {
    let commandAt
    let startedAt = (new Date()).getTime()

    // load libraries
    prepare()

    return {
        init,
        prepare,
        run,
        stepOver,
        stepIn,
        stepOut,
        bpAdd,      // add break point
        bpRemove,   // remove break point
        bpClear,    // clear all break points
        stateSave,
        stateRestore,
        showFrame,
        hideFrame,
        eval: _eval
    }

    function prepare() {
        let settings
        let path = document.getElementById('runner-settings').name
        // add css
        let st = document.createElement('link')
        st.rel = 'stylesheet'
        st.href = path + 'views/runner/index.css'
        document.head.prepend(st)
        // add libs
        let sc = document.createElement('script')
        sc.src = path + 'views/runner/libs.js'
        sc.onload = function() {
            try { settings = JSON.parse(w2utils.base64decode($('#runner-settings').html())) } catch (e) { }
            styleFrame()
            init()
            let proms = []
            proms = proms.concat(addFiles('lib', settings.libs, settings.linkLibs))
            Promise.all(proms)
                .then((values) => {
                    let ms = (new Date()).getTime() - startedAt
                    $('#runner-log #runner-libs').append(' - runner loaded in ' + (ms < 1000 ? ms + ' ms' : w2utils.interval(ms)))
                    top.postMessage({ cmd: "runner-ready" })
                }).catch((error) => {
                    $('#runner-log #runner-libs').append('<span style="color: red"> - error loading libs</span>')
                })
        }
        document.head.appendChild(sc)

        function addFiles(id, files, linkLibs) {
            let proms = []
            if (Array.isArray(files)) {
                files.forEach((file, ind) => {
                    proms.push(new Promise((resolve, reject) => {
                        if (linkLibs) {
                            let sc = document.createElement('script')
                            sc.id = id + '-' + ind
                            if (['http', 'https'].indexOf(file.split(':')[0]) == -1 && settings.specsBaseURL) {
                                // if (file.substr(0, 1) != '/' && settings.specsBaseURL == parent.location.href.substr(0, settings.specsBaseURL.length)) {
                                //     file = parent.location.pathname + file
                                // }
                                file = settings.specsBaseURL + file
                            }
                            sc.src = file
                            sc.onerror = function () { reject(`Error loading ${file}`) }
                            sc.onload  = function () { resolve() }
                            document.head.appendChild(sc)
                        } else {
                            let meta = document.createElement('meta')
                            meta.name = id
                            meta.id = id + '-' + ind
                            meta.content = file
                            document.head.appendChild(meta)
                            resolve()
                        }
                    }))
                })
            }
            return proms
        }

        function styleFrame() {
            $('#BELA-Runner', parent.document).css({
                'display': 'block',
                'position': 'fixed',
                'z-index': 100000000,
                'bottom': '0px',
                'right': '15px',
                'width': '300px',
                'height': '70px',
                'box-sizing': 'border-box',
                'background-color': 'rgb(251, 251, 251)',
                'border': '2px solid #9d72b3',
                'border-bottom': '0px',
                'border-radius': '3px 3px 0px 0px'
            })
            if (!settings.showRunner) {
                $('#BELA-Runner', parent.document).css({
                    'left': '-10px',
                    'top': '-10px',
                    'width': '1px',
                    'height': '1px',
                    'border': '0px',
                })
            }
            $('body > #runner-log').remove()
            $('body').append(`<div id="runner-log">
                <div style="padding: 5px">
                    Frame inserted at ${(new Date).toTimeString().split(' ')[0]} <span id="runner-files"></span><br>
                    <span id="runner-libs"></span><br>
                    <span id="runner-tests"></span
                </div>
            </div>`)
        }
    }

    function showFrame() {
        $('#BELA-Runner', parent.document).css({
            'left': 'auto',
            'top': 'auto',
            'bottom': '0px',
            'right': '15px',
            'width': '300px',
            'height': '70px',
            'border': '2px solid #9d72b3'
        })
    }

    function hideFrame() {
        $('#BELA-Runner', parent.document).css({
            'left': '-10px',
            'top': '-10px',
            'width': '1px',
            'height': '1px',
            'border': '0px',
        })
    }

    function init() {
        window.runner = new BelaRunner({
            onInit(event) {
                let ms = (new Date()).getTime() - startedAt
                if ($('#runner-log #runner-tests').length > 0) {
                    $('#runner-log #runner-tests')
                        .html(' - test data loaded in ' + (ms < 1000 ? ms + ' ms' : w2utils.interval(ms)))
                } else {
                    let ms = (new Date()).getTime() - commandAt
                    $('#runner-log')
                        .html(`<div style="padding: 4px">
                            Test data loaded at ${(new Date).toTimeString().split(' ')[0]} (${ms < 1000 ? ms + ' ms' : w2utils.interval(ms)})
                        </div>`)
                }
            },
            onCommand(event) { // called when command is started/finished
                let dtl = event.details
                $('#runner-log').html(`<div id="${dtl.id}" class="task task-running">
                    <span class="cmd">${dtl.cmd}</span>
                    ${dtl.args[0] ||''}
                </div>`)
            }
        })
        // Relay all events to DevTools
        runner.on('*:before', (event) => {
            // if (event.type != 'reset' && event.type != 'init') debugger
            top.postMessage(JSON.stringify({
                cmd: "runner-event",
                phase: 'before',
                event: proc(event),
                running: runner.proc.running
            }), '*')
        })
        runner.on('*:after', (event) => {
            // if (event.type != 'reset') debugger
            top.postMessage(JSON.stringify({
                cmd: "runner-event",
                phase: 'after',
                event: proc(event),
                running: runner.proc.running
            }), '*')
        })
        // unexpexted reload
        window.addEventListener('beforeunload', () => {
            // called many times, make sure just one time
            if (parent.pageUnloading !== true) {
                parent.pageUnloading = true
                app.stateSave()
            }
        })

        function proc(event) {
            let evt = Object.assign({}, event)
            // delete functions
            delete evt.done
            delete evt.onComplete
            delete evt.doneHandlers
            delete evt.preventDefault
            delete evt.stopPropagation
            return evt
        }
    }

    function _eval(text) {
        text = w2utils.base64decode(text)
        eval(text)
    }

    function run(stepId, options) {
        if (options) {
            runner.options = options
        }
        if (stepId) {
            runner.moveTo(stepId)
            runner.proc.running = true
        }
        runner.proc.skipBreakPoint = stepId
        runner.run()
    }

    function stepOver(stepId) {
        let proc = runner.proc
        runner.moveTo(stepId)
        let step = proc.steps[proc.index]
        let hasSubs = (Array.isArray(step.steps) && step.steps.length > 0 ? true : false)
        if (Array.isArray(step.steps) && step.steps.length > 0) {
            proc.running = true
            proc.pause_at = 'step-out'
            proc.pause_id = step.id
        } else {
            proc.running = true
            proc.pause_at = 'step-done'
            proc.pause_id = step.id
        }
        proc.pause_callback = function (step, next) {
            // if there were run-time steps
            if (!hasSubs && Array.isArray(step.steps) && step.steps.length > 0) {
                proc.running = true
                proc.pause_at = 'step-out'
                proc.pause_id = step.id
                runner.moveTo(next.id)
                runner.run()
                return false // cancel pause
            }
        }
        runner.run()
    }

    function stepIn(stepId) {
        let proc = runner.proc
        runner.moveTo(stepId)
        let step = proc.steps[proc.index]
        proc.running = true
        proc.pause_at = 'step-in'
        proc.pause_id = stepId
        runner.run()
    }

    function stepOut(stepId) {
        runner.moveTo(stepId)
        let proc = runner.proc
        let parents = proc.parents
        let parent  = parents[parents.length - 1]
        if (parent) {
            let parentId = parent.steps[parent.index].id
            parent.edata = { target: parentId }
            proc.running = true
            proc.pause_at = 'step-out'
            proc.pause_id = parentId
            runner.run()
        } else {
            proc.running = true
            runner.run()
        }
    }

    function bpAdd(stepId) {
        let bp = runner.options.breakPoints
        if (bp.indexOf(stepId) == -1) {
            bp.push(stepId)
        }
        top.postMessage(JSON.stringify({
            cmd: "runner-event",
            phase: 'before',
            event: { type: 'breakPointChange', phase: 'after', breakPoints: runner.options.breakPoints },
            running: runner.proc.running
        }), '*')
    }

    function bpRemove(stepId) {
        let bp = runner.options.breakPoints
        let ind = bp.indexOf(stepId)
        if (ind !== -1) {
            bp.splice(ind, 1)
        }
        top.postMessage(JSON.stringify({
            cmd: "runner-event",
            phase: 'before',
            event: { type: 'breakPointChange', phase: 'after', breakPoints: runner.options.breakPoints },
            running: runner.proc.running
        }), '*')
    }

    function bpClear() {
        runner.options.breakPoints = []
        top.postMessage(JSON.stringify({
            cmd: "runner-event",
            phase: 'before',
            event: { type: 'breakPointChange', phase: 'after', breakPoints: runner.options.breakPoints },
            running: runner.proc.running
        }), '*')
    }

    function stateSave() {
        // if running of paused, then store state
        if (runner.proc.running || runner.proc.paused) {
            // console.log('stateSave', runner.proc.running, runner.proc.paused)
            runner.proc.subject = null // if page get reloaded, subject should be invalidated
            let timeout = runner.proc.current.options.timeout || runner.timeouts.load
            let state = JSON.stringify({
                steps: runner.steps,
                proc: runner.proc,
                options: runner.options,
                custom: bela.custom.custom.map(name => {
                    return {
                        name,
                        args: bela.custom.def_args[name],
                        func: bela.steps[name]
                    }
                })
            }, function(key, val) {
                if (typeof val == 'function' && String(val).indexOf('{ [native code] }') == -1) {
                    return '**func**' + val
                } else {
                    return val
                }
            })
            let data = {
                cmd: "runner-state-save",
                step: runner.proc.current,
                stepId: runner.proc.current.id,
                state: state,
                expires: (new Date()).getTime() + timeout // just in case user navigates elsewhere
            }
            top.postMessage(JSON.stringify(data), '*')
            // console.log('*** STATE SAVE')
        }
    }

    function stateRestore(state, network, time, pausing) {
        runner.steps = state.steps
        runner.proc = state.proc
        runner.options = state.options
        // if custom commands were added during runtime, save them with state
        if (Array.isArray(state.custom) && state.custom.length > 0) {
            state.custom.forEach(custom => {
                if (bela.custom.custom.indexOf(custom.name) == -1) {
                    bela.custom.add(custom.name, custom.args, custom.func)
                }
            })
        }
        if (pausing) {
            runner.proc.pause_at = 'step-done'
        }
        let result = {
            ...state.proc.current.result,
            success: true,
            reloaded: true,
            time: time - runner.proc.startTime
        }

        let current = runner.proc.current
        if (current.cmd == 'wait') { // if wait command then re-run it
            let { startTime, previous, waiting } = runner.proc
            runner.run()
            Object.assign(runner.proc, { startTime, previous, waiting })
            runner.proc.current.result = result
        } else {
            runner.proc.current.result = result
            runner.proc.results[current.id] = result
            // network
            if (Array.isArray(network) && network.length > 0) {
                network.forEach(net => { runner.network(net) })
            }
            runner.trigger(Object.assign(runner.proc.edata, { phase: 'after', result: result }))
            runner.runNext()
        }
        let ms = (new Date()).getTime() - startedAt
        $('#runner-log #runner-tests').html(' - session restored in ' + (ms < 1000 ? ms + ' ms' : w2utils.interval(ms)))
    }
})()