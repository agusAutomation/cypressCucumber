import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import DemoPage from "../../../pages/demopage";
const url = Cypress.env('baseUrl');


Given(`the Demo Page of CareJourney site`, () => {
  cy.visit(url+'demo');
});

When(`see the form`, () => {
  DemoPage.getForm().should('be.visible');
});

Then(`complete all the inputs`, () => {
  cy.fixture('userInfo.json').then((fixture) => {
    DemoPage.getFirstName().last().type(fixture.firstName);
    DemoPage.getLastName().last().type(fixture.lastName);
    DemoPage.getEmail().last().type(fixture.email);
    DemoPage.getCompany().last().type(fixture.company);
    DemoPage.getJobTitle().last().type(fixture.jobTitle);
    DemoPage.getCompanyType().last().select(fixture.companyType);
    DemoPage.getState().last().select(fixture.state);
  });
});