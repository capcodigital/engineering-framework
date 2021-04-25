describe('SideBar', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('a', 'Delivery').click();
    cy.contains('a', 'Coding').click();
  });

  it('should select Delivery->Coding and check that the content text has changed', () => {
    cy.get('#delivery-coding > p.description').should(
      'have.text',
      "Is able to gain context within the team's domain; Writes code with testability, readability, edge cases, and errors in mind."
    );
  });

  it('should select Delivery -> Coding, choose Quality Engineering and check that the same menu is active in sidebar', () => {
    cy.contains('a', 'Quality Engineer').click();
    cy.contains('a', 'Delivery').parent().should('have.class', 'active');
    cy.contains('a', 'Coding').parent().should('have.class', 'active');
  });

  it('should select Delivery -> Coding, select Consultant and check that the same menu is active in sidebar', () => {
    cy.contains('div', 'Consultant').click();
    cy.contains('a', 'Delivery').parent().should('have.class', 'active');
    cy.contains('a', 'Coding').parent().should('have.class', 'active');
  });

  it('should select Delivery->Coding, select Consultant and check that the content text has changed', () => {
    cy.get('#delivery-coding > p.description')
      .invoke('text')
      .then((text1) => {

        cy.contains('div', 'Consultant').click();

        cy.get('#delivery-coding > p.description')
          .invoke('text')
          .should((text2) => {
            expect(text1).not.to.eq(text2);
          });
      });
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
