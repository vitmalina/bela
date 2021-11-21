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
bela.should(param, value)
bela.should(param, value, options)
bela.should(multiple)
bela.should(multiple, options)
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

- value `string`

Value of the assertion.

- options `object`

An object of options.

- multiple `object`

An object with multiple assertions.

## Examples

### Common assertions

```js
bela.open('http://google.com')
    .get('a')
    .should({
        'have.length': 10,
        'contain.text': 'a',
        'have.css': {
            opacity: 1,
            display: 'flex'
        }
    })
```

### Custom assertions with chai

Chai assertion library is already available. You can use all its chains `expect`, `assert`, and `should`, as well as `chai-string` lirbrary. Similar as previous test:

```js
bela.open('http://google.com')
    .get('a')
    .then(event => {
        let error = false
        try {
            chai.expect(event.subj.length).to.be.greaterThan(10)
            chai.expect(event.subj.text()).to.contain('a')
            chai.expect(event.subj.css('opacity')).to.equal('1')
            chai.expect(event.subj[0].style.display).to.equal('flex')
        } catch (e) {
            error = true
            bela.error('Assertions fail', { assertion: true, msg: e.message })
        }
        if (!error) {
            bela.log('All good', { assertion: true })
        }
    })
```

### Other examples
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