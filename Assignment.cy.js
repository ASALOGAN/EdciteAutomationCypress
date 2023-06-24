describe('Edcite Master Assignment', () => {
  it('create Assignment', () => {
    cy.login('username', 'password'); // enter username and pass word
    const today = new Date();
    const name = today.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' });
    cy.createAssignment(name);
  });
});