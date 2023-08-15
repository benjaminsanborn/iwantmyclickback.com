describe('empty spec', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('displays the resources text', () => {
        cy.get('h1')
            .contains('iwantmyclickback.com');
    })
    it('renders the form', () => {
        cy.get('form')
            .should('be.visible')
    })
})