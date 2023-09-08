/// <reference types ="Cypress" />
describe('Browser testing bad practice - anchor href', () => {
  beforeEach(() => {
    cy.visit('https://notes-serverless-app.com')
  })

  it('directs the user to the login page when clicking the login link', () => {
    //verificar que o elemento contem certo atributo e não contem certo atributo.
    cy.contains('.nav a', 'Login')
      .should('have.attr', 'href', '/login')
      .and('not.have.attr', 'target');
  })

})
