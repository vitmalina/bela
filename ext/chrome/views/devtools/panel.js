// TOOD
// - manifest - show results of already finished test
// - config - as separate menu (not in editor/manifest)
// - dev panel resize - kills the event

$(function () {
    require.config({ paths: { 'vs': '/views/libs/monaco-editor/vs' }});
    let mocaco
    let timer = {}
    let defaults = { "start": "editor", "baseURL": "", "specsBaseURL": "" }
    let testQueue
    window.app = {
        init,
        initLayout,
        position: 'bottom',
        tabId: chrome.devtools.inspectedWindow.tabId,
        isMac: (String(navigator.userAgent).indexOf('Macintosh') != -1 ? true : false),
        // runner options
        options: {
            linkLibs: true, // if true, libs will be loaded via script tag in bela frame
            showRunner: false,
            pauseOnError: false,
            autoExpand: true
        },
        // runner state
        state: {
            pageReady: false,       // page under test is loaed
            runnerReady: false,     // runner frame inserted, runner ready
            autoRunOnce: false,     // auto run after runner inserted
            running: false,         // indicates if tests are running
            pausing: false,         // attempting to pause
            wait4Reload: null,      // restore after page reload
            network: []
        },
        manifest: {},       // info about manifest file and tests
        results: {},        // current runner info
        files: {},          // custom commands and libraries
        breakPoints: [],    // ids of all break points
        // other functions
        msgProcess,
        msg,                // short message on the bottom
        message,            // slide down message on top
        panelAction,
        getCode,
        initConfig,
        initEditor,
        initManifest,
        viewSource,
        selectText,
        getSettings,
        saveSettings,
        reloadSpec,
        updateTimerMsg,
        logs: {
            items: [],
            add: logsAdd,
            show: logsShow,
            clear: logsClear
        },
        resetSubIcons,
        runTests,
        runNext
    }
    require(['vs/editor/editor.main'], function(editor) {
        monaco = editor
        defineLanguage()
        init()
    })
    return

    function init() {
        // console.log('DEV TOOLS: init')
        $('#app-container').w2layout(config.layout)
        $().w2sidebar(config.steps)
        $().w2toolbar(config.tb_editor)
        $().w2toolbar(config.tb_steps)
        $().w2toolbar(config.tb_logs)
        // main toolbar always in main panel
        w2ui.layout.assignToolbar('main', w2ui.tb_steps)

        // at bottom or side
        if (window.innerWidth > window.innerHeight) {
            app.position = 'bottom'
        } else {
            app.position = 'side'
        }
        initLayout()

        chrome.runtime.onMessage.addListener(app.msgProcess)
        chrome.runtime.onMessageExternal.addListener(app.msgProcess)

        window.addEventListener('keydown', function (event) {
            let toolbar = w2ui.tb_editor
            // cmd + enter - will reload and run current spec
            if (event.metaKey && event.keyCode == 13) {
                getSettings().then(settings => {
                    if (settings.start == 'manifest') {
                        w2ui.suite.startTime = (new Date()).getTime()
                        let item = w2ui.suite.get(w2ui.suite.selected)
                        if (item && item.path) {
                            app.runner.remove()
                            w2ui.suite.skipInsertCmd = true // so test would not run twice
                            reloadSpec(item.path, settings, () => {
                                app.state.autoRunOnce = true
                                app.runner.insertFrame(settings)
                            })
                        } else {
                            app.msg('First, select a test which to run.')
                        }
                    }
                    if (settings.start == 'editor') {
                        w2ui.suite.startTime = null
                        // app.runner.clear()
                        // toolbar.click('save')
                        app.runner.reset()
                        w2ui.tb_steps.click('action')
                        event.preventDefault()
                        event.stopPropagation()
                    }
                })
            }
        }, true)

        window.addEventListener('resize', (event) => {
            clearTimeout(timer.resize)
            timer.resize = setTimeout(() => {
                let width = window.innerWidth
                let height = window.innerHeight
                let pos
                if (width > height) {
                    pos = 'bottom'
                } else {
                    pos = 'side'
                }
                if (pos !== app.position) {
                    app.position = pos
                    app.initLayout()
                }
            }, 100)
        })

        // network listeners
        chrome.devtools.network.onNavigated.addListener(req => {
            // console.log('onNavigated: ', req)
            setTimeout(() => { app.runner.getLocation() }, 100) // timeout is needed to allow init of objects
        })

        chrome.devtools.network.onRequestFinished.addListener(dtl => {
            // ignore extension network activity
            let str = 'chrome-extension://bghiemgahdblmkegfooplghfihfmjjhp'
            if (String(dtl.request.url).substr(0, str.length) == str) {
                return
            }
            let details = {
                status: dtl.response.status,
                method: dtl.request.method,
                url: dtl.request.url,
                query: dtl.request.queryString,
            }
            if (!app.state.running || !app.state.runnerReady) {
                app.state.network.push(details)
            } else {
                // timeout is needed just if page unloads
                setTimeout(() => {
                    app.runner.network(details)
                        .then(dtl => {
                            if (dtl.ready === false) {
                                app.state.network.push(details)
                            }
                        })
                        .catch(() => {
                            app.state.network.push(details)
                        })
                }, 1)
            }
        })
    }

    function initLayout() {
        w2ui.layout.html('left', '')
        w2ui.layout.html('right', '')
        w2ui.layout.html('top', '')
        w2ui.layout.html('bottom', '')
        if (app.position == 'bottom') {
            w2ui.layout.hide('top', true)
            w2ui.layout.hide('bottom', true)
            w2ui.layout.show('left', true)
            w2ui.layout.show('right', true)
            w2ui.layout.html('left', '<div id="bela-commands" style="width: 100%; height: 100%"></div>')
            w2ui.layout.assignToolbar('left', w2ui.tb_editor)
            w2ui.layout.assignToolbar('right', w2ui.tb_logs)
        } else {
            w2ui.layout.show('top', true)
            w2ui.layout.show('bottom', true)
            w2ui.layout.hide('left', true)
            w2ui.layout.hide('right', true)
            w2ui.layout.html('top', '<div id="bela-commands" style="width: 100%; height: 100%"></div>')
            w2ui.layout.assignToolbar('top', w2ui.tb_editor)
            w2ui.layout.assignToolbar('bottom', w2ui.tb_logs)
        }
        w2ui.layout.html('main', w2ui.steps)
        app.logs.show()

        setTimeout(() => {
            let toolbar = w2ui.tb_editor
            getSettings(true).then(settings => {
                // see if there is a manifest
                app.runner.getManifest().then(manifest => {
                    if (manifest && (manifest != settings.manifest || settings.start != 'manifest')) {
                        app.msg(`Page has reference to "${manifest}" manifest. <a id="load-manifest">Load It</a>`)
                        $('#load-manifest').off('click').on('click', () => {
                            app.msg()
                            w2ui.tb_editor.click('action:manifest')
                            saveSettings({ start: 'manifest', manifest: manifest }).then(settings => {
                                initManifest()
                            })
                        })
                    }
                })
                switch (settings.start) {
                    case 'editor':
                        w2ui.tb_editor.get('action').icon = 'icon-type'
                        w2ui.tb_editor.hide('reload-manifest')
                        initEditor()
                        app.runner.insertFrame(settings)
                        break
                    case 'manifest':
                        w2ui.tb_editor.click('action:manifest')
                        initManifest()
                        break
                }
            })
        }, 50)
    }

    function msgProcess(request, sender, callBack) {
        // only accept messages from inspected window
        if (app.tabId != sender.tab.id) {
            return
        }
        // console.log("EVENT", request.cmd)
        // if (request.event) {
        //     console.log(request.event.type + ': ' + request.event.cmd, request.event.phase, request.event)
        // }
        let toolbar  = w2ui.tb_editor
        let autoRun  = $('#auto-run-flag').is(':checked') || (app.state.autoRunOnce)

        if (request.running) {
            w2ui.tb_steps.initAction('run')
        }

        switch(request.cmd) {
            case 'page-ready': {
                app.state.pageReady = true
                app.state.runnerReady = false
                // check if manifest is defined
                getSettings().then(settings => {
                    if (request.manifest && request.manifest != settings.manifest) {
                        app.msg(`Found "${request.manifest}" manifest. <a id="load-manifest">Load It</a>`)
                        $('#load-manifest').off('click').on('click', () => {
                            app.msg()
                            saveSettings({ manifest: request.manifest })
                            initManifest()
                        })
                    }
                    if (app.state.wait4Reload) {
                        // console.log('PAGE Ready - restore', app.state.wait4Reload)
                        // tests were running
                        app.state.wait4Reload.wait4Frame = true
                        app.state.wait4Reload.time = (new Date()).getTime()
                        clearTimeout(app.state.wait4Reload.timer)
                        app.runner.insertFrame(settings, true)
                    } else {
                        app.runner.remove() // make to clean up
                        // console.log('PAGE Ready - init', app.state.wait4Reload)
                        if (autoRun) {
                            if (settings.start == 'editor') {
                                w2ui.suite.startTime = null
                                app.runner.insertFrame(settings)
                            }
                            if (settings.start == 'manifest') {
                                w2ui.suite.startTime = (new Date()).getTime()
                                w2ui.suite.click(w2ui.suite.selected)
                            }
                        }
                    }
                })
                break
            }
            case 'runner-ready': {
                // console.log('DEV TOOLS: runner-ready')
                // prepare libraries inside the runner
                let prom = []
                // eval libs is needed to overcome some strict CSP
                if (!app.options.linkLibs) {
                    Object.entries(app.files).forEach(([file, text]) => {
                        prom.push(app.runner.exec(text))
                    })
                }
                Promise.all(prom).then(() => {
                    if (app.state.wait4Reload && app.state.wait4Reload.wait4Frame) {
                        // console.log('RUNNER Ready - restore')
                        if (typeof app.state.wait4Reload.onReload == 'function') {
                            app.state.wait4Reload.onReload()
                        } else {
                            app.runner.insertState(app.state.wait4Reload.state, JSON.stringify(app.state.network),
                                app.state.wait4Reload.time, app.state.pausing)
                            // clear buffered network requests
                            app.state.network = []
                        }
                        app.state.wait4Reload = null
                    } else {
                        // console.log('RUNNER Ready - init')
                        let selection = w2ui.tb_editor.get('action').selected
                        switch (selection) {
                            case 'editor':
                                initEditor()
                                app.panelAction({ target: 'insert-cmd' })
                                break
                            case 'manifest': {
                                toolbar.set('action', { selected: 'manifest' })
                                app.panelAction({ target: 'insert-cmd' })
                                break
                            }
                        }
                    }
                    app.state.runnerReady = true
                })
                break
            }
            case 'runner-state-save': {
                // console.log('DEV runner-state-save')
                console.log('Page is ULOADING (ignore following errors)')
                app.state.pageReady = false
                app.state.runnerReady = false
                // console.log('-- PAGE RELOAD --')
                let time = request.expires - (new Date()).getTime()
                delete request.step.result // result is wrong
                delete request.step.id
                app.state.wait4Reload = {
                    state: request.state,
                    step: request.step,
                    stepId: request.stepId,
                    expires: request.expires
                }
                app.state.wait4Reload.timer = setTimeout(() => {
                    if (app.state.wait4Reload == null) {
                        // state.wait4Reload is no more
                        return
                    }
                    let steps = w2ui.steps
                    let stepId = app.state.wait4Reload.stepId
                    app.results[stepId] = {
                        success: false,
                        step: app.state.wait4Reload.step,
                        msg: 'Timeout reached',
                        time
                    }
                    steps.update(stepId, {
                        icon: 'icon-cross',
                        class: 'task-failed error'
                    })
                    steps.click(stepId)
                    w2ui.tb_steps.initAction('pause')
                    app.state.running = false
                    app.state.wait4Reload = null
                    runDone(true)
                }, time)
                break
            }
            case 'runner-event': {
                let event = request.event
                let cmd   = event.type + ':' + event.phase
                let item  = event.type == 'command' ? w2ui.steps.get(event.target) : null
                let isExpanded
                // console.log('DEV TOOLS: runner-event', event, cmd, item)
                // debugger
                switch(cmd) {
                    case 'init:before': {
                        app._steps = event.steps || [] // need to remember for reset purpuses
                        app.results = {}
                        w2ui.steps.nodes = []
                        w2ui.steps.add(getNodes(app._steps))
                        if (autoRun) {
                            app.state.autoRunOnce = false
                            app.runner.reset()
                            w2ui.tb_steps.click('action')
                        } else {
                            // check if there are any autorun steps
                            w2ui.steps.each((step) => {
                                if (step.options && step.options.autorun) {
                                    app.runner.action('run', { stepId: step.id, options: app.options })
                                }
                            })
                        }
                        if (app.cursorPos) {
                            app.editor.focus()
                            app.editor.setPosition(app.cursorPos)
                        }
                        break
                    }
                    case 'reset:after': {
                        if (!w2ui.steps) return
                        w2ui.steps.nodes = []
                        w2ui.steps.refresh()
                        if (Array.isArray(app._steps)) {
                            w2ui.steps.add(getNodes(app._steps))
                        }
                        break
                    }
                    case 'pause:before': {
                        w2ui.tb_steps.initAction('pause')
                        app.state.running = false
                        let next = w2ui.steps.get(event.next.id)
                        let current = w2ui.steps.get(event.current.id)
                        if (current == null || next == null) {
                            throw('BELA: Cannot find what step to puase at.')
                            return
                        }
                        if (current.id === next.parent.id && !current.expanded && app.options.autoExpand) {
                            w2ui.steps.expand(current.id)
                        }
                        if (current.class == 'task-failed') {
                            // reselect to show error
                            w2ui.steps.unselect(current.id)
                            w2ui.steps.click(current.id)
                        } else if (next && !next.selected) {
                            w2ui.steps.click(next.id)
                        }
                        w2ui.steps.focus()
                        break
                    }
                    case 'runtimeAdd:after': {
                        let group = w2ui.steps.get(event.id)
                        group.icon = 'icon-box-shadow'
                        group.nodes = []
                        w2ui.steps.add(event.id, getNodes(event.step.steps))
                        break
                    }
                    case 'runtimeRemove:after': {
                        // add substeps in a step
                        w2ui.steps.get(event.id).icon = 'icon-box-shadow'
                        w2ui.steps.get(event.id).nodes = []
                        w2ui.steps.collapse(event.id)
                        break
                    }
                    case 'enterSub:before': {
                        let item = w2ui.steps.get(event.target)
                        if (item == null) {
                            throw('BELA: Cannot find step (2). Possibly steps were reloaded.')
                            return
                        }
                        item._wasExpanded = item.expanded
                        if (app.options.autoExpand) {
                            w2ui.steps.expand(event.target)
                        }
                        w2ui.steps.update(event.target, {
                            icon: 'icon-box-shadow',
                            class: 'sub-running'
                        })
                        break
                    }
                    case 'enterSub:after': {
                        let item = w2ui.steps.get(event.target)
                        if (item == null) {
                            throw('BELA: Cannot find step (3). Possibly steps were reloaded.')
                            return
                        }
                        if (event.success) {
                            w2ui.steps.update(event.target, {
                                icon: 'icon-check',
                                class: 'task-done'
                            })
                        } else {
                            w2ui.steps.update(event.target, {
                                icon: 'icon-cross',
                                class: 'task-failed'
                            })
                        }
                        if (!item._wasExpanded && app.options.autoExpand) {
                            w2ui.steps.collapse(event.target)
                        }
                        break
                    }
                    case 'command:before': {
                        if (w2ui.steps.activeTest) {
                            w2ui.steps.update(w2ui.steps.activeTest.id, {
                                class: ''
                            })
                        }
                        w2ui.steps.activeTest = item
                        w2ui.steps.update(event.target, { class: 'task-running'})
                        w2ui.steps.scrollIntoView(event.target, true)
                        break
                    }
                    case 'command:after': {
                        if (item == null) {
                            throw('BELA: Cannot find step (1). Possibly steps were reloaded.')
                            return
                        }
                        let txt = item.text
                        let opt = { cmd: event.details.cmd, class: '', msg : '' }
                        app.results[event.target] = event.result
                        if (event.result.msg) opt.msg = event.result.msg
                        if (event.result.tag) opt.msg = event.result.tag
                        if (event.result.subject) opt.class += ' new-subject'
                        if (event.result.success === false) opt.class += ' error'
                        if (event.result.assertion === true) {
                            opt.class += ' assertion'
                            opt.cmd = 'ASSERT'
                        }
                        txt = w2ui.steps.getText(event.details, opt)
                        if (event.result.skipped) {
                            w2ui.steps.update(event.target, {
                                text: txt,
                                icon: 'icon-box-empty',
                                class: 'task-skipped'
                            })
                        } else if (event.result.success) {
                            w2ui.steps.update(event.target, {
                                text: txt,
                                icon: 'icon-check',
                                class: 'task-done'
                            })
                        } else {
                            w2ui.steps.update(event.target, {
                                text: txt,
                                icon: 'icon-cross',
                                class: 'task-failed'
                            })
                        }
                        let options = event.result.step.options
                        if (options && options.expanded) {
                            w2ui.steps.expand(event.target)
                        }
                        break
                    }
                    case 'enter:before': {
                        // update parents
                        event.ids.forEach((id) => {
                            let item = w2ui.steps.get(id)
                            let opt = { cmd: item.cmd, arg1: item.msg, msg: event.msg }
                            w2ui.steps.update(id, {
                                text: w2ui.steps.getText(opt, opt),
                                icon: 'icon-cross',
                                class: 'task-failed' + (item.class.indexOf('sub-running') != -1 ? ' sub-running' : '')
                            })
                        })
                    }
                    case 'done:before': {
                        // mark task complete
                        if (w2ui.steps.activeTest) {
                            w2ui.steps.update(w2ui.steps.activeTest.id, {
                                class: ''
                            })
                            if (w2ui.steps.activeTest.class == 'task-failed') {
                                w2ui.steps.unselect()
                                w2ui.steps.click(w2ui.steps.activeTest.id)
                                w2ui.steps.focus()
                            }
                            w2ui.steps.activeTest = null
                        } else {
                            w2ui.steps.unselect()
                        }
                        w2ui.tb_steps.initAction('done')
                        app.state.running = false
                        runDone()
                        runNext(true)
                        break
                    }
                    case 'breakPointChange:after': {
                        app.breakPoints = event.breakPoints
                        break
                    }
                }
                break
            }
        }

        // replay network - if step by step execution
        // if (request.event) {
        //     console.log(request.event.type + ': ' + request.event.cmd, request.event.phase, request.event)
        //     console.log('IF', request.event && request.event.type == 'command' && request.event.phase == 'before'
        //         && app.state.network.length > 0,
        //         'TYPE: '+ request.event.type,
        //         'PHASE: ' + request.event.phase,
        //         'LEN: ' + app.state.network.length)
        // }
        if (request.event && request.event.type == 'command' && request.event.phase == 'before'
                && app.state.network.length > 0) {
            // console.log("REPLAY", app.state.network)
            setTimeout(() => {
                app.state.network.forEach(details => {
                    app.runner.network(details, true)
                        .then(()=>{})
                        .catch(()=>{})
                })
                app.state.network = []
            }, 1)
        }
    }

    function initEditor() {
        let toolbar = w2ui.tb_editor
        toolbar.show('break', 'save')
        w2ui.layout.sizeTo('left', '40%', true)
        $('#bela-commands').html('')
        app.manifest = {}
        getSettings().then((settings) => {
            app.editor = monaco.editor.create($('#bela-commands').get(0), {
                value: w2utils.base64decode(settings.editorCode || ''),
                language: 'bela',
                theme: 'bela',
                renderLineHighlight: 'gutter',
                automaticLayout: true,
                lineNumbersMinChars: 3,
                scrollBeyondLastLine: false,
                minimap: {
                    enabled: false
                },
                scrollbar: {
                    verticalScrollbarSize: 10,
                    horizontalScrollbarSize: 10,
                }
            })
            if (app.cursorPos) {
                app.editor.focus()
                app.editor.setPosition(app.cursorPos)
            }
            app.editor.onDidChangeModelContent(function (event) {
                toolbar.enable('save')
            })
            app.editor.onKeyDown(function (event) {
                // toolbar.enable('save')
                if (event.ctrlKey || event.metaKey) {
                    app.cursorPos = app.editor.getPosition()
                    switch(event.code) {
                        case 'KeyS': {
                            // app.state.autoRunOnce = false
                            app.runner.clear()
                            toolbar.click('save')
                            event.browserEvent.preventDefault()
                            break
                        }
                    }
                }
            })
        })
    }

    function initManifest(cb) {
        let toolbar = w2ui.tb_editor
        toolbar.hide('break', 'save')
        w2ui.layout.sizeTo('left', '25%', true)
        w2ui.layout.lock('left', '', true)
        // debugger
        // re-init environment
        app.files = {}
        app.runner.remove()
        app.logs.clear()
        // console.log('INIT MANIFEST')
        _loadManifest((data) => {
            if (data) {
                w2ui.suite.handle = { size: 0 }
                w2ui.suite.topHTML = `
                    <div id="search-steps">
                        <span class="icon icon-search"></span>
                        <input placeholder="Search tests..." tabindex="10">
                        <span id="timer-msg"></span>
                    </div>`
                w2ui.suite.bottomHTML = `
                    <div class="tests-status">
                        <label id="msg-error"></label>
                        <label id="msg-ok">
                            <span id="file-path"></span>
                            <a id="btn-reload">
                                Reload Spec
                            </a>
                        </label>
                    </div>`
                $('#bela-commands').w2render('suite')
            } else {
                $('#bela-commands')
                    .css({ height: '100%', width: '100%' })
                    .html(`<div class="w2ui-centered" style="line-height: 1.4">
                        Manifest file is not defined<br>
                        <a onclick="app.panelAction({ target: 'action:config' })">Configure</a>
                    </div>`)
            }
            w2ui.layout.unlock('left')
            setTimeout(() => { w2ui.layout.unlock('left') }, 1000) // lock happens on a timeout
            if (typeof cb == 'function') cb()
        })

        function _loadManifest(cb) {
            let toolbar = w2ui.tb_editor
            w2ui.suite.nodes = []
            w2ui.suite.running = false
            toolbar.get('action').icon = ''
            toolbar.refresh('action')
            toolbar.show('reload-manifest', 'break', 'run-all', 'auto-run')
            toolbar.hide('stop-all', 'run-time')

            app.manifest.libs = []   // so that librarits will not reload twice
            app.manifest.specsBaseURL = ''
            getSettings().then(settings => {
                app.logs.add(`***** Reload MANIFEST "${settings.manifest}" *****`)
                if (settings.manifest) {
                    let url = settings.manifest
                    url = prepareURL(`${url}${url.indexOf('?') != -1 ? '&' : '?'}${(new Date()).getTime()}`, settings)
                    $.get(url)
                        .done(data => {
                            // remember custom and libs
                            app.manifest.libs = data ? data.libs : []
                            app.manifest.specsBaseURL = data ? data.specsBaseURL : ''
                            if (app.manifest.libs.length > 0) {
                                getSettings(true) // will reload libaraies
                            }
                            timer.start = (new Date()).getTime()
                            updateTimerMsg()
                            // load specs
                            if (data && Array.isArray(data.specs) && data.specs.length > 0) {
                                let cnt = data.specs.length
                                for (let i = 0; i < data.specs.length; i++) {
                                    let spec = data.specs[i]
                                    let url = data.specs[i]
                                    url = prepareURL(`${url}${url.indexOf('?') != -1 ? '&' : '?'}${(new Date()).getTime()}`, settings)
                                    $.get(url)
                                        .done((data) => {
                                            app.suite.process(spec, data)
                                            isLoaded()
                                        })
                                        .fail(xhr => {
                                            let msg = `Error loading spec "${url}" from the manifest "${settings.manifest}".`
                                            app.msg(msg)
                                            app.logs.add(msg, true)
                                            isLoaded()
                                        })
                                }
                                function isLoaded() {
                                    cnt--
                                    if (cnt == 0 && typeof cb == 'function') {
                                        _checkQueue()
                                        function _checkQueue() {
                                            if (app.suite.queue.length == 0) {
                                                cb(data)
                                            } else {
                                                setTimeout(_checkQueue, 100)
                                            }
                                        }
                                    }
                                }
                            } else {
                                $('#bela-commands').html(`<div class="w2ui-centered">No specs defined in manifest "${settings.manifest}"</div>`)
                                cb()
                            }
                        })
                        .fail((xhr, error) => {
                            let msg = `Error loading manifest "${url}"`
                            app.msg(msg)
                            app.logs.add(msg, true)
                            cb()
                        })
                } else if (typeof cb == 'function') {
                    cb()
                }
            })
        }
    }

    function reloadSpec(spec, settings, cb) {
        let url = prepareURL(`${spec}${spec.indexOf('?') != -1 ? '&' : '?'}${(new Date()).getTime()}`, settings)
        $.get(url)
            .done((data) => {
                let sel = w2ui.suite.selected
                w2ui.suite.unselect(sel)
                app.suite.process(spec, data).then(() => {
                    w2ui.suite.click(sel)
                    app.updateTimerMsg()
                    app.logs.add(`Spec "${spec}" reloaded.`)
                    if (typeof cb == 'function') {
                        cb()
                    }
                })
            })
            .fail(xhr => {
                let msg = `Error loading spec "${spec}" from the manifest "${settings.manifest}".`
                app.msg(msg)
                app.logs.add(msg, true)
            })
    }

    function initConfig() {
        w2ui.layout.sizeTo('left', '25%', true)
        $('#bela-commands').w2render(w2ui.config)
    }

    function panelAction (event) {
        let toolbar = w2ui.tb_editor
        switch (event.target) {
            case 'insert-cmd': {
                getCode().then(event => {
                    getSettings().then(settings => {
                        app.runner.insertSteps(event.code, settings)
                    })
                })
                break
            }
            case 'action:editor': {
                saveSettings({ start: 'editor' })
                toolbar.get('action').icon = 'icon-type'
                toolbar.show('auto-run')
                toolbar.hide('reload-manifest', 'run-all', 'stop-all', 'run-time')
                app.runner.remove()
                event.done(() => {
                    initEditor()
                    app.panelAction({ target: 'insert-cmd' })
                })
                break
            }
            case 'action:manifest': {
                saveSettings({ start: 'manifest' })
                toolbar.show('auto-run')
                app.runner.remove()
                w2ui.suite.unselect(w2ui.suite.selected)
                event.done(initManifest)
                break
            }
            case 'action:config': {
                toolbar.hide('reload-manifest', 'break', 'save', 'run-all', 'stop-all', 'auto-run', 'run-time')
                initConfig()
                break
            }
            case 'reload-manifest': {
                app.runner.remove()
                initManifest(() => {
                    if (w2ui.suite._only) {
                        let only = w2ui.suite.get(w2ui.suite._only)
                        if (only) {
                            w2ui.suite._all  = w2ui.suite.nodes
                            w2ui.suite.nodes = [only]
                            w2ui.suite._only = only.id
                            w2ui.suite.refresh()
                        }

                    }
                    let sel = w2ui.suite.selected
                    if (sel) {
                        app.manifest.code = ''
                        w2ui.suite.unselect(sel)
                        w2ui.suite.click(sel)
                    }
                })
                break;
            }
            case 'save': {
                let code = app.editor.getValue()
                saveSettings({ editorCode: w2utils.base64encode(code) })
                toolbar.disable('save')
                app.runner.clear()
                getSettings().then(settings => {
                    app.runner.insertFrame(settings)
                })
                break
            }
            case 'run-all': {
                let ids = []
                w2ui.suite.each((item) => {
                    // not a folder, not hidden
                    if (item.hidden != true && item.nodes.length == 0) {
                        ids.push(item.id)
                    }
                })
                app.resetSubIcons(w2ui.suite.nodes)
                app.runTests(ids, true)
                break
            }
            case 'stop-all': {
                testQueue = []
                w2ui.suite.running = false
                toolbar.hide('stop-all', 'run-time')
                toolbar.show('run-all', 'auto-run')
                let action = w2ui.tb_steps.get('action').action
                if (action == 'pause') {
                    w2ui.tb_steps.click('action')
                }
                app.logs.add(`Run stopped.`)
                clearInterval(timer.runTimeMsg)
                break
            }
        }
    }

    function getActiveTab(callback) {
        chrome.tabs.query({ active: true }, (tabs) => {
           if (tabs.length > 0) callback(tabs[0])
        })
    }

    function getNodes(steps) {
        var root = w2ui.steps
        var nodes = []
        steps.forEach((step, ind) => {
            let nd = {
                id: step.id,
                cmd: step.cmd,
                msg: step.arg1,
                text: root.getText(step, { cmd: step.cmd }),
                icon: 'icon-border-none',
                options: step.options
            }
            if (Array.isArray(step.steps) && step.steps.length > 0) {
                nd.icon = 'icon-box-shadow'
                nd.nodes = getNodes(step.steps)
                if (step.options.expanded) {
                    nd.expanded = true
                }
            }
            nodes.push(nd)
        })
        return nodes
    }

    function message(options) {
        if (options) {
            $('#app-container > div').addClass('lock')
            w2utils.lock($('#app-container > div')[0], '', false)
            w2utils.message.call(w2ui.layout, {
                box   : '#app-container',
                path  : 'app',
                body  : '>div:first-child'
            }, options)
        } else {
            w2utils.unlock($('#app-container div.lock')[0])
            w2utils.message.call(w2ui.layout, {
                box   : '#app-container',
                path  : 'app',
            })
        }
    }

    function msg(options, opt) {
        if (!options) {
            $('#app-message').remove()
            return
        }
        if (typeof options == 'string') {
            options = { text: options }
        }
        options = options || {}
        if (typeof opt == 'object') {
            Object.assign(options, opt)
        }
        options.timeout = options.timeout || 25000 // 25 secodns or will be hiddne on route change
        let html = `
            <div id="app-message">
                <div style="${options.style || ''}">
                    ${options.text}
                    ${options.close !== false && options.remove !== false
                        ? `<span class="icon-cross2" onclick="$('#app-message').remove()"></span>`
                        : ``
                    }
                </div>
            </div>`
        $('#app-message').remove()
        $('body').append(html)
        clearTimeout(timer.note)
        timer.note = setTimeout(() => { $('#app-message').remove() }, options.timeout)
    }

    function getSettings(reloadLibs) {
        // settigns from local storage
        let all = localStorage.getItem('bela') || ''
        try { all = JSON.parse(all) } catch (e)  { all = null }
        if (!all || !all[app.tabId]) {
            all = all || {}
            all[app.tabId] = defaults
        }
        let settings = all[app.tabId]
        // if manifest, then baseURL/libs come from manifest
        if (settings.start == 'manifest') {
            settings.libs = app.manifest.libs || []
            settings.specsBaseURL = app.manifest.specsBaseURL || ''
        }
        settings.linkLibs = app.options.linkLibs // if false, libs will be linked
        Object.assign(settings, app.options)
        if (!Array.isArray(settings.libs)) {
            settings.libs = []
        }
        // load remote libs
        return new Promise((resolve, reject) => {
            let proms = []
            if ((reloadLibs || Object.keys(app.files).length == 0)) {
                settings.libs.forEach(file => {
                    // only load files that is not loaded yet
                    file = prepareURL(file, settings)
                    proms.push(new Promise((resolve, reject) => {
                        $.get(file)
                            .done((text, status, xhr) => {
                                app.logs.add(`Loaded lib: "${file}".`)
                                app.files[file] = text
                                resolve()
                            })
                            .fail(xhr => {
                                app.logs.add(`ERROR loading lib: "${file}".`, true)
                                resolve()
                            })
                    }))
                })
            }
            Promise.all(proms).then(() => {
                resolve(settings)
            })
        })
    }

    function saveSettings(more) {
        return new Promise((resolve, reject) => {
            let all = localStorage.getItem('bela') || ''
            try { all = JSON.parse(all) } catch (e)  { all = null }
            if (!all || !all[app.tabId]) {
                all = all || {}
                all[app.tabId] = defaults
            }
            let settings = all[app.tabId]
            Object.assign(settings, more)
            settings.updateTime = (new Date()).getTime()
            localStorage.setItem('bela', JSON.stringify(all))
            resolve()
        })
    }

    function getCode(ind) {
        return new Promise((resolve, reject) => {
            let toolbar = w2ui.tb_editor
            let selection = w2ui.tb_editor.get('action').selected
            switch (selection) {
                case 'editor':
                    resolve({ code: app.editor.getValue(), path: 'editor' })
                    break
                case 'manifest':
                    resolve({ code: app.manifest.code, path: app.manifest.path })
                    break
            }
        })
    }

    function viewSource(code, conf) {
        conf = conf || {}
        if (!conf.lang) conf.lang = 'bela'
        app.message({
            width: 800,
            height: 600,
            body: `<div id="sourceCode" style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; overflow: hidden"></div>`,
            buttons: `
                <button class="w2ui-btn" onclick="app.message()">Close</button>
                <button id="saveButton" class="w2ui-btn" style="display: none">Save</button>
            `,
            onOpen(event) {
                event.done(() => {
                    let el = $('.w2ui-message #sourceCode').get(0)
                    let editor = monaco.editor.create(el, {
                        value: code,
                        language: conf.lang,
                        theme: 'bela',
                        renderLineHighlight: 'gutter',
                        automaticLayout: true,
                        lineNumbersMinChars: 3,
                        scrollBeyondLastLine: false,
                        minimap: {
                            enabled: false
                        },
                        scrollbar: {
                            verticalScrollbarSize: 10,
                            horizontalScrollbarSize: 10,
                        }
                    })
                    if (conf.button) {
                        $('.w2ui-message #saveButton')
                            .html(conf.button.text)
                            .show()
                            .on('click', () => {
                                conf.button.click(editor.getValue())
                            })
                    }
                    // monaco.editor
                    //     .colorize(event.code, "javascript")
                    //     .then(html => {
                    //         $('#bela-commands #sourceCode').html(html)
                    //     })
                })
            }
        })
    }

    function selectText(el){
        var sel, range;
        if (window.getSelection && document.createRange) { //Browser compatibility
          sel = window.getSelection();
          if(sel.toString() == ''){ //no text selection
             window.setTimeout(function(){
                range = document.createRange(); //range object
                range.selectNodeContents(el); //sets Range
                sel.removeAllRanges(); //remove all ranges from selection
                sel.addRange(range);//add Range to a Selection.
            },1);
          }
        }else if (document.selection) { //older ie
            sel = document.selection.createRange();
            if(sel.text == ''){ //no text selection
                range = document.body.createTextRange();//Creates TextRange object
                range.moveToElementText(el);//sets Range
                range.select(); //make selection.
            }
        }
    }

    function updateTimerMsg() {
        let val = (new Date()).getTime() - timer.start
        let msg = (Math.floor(val / 1000 / 60 * 10) / 10) + ' mins ago'
        if (val < 120000) msg = '2 min ago'
        if (val < 60000) msg = '1 min ago'
        if (val < 30000) msg = '< 30 secs'
        if (val < 20000) msg = '< 20 secs'
        if (val < 10000) msg = '< 10 secs'
        if (val < 2000) msg = 'just now'
        $('#timer-msg')
            .off('.timer')
            .on('mouseover.timer', function(event) {
                let _update = () => {
                    $(this).w2tag('Manifest file reloaded ' + w2utils.interval((new Date()).getTime() - timer.start) + ' ago',
                        { className: 'w2ui-light', top: -6, position: 'right|left' })
                }
                timer.tiemrUpdate = setInterval(_update, 1000)
                _update()
            })
            .on('mouseout.timer', function(event) {
                clearInterval(timer.tiemrUpdate)
                $(this).w2tag()
            })
            .html(msg)
        clearTimeout(timer.timerMsg)
        timer.timerMsg = setTimeout(updateTimerMsg, val < 2000 ? 100 : 10000)
    }

    function logsAdd(text, error) {
        app.logs.items.push(`${(new Date()).toLocaleTimeString()} - ${error ? '<span style="color: red">' : ''}${text} ${error ? '</span>' : ''}`)
        app.logs.show()
    }

    function logsShow() {
        let toolbar = w2ui.tb_editor
        let selection = w2ui.tb_editor.get('action').selected
        let html = `
        <div id="global_log">
            <div class="gloabl-hotkeys">⌘ + enter - to reload & run current test</div>
        `
        app.logs.items.forEach(log => {
            html += `<div>${log}</div>`
        })
        html += '</div>'
        w2ui.layout.html(app.position == 'bottom' ? 'right' : 'bottom', html)
        $(w2ui.layout.el('right')).scrollTop(10000)
    }

    function logsClear() {
        app.logs.items = []
        app.logs.show()
    }

    function runTests(ids, start) {
        let toolbar = w2ui.tb_editor
        testQueue = Array.from(ids)
        if (start) {
            w2ui.suite.running = true
            toolbar.hide('run-all', 'auto-run')
            toolbar.show('stop-all', 'run-time')
            app.logs.add(`Run ${ids.length} test(s).`)
            w2ui.suite.startTime = (new Date()).getTime()
            timer.runTimeMsg = setInterval(() => {
                let val = (new Date()).getTime() - w2ui.suite.startTime
                let val2 = Math.floor(val/1000)
                let hour = 0, min = 0, sec = 0
                if (val2 > 360) { // 1 hour
                    hour = Math.floor(val2 / 360)
                    val2 = val2 % 360
                }
                if (val2 > 60)  { // 1 min
                    min = Math.floor(val2 / 60)
                    val2 = val2 % 60
                }
                // if (min < 10) min = '0' + min
                if (val2 < 10) val2 = '0' + val2
                $('#run-time-msg').html(`${hour > 0 ? hour + ':' : ''}${min}:${val2}`)
                $('#run-time-msg')
                    .off('.interval')
                    .on('mouseenter.interval', function() {
                        $(this).w2tag(w2utils.interval(val), { className: 'w2ui-light', left: -6, position: 'top|bottom' })
                    })
                    .on('mouseleave.interval', function () {
                        $(this).w2tag()
                    })
            }, 1000)
        }
        runNext(start)
        if (ids.length > 0 && ids[0] == app.state.currentTestId && !app.state.running && start) {
            // if tests are parsing - mark as autoRun
            if (app.state.wait4Reload && app.state.wait4Reload.wait4Frame) {
                app.state.autoRunOnce = true
            } else {
                app.runner.reset()
                w2ui.tb_steps.click('action')
            }
        }
    }

    function runNext(start) {
        if (!testQueue || testQueue.length == 0) {
            let toolbar = w2ui.tb_editor
            w2ui.suite.running = false
            toolbar.hide('stop-all', 'run-time')
            toolbar.show('run-all', 'auto-run')
            if (w2ui.suite.startTime) {
                app.logs.add(`Finished (${w2utils.interval((new Date()).getTime() - w2ui.suite.startTime)}).`)
            } else {
                app.logs.add('Steps done')
            }
            w2ui.suite.startTime = null
            clearInterval(timer.runTimeMsg)
            return
        }
        let id = testQueue.shift()
        let item = w2ui.suite.get(id)
        if (item.nodes.length == 0 && item.func) {
            let func = `(${item.func.toString()})();`
            if (app.manifest.code != func) {
                app.state.currentTestId = id
                if (app.state.wait4Reload) {
                    app.state.wait4Reload.onReload = _clear
                    w2ui.steps.nodes = []
                    w2ui.steps.emptyMsg = 'Waiting for page reload...'
                    w2ui.steps.refresh( )
                } else {
                    _clear()
                }
                function _clear() {
                    w2ui.steps.emptyMsg = 'No Commands'
                    app.runner.clear()
                    // ony function body
                    let code = func.substr(func.indexOf('{') + 1, func.lastIndexOf('}') - func.indexOf('{') - 1)
                    app.manifest.code = code
                    app.manifest.path = item.path
                    if (!w2ui.suite.skipInsertCmd) {
                        app.state.autoRunOnce = start ? true : false
                        app.panelAction({ target: 'insert-cmd' })
                        if (start) {
                            app.logs.add(`Start test "${item.text}"`)
                            w2ui.suite.update(item.id, { class: 'task-running', icon: 'icon-border-none'})
                            w2ui.suite.scrollIntoView(item.id, true)
                        }
                    }
                    w2ui.suite.skipInsertCmd = false
                }
            }
        } else {
            w2ui.suite.update(item.id, { icon: 'icon-border-none' })
            runNext(start)
        }
    }

    function resetSubIcons(id) {
        let node = { nodes: id }
        if (typeof id == 'string') {
            node = w2ui.suite.get(id)
        }
        (function _resetNode(nd) {
            if (nd.nodes.length == 0) {
                w2ui.suite.update(nd.id, {
                    class: 'not-started',
                    icon: 'icon-border-none'
                })
            }
            if (nd.nodes && nd.nodes.length > 0) {
                w2ui.suite.update(nd.id, {
                    class: ' ',
                    icon: 'icon-folder-open'
                })
                nd.nodes.forEach(nd => { _resetNode(nd) })
            }
        })(node)
    }

    function runDone(interupted) {
        let item = w2ui.suite.get(app.state.currentTestId)
        if (item) {
            let errors = Object.keys(app.results).map(id => app.results[id]).filter(it => !it.success)
            w2ui.suite.update(item.id, {
                class: errors.length > 0 ? 'task-failed' : 'task-done',
                icon: errors.length > 0 ? 'icon-cross' : 'icon-check'
            })
            // mark parent as done/fail
            let all = item.parent.nodes.map(it => it.class)
            let ok = all.filter(it => (it=='task-done'))
            let failed = all.filter(it => (it=='task-failed'))
            if (all.length == ok.length) {
                // no errors
                w2ui.suite.update(item.parent.id, { class: 'task-done' })
            }
            if (failed && failed.length > 0 && all.length == ok.length + failed.length) {
                // errors
                w2ui.suite.update(item.parent.id, { class: 'task-failed' })
            }
        }
    }

    function prepareURL(url, settings) {
        let loc = app.runner.loc
        let specsBaseURL = settings.start == 'editor'
            ? settings.specsBaseURL
            : app.manifest.specsBaseURL
        if (['http', 'https'].indexOf(url.split(':')[0]) == -1) {
            if (['http', 'https'].indexOf(specsBaseURL.split(':')[0]) == -1) {
                if (!specsBaseURL) {
                    let tmp = loc.pathname.substr(1).split('/') // remove leading slash
                    tmp.pop()
                    specsBaseURL = loc.protocol + '//' + loc.host + (tmp.length > 0 ? '/' + tmp.join('/') : '')
                } else {
                    specsBaseURL = loc.protocol + '//' + loc.host +  specsBaseURL
                }
            }
            url = specsBaseURL + url
        }
        return url
    }
})