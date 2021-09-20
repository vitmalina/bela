// This file runs in the background
// let listeners = []
// let runnerStates = {}

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

// Network Listeners
// chrome.webRequest.onBeforeRequest.addListener(
//     (req) => {
//         listeners.forEach((listen) => {
//             if (listen.tabId == req.tabId && (listen.type == req.type || listen.type == '*')) {
//                 // console.log('req', req)
//                 getActiveTab((tab) => {
//                     chrome.tabs.sendMessage(tab.id, {
//                         type: 'network',
//                         phase: 'before',
//                         request: req
//                     })
//                 })
//             }
//         })
//         return { cancel: false }
//     },
//     { urls: ["<all_urls>"] },
//     ["blocking"]
// )


// function getUUID() {
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//         var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
//         return v.toString(16);
//     })
// }