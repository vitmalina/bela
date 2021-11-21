# clear

Clear an input

## Syntax

```js
bela.clear([options])
```
Does not modify the subject.

## Usage

```js
bela.clear()
bela.clear(options)
```

## Arguments

- options `object`

An object with options

| Value | Description |
| ----- | ----------- |
| multiple | clear every subject |
| force | clear even if element is not an input |

## Examples

```js
bela
    .get('input')
    .clear()
```