# trigger

Trigger an event on the subject

## Syntax

```js
bela.trigger(event, [options])
bela.trigger(events, [options])
```
Does not modify the subject.

## Usage

```js
bela.trigger(event)
bela.trigger(event, options)
bela.trigger(events)
bela.trigger(events, options)
```

## Arguments

- event `string`

An event to trigger.

- events `array`

An array of events to trigger.

- options `object`

An object with options (same as for `bela.click`)

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

```js
bela
    .get('div')
    .trigger(['change', 'input'])
```