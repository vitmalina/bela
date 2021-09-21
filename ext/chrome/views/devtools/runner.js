$(function () {
    let files = {}
    let win

    app.runner = {
        loc: '',
        clear,
        reset,
        remove,
        action,
        exec,
        error,
        network,
        insertFrame,
        insertSteps,
        insertState,
        getLocation,
        getManifest
    }
    getLocation()
    remove() // clean up previous, if any

    function getLocation() {
        win = chrome.devtools.inspectedWindow
        // get current location to knwo what page is updated
        win.eval("document.location", (loc, error) => {
            // remove unnecessary
            app.runner.loc = (({ ancestorOrigins, assign, reload, replace, toString, hash, search, hostname, origin, ...o }) => o)(loc)
        })
    }

    function getManifest() {
        return new Promise((resolve, reject) => {
            let code = `(function () {
                let manifest
                let meta = document.querySelectorAll('head meta[name="bela-manifest"]')
                if (meta.length > 0) {
                    let loc = document.location
                    manifest = meta[0].content
                    if (['http', 'https'].indexOf(manifest.split(':')[0]) == -1) {
                        manifest = loc.protocol + '//' + loc.host + manifest
                    }
                }
                return manifest
            })()
            `
            win.eval(code, (manifest, error) => {
                resolve(manifest)
            })
        })
    }

    function clear() {
        // stop in progress if any
        if (app.state.wait4Reload) {
            clearTimeout(app.state.wait4Reload.timer)
            app.state.wait4Reload = null
        }
        exec("if (runner) runner.clear()") // clear all steps and resets
        // clear test tress
        app.results = {}
        w2ui.steps.nodes = []
        w2ui.steps.refresh()
        w2ui.tb_steps.initAction()
        app.logs.show()
    }

    function reset() {
        // stop in progress if any
        if (app.state.wait4Reload) {
            clearTimeout(app.state.wait4Reload.timer)
            app.state.wait4Reload = null
        }
        app.results = {}
        w2ui.steps.unselect()
        w2ui.steps.refresh()
        w2ui.tb_steps.initAction()
        w2ui.tb_steps.resetTestIcons()
        // setTimeout(() => {
        //     if (w2ui.steps.nodes.length > 0) {
        //         w2ui.steps.click(w2ui.steps.nodes[0].id)
        //     }
        // }, 50)
        app.logs.show()
        exec("if (runner) runner.reset()") // resets, does not clear steps
    }

    function remove() {
        // stop in progress if any
        if (app.state.wait4Reload) {
            clearTimeout(app.state.wait4Reload.timer)
            app.state.wait4Reload = null
        }
        app.manifest.code = ''
        app.results = {}
        // clear all steps and resets
        exec(`if (runner) runner.clear()`, () => {
            // clear test tress
            if (app && w2ui.steps) {
                w2ui.steps.nodes = []
                w2ui.steps.refresh()
                w2ui.tb_steps.initAction()
                app.logs.show()
                app.state.runnerReady = false
            }
            // remove frame
            win.eval(`(function () {
                let frame = document.getElementById('BELA-Runner')
                if (frame) frame.remove()
            })()`)
        })
    }

    function action(command, more, callBack) {
        let prom = new Promise((resolve, reject) => {
            // need empty promise
            resolve()
        })
        // console.log('RUNNER-CMD', command, more)
        switch(command) {
            case 'run':
                let stepId  = (more.stepId ? "'" + more.stepId + "'" : undefined)
                let options = more.options ? JSON.stringify(more.options) : {}
                if (!app.state.runnerReady) {
                    app.state.autoRunOnce = true
                    app.getSettings().then(settings => {
                        app.runner.insertFrame(settings)
                    })
                } else {
                    prom = exec(`app.run(${stepId}, ${options})`, callBack)
                }
                break

            case 'pause':
                // wait until step is done
                prom = exec("runner.proc.pause_at = 'step-done'", callBack)
                break

            case 'step-over': {
                if (more.stepId) {
                    prom = exec(`app.stepOver('${more.stepId}')`, callBack)
                }
                break
            }

            case 'step-in': {
                if (more.stepId) {
                    prom = exec(`app.stepIn('${more.stepId}')`, callBack)
                }
                break
            }

            case 'step-out': {
                if (more.stepId) {
                    prom = exec(`app.stepOut('${more.stepId}')`, callBack)
                }
                break
            }

            case 'breakPoint-add': {
                if (more.stepId) {
                    prom = exec(`app.bpAdd('${more.stepId}')`, callBack)
                }
                break
            }

            case 'breakPoint-remove': {
                if (more.stepId) {
                    prom = exec(`app.bpRemove('${more.stepId}')`, callBack)
                }
                break
            }
        }
        return prom
    }

    function error(text) {
        win.eval(`console.error(w2utils.base64decode('${w2utils.base64encode(text)}'))`, { frameURL: 'about:runner' })
    }

    function exec(cmd, callBack) {
        return new Promise((resolve, reject) => {
            if (!app.state.runnerReady) { // possibly wait for reload
                if (typeof callBack == 'function') callBack({ ready: false })
                resolve({ ready: false, cmd })
                return
            }
            win.eval("document.getElementById('BELA-Runner')", function (result, error) {
                if (result == null) {
                    // commands cannot be run, there are no tests
                    console.error('runner.exec (1): runner frame is not inserted')
                    if (typeof callBack == 'function') callBack({ succcess: false, noFrame: true })
                    // reject({ error: 'runner frame is not inserted' })
                    return
                }
                let code = `(function() {
                    if (!window.runner) debugger
                    ${cmd}
                })()`
                if (cmd.substr(1, 8) == 'function') { // if it is already wrapped in a function
                    code = cmd
                }
                win.eval(code, { frameURL: 'about:runner' }, function (result, error) {
                    if (error) {
                        win.eval(`console.error(w2utils.base64decode('${w2utils.base64encode(error.value)}'))`, { frameURL: 'about:runner' })
                        console.error('runner.exec (2): ' + error.value)
                        if (typeof callBack == 'function') callBack({ succcess: false })
                        reject(error)
                    } else {
                        if (typeof callBack == 'function') callBack({ succcess: true })
                        resolve()
                    }
                })
            })
        })
    }

    function network(details, replay) {
        return new Promise((resolve, reject) => {
            if (!app.state.runnerReady) {
                reject({ ready: true })
                return
            }
            win.eval("document.getElementById('BELA-Runner')", function (result, error) {
                if (result == null || error || !app.state.runnerReady) {
                    resolve({ ready: false, details })
                    return
                }
                let code = `(function() {
                    runner.network(${JSON.stringify(details)})
                })()`
                win.eval(code, { frameURL: 'about:runner' }, function (result, error) {
                    if (error) {
                        reject({ ready: true, error, details })
                    } else {
                        resolve({ ready: true, details })
                    }
                })
            })
        })
    }

    function insertSteps(tests, settings) {
        win.eval("document.getElementById('BELA-Runner')", function (result, error) {
            if (result == null) {
                insertFrame(settings)
                return
            }
            let code = `
                runner.clear()
                ${tests}
                runner.trigger({ type: 'init', steps: runner.steps })
            `
            // this is needed to execute in the context of the frame
            win.eval(`app.eval('${w2utils.base64encode(code)}')`, { frameURL: 'about:runner' }, function (result, error) {
                if (error) {
                    win.eval(`console.error(w2utils.base64decode('${w2utils.base64encode(error.value)}'))`, { frameURL: 'about:runner' })
                    console.error('runner.insertSteps: ' + error.value)
                }
            })
        })
    }

    function insertState(state, network, time, pausing) {
        let code = `
            (function () {
                let state = ${state}
                let network = ${network}
                if (typeof state == 'string') {
                    state = JSON.parse(state)
                }
                // following 3 needed for pause to work when it is func -> string -> func
                let proc = state.proc
                let hasSubs = false
                _parse(state) // also parse pre-coded functions

                function _parse(state) {
                    if (Array.isArray(state)) {
                        state.forEach((val, ind) => {
                            let func
                            if (typeof val == 'string' && val.substr(0, 8) == '**func**') {
                                eval('func = ' + val.substr(8))
                                state[ind] = func
                            } else {
                                _parse(val)
                            }
                        })
                    } else if (state && typeof state == 'object') {
                        let keys = Object.keys(state)
                        Object.keys(state).forEach(key => {
                            let func
                            let val = state[key]
                            if (typeof val == 'string' && val.substr(0, 8) == '**func**') {
                                eval('func = ' + val.substr(8))
                                state[key] = func
                            }
                            if (Array.isArray(val) || typeof val == 'object') {
                                _parse(val)
                            }
                        })
                    }
                }

                app.stateRestore(state, network, ${time}, ${pausing ? 'true': 'false'})
            })()`
        win.eval(code, { frameURL: 'about:runner' }, function (result, error) {
            if (error) {
                win.eval(`console.error(w2utils.base64decode('${w2utils.base64encode(error.value)}'))`, { frameURL: 'about:runner' })
                console.error('runner.insertState: ' + error.value)
            }
        })
    }

    function insertFrame(settings, keepTests) {
        // cannot insert into new tab page, need a website
        win.eval('window.location.href', (res, error) => {
            if (typeof res == 'string' && res.indexOf('chrome://new-tab-page') != -1) {
                win.eval('window.location = "https://google.com"', (res, error) => {
                    // need to wait for google load
                    app.state.pageReady = false
                    _wait()
                    function _wait() {
                        if (app.state.pageReady !== true) {
                            setTimeout(_wait, 100)
                        } else {
                            _insertFrame()
                        }
                    }
                })
            } else {
                _insertFrame()
            }
        })
        function _insertFrame() {
            // if frame is inserted, commands should be cleared
            if (keepTests !== true) {
                app._steps = []
                w2ui.steps.nodes = []
                w2ui.steps.refresh()
            }
            if (typeof settings == 'string') {
                try { settings = JSON.parse(settings) } catch (e) { settings = {} }
            }
            if (typeof settings != 'object') {
                settings = {}
            }
            let code = `
            (function () {
                let doc = window.document
                let frame = doc.getElementById('BELA-Runner')
                if (frame != null) frame.remove() // need to reinsert, as commands might have changed
                let body = window.document.getElementsByTagName('body')[0]
                let insertFrm = doc.createElement('IFRAME')
                insertFrm.id = "BELA-Runner"
                insertFrm.src = 'about:runner'
                body.appendChild(insertFrm)
                document.addEventListener("securitypolicyviolation", (e) => {
                    console.log('BELA-Runner: security policy violation')
                    console.log(e)
                })
            })()`
            win.eval(code, function (result, error) {
                if (error) {
                    win.eval(`console.error(w2utils.base64decode('${w2utils.base64encode(error.value)}'))`, { frameURL: 'about:runner' })
                    console.error('_insertFrame (1): ' + error.value)
                } else {
                    let code = `
                    (function () {
                        let doc = window.document
                        /* index.js */
                        let sc = doc.createElement('script')
                        sc.src = '${chrome.runtime.getURL('views/runner/index.js')}'
                        doc.head.appendChild(sc)
                        /* settings */
                        let div = doc.createElement('div')
                        div.id = 'runner-settings'
                        div.name = '${chrome.runtime.getURL('')}'
                        div.style.display = 'none'
                        div.innerHTML = '${w2utils.base64encode(JSON.stringify(settings))}'
                        doc.body.appendChild(div)
                    })()`
                    win.eval(code, { frameURL: 'about:runner' }, function (result, error) {
                        if (error) {
                            win.eval(`console.error(w2utils.base64decode('${w2utils.base64encode(error.value)}'))`, { frameURL: 'about:runner' })
                            console.error('_insertFrame (2): ' + error.value)
                        }
                    })
                }
            })
        }
    }
})