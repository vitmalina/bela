context("Bela Steps", () => {
    it("Open pages from different domains", () => {
        bela
            .open('http://google.com')
            .open('http://examples.com')
            .open('http://usolver.com')
            .open('http://w2ui.com')
    })
})