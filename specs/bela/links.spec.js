context("Random", () => {

    it('Collect links from various websites', () => {
        bela.custom.remove('getLinks', { silent: true })
        bela.custom.add('getLinks', {}, function (subj, options) {
            bela
                .get('a')
                .then(event => {
                    let scope = event.self.scope
                    let links = Array.from(event.subj)
                    scope.links = scope.links || []
                    // all links
                    links.forEach(el => {
                        scope.links.push(el.href)
                    })
                    bela.tag('added', links.length, 'links')
                })
        })
        bela
            .open('http://usolver.com')
            .getLinks()
            .open('http://examples.com')
            .getLinks()
            .open('https://google.com')
            .getLinks()
            .then((event) => {
                console.log('Collected links: ', event.self.scope.links)
            })
            .tag('Links displayed in the console')
    })
})