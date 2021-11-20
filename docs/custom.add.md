# custom.add

Add a custom command.

## Syntax

```js
bela.custom.add(command, [def_options], func)
```
Does not modify the subject.

## Usage

```js
bela.custom.add('login', { timeout: 10000 }, (param, options) => {} )
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
bela.custom.add('login', { timeout: 10000 }, function (param, options) {
    let pass = options.args[1]
    bela.open('http://myapp.com')
        .get('#login')
        .type(param)
        .get('#pass')
        .type(pass)
        .get('#submit')
        .click()
})

bela.login('name', 'pass')
```