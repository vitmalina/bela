context("Bela Steps", () => {
    it("Reload pages", () => {
        bela
            .open('http://w2ui.com/web/docs/1.5/')
            .reload()
            .get('a:contains(Home)')
            .click()
            .wait('@load')
            .log('After page reloads')
    })
})