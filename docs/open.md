# open

Navigate to the specified URL.

## Syntax

```js
bela.open(url, [options])
```
Does not modify the subject

## Usage

```js
bela.open('http://localhost/app/index.html')
bela.open('http://localhost/app/index.html?param=val', { force: true }) // if url is the same, force reload
bela.open('index.html')    // previous host and folder
bela.open('/index.html')   // previous host
bela.open('#some-route')   // previous host, folder and file, just a different hash
````

## Arguments

- url `string`

If the URL is the same as previously opened, the open command will do nothing. To force it to reload the page, pass `{ force: true }` as one of the options.

- options `object`

| Option | Default | Description |
| ------ | ------- | ----------- |
| force | false | Forces to reload the page even if user is on this page already |
| reload | false | Alias for force |
| timeout | 15000 | Timeout for the command to complete |

## Examples

Open a url

```js
bela.open('https://amazon.com')
```

Open a url saved in a variable

```js
bela
    .let('url',' https://amazon.com')
    .open('@url')
```