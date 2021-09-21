# if

execute a function if dom element exists

## Syntax

```js
bela.if(selector, func)
```
Does not modify the subject

## Usage

```js
bela.if(function (subj, win, runner) {
    // any js code
})
````

## Arguments

- selector `string`

A selector to filter DOM elements.

- func `function`

A JavaScript function to execute. It can be a regular or an arrow function. If it is a regular function it will have `this` context point to the BelaRunner that executes commands (same as the third argument). If it is an arrow function, then `this` variable will be undefined.

## Example

This command is intended for clean ups. Use it when you need to perform some action on the page that is irrelevant for test success or failure.

```js
bela
    .if('#screen-lock', (el) => {
        el.remove()
    })
```
