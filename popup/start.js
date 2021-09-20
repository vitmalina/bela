$(function () {
    // init objects
    app.runner = new BelaRunner(app.conf.runner)
    app.getNodes = getNodes

    // see if tests are passed in url
    let loc = app.runner.parseLocation(location)
    let param = loc.params.split('#')[0].substr(1).split('=')
    if (param[0] == 'spec') {
        if (!Array.isArray(app.runner.specs)) app.runner.specs = []
        app.runner.specs = app.runner.specs.concat(param[1].split(','))
    }
    if (window.specs != null) {
        if (!Array.isArray(app.runner.specs)) app.runner.specs = []
        app.runner.specs = app.runner.specs.concat(window.specs)
    }
    loadTests()

    // render UI
    $().w2toolbar(app.conf.toolbar)
    $().w2layout(app.conf.layout)
    $().w2sidebar(app.conf.tests)

    $('#app-toolbar').w2render('toolbar')
    $('#app-results').w2render('layout')

    w2ui.layout.html('main', w2ui.tests)

    window.addEventListener('hashchange', () => {
        // let opt = app.runner.options
        // if (opt.onLoad !== null) {
        //     run(opt.onLoad)
        // }
    }, false)

    window.addEventListener('beforeunload', () => {
        postMessage({
            cmd: 'runner-remove',
            tabId: app.tabId
        })
    })

    window.addEventListener('message', (event) => {
        if (event.data && event.data.cmd == 'runner-config') {
            let config = event.data.config
            let tb = w2ui.toolbar
            if (config.runner.autoExpand) {
                tb.click('settings:auto-expand')
            }
            if (config.runner.pauseOnError) {
                tb.click('settings:pause-on-error')
            }
            app.runner.options = config.runner
        }
    })

    // cross origin
    if (bela.runner.crossOrigin) {
        w2ui.toolbar.disable('action')
        w2ui.layout.lock('main', 'Cross Domain Origin')
    }

    // need a time out because content script is loaded on document idle, it is not ready yet
    setTimeout(() => {
        let tabId = window.location.hash.split('::')[1]
        if (tabId != null) {
            app.tabId = parseInt(tabId)
            sessionStorage.setItem('tabId', app.tabId)
        } else {
            app.tabId = parseInt(sessionStorage.getItem('tabId'))
        }
        // register this runner with bg script
        postMessage({
            cmd: 'runner-register',
            tabId: app.tabId
        })
    }, 300)

    function loadTests() {
        app.runner.clear()
        app.runner.load(() => {
            console.log('Tests are loaded')
            w2ui.tests.add(getNodes(app.runner.steps))
            let opt = app.runner.options
            if (opt.onLoad !== null) {
                run(opt.onLoad)
            }
        })
    }

    function run(testId) {
        let tb = w2ui.toolbar
        tb.initAction()
        if (w2ui.tests.get(testId)) {
            w2ui.tests.get(testId).count = 'A'
            w2ui.tests.refresh(testId)
            w2ui.tests.click(testId)
            setTimeout(() => { tb.click('step-over') }, 50)
        }
    }

    function getNodes(steps) {
        var root = w2ui.tests
        root.getText = function (step, opt) {
            // if (step.cmd == 'search') debugger
            let dsp_param  = step.arg1
            if (typeof dsp_param == 'object') {
                dsp_param = JSON.stringify(dsp_param)
            }
            if (typeof dsp_param == 'function') {
                dsp_param = ''
            }
            let dsp_options = ''
            if (step.options && !$.isEmptyObject(step.options) && typeof step.options.arg2 == 'string') {
                dsp_options = ' ' + step.options.arg2
            }
            if (typeof step.options == 'string') {
                dsp_options = ' "' + step.options + '"'
            }
            let extra = (step.msg || ((dsp_param || '') + dsp_options))
            if (step.tag) extra = step.tag
            // if group
            if (step.cmd == 'group') { //Array.isArray(step.steps) && step.steps.length > 0) {
                // debugger
                let msg = (step.tag ? step.tag : step.msg) || ''
                return step.arg1 + (msg? '<span style="color: gray"> - ' + msg + '</span>' : '')
            } else {
                return `
                    <span class="command ${opt.class || ''}"><span>${opt.cmd}</span></span>
                    <span class="command-msg">${opt.msg || extra}</span>
                `
            }
        }
        var nodes = []
        steps.forEach((step, ind) => {
            let nd = {
                id: step.id,
                cmd: step.cmd,
                msg: step.arg1,
                text: root.getText(step, { cmd: step.cmd }),
                icon: 'icon-border-none'
            }
            if (Array.isArray(step.steps) && step.steps.length > 0) {
                nd.icon = 'icon-box-shadow'
                nd.nodes = getNodes(step.steps)
                if (step.options.expanded) {
                    nd.expanded = true
                }
                if (step.options.autorun) {
                    app.runner.options.onLoad = step.id
                }
            }
            nodes.push(nd)
        })
        return nodes
    }
})
