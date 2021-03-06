describe("Header", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should check that title is correct", () => {
    cy.url().should("include", "/software");
    cy.title().should("equal", "Capco Digital Engineering Framework");
  });

  it("should check Associate is displayed in Content header by default", () => {
    cy.get(".level-title").should(
      "have.text",
      "Associate • Associate Engineer"
    );
  });

  it("should click Quality Engineer and check that correct title is displayed in content header", () => {
    cy.contains("a", "Quality Engineer").click();
    cy.get(".level-title").should(
      "have.text",
      "Associate • Associate Quality Engineer"
    );
  });
});
