# custom.overwrite

Overwrites a command.

## Syntax

```js
bela.custom.overwite(command, [def_options], func)
```
Does not modify the subject.

## Usage

```js
bela.custom.overwite(command, func)
bela.custom.overwite(command, def_options, func)
```

## Arguments

- command `string`

A name for the new command.

- def_options `object`

Default options.

- func `function`

Custom function that will be called when command is engaged

## Examples

```js
bela.custom.overwrite('click', function (button, options = {}) { // cannot be arrow function, as it has not this
    let subj = this.proc.subject
    if (subj.hasClass('button')) {
        bela.log('Custom click')
        if (subj.is(':disabled')) {
            return { success: false, error: 'Button is disabled.'}
        }
        return { success: true, msg: 'All good', details: 'Button is clicked' }
    } else {
        // original click function
        return options.originalFn(button, options)
    }
})
```