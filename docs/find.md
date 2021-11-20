# find

Find elements within current subject that match the selector. This command can only be used after `.get()` command.

## Syntax

```js
bela.find(selector, [options])
```
Modifies the subject

## Usage

```js
bela.get('#form')
    .find('input#name')
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
bela.get('#form')
    .find('input#name')
```

## Other jQuery methods

Bela directly maps only 3 jQuery methods
- [get](get.md#get) - to get (find) element on the page
- [find](find.md#find) - to find a closest child relative to current element
- [closest](closest.md#closest) - to find a closes parent relative to current element

You can use other jQuery methods. See [invoke](invoke.md#invoke) command.