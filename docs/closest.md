# closest

Find the closest parent that matches the selector, starting at the current subject. This command can only be used after `.get()` command.

## Syntax

```js
bela.closest(selector, [options])
```
Modifies the subject.

## Usage

```js
bela.closest(selector)
bela.closest(selector, options)
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
    .closest('div.parent')
```

## Other jQuery methods

Bela directly maps only 3 jQuery methods
- [get](get.md#get) - to get (find) element on the page
- [find](find.md#find) - to find a closest child relative to current element
- [closest](closest.md#closest) - to find a closes parent relative to current element

You can use other jQuery methods. See [invoke](invoke.md#invoke) command.