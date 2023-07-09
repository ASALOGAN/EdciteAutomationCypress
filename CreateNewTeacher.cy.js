// Create a json file called teacher.json
// [{
//   "TeacherName": "",
//   "UserId": "",
//   "Password": "",
//   "Email": "",
//   "Subject": "",
//   "State": ""
// }]
describe('Create Teacher', () => {
  const username = ''; //Enter User Name
  const password = ''; //Enter User Name

  it('District Teacher', () => {
    cy.login(username, password);

    // Navigate to the District Teachers page
    cy.get('#roster-root > .dropdown-toggle').click();
    cy.contains('li', 'District Teachers').click();

    // Wait for the page to load
    cy.wait(5000);

    // Open the Teacher Actions dropdown
    cy.get('#teacherActionsDD').click({ force: true });

    // Select the first option from the dropdown
    cy.get('#teacher-actions-dd li:first-child').click({ force: true });

    // Load teacher data from the fixture file
    cy.fixture('teacher.json').then((teacher) => {
      // Select a random teacher from the data
      const randomIndex = Cypress._.random(0, teacher.length - 1);
      const selectedTeacher = teacher[randomIndex];

      // Fill the form fields with teacher data
      cy.get('#ntTitleI').select('Professor');
      cy.get('#ntNameI').type(selectedTeacher.TeacherName);
      cy.get('#ntEdciteID').type(selectedTeacher.UserId);
      cy.get('#ntPasswordI').type(selectedTeacher.Password);
      cy.get('#ntEmailI').type(selectedTeacher.Email);
      cy.get('#ntSchoolI').select(''); // Enter School Name
      cy.get('#s2id_autogen2').type(selectedTeacher.Subject);
      cy.get('.select2-result-label').click();
      cy.get('#ntStateI').clear().type(selectedTeacher.State);
      cy.get('#new-t-grade > [data-val="9"]').click();

      // Add assertions to verify the entered data
      cy.get('#ntTitleI').should('have.value', 'Professor');
      cy.get('#ntNameI').should('have.value', selectedTeacher.TeacherName);
      cy.get('#ntEdciteID').should('have.value', selectedTeacher.UserId);
      cy.get('#ntEmailI').should('have.value', selectedTeacher.Email);
      cy.get('#ntStateI').should('have.value', selectedTeacher.State);
      
      //Submit Button to create Teacher.
      cy.get('#ntSubmit').click();
      

      // Filter the teacher table and check the data-id attribute
      cy.get('#activeTsTable_filter > label > input').type(selectedTeacher.TeacherName);
      cy.wait(2000);
      cy.get('.tableTeacher').should('have.attr', 'data-id', selectedTeacher.UserId);
    });
  });
});
