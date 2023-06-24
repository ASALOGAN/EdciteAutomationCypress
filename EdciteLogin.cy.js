describe('Edcite Test Server Login', () => {
    const username = ''; // enter your userid
    const password = ''; // enter your password
  it('Visits website and logs in', () => {
    cy.visit('https://edtest.edcite-dev.com/usr/signin.html')
    cy.url().should('include', 'edtest.edcite-dev.com')
    cy.get('#userid').type(username)
    cy.get('#password').type(password)
    cy.get('#userid').should('have.value', username)
    cy.get('#password').should('have.value', password)
    cy.get('#loginBtn').click()
    cy.url().should('include', 'https://edtest.edcite-dev.com/mstr/MasterHome')
  })
})
