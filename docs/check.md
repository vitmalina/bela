# check

Check the checkbox. It sends `input` and `change` events, but not click.

## Syntax

```js
bela.check([options])
```
Does not modify the subject.

## Usage

```js
bela.check()
bela.check(options)
```

## Arguments

- options `object`

An object with options

| Value | Description |
| ----- | ----------- |
| multiple | check every subject |
| force | check even if element is not an checkbox |

## Examples

```js
bela
    .get('input')
    .check() // w/o clicking it
```