import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../pages/homepage";
import Data from "../../../fixtures/banners.json";

const url = "https://carejourney.com/";




Given(`the CareJourney Page`, () => {
  cy.visit(url);
});

When(`see the banner`, () => {
  HomePage.getBanner().should('be.visible');
});

Then(`check the information displayed`, () => {

  cy.fixture('banners.json').then((fixture) => {
    fixture = fixture.banners;

    fixture.forEach((element) => {
      HomePage.getBannerText().should('have.text', element.text);
      HomePage.getNextButton().click();
    });

  });
});