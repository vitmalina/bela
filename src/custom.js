class BelaCustom {

    constructor(parent) {
        this.parent = parent // bela object it belongs too
        this.internal = ['custom', 'steps', 'runner', 'begin', 'end', 'tag'] // this commands cannot be overwriten
        this.custom = []
        this.def_args = {} // default arguments for custom steps
    }

    add(command, def_options, callback) {
        var parent = this.parent
        if (parent[command] != null) {
            throw `The "${command}" command already exists. Use bela.custom.overwrite() to extend it.`
        }
        if (typeof callback != 'function' && typeof def_options == 'function') {
            callback = def_options
            def_options = {}
        }
        this.custom.push(command)
        this.def_args[command] = def_options
        parent.steps[command] = callback
        parent[command] = function(param, options) { // cannot be arrow function, as it does not have arguments
            parent.runner.add({
                cmd: command,
                args: Array.from(arguments),
                options: options
            })
            return parent
        }
    }

    remove(command, options) {
        let parent = this.parent
        let ind = this.custom.indexOf(command)
        if (ind == -1 && options.silent !== true) {
            throw `Custom command "${command}" does not exist.`
        }
        if (ind != -1 && parent[command] != null) {
            delete parent[command]
            delete parent.steps[command]
            delete this.def_args[command]
            this.custom.splice(ind, 1)
        }
    }

    overwrite(command, def_options, callback) {
        let self = this
        let parent = this.parent
        if (this.internal.indexOf(command) != -1) {
            throw `The "${command}" command cannot be overwritten as it is important internal command.`
        }
        if (parent[command] == null) {
            throw `The "${command}" command does not exist. Use bela.custom.add() method to define it.`
        }
        if (typeof callback != 'function' && typeof def_options == 'function') {
            callback = def_options
            def_options = {}
        }
        // if (this.custom.indexOf(command) == -1) this.custom.push(command)
        // chain original functions
        // need closure
        (function (originalFn, callback) {
            parent.steps[command] = function(param, options, callIndex) {
                options.originalFn = originalFn
                return callback.bind(parent.runner)(param, options)
            }
        })(parent.steps[command].bind(parent.runner), callback)
    }
}