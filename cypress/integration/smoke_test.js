describe('Smoke test for JavaScript training website', () => {

    before(() => {
        console.clear()
        cy.visit('/')
    })

    it('Check Title', () => {
        cy.title().should('eq', 'Javascript Training alongwith Cypress Testing') // Fulltext
        cy.title().should('contains', 'Javascript')  //Partial text
        
        cy.get('h1').should('contain', 'JS')
        
    }) 

})