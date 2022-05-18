class DemoPage {

    getForm(){
        return cy.get('div.fusion-flex-column-wrapper-legacy');
    }

    getFirstName(){
        return cy.get('input[name="firstname"]');
    }

    getLastName(){
        return cy.get('input[name="lastname"]');
    }

    getEmail(){
        return cy.get('input[name="email"]');
    }

    getCompany(){
        return cy.get('input[name="company"]');
    }

    getJobTitle(){
        return cy.get('input[name="jobtitle"]');
    }

    getCompanyType(){
        return cy.get('select[name="organization_type"]');
    }

    getState(){
        return cy.get('select[name="state"]');
    }

    getOption(value){
        return cy.get('option[value="'+value+'"]');
    }
}

export default new DemoPage();
  