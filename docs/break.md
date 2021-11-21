# berak

Exit current group of commands.

## Syntax

```js
bela.berak([name])
```
Does not modify the subject.

## Usage

```js
bela.berak()
bela.break(namem)
```

## Arguments

- name `string`

Name of the group to break.


## Examples

```js
bela
    .begin('Group 1')
        .then(event => {
            bela.break('Group 1')
        })
        .wait(10)
    .end()
```

```js
bela
    .then('Group 1', event => {
        bela
            .then(event => {
                bela.break('Group 1')
            })
            .wait(10)
    })
    .wait(11)
```