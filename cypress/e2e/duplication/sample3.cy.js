describe('Code duplication bad practice - repetitive actions and assertions', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })

    //busca pelo mesmo termo 3 vezes usando o lodash :  https://lodash.com/
    it('searches for the same term 3 times', () => {

      Cypress._.times(3,()=>{
        cy.searchCmd('cypress.io')
        cy.get('.table-row')
          .its('length')
          .should('be.at.least', 1);
      });
    })

  // //busca pelo mesmo termo 3 vezes
  // it('searches for the same term 3 times', () => {
  //   cy.search('cypress.io')

  //   cy.get('.table-row')
  //     .its('length')
  //     .should('be.at.least', 1)

  //   cy.search('cypress.io')

  //   cy.get('.table-row')
  //     .its('length')
  //     .should('be.at.least', 1)

  //   cy.search('cypress.io')

  //   cy.get('.table-row')
  //     .its('length')
  //     .should('be.at.least', 1)
  // })
  
})
