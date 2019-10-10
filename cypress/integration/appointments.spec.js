
describe("Appointment", () => {
it("should cancel an interview", () => {
  cy.visit("/");

  cy.get("[alt=Delete]")
    .click({ force: true });

  cy.contains("Confirm").click();

  cy.contains("Loading").should("exist");
  cy.contains("Loading").should("not.exist");

  cy.contains(".appointment__card--show", "Archie Cohen")
    .should("not.exist");
});
it("should book an interview", () => {
  cy.visit("/");
  cy.contains("Monday");
  cy.get("[alt=Add]")
 .first()
 .click();
 cy.get("[data-testid=student-name-input]").type("Lydia Miller-Jones");
 cy.get("[alt='Sylvia Palmer']").click();
 cy.contains("Save").click();
 cy.request("GET", "/api/debug/reset")

});
it("should edit an interview", () => {
  cy.visit("/")
  cy.get("[alt=Edit]")
  .click({ force: true });
  cy.get("[alt='Sylvia Palmer']").click();
  cy.contains("Save").click();

})

})