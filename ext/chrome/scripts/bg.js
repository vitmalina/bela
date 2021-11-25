// This file runs in the background
if (chrome.runtime) {
    chrome.runtime.onMessage.addListener(processMessage)
    chrome.runtime.onMessageExternal.addListener(processMessage)
}

// Extention button
if (chrome.browserAction) {
    chrome.browserAction.onClicked.addListener(() => {
        getActiveTab((tab) => {
            // send to content page, so it can send back with proper location
            console.log("EXTERNAL button")
            chrome.tabs.sendMessage(tab.id, { cmd: 'ext-button' })
        })
    })
}

function processMessage(request, sender, callback) {
    // console.log("BELA (BG): Message Received", request, sender)
    switch (request.cmd) {
        case 'ping': {
            console.log('Message Received', request, sender)
            break
        }
    }
    if (typeof callback == 'function') callback(sender.tab ? sender.tab.id : sender.id)
}

function getActiveTab(callback) {
    chrome.tabs.query({ active: true, currentWindow: true}, (tabs) => {
        callback(tabs[0])
    })
}