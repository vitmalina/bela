# end

End a group of commands.

## Syntax

```js
bela.end()
```
Does not modify the subject.

## Usage

```js
bela.end()
```


## Examples

```js
bela
    .begin('Group 1')
        .get('div')
        .click()
    .end()
```