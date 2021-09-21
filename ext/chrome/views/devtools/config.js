let config = {
    layout: {
        name: 'layout',
        panels: [
            { type: 'left', size: '40%', resizable: true,
                style: 'overflow: hidden; border-right: 1px solid #ddd',
                toolbar: {
                    style: 'background-color: #f3f4f5; border-top: 1px solid #fff; border-right: 1px solid #ddd',
                    tooltip: 'bottom|right',
                    items: [
                        { id: 'reload-manifest', icon: 'w2ui-icon-reload', hidden: true },
                        { id: 'action', type: 'menu-radio', icon: 'icon-type',
                            selected: 'editor',
                            text(item) {
                                let sel = item.get(item.selected)
                                return sel ? sel.text : '--'
                            },
                            overlay: { openAbove: false },
                            items: [
                                { id: 'editor', text: 'Editor' },
                                { id: 'manifest', text: 'Manifest' },
                                { id: 'break', text: '--' },
                                { id: 'config', text: 'Configure', group: false, icon: 'icon-cog' }
                            ]
                        },
                        { id: 'break', type: 'break' },
                        { id: 'run-all', type: 'button', text: 'Run All', icon: 'icon-play', hidden: true },
                        { id: 'stop-all', type: 'button', text: 'Stop', icon: 'icon-stop', hidden: true },
                        { id: 'save', type: 'button', text: 'Save', icon: 'w2ui-icon-check', disabled: true,
                            tooltip(item) {
                                let text = 'Save test into local cache (ctrl + s)'
                                if (app.isMac) { text = 'Save test into local cache (⌘S)' }
                                return text
                            }
                        },
                        { id: 'spacer', type: 'spacer' },
                        { id: 'insert', type: 'button', text: 'Parse Tests', hidden: true },
                        { id: 'run-time', type: 'html', html: `<span id="run-time-msg" style="padding-right: 10px">0:00</span>`, hidden: true },
                        { id: 'auto-run', type: 'html', html: `
                            <input type="text" tabindex="100" class="hidden" onfocus="$('#auto-run-flag').focus()">
                            <label class="check-label">
                                <input type="checkbox" id="auto-run-flag" tabindex="4" style="position: relative; top: 2px; left: -3px;">
                                <span onmouseover="$(this).w2tag('Auto run current test on page reload', { className: 'w2ui-light', top: -6, position: 'right|left' })"
                                    onmouseout="$(this).w2tag()">Auto Run</span>
                            </label>
                            ` },
                    ],
                    onClick(event) {
                        app.panelAction(event)
                    },
                    onRefresh(event) {
                        // make sure auto run is checked after reload
                        let isChecked = $('#auto-run-flag').is(':checked')
                        event.done(() => {
                            if (isChecked) {
                                $('#auto-run-flag').prop('checked', true)
                            }
                        })
                    },
                    onRender(event) {
                        w2ui.tb_editor = w2ui.layout_left_toolbar // same toolbar
                    }
                }
            },
            { type: 'main',
                style: 'border-right: 1px solid #ddd',
                toolbar: {
                    style: 'background-color: #f3f4f5; border-top: 1px solid #fff; border-right: 1px solid #ddd',
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
                            overlay: { openAbove: false },
                            items: [
                                { id: 'reset', text: 'Reset', group: false, icon: 'icon-empty' },
                                { id: 'remove', text: 'Remove Runner', group: false, icon: 'icon-empty' },
                                { text: '--' },
                                { id: 'pause-on-error', text: 'Pause On Error' },
                                { id: 'auto-expand', text: 'Auto Expand/Collapse', checked: true }
                            ]
                        }
                    ],
                    initAction(action) {
                        let isTestSelected = w2ui.steps.selected ? true : false
                        if (isTestSelected) {
                            this.enable('step-over', 'step-in', 'step-out')
                        } else {
                            this.disable('step-over', 'step-in', 'step-out')
                        }
                        this.enable('action', 'settings')
                        app.state.pausing = false
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
                            case 'pausing':  {
                                app.state.pausing = true
                                this.set('info', { html: '<span class="cmd paused">Pausing...</span>' })
                                this.show('info', 'break_info')
                                this.disable('action', 'step-over', 'step-in', 'step-out')
                                break
                            }
                            case 'pause': {
                                this.set('info', { html: '<span class="cmd paused">Paused</span> - <a onclick="app.runner.reset()">Reset</a>' })
                                this.show('info', 'break_info')
                                this.set('action', { action: 'run', icon: 'icon-play', tooltip: 'Resume' })
                                break
                            }
                            case 'done': {
                                this.set('action', { action: 'run', icon: 'icon-play', tooltip: 'Run at selected command' })
                                this.show('info', 'break_info')
                                this.set('info', { html: '<span class="cmd">Done</span> - <a onclick="app.runner.reset()">Reset</a>'})
                                break
                            }
                            case 'select': {
                                break
                            }
                            default: {
                                this.set('action', { action: 'run', icon: 'icon-play', tooltip: 'Run All' })
                                this.set('info', { html: '' })
                                this.hide('info', 'break_info')
                                this.disable('step-over', 'step-in', 'step-out')
                            }
                        }
                    },
                    resetTestIcons(nodes) {
                        if (nodes == null) {
                            nodes = w2ui.steps.nodes
                        }
                        if (nodes.length > 0) {
                            resetIcon(nodes)
                            w2ui.steps.refresh()
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
                        let action = event.target
                        let ready = (event) => {
                            if (action == 'pause') {
                                this.initAction('pausing')
                            } else if (!event.success && event.noFrame) {
                                if (app.state.wait4Reload == null) {
                                    setTimeout(() => {
                                        app.runner.remove()
                                        app.getSettings().then(settings => {
                                            app.runner.insertFrame(settings)
                                        })
                                    }, 1)
                                }
                            }
                        }
                        switch (event.target) {
                            case 'action':
                                action = event.item.action
                                if (action == 'run') {
                                    app.state.running = true
                                    // update suite if any
                                    let id = app.state.currentTestId
                                    if (id) {
                                        w2ui.suite.update(id, { class: '', icon: 'icon-border-none' })
                                    }
                                    // if step selected
                                    let stepId = w2ui.steps.selected
                                    if (stepId) {
                                        app.runner.action('run', { stepId, options: app.options }, ready)
                                    } else {
                                        app.runner.action('run', { options: app.options }, ready)
                                    }
                                }
                                if (action == 'pause') {
                                    app.state.running = false
                                    this.initAction('pausing')
                                    app.runner.action('pause', {}, ready)
                                } else if (action == 'resume') {
                                    app.runner.action('resume', { options: app.options }, ready)
                                }
                                break

                            case 'step-in':
                            case 'step-out':
                            case 'step-over': {
                                let stepId = w2ui.steps.selected
                                let item = w2ui.steps.get(stepId)
                                let expanded = item.expanded
                                let hasSubSteps = item.nodes && item.nodes.length > 0 ? true : false
                                // if (event.target == 'step-in') expanded = true
                                w2ui.steps.resetSubIcons(stepId)
                                app.runner.action(event.target, { stepId, expanded, hasSubSteps }, ready)
                                break
                            }

                            case 'settings:remove':
                                app.runner.remove()
                                break

                            case 'settings:reset':
                                app.runner.reset()
                                break

                            case 'settings:pause-on-error':
                                app.options.pauseOnError = event.subItem.checked
                                break

                            case 'settings:auto-expand':
                                app.options.autoExpand = event.subItem.checked
                                break
                        }
                    },
                    onRender(event) {
                        w2ui.tb_steps = w2ui.layout_main_toolbar // same toolbar
                    }
                }
            },
            { type: 'right', size: '-400px', resizable: true, style: 'background-color: #fff;',
                toolbar: {
                    style: 'background-color: #f3f4f5; border-top: 1px solid #fff; border-right: 1px solid #ddd',
                    tooltip: 'bottom|right|left',
                    items: [
                        {
                            id: 'search-html', type: 'html',
                            html: `
                                <div id="search-help">
                                    <span class="icon icon-search"></span>
                                    <input placeholder="Search help...." tabindex="50">
                                </div>
                            `
                        },
                        { type: 'spacer' },
                        { id: 'clear-logs', type: 'button', icon: 'icon-cross', text: 'Logs', tooltip: 'Clear logs' },
                        { type: 'break' },
                        { id: 'reload', type: 'button', icon: 'w2ui-icon-reload', tooltip: 'Reload Bela Automation' }
                    ],
                    onClick(event) {
                        switch (event.target) {
                            case 'clear-logs':
                                app.logs.clear()
                                break
                            case 'reload':
                                window.location.reload()
                                break
                            default:
                                app.panelAction(event)
                        }
                    },
                    onRender(event) {
                        w2ui.tb_editor = w2ui.layout_left_toolbar // same toolbar
                    }
                }
            }
        ]
    },

    steps: {
        name: 'steps',
        levelPadding: 15,
        tabIndex: 30,
        handle: {
            size: 18,
            style: `height: 22px; width: 20px; margin-top: 0px; margin-left: -15px;`,
            content: `<div onclick="w2ui.steps.setBreakPoint(this, event)"
                ${w2utils.tooltip('Set break point', { className: 'w2ui-light', left: -6, position: 'top|bottom' })}></div>`
        },
        nodes: [],
        getText: function (step, opt) {
            // if (step.cmd == 'then') debugger
            let dsp_param = step.args[0] != null ? step.args[0] : ''
            if (typeof dsp_param == 'object') {
                dsp_param = JSON.stringify(dsp_param)
            }
            if (typeof dsp_param == 'function') {
                dsp_param = ''
            }
            let dsp_options = ''
            if (step.options && !$.isEmptyObject(step.options) && Array.isArray(step.options.args) && typeof step.options.args[1] == 'string') {
                dsp_options = ' ' + step.options.args[1]
            }
            if (typeof step.options == 'string') {
                dsp_options = ' "' + step.options + '"'
            }
            let extra = (step.msg || (dsp_param + dsp_options))
            if (step.tag != null) extra = step.tag
            if (step.options && step.options.password) {
                extra = "********"
            }
            if (step.cmd == 'should' && step.args[0] && typeof step.args[0] == 'object') {
                extra = Object.keys(step.args[0]).join(', ')
            }
            // if group
            if (step.cmd == 'group') { //Array.isArray(step.steps) && step.steps.length > 0) {
                let msg = (step.tag ? step.tag : step.msg) || ''
                if (opt.msg) msg = opt.msg
                return step.args[0] + (msg? '<span style="color: gray"> - ' + msg + '</span>' : '')
            } else {
                return `
                    <span class="command ${opt.class || ''}"><span>${opt.cmd}</span></span>
                    <span class="command-msg">${opt.msg || extra}</span>
                `
            }
        },
        setBreakPoint(el) {
            let stepId = $(el).parents('.w2ui-node').attr('id').substr(5)
            let bp = app.breakPoints
            if (bp.indexOf(stepId) != -1) {
                $(el).removeClass('break-point')
                app.runner.action('breakPoint-remove', { stepId })
            } else {
                $(el).addClass('break-point')
                app.runner.action('breakPoint-add', { stepId })
            }
            event.preventDefault()
            event.stopPropagation()
        },
        resetSubIcons(id) {
            (function _resetNode(nd) {
                w2ui.steps.update(nd.id, {
                    icon: 'icon-border-none',
                    text: nd.text.replace('<span class="command new-subject">', '<span class="command">')
                })
                if (nd.nodes && nd.nodes.length > 0) {
                    nd.nodes.forEach(nd => { _resetNode(nd) })
                }
            })(this.get(id))
        },
        onClick(event) {
            clearTimeout(this._focus_timeout)
            let self = this
            let prev = this.selected
            event.done(() => {
                // if (prev == self.selected) {
                //     self.unselect()
                //     w2ui.tb_steps.initAction('select')
                //     return
                // }
                w2ui.tb_steps.initAction('select')
                let res = app.results[event.target]
                let id = event.target
                if (res) {
                    let dsp = `<div class="cmd-results">
                        <div class="cmd-title">
                            <span class="cmd-name">${res.step.cmd}</span>
                            ${(res.success
                                ? '<span style="color: green">Success</span>'
                                : '<span style="color: red">Failed</span>'
                             )}
                            - <a id="show-details">Show details</a>
                        </div>
                        <div class="cmd-details">
                        <table class="param-details">`
                    if ($.isPlainObject(res)) {
                        Object.keys(res).forEach(key => {
                            if (['success', 'step'].includes(key)) return
                            let val = res[key]
                            if (Array.isArray(val)) {
                                val = val.map(el => {
                                    if (el != null && typeof el == 'object') {
                                        el = obj2txt(el, key)
                                    }
                                    return el
                                }).join('<br>')
                            } else if (typeof val == 'object') {
                                val = obj2txt(val, key)
                            }
                            dsp += `<tr>
                                        <td class="param-key">${key}:</td>
                                        <td class="param-value">${val}</td>
                                    </tr>`
                        })
                        function obj2txt(obj, key) {
                            let txt = ''
                            if (typeof obj == 'object' && obj.method && obj.url) {
                                return obj2txt([obj], key)
                            } else if (Array.isArray(obj)) {
                                obj.forEach(el => {
                                    if (typeof el == 'object' && el.method && el.url) {
                                        let url = String(el.url).trim()
                                        if (url.substr(0, 5) == 'data:') url = url.split(',')[0]
                                        let color = 'black'
                                        if (el.match === true || el.loaded === true) color = '#2e9803'
                                        if (el.loaded === false) color = '#da2020'
                                        txt += `<span ${el.name != null ? `name="${el.name}"` : ''} class="param-network"
                                            style="color: ${color}">${el.status != null ? el.status + ': ': ''}${el.method} ${url} ${
                                            el.found > 1
                                                ? `<span class="param-badge">${el.found + ' of ' + el.count}</span>`
                                                : ''
                                            } ${ key == 'network' && el.name != null
                                                ? `<span class="param-badge">${el.name}</span>`
                                                : ''
                                            }</span>`
                                    }
                                })
                            } else {
                                txt = JSON.stringify(obj, null, 2)
                            }
                            return txt
                        }
                    } else {
                        dsp += res
                    }
                    dsp += '</table></div></div>'
                    w2ui.layout.html('right', dsp)
                    $(w2ui.layout.el('right'))
                        .find('#show-details')
                        .on('click', function(e) {
                            $(this).replaceWith('<span>displayed in the console</span>')
                            app.runner.exec(`
                                console.log(runner.proc.results['${id}'])
                            `)
                        })
                    $(w2ui.layout.el('right'))
                        .find('.param-network')
                        .off('.highlight')
                        .on('mouseenter.highlight', function (e) {
                            $(w2ui.layout.el('right'))
                                .find(`.param-network[name="${$(this).attr("name")}"]`)
                                .css('background-color', '#ddd')
                        })
                        .on('mouseleave.highlight', function (e) {
                            $(w2ui.layout.el('right'))
                                .find(`.param-network[name="${$(this).attr("name")}"]`)
                                .css('background-color', 'transparent')
                        })
                } else {
                    w2ui.layout.html('right', `
                        <div class="w2ui-centered">The command did not run yet. <br>
                            <a id="show-details">Show step details</a>
                        </div>`)
                    $(w2ui.layout.el('right'))
                        .find('#show-details')
                        .on('click', function (e) {
                            $(this).replaceWith('<span>Displayed in the console</span>')
                            app.runner.exec(`
                                console.log(runner.get('${id}'), '${id}')
                            `)
                        })
                }
            })
        },
        // onDblClick(event) {
        //     this.select(event.target)
        //     w2ui.tb_steps.click('step-over')
        // },
        emptyMsg: 'No Commands',
        onRefresh(event) {
            event.done(() => {
                if (app.breakPoints.indexOf(event.target) != -1) {
                    $('#node_'+ event.target).find('.w2ui-node-handle > div').addClass('break-point')
                }
                // debugger
                if (this.nodes.length == 0) {
                    $(this.box).find('.w2ui-sidebar-body').html(`<div class="w2ui-centered">${this.emptyMsg}</div>`)
                }
            })
        },
        onFocus(event) {
            this._focus_timeout = setTimeout(() => {
                if (!this.selected && this.nodes[0]) this.select(this.nodes[0].id)
            }, 200)
        },
        onKeydown(event) {
            let evt = event.originalEvent
            if (evt.keyCode == 13 && !evt.metaKey && !evt.altKey && !evt.ctrlKey) {
                if (this.selected) {
                    w2ui.tb_steps.click('step-over')
                }
            }
        }
    },

    config: {
        name: 'config',
        style: 'border: 0; padding-top: 1px',
        focus: -1,
        fields: [
            { field: 'start', type: 'list',
                html: {
                    label: 'Start with', span: 4,
                    style: 'margin: 5px 0 0 0;',
                    attr: 'style="width: 90px"'
                },
                options: {
                    items: [
                        { id: 'editor', text: 'Editor' },
                        { id: 'manifest', text: 'Manifest' }
                    ]
                }
            },
            {
                field: 'baseURL', type: 'text',
                html: {
                    label: 'Base URL', span: 4,
                    style: 'margin-bottom: 15px',
                    attr: 'style="width: 250px;"'
                }
            },
            { field: 'libs', type: 'map',
                html: {
                    label: 'Libraries (any JS lib to include)', span: -1,
                    key: { attr: 'style="width: 100%; font-size: 12px; padding: 4px"' },
                    value: { attr: 'style="display: none"' }
                }
            },
            { field: 'manifest', type: 'text',
                html: {
                    label: 'Manifest URL', span: 4,
                    attr: 'style="width: 100%"'
                }
            },
            { field: '', type: 'custom',
                html: {
                    span: 0,
                    text: `
                        <button id="btnSave" class="w2ui-btn" onclick="w2ui.config.saveData()" style="margin-left: 0">Save</button>
                        <button id="btnSave" class="w2ui-btn" onclick="w2ui.config.viewConfig()">View Config</button>`
                }
            }
        ],
        onChange(event) {
            event.done(() => {
                this.show('manifest', 'baseURL', 'commands', 'libs')
                let start = this.record.start || { id: 'editor' }
                switch(start.id) {
                    case 'editor':
                        this.hide('manifest')
                        break
                    case 'manifest':
                        this.hide('baseURL', 'commands', 'libs')
                        break
                }
            })
            $('#btnSave').prop('disabled', false)
        },
        onRender(event) {
            event.done(() => {
                app.getSettings().then(settings => {
                    let libs = {}
                    if (settings.start =='editor' && Array.isArray(settings.libs)) {
                        settings.libs.forEach(value => {
                            libs[value] = ''
                        })
                        settings.libs = libs
                    }
                    if (!settings.start) {
                        settings.start = 'editor'
                    }
                    delete settings.editorCode
                    delete settings.updateTime
                    Object.assign(this.record, settings)
                    this.refresh()
                    setTimeout(() => { this.change('start') }, 100)
                })
            })
        },
        saveData() {
            let data = this.getCleanRecord()
            app.files = {} // clear file cache
            data.libs = Object.keys(data.libs || {})
            app.saveSettings(data)
            app.message()
            app.runner.remove()
            w2ui.tb_editor.click('action:'+ data.start)
        },
        viewConfig() {
            let form = this
            let data = this.getCleanRecord()
            data.libs = Object.keys(data.libs || {})
            app.viewSource(JSON.stringify(data, null, 4), {
                lang: 'json',
                button: {
                    text: 'Save',
                    click(data) {
                        try {
                            data = JSON.parse(data)
                        } catch(e) {
                            $('.w2ui-message #saveButton').w2tag({
                                html: 'Invalid JSON file. Cannot save.',
                                position: 'top'
                            })
                            return
                        }
                        if (!data.manifest) data.manifest = '' // force clear
                        if (!data.baseURL) data.baseURL = '' // force clear
                        app.message()
                        app.saveSettings(data)
                        form.render()
                    }
                }
            })
        }
    },

    suite: {
        name: 'suite',
        levelPadding: 15,
        tabIndex: 20,
        handle: {
            size: 18
        },
        style: 'background-color: #fff!important',
        menu: [
            { id: 'run', icon: 'icon-play', text: 'Run' },
            { id: 'edit', icon: 'icon-type', text: 'View Source &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' },
            { text: '--' },
            { id: 'expand', icon: 'icon-empty', text: 'Expand' },
            { id: 'collapse', icon: 'icon-empty', text: 'Collapse' },
            { id: 'only', icon: 'icon-filter', text: 'Current Only' },
            { id: 'all', icon: 'icon-filter', text: 'Show All', hidden: true },
            { text: '--' },
            { id: 'expand-all', icon: 'icon-empty', text: 'Expand Root' },
            { id: 'collapse-all', icon: 'icon-empty', text: 'Collapse All' },
        ],
        onContextMenu(event) {
            let item = this.get(event.target)
            let edit = this.menu.find(it => (it.id == 'edit'))
            let only = this.menu.find(it => (it.id == 'only'))
            if (item.func) {
                edit.disabled = false
                only.disabled = true
            } else {
                edit.disabled = true
                only.disabled = false
            }
        },
        skipInsertCmd: false,
        onMenuClick(event) {
            let menu = event.menuItem.id
            let item = this.get(event.target)
            switch (menu) {
                case 'expand':
                    this.expand(item.id)
                    this.expandAll(item)
                    break
                case 'collapse':
                    this.collapse(item.id)
                    this.collapseAll(item)
                    break
                case 'expand-all':
                    this.nodes.forEach(node => {
                        this.expand(node.id)
                    })
                    // this.expandAll()
                    break
                case 'collapse-all':
                    this.collapseAll()
                    break
                case 'run':
                    let ids = []
                    if (item.nodes && item.nodes.length > 0) {
                        this.each((item) => {
                            // not a folder, not hidden
                            if (item.hidden != true && item.nodes.length == 0) {
                                ids.push(item.id)
                            }
                        }, item.nodes)
                    } else {
                        ids.push(item.id)
                    }
                    app.resetSubIcons(event.target)
                    app.runTests(ids, true)
                    break
                case 'all':
                    w2ui.suite.nodes = w2ui.suite._all
                    w2ui.suite.refresh()
                    delete w2ui.suite._all
                    delete w2ui.suite._only
                    // hide all, show only
                    w2ui.suite.menu.filter(it => it.id == 'only')[0].hidden = false
                    w2ui.suite.menu.filter(it => it.id == 'all')[0].hidden = true
                    break
                case 'only':
                    w2ui.suite._all  = w2ui.suite.nodes
                    w2ui.suite.nodes = [w2ui.suite.get(event.target)]
                    w2ui.suite._only = event.target
                    w2ui.suite.refresh()
                    // hide only, show all
                    w2ui.suite.menu.filter(it => it.id == 'only')[0].hidden = true
                    w2ui.suite.menu.filter(it => it.id == 'all')[0].hidden = false
                    break
                case 'edit':
                    let code = item.func.toString()
                    code = code.substr(code.indexOf('{') + 1, code.lastIndexOf('}') - code.indexOf('{') -1)
                    app.getSettings().then(settings => {
                        let current = w2utils.base64decode(settings.editorCode)
                        if (current != code) {
                            w2confirm('Opening source code will overwrite current code in the editor, as well as baseURL and libs settings. Continue?', 'Open in Code Editor')
                                .yes(() => { _open() })
                        } else {
                            _open()
                        }
                        function _open() {
                            app.saveSettings({
                                start: 'editor',
                                baseURL: app.manifest.baseURL,
                                libs: app.manifest.libs,
                                editorCode: w2utils.base64encode(code)
                            }).then(() => {
                                w2ui.tb_editor.click('action:editor')
                            })
                        }
                    })
                    break

            }
            function _get(id) {
                let item = w2ui.suite.get(id)
                let nodes = []
                if (item.nodes && item.l)
                return nodes
            }
        },
        onClick(event) { // test is clicked
            clearTimeout(this._focus_timeout)
            app.msg()
            if (this.running) {
                console.log('running')
                return
            }
            let item = this.get(event.target)
            if (item.path) {
                let parts = item.path.split('/').length > 3
                    ? '../'+item.path.split('/').slice(-3).join('/')
                    : item.path
                let tooltip = w2utils.tooltip('Selected test is from "' + item.spec + '" spec.',
                    { left: 5, position: 'top', className: 'w2ui-light' })
                $('#bela-commands #msg-error').hide()
                $('#bela-commands #msg-ok')
                    .show()
                    .find('#file-path')
                    .replaceWith(`<span id="file-path"${tooltip}>${parts}</sapn>`)
                $('#bela-commands #btn-reload')
                    .off('click')
                    .on('click', () => {
                        app.getSettings().then(settings => {
                            let spec = item.path
                            app.reloadSpec(spec, settings, () => {})
                        })
                    })
                app.runTests([item.id])
            } else {
                $('#bela-commands #msg-ok').hide()
            }
        },
        onKeydown(event) {
            let evt = event.originalEvent
            if (evt.keyCode == 13 && !evt.metaKey && !evt.altKey && !evt.ctrlKey) {
                if (this.selected) {
                    event.target = this.selected
                    this.onDblClick(event)
                }
            }
        },
        onDblClick(event) {
            if (this.running) {
                console.log('running')
                return
            }
            let item = this.get(event.target)
            if (item.func) {
                app.runTests([event.target], true)
            }
        },
        onFocus(event) {
            this._focus_timeout = setTimeout(() => {
                if (!this.selected && this.nodes[0]) this.select(this.nodes[0].id)
            }, 200)
        },
        search(str) {
            let str2 = str.toLowerCase()
            this.each((node) => {
                if (node.text.toLowerCase().indexOf(str2) === -1) {
                    node.hidden = true
                } else {
                    showParents(node)
                    node.hidden = false
                }
            })
            this.refresh()
            $(this.box).find('#search-steps input').val(str).focus()

            function showParents(node) {
                if (node.parent) {
                    node.parent.hidden = false
                    showParents(node.parent)
                }
            }
        },
        onRefresh(event) {
            event.done(() => {
                $(this.box).find('#search-steps input')
                    .off('.search')
                    .on('keypress', (event) => {
                        if (event.keyCode == 13) {
                            this.search($(event.target).val())
                        }
                    })
            })
        },
        // TODO: remove when w2ui is updated
        // this function is part of w2ui 2.0
        sort(options, nodes) {
            // default options
            if (!options || typeof options != 'object') options = {}
            if (options.foldersFirst == null) options.foldersFirst = true
            if (options.caseSensitive == null) options.caseSensitive = false
            if (options.reverse == null) options.reverse = false

            if (nodes == null) {
                nodes = this.nodes
            }
            nodes.sort((a, b) => {
                // folders first
                let isAfolder = (a.nodes && a.nodes.length > 0)
                let isBfolder = (b.nodes && b.nodes.length > 0)
                // both folder or both not folders
                if (options.foldersFirst === false || (!isAfolder && !isBfolder) || (isAfolder && isBfolder)) {
                    let aText = a.text
                    let bText = b.text
                    if (!options.caseSensitive) {
                        aText = aText.toLowerCase()
                        bText = bText.toLowerCase()
                    }
                    if (a.order != null) aText = a.order
                    if (b.order != null) bText = b.order
                    let cmp = w2utils.naturalCompare(aText, bText)
                    return (cmp === 1 || cmp === -1) & options.reverse ? -cmp : cmp
                }
                if (isAfolder && !isBfolder) {
                    return !options.reverse ? -1 : 1
                }
                if (!isAfolder && isBfolder) {
                    return !options.reverse ? 1 : -1
                }
            })
            nodes.forEach(node => {
                if (node.nodes && node.nodes.length > 0) {
                    this.sort(options, node.nodes)
                }
            })
        }
    }
}