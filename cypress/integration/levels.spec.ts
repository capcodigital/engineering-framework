describe('Levels', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should click Senior and check the correct title is displayed in content header', () => {
    cy.contains('div', 'Senior Consultant').click();
    cy.get('.level-title').should(
      'have.text',
      'Senior Consultant • Senior Engineer'
    );
  });

  it('should click Senior, select Quality Engineer and check that the correct title is displayed in content header', () => {
    cy.contains('a', 'Quality Engineer').click();
    cy.get('.level-title').should(
      'have.text',
      'Associate • Associate Test Engineer'
    );
  });
});
