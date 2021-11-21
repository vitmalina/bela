# custom.remove

Remove a custom command.

## Syntax

```js
bela.custom.remove(command, [options])
```
Does not modify the subject.

## Usage

```js
bela.custom.remove(command)
bela.custom.remove(command, options)
```

## Arguments

- command `string`

A name for the new command.

- options `object`

Options. The only option that is supported is `{ silent: true }`, which will not raise an error if command does not exists


## Examples

```js
bela.custom.remove('login', { silent: true })
```