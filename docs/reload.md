# reload

Reloads current page

## Syntax

```js
bela.reload([options])
```
Does not modify the subject.

## Usage

```js
bela.reload()
```

## Arguments

- options `object`

| Option | Default | Description |
| ------ | ------- | ----------- |
| timeout | 15000 | Timeout for the command to complete |

## Examples

Realod current page, same as open with `{ reload: true }`

```js
bela.realod({ timeout: 10000 })
```