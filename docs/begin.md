# begin

Start a group of commands

## Syntax

```js
bela.begin(name, options)
```
Does not modify the subject.

## Usage

```js
bela.begin('Group 1')
```

## Arguments

- name `string`

Name to save subejct as.

- options `object`

An array of options, default values are `{ expanded: false, skip: false, autorun: false }`

## Examples

```js
bela
    .begin('Group 1', { expanded: true })
        ...
        .get('div')
        .click()
        ...
    .end()
```