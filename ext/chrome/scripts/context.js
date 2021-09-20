// relay messages from page (Bela Runner) to devtools
window.addEventListener('message', (event) => {
    let data = event.data
    if (typeof data == 'string') {
        try { data = JSON.parse(data) } catch (e) { data = {} }
    }
    //
    try {
        chrome.runtime.sendMessage(data)
    } catch (e) {
        console.log("Context page: ", e)
    }
})
let manifest
let meta = document.querySelectorAll('head meta[name="bela-manifest"]')
if (meta.length > 0) {
    let loc = document.location
    manifest = meta[0].content
    if (['http', 'https'].indexOf(manifest.split(':')[0]) == -1) {
        manifest = loc.protocol + '//' + loc.host + manifest
    }
}
// page loaded
chrome.runtime.sendMessage({ cmd: 'page-ready', manifest })