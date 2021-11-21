# drag

Emulate user dragging an element. It will send a series of mouse events consistent with dragging operation.

## Syntax

```js
bela.drag(options)
```
Does not modify the subject.

## Usage

```js
bela.drag(options)
```

## Arguments

- options `object`

An object with options

| Value | Description |
| ----- | ----------- |
| divX  | drag by x coordinate |
| divY  | drag by y coordinate |
| step  | step (if stepX and stepY is not defined) |
| stepX | x step |
| stepY | y step |
| delay | delay between events |
| ...   | all other options will be sent to mouse events |

## Examples

```js
bela
    .get('div')
    .drag({ divX: 100, divY: 100, step: 10, delay: 50 })
```