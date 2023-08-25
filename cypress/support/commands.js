// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('addVisit', () => {
    // Click the "Add Visit" button
    cy.contains('a', 'Add Visit').click();
    cy.get('#date').type('2023-08-25');
    cy.get('#description').type('Regular Checkup');
    cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('addOwner', () => {
    // Click the "Add Owner" button
    cy.get('a.btn').contains('Add Owner').click();
    cy.get('input#firstName').clear().type('New First Name'); // Edit first name
    cy.get('input#lastName').clear().type('New Last Name'); // Edit last name
    cy.get('input#address').clear().type('New Address'); // Edit address
    cy.get('input#city').clear().type('New City'); // Edit city
    cy.get('input#telephone').clear().type('1234567890'); // Edit telephone
    cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('updateOwner', () => {
    // Click the "Edit Owner" button
    cy.get('a.btn').contains('Edit Owner').click();
    cy.get('input#firstName').clear().type('Updated First Name'); // Edit first name
    cy.get('input#lastName').clear().type('Updated Last Name'); // Edit last name
    cy.get('input#address').clear().type('Updated Address'); // Edit address
    cy.get('input#city').clear().type('Updated City'); // Edit city
    cy.get('input#telephone').clear().type('0987654321'); // Edit telephone
    cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('addPet', () => {
    // Fill out pet details and save
    cy.get('a.btn').contains('Add New Pet').click();
    cy.get('#name').type('Fluffy');
    cy.get('#birthDate').type('2020-01-01');
    cy.get('#type').select('dog');
    cy.get('button[type="submit"]').click();
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })