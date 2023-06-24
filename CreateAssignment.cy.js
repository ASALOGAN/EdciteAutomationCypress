describe('Edcite Master Login', () => {
  it('Visits website, logs in using custom command, clicks on elements and checks for list items', () => {
    cy.login('userid', 'password'); // enter the user id and password.
    cy.get('#createMABtn').click();
    cy.url().should('contains', 'https://edtest.edcite-dev.com/mstr/MasterAssignmentEditor');
    
    const today = new Date();
    const dateTimeString = today.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' });
    cy.get('.assnname').type(dateTimeString);
    cy.get('.switch6-light > :nth-child(2) > :nth-child(2)').click();
    cy.wait(2000);
    cy.get('.assigneditorDistributeBtn').click();
  });
});
