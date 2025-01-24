describe('API_UI Automation', () => {


  it('API automation', () => {
    cy.request({

      method: 'GET',
      url: 'api.coindesk.com/v1/bpi/currentprice.json'
    }).then((response) => {

      expect(response.status).to.eq(200)
      const bpi = response.body.bpi;
      expect(bpi).to.have.all.keys('USD', 'GBP', 'EUR');
      expect(bpi.GBP).to.have.property('description', 'British Pound Sterling');

    })
  })



  it('adding item to Cart and verify the count', function () {

    cy.visit('http://www.ebay.com/');
    cy.get('input[aria-label="Search for anything"]').should('be.visible').type('book{enter}');

    cy.get('a.s-item__link').eq(3)
      .invoke('removeAttr', 'target')
      .click();

    cy.wait(9000)

    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('ResizeObserver loop completed with undelivered notifications')) {
        return false; // Prevents Cypress from failing the test
      }
    });



    cy.get('#atcBtn_btn_1 > span')
      .should('be.visible')
      .scrollIntoView()
      .click({ force: true });

    cy.origin('https://cart.payments.ebay.com', () => {

      cy.url().should('include', 'cart.payments.ebay.com');

      cy.get('span.gh-cart__icon').then(($elements) => {

        cy.log(`Number of elements displayed for the specific selector: ${$elements.length}`);
        cy.log('All elements:', $elements);

        // Assertion to verify that the number of elements is greater than 0
        expect($elements.length).to.be.greaterThan(0);
      });


    });




  })



})