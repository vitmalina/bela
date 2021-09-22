context('Random', () => {
    it ('Google actions', () => {
        bela
            .begin('Google actions', { expanded: true })
                .open('http://google.com')
                .get('input[aria-label=Search]')
                .type('{selectall}I need to know {enter}{selectall}all about software testing{enter}')
                .get('input[value="Google Search"]')
                .click()
                .wait('@load')
                .get('a')
            .end()
    })
})