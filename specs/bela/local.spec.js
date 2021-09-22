context("Bela Steps", () => {
    it ('Localhost actions', () => {
        bela
            .begin('Open Index Page', { expanded: true })
                .open('http://localhost/w2ui/test/index.html')
                .get('a')
                .then((event) => {
                    event.subj.each((ind) => {
                        if (ind > 1) return
                        bela
                            .begin('Open: ' + event.subj[ind].innerHTML)
                                .open(event.subj[ind].href)
                                .wait(101)
                                .begin('Check 2')
                                    .wait(102)
                                    .wait(103)
                                    .wait(104)
                                .end()
                                .begin('Check 3')
                                    .wait(105)
                                    .wait(106)
                                .end()
                                .begin('Check 4')
                                    .wait(105)
                                    .wait(108)
                                .end()
                            .end()
                    })
                    bela
                        .begin('Back to index.html', { expanded: true })
                        .open('index.html')
                        .wait(100)
                    .end()
                }).tag('Make sure it works')
                .wait(500)
                .open('index.html')
            .end()
    })
})