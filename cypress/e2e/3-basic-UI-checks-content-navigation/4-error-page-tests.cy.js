/// <reference types="cypress" />

describe('Error page tests', () => {
  
  it('displays basic error', () => {
    cy.visit('http://localhost:8080');
    cy.get('#main-navbar .nav-item').eq(3).click();
    cy.get('h2').should('contain', 'Something happened...'); // Welcome text
    cy.get('img[src="/resources/images/pets.png"]').should('be.visible'); // greeter picture
  });
})
