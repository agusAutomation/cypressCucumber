@Banner
Feature: When access to the Demo Page
  As a user
  I want to access to Demo Page
  So can complete the form

  @regression
  Scenario: Complete form
    Given the Demo Page of CareJourney site
    When see the form
    Then complete all the inputs
    