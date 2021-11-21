# click

Emulate mouse click. It will send a series of events `mouseover`, `mouseenter`, `mousemove`, `mousedown`, `mouseup`, `click`, and in case of a double click, last three will be sent twice.

## Syntax

```js
bela.click(position)
bela.click(options)
```
Does not modify the subject.

## Usage

```js
bela.click()
bela.click('center')
bela.click({ double: true })
bela.click({ multiple: true })
```

## Arguments

- position `string`

Where to click on the element. Default is `center`, but can also be

| Value | Description |
| ----- | ----------- |
| left           | x=`1px`, y=`height/2` |
| right          | x=`width-1px`, y=`height/2`|
| top            | x=`width/2`, y=`1px`|
| bottom         | x=`width/2`, y=`height-1px`|
| top-left       | x=`width/2`, y=`1px`|
| top-right      | x=`width/2`, y=`height-1px`|
| bottom-left    | x=`wdith-1px`, y=`1px`|
| bottom-right   | x=`width-1px`, y=`height-1px`|

or you can pass coordinates inside `options`

- options `object`

An object with options

| Value | Description |
| ----- | ----------- |
| button | `0` (default) - left, `1` - middle, `2` - right |
| x | x offset relative to the element |
| y | y offset relative to the element |
| position | position of click, calculates x,y if specified |
| delay | delay between clicks if `multiple` is true |
| multiple | if `false` (default) then will only click first selected element |
| ctrlKey | true/false if ctrl key is pressed |
| metalKey | true/false if command key is pressed |
| shiftlKey | true/false if shift key is pressed |
| altKey | true/false if alt key is pressed |

## Examples

### Click all with a delay

```js
bela
    .get('a')
    .click({ multiple: true, delay: 500 })
```