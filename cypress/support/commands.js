// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('search', term => {
    cy.get('input[type="text"]')
        .should('be.visible')
        .clear()
        .type(`${term}{enter}`)
})

Cypress.Commands.add('assertResults', () => {
    cy.get('.table-row').then(rows => {
        expect(rows.length).to.be.at.least(1)
    })
})

Cypress.Commands.add('randomlyTogglePurchaseAgreement', () => {
    if (Math.random() > 0.5) {
        cy.get('#agree')
            .click()
    }
})

Cypress.Commands.add('updateDestination', (data) => {
    cy.get('#destination_name')
        .clear()
        .type(data.name)
    cy.get('#destination_description')
        .clear()
        .type(data.description)
    cy.get('input[type="submit"]')
        .click()

})

