$(function () {
    let param = decodeURI(document.location.href).split('?')[1]
    let data = JSON.parse(w2utils.base64decode(param))
    // init add form
    if (data.host && data.folder) {
        initAdd()
        // show other configs
        chrome.runtime.sendMessage('bghiemgahdblmkegfooplghfihfmjjhp', {
            cmd: 'config-list',
            host: data.host
        }, (sites) => { showSites(sites) })
    } else {
        initAdd()
        chrome.runtime.sendMessage('bghiemgahdblmkegfooplghfihfmjjhp', {
            cmd: 'config-list',
            host: '*'
        }, (sites) => { showSites(sites) })
    }

    function initAdd() {
        $('#host').val(data.host)
        $('#folder').val(data.folder)
        $('#tests-url').val(data.tests || '').focus()
        $('button.save').on('click', () => {
            let url = $('#tests-url').val()
            if (url.trim() === '') {
                $('#tests-url').w2tag('Requied field', { position: 'top|bottom' })
                return
            }
            // if (url.substr(url.length - 5).toLowerCase() !== '.html') {
            //     $('#tests-url').w2tag('URL should end with ".html"', { position: 'top|bottom' })
            //     return
            // }

            chrome.runtime.sendMessage('bghiemgahdblmkegfooplghfihfmjjhp', {
                cmd: 'config-save',
                config: {
                    belaURL : $('#tests-url').val().trim(),
                    host    : $('#host').val().trim(),
                    folder  : $('#folder').val().trim(),
                    file    : $('#file').val().trim(),
                    win : {
                        x: window.screenX,
                        y: window.screenY,
                        width: window.innerWidth,
                        height: window.innerHeight
                    }
                }
            }, (sites) => {
                showSites(sites)
                if (data.host && data.folder) {
                    location = $('#tests-url').val().trim()
                }
            })
        })
        if (data.tests) {
            $('button.cancel').show().on('click', () => {
                document.location = data.tests
            })
        }
    }

    function showSites(sites) {
        if (!sites || sites.length == 0) {
            $('#sites-div').hide()
            return
        }
        $('#sites-div').show()
        let html = ''
        sites.forEach(site => {
            html += `<div class="test-suite">
                        <div>
                            <span class="label">App:</span>
                            <span class="link">
                                <!-- <a href="javascript:" onclick="window.opener.location = '${site.host}${site.folder}${site.file == '*' ? '' : site.file}'"> -->
                                    ${site.host}${site.folder}${site.file}
                                    <button class="w2ui-btn w2ui-btn-small" data-data='{ "host": "${site.host}", "folder": "${site.folder}", "file": "${site.file}" }' style="float: right;">X</button>
                                <!-- </a> -->
                            </span>
                        </div>
                        <div>
                            <span class="label">Tests:</span>
                            <span class="link">
                                <a href="${site.belaURL}">${site.belaURL}</a>
                            </span>
                        </div>
                     </div>`
        })
        $('#sites').html(html)

        $('#sites button')
            .on('click', (event) => {
                let dt = $(event.target).data('data')
                dt = typeof dt == 'string' ? JSON.parse(dt) : dt
                chrome.runtime.sendMessage('bghiemgahdblmkegfooplghfihfmjjhp', {
                    cmd: 'config-clear',
                    host: dt.host,
                    folder: dt.folder,
                    file: dt. file
                }, (sites) => { showSites(sites) })
            })
    }
})