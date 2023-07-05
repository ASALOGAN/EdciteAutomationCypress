describe('Delete District Distribution folder', () => {
  const username = ''; //Enter Master Username
  const password = ''; //Enter Master Password
  const Folder = ''; //Enter the Folder Name
it('Delete folder', () => {
  cy.login(username,password);
  cy.get('#content-root > .dropdown-toggle').click();
  cy.contains('li', 'District Distributions').click();
  cy.url().should('include', '/mstr/Distributions');
  cy.get('#folderPanelUL')
    .contains('.fNameSpan', assignment)
    .should('exist')
    .parent('.folderLI')
    .click();
  cy.get('.btn-group > .btn').click();
  cy.get('#deleteFolderPanelLI').click();
});
});