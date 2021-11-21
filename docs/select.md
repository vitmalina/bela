# select

Selects an option from a HTML select control. Sends `input` and `change` events.

## Syntax

```js
bela.select(value, [options])
```
Does not modify the subject.

## Usage

```js
bela.select(value)
bela.select(value, options)
```

## Arguments

- value `integer` or `string`

New value for the select control. If it is an integer, then it is `selectedIndex`. If it is text, then it is value from the item.
```html
<select>
    <option value="[text]">...</option>
    ...
</select>
```

- options `object`

An object with options

| Value | Description |
| ----- | ----------- |
| multiple | if true, will seelect all subjects |
| force | select even if element is not focusable |

## Examples

```js
bela
    .get('select')
    .select(0) // selects first element
```