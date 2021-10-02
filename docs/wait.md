# wait

wait for something to happen

## Syntax

```js
bela.wait(time)
bela.wait('page.ready')
bela.wait('page.reload')
bela.wait('network', route)
bela.wait(selector, state)
```
Does not modify the subject

## Usage

```js
bela.wait(100)
bela.wait('page.reload') // waits for actual page reload
bela.wait('page.ready') // waits for dom to be ready
bela.wait('body', 'to.be.visible')
bela.wait('network', '**/link/to/path/*.js') // uses minimatch libaray, see https://github.com/motemen/minimatch-cheat-sheet
````

## Arguments

- time `number`

Number of milliseconds to wait

- selector `string`

A selector to filter DOM elements.

- state `string`

State to wait for
| Name | Actions |
| ---- | ------- |
| `to.have.class` | Wait until the elemnt has the specified className |
| `to.not.have.class` | Wait until the element does not have className |
| `to.be.visible` | Wait until the element exists and css properties `display` is not `none` and `opacity` is `1` |
| `to.be.hidden` | Wait until the element either does not exists or has css properties `display` equal `none` or  `opacity` is `0`
| `to.exist` | Wait until the element exists in DOM |
| `to.not.exist` | Wait until the element is removed from DOM |

## Example

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

Same as previous example

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
    .wait('pare.reload')
```

### Wait for network routes

Simple

```js
bela
    .bela.wait('network', '**/link/to/path/*.js?*')
```
 Or

```js
bela
    .bela.wait('network', { method: 'POST', url: '**/link/to/path/*.js?*' })
```

Mutliple

```js
bela
    .bela.wait('network', [
        { method: 'POST', url: '**/link/to/path/*.js?*' },
        { method: 'POST', url: '**/link/to/other/path/*.js?*' }
    ])
```

Or

```js
bela
    .bela.network({
        '@path1': { method: 'POST', url: '**/link/to/path/*.js?*' },
        '@path2': { method: 'POST', url: '**/link/to/other/path/*.js?*' }
    })
    ...
    .wait('network', ['@path1', '@path2'])
```
