
describe('Header', () => {
  beforeEach(()=>{
    cy.visit('/');

  })
  it('should check that title is correct', () => {
    cy.url().should('include', '/software')
    cy.title().should('equal', 'Capco Digital Engineering Framework');
  });

  it('should check Associate is displayed in Content header by default', () => {
    cy.get('.level-title').should('have.text', 'Associate • Associate Engineer')
  });

  it('should click Quality Engineer and check that correct title is displayed in content header', () => {
    cy.contains('a', 'Quality Engineer').click()
    cy.get('.level-title').should('have.text', 'Associate • Associate Test Engineer')
  });
});

//Categpries and Competencies
// should select Delivery and check that the correct competencies are visible


// should select Delivery->Coding, choose Quality Engineering and check that content text changed

// SideBar
// should select Delivery->Coding, choose Quality Engineering and check that the same menu is active in sidebar
// should select Delivery->Coding, select Consultant and check that the same menu is active in sidebar
// should select Delivery->Coding, select Consultant and check that the content text has changed

