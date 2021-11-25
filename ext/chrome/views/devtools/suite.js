$(function () {
    let time
    let prom_resolve
    let order = /^(\d)*\:(\s)*/g
    app.suite = {
        path: '',
        context: [],
        timeouts: [],
        queue: [],
        clear,
        process,
    }

    $().w2form(config.config)
    $().w2sidebar(config.suite)

    return

    function clear() {
        if (w2ui.suite) {
            w2ui.suite.nodes = []
        }
    }

    function process(path, file) {
        // add to queue, process next file when first one is finished
        time = (new Date).getTime()
        app.suite.queue.push({ path, file })
        next()
        return new Promise((resolve, reject) => {
            prom_resolve = resolve
        })
    }

    function next() {
        w2ui.suite.skipRefresh = true
        if (app.suite.timeouts.length == 0) {
            if (app.suite.queue.length > 0) {
                let data = app.suite.queue.shift()
                // reset context
                app.suite.context = []
                app.suite.path = data.path
                eval(data.file)
                next()
            } else {
                let tests = w2ui.suite.find({ path: app.suite.path })
                tests.forEach(test => {
                    if (test.updated < time) {
                        w2ui.suite.remove(test.id)
                    }
                })
                w2ui.suite.sort()
                w2ui.suite.refresh()
                if (typeof prom_resolve == 'function') prom_resolve()
            }
        }
    }

    function context(name, cb) {
        if (typeof name != 'string' && typeof cb != 'function') {
            console.error('Invalid arguments for the "context" function. First argument should be a string, second a function.')
            return
        }
        // need timeout so that top level tasks can be anywhere in the code
        let timer = setTimeout(() => {
            app.suite.timeouts.pop()
            let parent = app.suite.context.join('/')
            app.suite.context.push(name)
            let id = app.suite.context.join('/')
            if (w2ui.suite.get(id) == null) {
                let node
                if (parent) {
                    node = w2ui.suite.add(parent, { id, text: name.replace(order, ''), icon: 'icon-folder-open', expanded: true })
                } else {
                    node = w2ui.suite.add({ id, text: name.replace(order, ''), icon: 'icon-folder-open', expanded: true })
                }
                if (order.test(name)) {
                    node.order = parseInt(name.match(order)[0])
                }
            }
            cb()
            next()
        }, 0)
        app.suite.timeouts.push(timer)
    }

    function describe(name, cb) {
        return context(name, cb)
    }

    function test(name, cb) {
        let parent = app.suite.context.join('/')
        let id = `${parent}/${name}`
        let test = w2ui.suite.get(id)
        if (test != null) {
            // console.log(`TEST "${id}" is REPLACED with a new version.`)
            test.text = name.replace(order, '')
            if (order.test(name)) {
                test.order = parseInt(name.match(order)[0])
            }
            test.func = cb
            test.path = app.suite.path
            test.updated = (new Date).getTime()
        } else {
            let node = {
                id: id,
                text: name.replace(order, ''),
                icon: 'icon-file-xml',
                class: 'bela-test',
                updated: (new Date).getTime(),
                func: cb,
                path: app.suite.path
            }
            if (order.test(name)) {
                node.order = parseInt(name.match(order)[0])
            }
            if (parent) {
                w2ui.suite.add(parent, node)
            } else {
                w2ui.suite.add(node)
            }
        }
    }
    function specify(name, cb) {
        return it(name, cb)
    }

    function it(name, cb) {
        return test(name, cb)
    }

    function before() { throw('Method not suppored') }
    function after() { throw('Method not suppored') }
    function beforeEach() { throw('Method not suppored') }
    function afterEach() { throw('Method not suppored') }

    function getUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        })
    }
})