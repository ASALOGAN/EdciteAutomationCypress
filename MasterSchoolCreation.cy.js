// Define a test suite
describe('Create School In Master', () => {
  // Define a test case
  it('Log in to Master account and create a school', () => {
    // Login to Master Account
    const username = ''; // Enter the Username of Master Account
    const password = ''; // Enter the password of Master Account

    // Read city data from JSON file
    // The JSON File is stored in cypress -> fixtures
    cy.fixture('SchoolData').then((data) => {
      // Select a random city entry
      const randomCityData = Cypress._.sample(data);

      // Extract values from the random city entry
      const { city, address, state, zip } = randomCityData;

      // Generate schoolName and schoolAb using the selected city data
      const schoolName = `Edcite ${city}`;
      const schoolAb = `E${city.charAt(0).toUpperCase()}S`;

      // Perform Cypress commands for logging in and creating a school
      cy.login(username, password);
      cy.get('#welcomelink').click();
      cy.get('.popover-content > ul > :nth-child(4) > a').click();
      cy.get('#openAddExistingSchoolFormBtn').click();
      cy.get('#add-a-new-school').click();
      cy.get('#newSchoolNameI').type(schoolName);
      cy.get('#newSchoolAbbrevI').type(schoolAb);
      cy.get('#newSchoolAddressI').type(address);
      cy.get('#newSchoolCityI').type(city);
      cy.get('#newSchoolStateI').type(state);
      cy.get('#newSchoolZipI').type(zip);
      cy.get('#newSchoolCountryI').clear().type('India');
      cy.get('#addNewSchoolBtn').click();

      // Assert the successful creation of a school
      cy.get('#newSchoolNameI').should('have.value', schoolName);
      cy.get('#newSchoolAbbrevI').should('have.value', schoolAb);
      cy.get('#newSchoolAddressI').should('have.value', address);
      cy.get('#newSchoolCityI').should('have.value', city);
      cy.get('#newSchoolStateI').should('have.value', state);
      cy.get('#newSchoolZipI').should('have.value', zip);
      cy.get('#newSchoolCountryI').should('have.value', 'India');
        
      // Assert the row in the table has the same schoolName
      cy.login(username, password);
      cy.get('#welcomelink').click();
      cy.get('.popover-content > ul > :nth-child(4) > a').click();
      // Assert school name in table
      cy.get('#schoolTable').contains('.sName', schoolName).should('exist');

    });
  });
});
