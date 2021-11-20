# invoke

Invoke a method on the current subject.

## Syntax

```js
bela.invoke(method, [args])
```
Modifies the subject.

## Usage

```js
bela.invoke('next')
bela.invoke('addClass', 'myClass')
```

## Arguments

- method `string`

This method must exist on the subject. The `get`, `find`, and `closest` commands will query the DOM to find elements and remeber it as the subject. The subject could be an object returned from a custom command that is not a jQuery instance.

- args `argument` or `array` (optional)

Arguments to pass to the invoked method. If you want to pass multiple arguments, submit them in an array.

Whatever the function returns becomes a new subject

## Examples

```js
bela
    .get('#element-by-id')
    .invoke('addClass', 'myClass')
```

Multiple argumetns
```js
bela
    .get('#element-by-id')
    .invoke('addClass', ['myClass1', 'myClass2', 'myClass3'])
```