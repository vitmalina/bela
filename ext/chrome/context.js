init()
// page loaded
chrome.runtime.sendMessage({ cmd: 'page-ready', manifest: getManifest() })

function init() {
    // relay messages from page (Bela Runner) to devtools
    window.addEventListener('message', (event) => {
        let data = event.data
        if (typeof data == 'string') {
            try { data = JSON.parse(data) } catch (e) { data = {} }
        }
        try {
            chrome.runtime.sendMessage(data)
        } catch (e) {
            console.log("Context page error: ", e)
        }
    })
}

function getManifest() {
    let manifest
    let meta = document.querySelectorAll('head meta[name="bela-manifest"]')
    if (meta.length > 0) {
        let loc = document.location
        manifest = meta[0].content
        // also see runner.js getManifest()
        if (['http', 'https'].indexOf(manifest.split(':')[0]) == -1) {
            if (manifest.substr(0, 1) == '/') {
                manifest = loc.protocol + '//' + loc.host + manifest
            } else {
                let tmp = loc.pathname.substr(1).split('/') // remove leading slash
                tmp.pop()
                manifest = loc.protocol + '//' + loc.host + (tmp.length > 0 ? '/' + tmp.join('/') : '') + '/' + manifest
            }
        }
    }
    return manifest
}