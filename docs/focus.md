# focus

Brings element to focus and sends focus event. Works only on `INPUT`, `TEXTAREA`, `BUTTON`, `SELECT` elements or elements that have `tabindex` property defined.

## Syntax

```js
bela.focus([options])
```
Does not modify the subject.

## Usage

```js
bela.focus()
bela.focus(options)
```

## Arguments

- options `object`

An object with options

| Value | Description |
| ----- | ----------- |
| force | focus even if element is not an focusable |

## Examples

```js
bela
    .get('input')
    .focus()
```