# get

Get one or more DOM elements by a selector or an alias.

## Syntax

```js
bela.get(selector, [options])
```
Modifies the subject

## Usage

```js
bela.get('#element-by-id')
bela.get('button:contains(Save)')
bela.get('@button')
```

## Arguments

- selector `string`

A selector to filter DOM elements. Under the hood this command calls jQuery and the selector matches exactly as in `$(...)`.

- options `object`

| Option | Default | Description |
| ------ | ------- | ----------- |
| timeout | 4000 | Timeout for the command to complete |

## Examples

```js
bela
    .get('#element-by-id')
    .click()
```

## Other jQuery methods

Bela directly maps only 3 jQuery methods
- `get` - to get (find) element on the page
- `find` - to find a closest child relative to current element
- `closest` - to find a closes parent relative to current element

You can use other jQuery methods. See [invoke](invoke.md#invoke) command.