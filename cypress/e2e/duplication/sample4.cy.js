describe('Code duplication bad practice - multiple checks', () => {
  beforeEach(() => {
    cy.visit('https://bit.ly/2XSuwCW')
  })
 
  it('checks all checkboxes from a specific element fieldset', () => {
    cy.get('fieldset div input[type="checkbox"]').check();//marca todos os checks retornados no seletor
  })
 
  // it('checks all checkboxes from a specific fieldset', () => {
  //   cy.get('#friend').check()
  //   cy.get('#publication').check()
  //   cy.get('#social-media').check()
  // })
  
})
