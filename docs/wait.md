# wait

Wait for something to happen.

## Syntax

```js
bela.wait(time)
bela.wait('page.ready')
bela.wait('page.reload')
bela.wait('network', route)
bela.wait(selector, state)
```
Does not modify the subject.

## Usage

```js
```

## Arguments

- time `number`

Number of milliseconds to wait

- selector `string`

A selector to filter DOM elements.

- state `string`

State to wait for

| Name | Actions |
| ---- | ------- |
| `to.exist` | Wait until the element exists in DOM |
| `not.to.exist` | Wait until the element is removed from DOM |
| `to.be.visible` | Wait until the element exists and css properties `display` is not `none` and `opacity` is `1` |
| `to.be.hidden` | Wait until the element either does not exists or has css properties `display` equal `none` or  `opacity` is `0`
| `to.have.class` | Wait until the elemnt has the specified className |
| `not.to.have.class` | Wait until the element does not have specified className |
| `to.have.text` | Wait until the element inner text exactly as specified |
| `not.to.have.text` | Wait until the element inner text is not as specified |
| `to.contain.text` | Wait until the element contains specified text |
| `not.to.contain.text` | Wait until the element does not contain specified text |

- route `string` | `array` | `object`

If it is a string, it is the url of the route (uses [minimatch](https://github.com/motemen/minimatch-cheat-sheet) library for url matching). If it is an array, it is an array of strings or objects for url matching. If it is an object, it can be of the following structure:
```js
{
    url: 'string',                   // uses minimatch library
    method: '*|GET|POST|PUT|DELETE', // or any other
    count: 1                         // how many times it should be loaded
}

```

## Examples

```js
bela.wait(100)
bela.wait('page.reload') // waits for actual page reload
bela.wait('page.ready') // waits for dom to be ready
bela.wait('body', 'to.be.visible')
bela.wait('network', '**/link/to/path/*.js') // uses minimatch library
```

### Wait XXX milliseconds

Wait until page is hidden and then shown

```js
bela
    .get('body')
    .invoke('fadeOut', 1500)
    .wait(1500)
    .invoke('fadeIn', 1500)
    .wait(1500)
```

### Wait for DOM change

Same as previous example, but without explicit wait

```js
bela
    .get('body')
    .invoke('fadeOut', 1500)
    .wait('body', 'to.be.hidden')
    .invoke('fadeIn', 1500)
    .wait('body', 'to.be.visible')
```

### Wait for page reload

Wait for page load

```js
bela
    .open('http://test.com')
    .wait('page.reload')
```

### Wait for network routes

Simple

```js
bela.wait('network', '**/link/to/path/*.js?*')
```
 Or

```js
bela.wait('network', { method: 'POST', url: '**/link/to/path/*.js?*' })
```

Mutliple

```js
bela
    .wait('network', [
        { method: 'POST', url: '**/link/to/path/*.js?*' },
        { method: 'POST', url: '**/link/to/other/path/*.js?*' }
    ])
```