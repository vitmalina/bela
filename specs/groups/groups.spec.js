context('Groups', () => {
    it("Group commands in different way", () => {
        bela
            .begin('Group name')
                .wait(100)
                .wait(101)
                .wait(102)
            .end()
            .begin('Skip this group', { skip: true })
                .wait(103)
                .wait(104)
                .wait(105)
            .end()
            .begin('Nested group', { expanded: true })
                .wait(106)
                .begin('Group inside group')
                    .wait(107)
                    .wait(108)
                .end().tag('Close after run')
                .begin('Group with a break', { expanded: true })
                    .wait(109)
                    .wait(110)
                    .break()
                    .error('If you get here, it will be an error')
                .end()
            .end()
            .wait(111)
    })

    context('Nested 1', () => {
        it('2 steps', () => {
            bela
                .wait(100)
                .wait(101)
        })

        it('3 steps', () => {
            bela
                .wait(100)
                .wait(101)
                .wait(102)
        })
    })

    context('Nested 2', () => {
        it('2 steps', () => {
            bela
                .wait(100)
                .wait(101)
        })

        it('3 steps', () => {
            bela
                .wait(100)
                .error('Test failed')
                .wait(101)
                .wait(102)
        })
    })

})
