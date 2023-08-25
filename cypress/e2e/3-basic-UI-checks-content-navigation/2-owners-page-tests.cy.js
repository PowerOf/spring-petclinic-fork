/// <reference types="cypress" />

describe('Owners page tests', () => {
  beforeEach(() => {
    cy.visit('/owners/find')
  })

  it('should have correct UI elements', () => {
    cy.get('h2').contains('Find Owners'); // Label
    cy.get('input#lastName').should('be.visible'); // Textbox for Last Name
    cy.get('button[type="submit"]').contains('Find Owner'); // Find Owner Button
    cy.get('a.btn').contains('Add Owner'); // Add Owner Button
  });

  it('should add an owner and see it on the page', () => {
    cy.addOwner();
    // Check the table for the edited details
      cy.get('table.table-striped tbody tr').eq(0).find('td').should('contain', 'New First Name');
      cy.get('table.table-striped tbody tr').eq(0).find('td').should('contain', 'New Last Name');
      cy.get('table.table-striped tbody tr').eq(1).find('td').should('contain', 'New Address');
      cy.get('table.table-striped tbody tr').eq(2).find('td').should('contain', 'New City');
      cy.get('table.table-striped tbody tr').eq(3).find('td').should('contain', '1234567890');
    });

  it('should add a pet and visits, and see the result', () => {
    // Fill out pet details and save
    cy.addOwner();
    cy.addPet();
    cy.get('table.table-striped tbody tr td').should('contain', 'Fluffy')
    cy.get('table.table-striped tbody tr td').should('contain', '2020-01-01')
    cy.get('table.table-striped tbody tr td').should('contain', 'dog')
  });

  it('should add visits to a pet, and see the result', () => {
    cy.addOwner();
    cy.addPet();
    cy.addVisit();
    // Check the table for the edited details
    cy.get('.table-condensed thead tr th').should('contain', 'Visit Date');
    cy.get('.table-condensed thead tr th').should('contain', 'Description');
    cy.get('.table-condensed tbody tr').should('contain', '2023-08-25').and('contain', 'Regular Checkup');
  });

    it('should edit the owner and verify the changes', () => {
      cy.addOwner();
      cy.updateOwner();
      // Check the table for the edited details
      cy.get('table.table-striped tbody tr').eq(0).find('td').should('contain', 'Updated First Name');
      cy.get('table.table-striped tbody tr').eq(0).find('td').should('contain', 'Updated Last Name');
      cy.get('table.table-striped tbody tr').eq(1).find('td').should('contain', 'Updated Address');
      cy.get('table.table-striped tbody tr').eq(2).find('td').should('contain', 'Updated City');
      cy.get('table.table-striped tbody tr').eq(3).find('td').should('contain', '0987654321');
    });
  });
