# tag

Tags previous command with a message.

## Syntax

```js
bela.tag(text)
```
Does not modify the subject.

## Usage

```js
bela.tag(text)
```

## Arguments

- text `string`

Text for the previous command message.

## Examples

```js
bela
    .begin('Group 1')
        .tag('All good')
    .end()
```