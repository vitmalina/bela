# wait

wait for something to happen

## Syntax

```js
bela.wait(time)
bela.wait(selector, state)
bela.wait(route)
```
Does not modify the subject

## Usage

```js
bela.wait(100)
bela.wait('body', 'to.be.visible')
bela.wait('@load')
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
| `to.be.visible` | Wait until element exists and css properties `display` is not `none` and `opacity` is `1` |
| `to.appear` | Same as `to.be.visible` |
| `to.be.hidden` | Wait until element either does not exists or has css properties `display` equal `none` or  `opacity` is `0`
| `to.disappear` | Same as `to.be.hidden` |
| `to.exist` | Wait until element exists in DOM |
| `to.be.added` | Same as `to.exist` |
| `to.not.exist` | Wait until element is removed from DOM |
| `to.be.removed` | Same as `to.not.exist` |

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

### Wait for routes

Wait for page load

```js
bela
    .open('http://test.com')
    .wait('@load')
```
