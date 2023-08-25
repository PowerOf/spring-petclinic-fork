/// <reference types="cypress" />

describe('Navigation, UI and content tests', () => {
  beforeEach(() => {
    cy.visit('/vets.html')
  })

  it('Should have the Veterinarians title', () => {
    cy.get('h2').contains('Veterinarians').should('be.visible');
  });

  it('Should have specific veterinarians and their specialties', () => {
    cy.get('#vets').within(() => {
      cy.get('tbody').within(() => {
        cy.get('tr').should('have.length', 5);
        cy.contains('td', 'James Carter');
        cy.contains('td', 'none');
        cy.contains('td', 'Helen Leary');
        cy.contains('td', 'radiology');
      });
    });
  });  

  it('Should have pagination elements and they should be functional', () => {
    //cy.get('div').contains('Pages:').within(() => {
      cy.get('span').contains('1').should('be.visible');
      cy.get('a[href="/vets.html?page=2"]').should('be.visible');
      cy.get('span.fa.fa-fast-backward').should('be.visible');
      cy.get('span.fa.fa-step-backward').should('be.visible');
      cy.get('a.fa.fa-step-forward').should('have.attr', 'href', '/vets.html?page=2');
      cy.get('a.fa.fa-fast-forward').should('have.attr', 'href', '/vets.html?page=2');
    //});

    // Clicking on Next page link and verifying if it takes to the next page
    // Note: This part will require the actual implementation of the page navigation in your app.
    cy.get('a.fa.fa-step-forward').click();
    cy.url().should('include', '/vets.html?page=2');
    cy.contains('td', 'Sharon Jenkins');
    cy.contains('td', 'none');
  });
  

  
})
