# then

execute a function

## Syntax

```js
bela.then(func, [options])
```
Does not modify the subject

## Usage

```js
bela.then(function (subj, win, runner) {
    // any js code
})
````

## Arguments

- func `function`

A JavaScript function to execute. It can be a regular or an arrow function. If it is a regular function it will have `this` context point to the BelaRunner that executes commands (same as the third argument). If it is an arrow function, then `this` variable will be undefined.

- options `object`

| Option | Default | Description |
| ------ | ------- | ----------- |
| timeout | 4000 | Timeout for the command to complete |

## Examples

This first example show how to use various runtime variables.

```js
bela
    .get('body')
    .let('a', 1)
    .let('b', "some string")
    .then(function(subj, win) {
        console.log('Testing Window', win, 'or', this.win)
        console.log('Current subject', subj, 'or', this.proc.subject)
        console.log('Runtime variables', this.proc.scope)
        console.log('All steps', this.steps)
        console.log('Current step', this.proc.steps[this.proc.index])
        // if nothing is retured, it will consider it a success
    })
```

You can add steps dynamically within `then` function. All steps are executes sequentially, meaning, next step will be executed when previous step is done. Therefore, it does not matter where you add steps, however, if you add it withing `then` command, they will be considered sub steps.

```js
bela
    .get('body')
    .then(function(subj, win) {
        if (subj && subj.length > 0) {
            bela
                .get('body')
                .invoke('fadeOut', 1500)
                .wait(1500)
                .invoke('fadeIn', 1500)
                .wait(1500)
        } else {
            bela.error('There is no subject to operate on')
        }
        bela.log('Finished')
    })
```

### Call once, return success

```js
bela
    .then(function(subj, win, runner) {
        console.log('Called once')
        return { success: true, msg: 'All good' } // msg param is optional
    })
````

### Call once, return error

```js
bela
    .then(function(subj, win, runner) {
        console.log('Called once')
        return { success: false, error: 'Errro message' }
    })
````
OR
```js
bela
    .then(function(subj, win, runner) {
        console.log('Called once')
        throw new Error('Error message')
    })
````

### Call recursively until success or error or timeout is reached

```js
bela
    .then(function(subj, win, runner) {
        this._counter = this._counter || 0
        this._counter++
        console.log(this._counter)
        if (this._counter >= 10) {
            return { success: true }
        } else {
            return { repeat: true }
        }
    }, { timeout: 700 }) // it will fail if tiemout is reached
```

Similar way, but with user-defined scope
```js
bela
    .then(function(subj, win, runner) {
        function func() {
            this.counter++
            console.log('Called ' + this.counter)
            if (this.counter >= 10) {
                return { success: true }
            } else {
                return { repeat: true }
            }
        }
        return func.bind({ counter: 0 })
    }, { timeout: 700 }) // it will fail if tiemout is reached
````

### Wait until promise is resolved
```js
bela
    .then(function(subj, win, runner) {
        return new Promise(function (resolve, reject) { // arrow functions might not always work here
            console.log('Called one time')
            setTimeout(() => {
                resolve()
            }, 500)

        })
    }, { timeout: 700 })
```