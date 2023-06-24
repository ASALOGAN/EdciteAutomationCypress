//This uses a custom command to log in you just need to enter the username and password

describe('Edcite Master Assignment', () => {
  it('create Assignment', () => {
    cy.login('username', 'password'); // enter username and password
    const today = new Date();
    const name = today.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' });
    cy.createAssignment(name);
  });
});
