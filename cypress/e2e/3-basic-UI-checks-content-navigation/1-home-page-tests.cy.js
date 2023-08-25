/// <reference types="cypress" />

describe('Home page tests', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.injectAxe(); // Inject axe-core library into the page
  })
  
  it('Test for any accessibility issues on page load', () => {
    cy.checkA11y();
  });

  it('should redirect to main page when logo is clicked', () => {
    cy.get('.navbar-brand').click(); // Logo
    cy.url().should('eq', Cypress.config().baseUrl + '/'); // Main page URL
  });
  

  it('Ensure it displays top menu bar with 4 pages and logo shown', () => {
    cy.get('.navbar').should('be.visible'); // Top menu bar
    cy.get('.navbar-brand').should('be.visible'); // Logo
  
    cy.get('.nav-item').should('have.length', 4); // Menu options
    cy.get('.nav-item').eq(0).find('span').eq(1).should('contain', 'Home');
    cy.get('.nav-item').eq(1).find('span').eq(1).should('contain', 'Find owners');
    cy.get('.nav-item').eq(2).find('span').eq(1).should('contain', 'Veterinarians');
    cy.get('.nav-item').eq(3).find('span').eq(1).should('contain', 'Error');
  });

  it('should display Welcome and picture', () => {
    cy.get('h2').should('contain', 'Welcome'); // Welcome text
    cy.get('img[src="/resources/images/pets.png"]').should('be.visible'); // greeter picture
  });
  
  it('should display logo at the bottom', () => {
    cy.get('img[alt="VMware Tanzu Logo"]').should('be.visible') // Bottom logo
      .and(($img) => {
        // "naturalWidth" property will be 0 if the image failed to load
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });  

})
