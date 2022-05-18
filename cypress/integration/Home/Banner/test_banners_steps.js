import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../pages/homepage";
const url = Cypress.env('baseUrl');


Given(`the CareJourney Page`, () => {
  cy.visit(url);
});

When(`see the banner`, () => {
  HomePage.getBanner().should('be.visible');
});

Then(`check the information displayed`, () => {
  let stepper = 2;

  cy.fixture('banners.json').then((fixture) => {
    fixture = fixture.banners;

    fixture.forEach((element) => {
      //Check text
      HomePage.getBannerText().should('have.text', element.text);
      if(Cypress.config("viewportWidth")>1000){
        //For desktop view, press next button
        HomePage.getNextButton().click();
      }else{
        //For mobie view press stepper
        if(stepper<=3){
          HomePage.getStepperCircle(stepper).click();
          stepper++;
        }
      }
    });

  });
});