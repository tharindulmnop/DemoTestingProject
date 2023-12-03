import LoginPage from '../support/loginPage.js';

describe('template spec', () => {

  beforeEach(() => {
    LoginPage.visit();
  });

  it('A/B Testing', () => {
    cy.contains('A/B Testing').click();
  })

  it('Add/RemoveElements', () => {
    cy.contains('Add/Remove Elements').click()
    cy.contains('Add Element').click();
    cy.contains('Delete').should('be.visible')
    cy.log('before kkkk')
    cy.contains('Delete').click()
    cy.wait(3000)
    cy.contains('Delete').should('not.exist')

    //cy.go('back')
    //this is master
  });

  it('Basic Authentication', () => {
    cy.contains('Basic Auth').click()
  });


})