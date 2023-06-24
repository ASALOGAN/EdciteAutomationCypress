describe('Edcite Master Assignment', () => {
  it('visit URL and interact with page', () => {
    cy.login('username', 'password');
    cy.get('#content-root > .dropdown-toggle').click();
    cy.contains('li', 'District Distributions').click();
    cy.url().should('include', '/mstr/Distributions');
    cy.wait(5000); // wait for 5 seconds
    cy.get('span.dropdown').invoke('addClass', 'dropdown open');
    cy.get('#createDist').click();
    cy.get('#pickMAsTable_filter > label > input').type('June 24, 2023');
    const assignName = 'June 24, 2023 at 12:34 PM' // change to the name of assignement name you have
    cy.get('#pickMAsTable > tbody > :nth-child(3) > :nth-child(1)').contains(assignName);
    cy.get(':nth-child(3) > :nth-child(6) > .btn').click();
    cy.wait(5000);
    const randomText = Math.random().toString(36).substring(2);
    cy.get('#newDepLabel').type(randomText);
    cy.get('#newDeployBtn').click();
    cy.wait(10000);
    cy.get('#openAddCs').click();
    cy.wait(5000);
    cy.get('#activeTsTable_filter > label > input').type('Edcite Training'); //change to your class name
    cy.wait(2000);
    cy.get('.odd > :nth-child(2)').contains('Edcite Training'); 
    cy.get('.chk-cls-md').click();
    cy.get('#select-classes-modal > .modal-dialog > .modal-content > .modal-body > [style="text-align: center;"] > .btn').click();
    cy.wait(2000);
    cy.get('#saveDA').click();
    cy.get('#home-root > a').click();
    cy.url().should('include', '/mstr/MasterHome');
    cy.get('label > input').type(randomText);
    cy.wait(2000);
    cy.get('.odd > :nth-child(2)').contains(randomText);
    cy.get('.assnLink').contains(assignName);
  });
});
