import 'cypress-file-upload';

describe('Upload Teachers, Classes, Students, Roster', () => {

beforeEach(() => {
const userid = 'masterahmed';
const password = 'masterahmed';
cy.login(userid, password);
});

it('Upload Teacher', () => {
cy.get('#roster-root > .dropdown-toggle').click();
cy.get('#uploadTeachersLi').click();
cy.url().should('contains', 'https://edtest.edcite-dev.com/mstr/UploadTeachers');
const filepath = 'Teacher.csv'
cy.get('#upfileBtn').click();
cy.get('#files').attachFile(filepath);
cy.wait(10000);
// Check if the button is disabled
cy.get('#upfileBtn').should('be.disabled');
cy.get('#applymsg1').should('be.visible');
//cy.get('#applyBtn1').click();
});

it('Upload Class with Teacher Id', () => {
cy.get('#roster-root > .dropdown-toggle').click();
cy.get('#uploadClassesLi').click();
cy.url().should('contains', 'https://edtest.edcite-dev.com/mstr/UploadClasses');
cy.get('#dropdownMenu1').click();
cy.get('#teacherIdentifierMenu > :nth-child(1) > a').click();
const filepath = 'Class UID.csv'
cy.get('#button1').click();
cy.get('#files').attachFile(filepath);
cy.wait(10000);
// Check if the button is disabled
//cy.get('#upfileBtn').should('be.disabled')
//cy.get('#addButton').click();
});

it('Upload Class Teacher Email', () => {
cy.get('#roster-root > .dropdown-toggle').click();
cy.get('#uploadClassesLi').click();
cy.url().should('contains', 'https://edtest.edcite-dev.com/mstr/UploadClasses');
cy.get('#dropdownMenu1').click();
cy.get('#teacherIdentifierMenu > :nth-child(2) > a').click();
const filepath = 'Class E.csv'
cy.get('#button1').click();
cy.get('#files').attachFile(filepath);
cy.wait(10000);
// Check if the button is disabled
//cy.get('#addButton').click();
});

it('Upload Class Students', () => {
cy.get('#roster-root > .dropdown-toggle').click();
cy.get('#uploadStudentsLi').click();
cy.url().should('contains', 'https://edtest.edcite-dev.com/mstr/UploadStudents');
const filepath = 'Student.csv'
cy.get('#upfileBtn').click();
cy.get('#files').attachFile(filepath);
cy.wait(10000);
// Check if the button is disabled
//cy.get('#applyBtn1').click();
});

it('Upload Class Roster Student id - Class name - teacher id', () => {
cy.get('#roster-root > .dropdown-toggle').click();
cy.get('#uploadStudentClassesLi').click();
cy.url().should('contains', 'https://edtest.edcite-dev.com/mstr/AddStudentsToClasses');
const filepath = 'CR1.csv'
cy.get('#button1').click();
cy.get('#files').attachFile(filepath);
cy.wait(10000);
// Check if the button is disabled
//cy.get('#addButton').click();
});
it('Upload Class Roster Student id - Class name - teacher email id', () => {
cy.get('#roster-root > .dropdown-toggle').click();
cy.get('#uploadStudentClassesLi').click();
cy.url().should('contains', 'https://edtest.edcite-dev.com/mstr/AddStudentsToClasses');
cy.get('.selectTeacher').select('email');
const filepath = 'CR2.csv'
cy.get('#button1').click();
cy.get('#files').attachFile(filepath);
cy.wait(10000);
// Check if the button is disabled
//cy.get('#addButton').click();
});
it('Upload Class Roster Student id - Class id', () => {
cy.get('#roster-root > .dropdown-toggle').click();
cy.get('#uploadStudentClassesLi').click();
cy.url().should('contains', 'https://edtest.edcite-dev.com/mstr/AddStudentsToClasses');
cy.get('.selectClass').select('classid');
const filepath = 'CR3.csv'
cy.get('#button1').click();
cy.get('#files').attachFile(filepath);
cy.wait(10000);
// Check if the button is disabled
//cy.get('#addButton').click();
});
it('Upload Class Roster Roster id - Class name - teacher id', () => {
cy.get('#roster-root > .dropdown-toggle').click();
cy.get('#uploadStudentClassesLi').click();
cy.url().should('contains', 'https://edtest.edcite-dev.com/mstr/AddStudentsToClasses');
cy.get('.selectStudent').select('rosterid');
const filepath = 'CR4.csv'
cy.get('#button1').click();
cy.get('#files').attachFile(filepath);
cy.wait(10000);
// Check if the button is disabled
//cy.get('#addButton').click();
});
it('Upload Class Roster Roster id- Class name - teacher email id', () => {
cy.get('#roster-root > .dropdown-toggle').click();
cy.get('#uploadStudentClassesLi').click();
cy.url().should('contains', 'https://edtest.edcite-dev.com/mstr/AddStudentsToClasses');
cy.get('.selectStudent').select('rosterid');
cy.get('.selectTeacher').select('email');
const filepath = 'CR5.csv'
cy.get('#button1').click();
cy.get('#files').attachFile(filepath);
cy.wait(10000);
// Check if the button is disabled
//cy.get('#addButton').click();
});
it('Upload Class Roster Roster id - Class id', () => {
cy.get('#roster-root > .dropdown-toggle').click();
cy.get('#uploadStudentClassesLi').click();
cy.url().should('contains', 'https://edtest.edcite-dev.com/mstr/AddStudentsToClasses');
cy.get('.selectStudent').select('rosterid');
cy.get('.selectClass').select('classid');
const filepath = 'CR6.csv'
cy.get('#button1').click();
cy.get('#files').attachFile(filepath);
cy.wait(10000);
// Check if the button is disabled
//cy.get('#addButton').click();
});
});