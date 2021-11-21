# blur

Blurs element and sends blur event. Works only on `INPUT`, `TEXTAREA`, `BUTTON`, `SELECT` elements or elements that have `tabindex` property defined.

## Syntax

```js
bela.blur([options])
```
Does not modify the subject.

## Usage

```js
bela.blur()
bela.blur(options)
```

## Arguments

- options `object`

An object with options

| Value | Description |
| ----- | ----------- |
| force | blur even if element is not focusable |

## Examples

```js
bela
    .get('input')
    .blur()
```