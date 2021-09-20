$(function () {
    window.app = {}
    app.conf = {

        layout: {
            name: 'layout',
            panels: [
                { type: 'main', style: 'padding: 0' },
                { type: 'bottom', size: 250, resizable: true, title: 'Result <span id="task-result"></span>', hidden: true }
            ]
        },

        toolbar: {
            name: 'toolbar',
            tooltip: 'bottom|right',
            items: [
                { id: 'action', type: 'button', action: 'run', tooltip: '', icon: 'icon-play' },
                { type: 'break' },
                { id: 'step-over', type: 'button', action: 'run', tooltip: 'Step over', icon: 'icon-step-over', disabled: true },
                { id: 'step-in', type: 'button', action: 'run', tooltip: 'Step in', icon: 'icon-step-in', disabled: true },
                { id: 'step-out', type: 'button', action: 'run', tooltip: 'Step out', icon: 'icon-step-out', disabled: true },
                { id: 'break_info', type: 'break', hidden: true },
                { id: 'info', type: 'html', html: '...', hidden: true },
                { type: 'spacer' },
                { id: 'settings', type: 'menu-check', icon: 'icon-cog',
                    items: [
                        { id: 'reset', text: 'Reset', group: false, icon: 'icon-empty' },
                        { text: '--' },
                        // { id: 'run-selected', text: 'Run Selected On Load', group: false, icon: 'icon-empty' },
                        { id: 'auto-expand', text: 'Auto Expand/Collapse' },
                        { id: 'pause-on-error', text: 'Pause On Error' },
                        { text: '--' },
                        { id: 'config', text: 'Configure...', group: false, icon: 'icon-empty' },
                        { id: 'config-save', text: 'Save Settings', group: false, icon: 'icon-empty' }
                    ]
                }
            ],
            initAction(action) {
                // console.log('action', action)
                let isTestSelected = w2ui.tests.selected ? true : false
                if (isTestSelected) {
                    this.enable('step-over', 'step-in', 'step-out')
                } else {
                    this.disable('step-over', 'step-in', 'step-out')
                }
                switch(action) {
                    case 'run':
                    case 'step-over':
                    case 'step-in':
                    case 'step-out':
                    case 'resume': {
                        this.set('info', { html: '<span class="cmd running">Running</span>' })
                        this.show('info', 'break_info')
                        this.set('action', { action: 'pause', icon: 'icon-pause', tooltip: 'Pause' })
                        this.disable('step-over', 'step-in', 'step-out')
                        break
                    }
                    case 'pause': {
                        this.set('info', { html: '<span class="cmd paused">Paused</span>' })
                        this.show('info', 'break_info')
                        this.set('action', { action: 'run', icon: 'icon-play', tooltip: 'Resume' })
                        break
                    }
                    case 'done': {
                        this.set('action', { action: 'run', icon: 'icon-play', tooltip: 'Run starting wtih selected test' })
                        this.set('info', { html: 'Done'})
                        break
                    }
                    case 'select': {
                        break
                    }
                    default: {
                        this.set('action', { action: 'run', icon: 'icon-play', tooltip: 'Run all tests' })
                        this.set('info', { html: '' })
                        this.hide('info', 'break_info')
                        this.disable('step-over', 'step-in', 'step-out')
                    }
                }
            },
            resetTestIcons(nodes) {
                if (nodes == null) {
                    nodes = w2ui.tests.nodes
                }
                if (nodes.length > 0) {
                    resetIcon(nodes)
                    w2ui.tests.refresh()
                }
                function resetIcon(nodes) {
                    nodes.forEach(node => {
                        node.icon = 'icon-border-none'
                        node.text = node.text.replace('<span class="command new-subject">', '<span class="command">')
                        if (Array.isArray(node.nodes) && node.nodes.length > 0) {
                            resetIcon(node.nodes)
                        }
                    })
                }
            },
            onClick(event) {
                var opt = app.runner.options
                switch (event.target) {
                    case 'settings:reset':
                        app.runner.reset()
                        app.runner.options.breakPoints = []
                        w2ui.tests.unselect()
                        w2ui.tests.refresh()
                        this.initAction()
                        this.resetTestIcons()
                        break

                    case 'settings:pause-on-error':
                        opt.pauseOnError = event.subItem.checked
                        break

                    case 'settings:auto-expand':
                        opt.autoExpand = event.subItem.checked
                        break

                    case 'action':
                        let action = event.item.action
                        this.initAction(action)
                        if (action == 'run') {
                            // if step selected
                            let stepId = w2ui.tests.selected
                            if (stepId) {
                                app.runner.moveTo(stepId)
                                app.runner.proc.running = true
                                // if at break point, do step-done
                                if (app.runner.options.breakPoints.indexOf(stepId) != -1) {
                                    app.runner.proc.pause_at = 'step-done'
                                    app.runner.proc.pause_callback = function () {
                                        let next = app.runner.getNext()
                                        if (next.id) {
                                            app.runner.moveTo(next.id)
                                            w2ui.tests.click(next.id)
                                        } else {
                                            app.runner.onDone({})
                                        }
                                        app.runner.proc.running = true
                                        app.runner.run()
                                    }
                                }
                            } else {
                                app.runner.reset()
                            }
                            app.runner.run()
                            break
                        } if (action == 'pause') {
                            app.runner.pause()
                            break
                        } else if (action == 'resume') {
                            app.runner.resume()
                            break
                        }
                        break

                    case 'step-over': {
                        let stepId = w2ui.tests.selected
                        let item = w2ui.tests.get(stepId)
                        let isExpanded = item.expanded
                        let hasSubSteps = false
                        if (stepId) {
                            w2ui.tests.resetSubIcons(stepId)
                            let proc = app.runner.proc
                            app.runner.moveTo(stepId)
                            let step = proc.steps[proc.index]
                            if (Array.isArray(step.steps) && step.steps.length > 0) {
                                hasSubSteps = true
                                proc.running = true
                                proc.pause_at = 'step-out'
                                proc.pause_id = step.id
                            } else {
                                proc.running = true
                                proc.pause_at = 'step-done'
                                proc.pause_id = step.id
                            }
                            proc.pause_callback = (step) => {
                                if (!isExpanded && item.expanded && hasSubSteps && opt.autoExpand) {
                                    w2ui.tests.collapse(step.id)
                                }
                                // if sub steps were added after runtime
                                if (!hasSubSteps && item.nodes.length > 0) {
                                    if (step.options.expanded !== false && opt.autoExpand) {
                                        w2ui.tests.expand(step.id)
                                    }
                                    selectNext()
                                    setTimeout(() => { w2ui.toolbar.click('step-out') }, 100)
                                }
                                selectNext()
                            }
                            this.initAction(event.target)
                            app.runner.run()
                        }
                        break
                    }
                    case 'step-in': {
                        let stepId = w2ui.tests.selected
                        let item = w2ui.tests.get(stepId)
                        if (stepId) {
                            w2ui.tests.resetSubIcons(stepId)
                            let proc = app.runner.proc
                            app.runner.moveTo(stepId)
                            let step = proc.steps[proc.index]
                            proc.running = true
                            proc.pause_at = 'step-done'
                            proc.pause_callback = (step) => {
                                // debugger
                                let res = app.runner.proc.results[step.id]
                                if (item.nodes.length > 0) { // always expand on step-in
                                    w2ui.tests.expand(step.id)
                                }
                                selectNext()
                            }
                            this.initAction(event.target)
                            app.runner.run()
                        }
                        break
                    }
                    case 'step-out': {
                        let stepId = w2ui.tests.selected
                        if (stepId) {
                            w2ui.tests.resetSubIcons(stepId)
                            app.runner.moveTo(stepId)
                            let proc = app.runner.proc
                            let parents = proc.parents
                            let parent  = parents[parents.length - 1]
                            if (parent) {
                                let parentId = parent.steps[parent.index].id
                                parent.edata = { target: parentId }
                                proc.running = true
                                proc.pause_at = 'step-out'
                                proc.pause_id = parentId
                                proc.pause_callback = (step) => {
                                    let res = app.runner.proc.results[step.id]
                                    selectNext()
                                }
                                this.initAction(event.target)
                                app.runner.run()
                            } else {
                                proc.running = true
                                app.runner.run()
                            }
                        }
                        break
                    }

                    case 'settings:config':
                        let loc = app.runner.loc
                        loc.tests = String(document.location.href).split('#')[0]
                        loc = w2utils.base64encode(JSON.stringify(loc))
                        open(`chrome-extension://bghiemgahdblmkegfooplghfihfmjjhp/views/config/index.html?${loc}`, '_self')
                        break

                    case 'settings:config-save':
                        let options = {}
                        Object.assign(options, app.runner.options)
                        delete options.onLoad
                        delete options.breakPoints
                        postMessage({
                            cmd: 'runner-settings-save',
                            tabId: app.tabId,
                            settings: {
                                win: {
                                    x: window.screenX,
                                    y: window.screenY,
                                    width: window.outerWidth,
                                    height: window.outerHeight
                                },
                                runner: options
                            }
                        })
                        break
                }
                function selectNext() {
                    let next = app.runner.getNext()
                    if (next.id) {
                        w2ui.tests.click(next.id)
                        w2ui.toolbar.initAction('pause')
                    } else {
                        app.runner.onDone({})
                    }
                }
            }
        },

        runner: {
            specs: [
                'commands/w2ui.js',
                'commands/usolver.js'
                // 'specs/spec1.js',
                // 'specs/spec2.js',
                // 'specs/spec-shield.js',
                // 'specs/spec-usolver.js'
            ],

            onDone(event) {
                let tb = w2ui.toolbar
                let tests = w2ui.tests
                console.log('RESULTS:', app.runner.proc.results)
                // mark task complete
                if (tests.activeTest) {
                    w2ui.tests.update(tests.activeTest.id, {
                        class: ''
                    })
                    tests.activeTest = null
                }
                tests.unselect()
                // select auto run command
                let opt = app.runner.options
                if (opt.onLoad != null) {
                    w2ui.tests.click(opt.onLoad)
                }
                tb.initAction('done')
            },

            onReset(event) {
                let tests = w2ui.tests
                event.done(() => {
                    if (tests) {
                        tests.nodes = []
                        tests.refresh()
                        tests.add(app.getNodes(app.runner.steps))
                    }
                })
            },

            onPause(event) {
                let tests = w2ui.tests
                w2ui.toolbar.initAction('pause')
                if (event.error) {}
                if (tests.selected != event.next.id) tests.click(event.next.id)
                w2ui.tests.focus()
            },

            onRuntimeAdd(event) {
                let tests = w2ui.tests
                // add substeps in a step
                event.done(() => {
                    w2ui.tests.get(event.id).icon = 'icon-box-shadow'
                    w2ui.tests.add(event.id, app.getNodes(event.step.steps))
                    if (event.step.options.expanded !== false && this.options.autoExpand) {
                        w2ui.tests.expand(event.id)
                    }
                })
            },

            onRuntimeRemove(event) {
                // add substeps in a step
                event.done(() => {
                    w2ui.tests.get(event.id).icon = 'icon-box-shadow'
                    w2ui.tests.get(event.id).nodes = []
                    w2ui.tests.collapse(event.id)
                })
            },

            onCommand(event) {
                let tests = w2ui.tests
                let item = tests.get(event.target)
                if (tests.activeTest) {
                    w2ui.tests.update(tests.activeTest.id, {
                        class: ''
                    })
                }
                tests.activeTest = item
                tests.update(event.target, { class: 'task-running'})
                event.done(() => {
                    let txt = item.text
                    let opt = { cmd: event.details.cmd, class: '', msg : '' }
                    // debugger
                    // if (event.details.cmd == 'break') debugger
                    if (event.result.msg) opt.msg = event.result.msg
                    if (event.result.subject) opt.class += ' new-subject'
                    if (event.result.success === false) opt.class += ' error'
                    if (event.result.assertion === true) {
                        opt.class += ' assertion'
                        opt.cmd = 'ASSERT'
                    }
                    txt = tests.getText(event.details, opt)
                    if (event.result.success) {
                        tests.update(event.target, {
                            text: txt,
                            icon: 'icon-checkmark',
                            class: 'task-done'
                        })
                    } else {
                        tests.update(event.target, {
                            text: txt,
                            icon: 'icon-cross',
                            class: 'task-failed'
                        })
                    }
                })
            },

            onEnterSub(event) {
                let tests = w2ui.tests
                let item = tests.get(event.target)
                let isExpanded = item.expanded
                if (this.options.autoExpand) {
                    tests.expand(event.target)
                }
                tests.update(event.target, {
                    icon: 'icon-box-shadow',
                    class: 'sub-running'
                })
                event.done(() => {
                    if (event.success) {
                        tests.update(event.target, {
                            icon: 'icon-checkmark',
                            class: 'task-done'
                        })
                    } else {
                        tests.update(event.target, {
                            icon: 'icon-cross',
                            class: 'task-failed'
                        })
                    }
                    if (!isExpanded && this.options.autoExpand) {
                        tests.collapse(event.target)
                    }
                })
            },

            onError(event) {
                // update parents
                event.ids.forEach((id) => {
                    let item = w2ui.tests.get(id)
                    let opt = { cmd: item.cmd, arg1: item.msg, msg: event.msg }
                    w2ui.tests.update(id, {
                        text: w2ui.tests.getText(opt, opt),
                        icon: 'icon-cross',
                        class: 'task-failed' + (item.class.indexOf('sub-running') != -1 ? ' sub-running' : '')
                    })
                })
            }
        },

        tests: {
            name: 'tests',
            levelPadding: 15,
            handle: {
                size: 18,
                style: `height: 22px; width: 20px; margin-top: 0px; margin-left: -15px;`,
                content: `<div onclick="w2ui.tests.setBreakPoint(this, event)"></div>`
            },
            nodes: [],
            setBreakPoint(el) {
                let testId = $(el).parents('.w2ui-node').attr('id').substr(5)
                let bp = app.runner.options.breakPoints
                if (bp.indexOf(testId) != -1) {
                    bp.splice(bp.indexOf(testId), 1)
                    $(el).removeClass('break-point')
                } else {
                    bp.push(testId)
                    $(el).addClass('break-point')
                }
                event.preventDefault()
                event.stopPropagation()
                console.log(testId, bp)
            },
            onRefresh(event) {
                // if (event.target == 'tests') debugger
                event.done(() => {
                    if (app.runner.options.breakPoints.indexOf(event.target) != -1) {
                        $('#node_'+ event.target).find('.w2ui-node-handle > div').addClass('break-point')
                    }
                })
                // console.log('refresh', event)
            },
            resetSubIcons(id) {
                (function _resetNode(nd) {
                    w2ui.tests.update(nd.id, {
                        icon: 'icon-border-none',
                        text: nd.text.replace('<span class="command new-subject">', '<span class="command">')
                    })
                    if (nd.nodes && nd.nodes.length > 0) {
                        nd.nodes.forEach(nd => { _resetNode(nd) })
                    }
                })(this.get(id))
            },
            onClick(event) {
                let self = this
                let prev = this.selected
                event.done(() => {
                    if (prev == self.selected) {
                        self.unselect()
                        return
                    }
                    w2ui.toolbar.initAction('select')
                    let res = app.runner.proc.results[event.target]
                    if (res && app.runner.proc.running !== true) {
                        console.log('TASK Result:', res)
                        let dsp = '<div style="font-family: verdana; font-size: 12px">'
                        w2ui.layout.get('bottom').title = 'Task ' +
                            (res.success ? '<span style="color: green">successful</span>' : '<span style="color: red">failed</span>')
                        if ($.isPlainObject(res)) {
                            Object.keys(res).forEach(key => {
                                if (key == 'success') return
                                dsp += `<div>
                                    <span class="param-key">${key}</span>:
                                    <span class="param-value">${key == 'options' ? JSON.stringify(res[key]) : res[key]}</span>
                                </div>`
                            })
                        } else {
                            dsp += res
                        }
                        dsp += '</div>'
                        w2ui.layout.html('bottom', dsp)
                        w2ui.layout.show('bottom', true)
                    } else {
                        w2ui.layout.hide('bottom', true)
                    }
                })
            }
        }
    }
})