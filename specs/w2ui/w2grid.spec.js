context("w2grid", () => {

    it("Grid and form actions", () => {
        bela
            .begin('Spec 1', { expanded: true })
                .open('http://localhost/')
                .open('http://localhost/w2ui/test/grid.html')
                .grid('grid')
                .click(2)
                .open('http://localhost/w2ui/test/form.html')
                .get('#tabs_form_tabs_tab_tab1')
                .click()
                .formFill('#form', {
                    'field.textarea': 'Some text area',
                    'field.date': '1/1/2021',
                    'field.time': '10:40pm',
                    'field.color': '#ffffff',
                    'field.list': { index: 0 }
                })
                .error('some')
                .log('DONE')
                // .open('http://google.com/search')
            .end()
    })

    // bela
    // .begin('Grid Actions', { expanded: true, autorun: true })
    //     .open('/w2ui/test/grid.html')
    //     .if('div.w2ui-grid', (el, win, runner) => {
    //         el.css({ border: '1px solid gray'})
    //     })
    //     .wait(3000)
    //     .get('div.w2ui-grid')
    //     .then((el, win, runner) => {
    //         el.css({ border: '1px solid red'})
    //     })
    //     .grid('grid')
    //     .search('All Fields', 'vit')
    //     .search('Last Name', 'Rene')
    //     .open('/w2ui/test/form.html')
    //     .formFill('#form', {
    //         'field.textarea': 'Some text area',
    //         'field.date': '1/1/2021',
    //         'field.time': '10:40pm',
    //         'field.color': '#ffffff'
    //     })
    // .end()

    // bela
    // .begin('Generic Test Page', { expanded: true, autorun: false })
    //     .wait(10)
    //     .wait(12)
    //     .wait(16)
    //     .begin('Context 1', { expanded: true })
    //         .wait(105)
    //         .wait(150)
    //         .wait(102)
    //         // .pause()
    //         .wait(101)
    //         .wait(102)
    //         .wait(101)
    //         .begin('Context 2', { expanded: true })
    //             .open('buttons.html')
    //             .wait(110)
    //             .wait(160)
    //             .wait(100)
    //         .end()
    //         // .get('unreal')
    //         .wait(101)
    //         .wait(100)
    //     .end()
    //     .wait(102)
    //     .wait(101)
    //     .wait(102)
    //     .wait(101)
    //     .wait(102)
    //     .wait(101)
    // .end()
    // .wait(10)
    // .wait(102)
    // .wait(101)
    // .wait(102)
    // .wait(101)
})