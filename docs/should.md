# should

Make assertions about the subject.

## Syntax

```js
bela.should(param, [options])
bela.should(multiple)
```
Does not modify the subject.

## Usage

```js
// operates w/o current subject
bela.should('exist', '#selector')
bela.should('not.exist', '#selector')
// operate over the current subject
bela.should('have.text', 'Click')
bela.should('have.css', {
    display: 'block',
    opacity: 1
})
// mutliple assertions
bela.should({
    'have.length', 1,
    'contain.text': 'Click',
    'not.contain.text.1': 'some',   // adding .XXX will allow to process multiple commands of same name
    'not.contain.text.2': 'other',
    'have.class': 'active',
    'not.have.class': 'disabled',
    'have.attr': {
        name: 'custom_name',
        id: 'custom'
    }
})
```

## Arguments

- param `string`

Name of the assertion.

| Name | Actions |
| ---- | ------- |
| `exist`           | Element exists, requires a selector |
| `not.exist`       | Element does not exists requires a selector |
| `be.visible`      | Element is visible |
| `be.hidden`       | Element is hidden |
| `have.length`     | Count of found elements |
| `have.value`      | Element has specified value |
| `not.have.value`  | Element does not have specified value |
| `have.class`      | Element has class |
| `not.have.class`  | Element does not have class |
| `have.text`       | Element has exact text |
| `not.have.text`   | Element does not have exact text |
| `contain.text`    | Element contains text |
| `not.contain.text`| Element does not contain text |
| `have.css`        | Element has specified css |
| `have.attr`       | Element has specified attributes |
| `have.prop`       | Element has specified properties |

- options `object`

An object of options.

- multiple `object`

An object with multiple assertions.

## Examples

```js
bela.open('http://google.com')
    .get('a')
    .should({
        'have.length': 10,
        'contain.text': 'a',
        'have.css': {
            display: 'flex',
            opacity: 1
        }
    })
```