# begin

Start a group of commands.

## Syntax

```js
bela.begin(name, [options])
```
Does not modify the subject.

## Usage

```js
bela.begin(name)
bela.begin(name, options)
```

## Arguments

- name `string`

Name to save subejct as.

- options `object`

An array of options, default values are
```js
{
    skip: false,     // skip entire block
    expanded: false  // expand block in UI
}
```

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