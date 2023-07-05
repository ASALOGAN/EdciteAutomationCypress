describe('Create District Distribution folder', () => {
  const username = ''; //Enter Master Username
  const password = ''; //Enter Master Password
  const Folder = ''; //Enter the Folder Name
it('Create folder', () => {
  cy.login(username,password);
  cy.get('#content-root > .dropdown-toggle').click();
  cy.contains('li', 'District Distributions').click();
  cy.url().should('include', '/mstr/Distributions');
  cy.get('#folder-add-btn').click();
  cy.wait(5000);
  cy.get('#newFolderNameI').type(Folder, {force: true});
  cy.get('#newFolderSub').click({force: true});
  });
});