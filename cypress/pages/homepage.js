class HomePage {

    getBanner(){
        return cy.get('ul div.background-image:visible');
    }

    getBannerText(){
        return cy.get('div[data-slider_indicator="pagination_circles"] h2:visible');
    }

    getNextButton(){
        return cy.get('a.flex-next');
    }

}

export default new HomePage();
  