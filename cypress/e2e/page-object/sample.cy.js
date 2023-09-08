import { faker } from '@faker-js/faker'

//const editDestinationPage = require('../../page-objects/editDestination')

describe('Page Object bad practice', () => {
  const randomDestination = Math.floor(Math.random() * 15) + 1

  beforeEach(() => {
    cy.visit(`https://lit-chamber-61567.herokuapp.com/destinations/${randomDestination}/edit`)
  })

  it('updates destination info', () => {
    const info = {
      name: faker.lorem.words(2),
      description: faker.lorem.words(5)
    }

    //editDestinationPage.updateInfo(info)
    
    cy.updateDestination(info);

    cy.url()
      .should(
        'be.equal',
        `https://lit-chamber-61567.herokuapp.com/destinations/${randomDestination}`
      )
    cy.contains('h2', info.name)
      .should('be.visible')
    cy.contains('p', info.description)
      .should('be.visible')
  })
})
