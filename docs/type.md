# type

Emulate user typing on the keyboard. It will send a series of events `keydown`, `keypress`, `keyup`, `input`. You can type on any control, not necesseraly `input` or `textarea`.

## Syntax

```js
bela.type(text, [options])
```
Does not modify the subject.

## Usage

```js
bela.type(text)
bela.type(text, options)
```

## Arguments

- text `string`

Text to type. There is a set of meta characters that you can send by sorrunding them with `{` and `}`

| Value | Description |
| ----- | ----------- |
| XX             | where XX is a key code |
| selectall      | selects all text in the control |
| tab            | code(9) |
| enter          | code(13) |
| del            | code(6) |
| backspace      | code(8) |
| insert         | code(45) |
| shift          | code(16) |
| alt            | code(18) |
| ctrl           | code(17) |
| meta           | code(17) |
| left           | code(37) |
| leftarrow      | code(37) |
| up             | code(38) |
| uparrow        | code(38) |
| right          | code(39) |
| rightarrow     | code(39) |
| down           | code(40) |
| downarrow      | code(40) |
| pageup         | code(33) |
| pagedown       | code(34) |
| esc            | code(27) |
| escape         | code(27) |
| end            | code(35) |
| home           | code(36) |

- options `object`

An object with options

| Value | Description |
| ----- | ----------- |
| parse | parse meta characters surrounded by {} |
| delay | delay between clicks if `multiple` is true |
| password | if it is a password, it will not same password in the logs |
| ctrlKey | true/false if ctrl key is pressed |
| metalKey | true/false if command key is pressed |
| shiftlKey | true/false if shift key is pressed |
| altKey | true/false if alt key is pressed |

## Examples

```js
bela
    .get('input')
    .type('some text', { multiple: true, delay: 50 })
```

### Type something wrapped in `{` `}`

```js
bela
    .get('input')
    .type('Wrapped {123}text{125}')
```