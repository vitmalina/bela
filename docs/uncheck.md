# unheck

Uncheck the checkbox. It sends `input` and `change` events, but not click.

## Syntax

```js
bela.unheck([options])
```
Does not modify the subject.

## Usage

```js
bela.unheck([options])
```

## Arguments

- options `object`

An object with options

| Value | Description |
| ----- | ----------- |
| multiple | unheck every subject |
| force | unheck even if element is not an checkbox |

## Examples

```js
bela
    .get('input')
    .unheck() // w/o clicking it
```