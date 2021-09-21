class Bela {

    // NICE TO HAVE
    // - stash/unstash commands during the runtime
    // - bela.reload() - open({ force: true })
    // - bela.go() - back/forward in history
    // - bela.request() - xhr request
    // - flat runtime comamnds
    // - ifError
    // - begin { repeat: 10 }

    constructor(runner) {
        let self = this
        this.version = 1.0
        this.runner = runner
        this.steps = new BelaSteps()
        this.custom = new BelaCustom(this)
        // built-in steps
        Object.getOwnPropertyNames(Object.getPrototypeOf(this.steps)).forEach(step => {
            if (step == 'constructor') return;
            // self[step] = steps[step].bind(runner)
            // return  this
            self[step] = function (param, options = {}) {
                self.runner.add({
                    cmd: step,
                    args: Array.from(arguments),
                    options: options
                })
                return self
            }
        })
    }

    // These comamnds need to be here because they are pre-runtime

    begin(name, options = {}) {
        // options.expanded = bool
        // options.autorun = bool
        this.runner.begin(name, options)
        return this
    }

    end(options = {}) {
        this.runner.end(options)
        return this
    }

    tag(name, options = {}) {
        this.runner.tag(name, options)
        return this
    }
}