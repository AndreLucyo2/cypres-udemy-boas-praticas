describe('Hardcoded assertion bad practice', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**',
      { fixture: 'stories' }
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })

  it('searches alternativa 1', () => {
    //Se adapta a cada alteração nas fixtures
    cy.fixture('stories').then(({ hits }) => {
      cy.search('cypress.io');
      cy.wait('@getStories');
      cy.get('.table-row')
        .as('tableRows')
        .should('have.length', hits.length);

      //valida coluna e valor: fica dinamico e o teste se adapta 
      hits.forEach((hit, index) => {
        cy.get('@tableRows')
          .eq(index)
          .should('contain', hit.title)
          .should('contain', hit.author)
          .should('contain', hit.num_comments)
          .should('contain', hit.points)
      });

    });

  })

  //ja inicia com a fixture carregada evita um .then
  const { hits } = require('../../fixtures/stories');

  it('searches alternativa 2', () => {

    cy.search('cypress.io');
    cy.wait('@getStories');

    cy.get('.table-row')
      .as('tableRows')
      .should('have.length', hits.length);

    //valida coluna e valor: fica dinamico e o teste se adapta 
    hits.forEach((hit, index) => {
      cy.get('@tableRows')
        .eq(index)
        .should('contain', hit.title)
        .should('contain', hit.author)
        .should('contain', hit.num_comments)
        .should('contain', hit.points)
    });
  })

})
