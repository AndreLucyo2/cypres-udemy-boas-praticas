/// <reference types="Cypress" />
import { faker } from '@faker-js/faker'

describe('Flaky tests bad practice', () => {
  beforeEach(() => {

    //Moca a resposta estatica na pasta fixture
    cy.intercept('GET',
      '**/search**',
      { fixture: 'stories.json'} //desacoplando do backend, injeta o objeto de retorno .json fixo que a API retornaria
    ).as('getStories')

    cy.visit('https://wlsf82-hacker-stories.web.app')

    cy.wait('@getStories');
  })

  //Executa a consulta 10 vezes
  Cypress._.times(10, () => {
    it('shows a max of 5 buttons for the last searched terms', () => {

      //faz 5 buscas 
      Cypress._.times(6, () => {
        cy.search(faker.lorem.words(1));
      })

      cy.wait('@getStories');

      //conta se ficou 5 botoes das consultas buscadas
      cy.get('.last-searches button')
        .should('have.length', 5)
    })
  })
})
