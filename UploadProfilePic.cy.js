// Before running this code, make sure to install the cypress-file-upload package 
// by running: npm install --save-dev cypress-file-upload
import 'cypress-file-upload';

describe('Upload Profile Pic', () => {
  // Define your username, password, and image name as variables here
  const username = 'YOUR_USERNAME';
  const password = 'YOUR_PASSWORD';
  const image = 'YOUR_IMAGE_NAME';

  it('Upload image', () => {
    // Log in with your username and password
    cy.login(username, password);

    // Click on the relevant elements to navigate to the upload page
    cy.get('#arrow-down > img').click();
    cy.get('.popover-content > ul > :nth-child(2) > a').click();

    // Check if the page shows the expected prompt for image selection
    cy.get('#qupimgTitle').should('contain', 'Select image file for new profile picture');

    // Trigger the file selection dialog by clicking on the element
    cy.get('#uploadifive-qfile_upload_image').click();

    // Attach the specified image file for upload
    cy.get('input[type="file"]').eq(1).attachFile(image);

    // Wait for a sufficient amount of time for the upload process to complete
    cy.wait(5000);

    // Perform any additional actions or assertions as needed
    cy.get('#arrow-down > img').click();
    cy.get('.popover-content > ul > :nth-child(2) > a').click();
    cy.get('#qupimgTitle').should('contain','Select image file for new profile picture');
    cy.get('.filename').should('contain',image);
    cy.get('#qupimgcimg').click();

    // Log out or perform any necessary cleanup tasks
    cy.get('#arrow-down > img').click();
    cy.get('.popover-content > ul > :nth-child(7) > a').click();
    cy.url.cy.url().should('include', 'https://edtest.edcite-dev.com/usr/signin.html');
  });
});
