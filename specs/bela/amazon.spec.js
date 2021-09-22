context("Random", () => {
    it("Amazon actions", () => {
        bela
            .begin('Amazon', { expanded: true })
                .open('https://amazon.com/', {  }).tag('amazon.com')
                .get('#twotabsearchtextbox')
                .type('{selectall}cheapest cat treats', { delay: 100 })
                .get('[type=submit]:eq(0)')
                .click()
                .wait('@reload')
            .end()
    })
})