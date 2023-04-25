describe('Автотест', function () {
     Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false})

     it('Оформление заказа', function () {
         cy.visit('https://huntingpony.com/');
         cy.get('[href="/collection/sumki-i-avtokresla"] > .banner-list__item-title').click();
         cy.get('[data-product-id="338932775"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
         cy.get('.add-cart-counter__btn').click();
         cy.wait(5000);
         cy.get('[data-add-cart-counter-plus=""]').click();         
         cy.get('.header__cart').click();
         cy.get('.cart-controls > .button').click();         
     })
})  