
describe('Автотесты на авторизацию', function () {
    it('Верный логин, верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#loginButton').should('be.disabled');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#loginButton').should('be.disabled');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').should('be.enabled').click();
         cy.contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton>.exitIcon');
         cy.clearAllCookies();
    })

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('null');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('null');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton>.exitIcon').click();
        cy.contains('Форма логина');
        cy.clearAllCookies();
    })

    it('Верный логин, неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').should('be.enabled').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton>.exitIcon');
        cy.clearAllCookies();
    })

    it('Неверный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('germanqa@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton>.exitIcon');
        cy.clearAllCookies();
    })

    it('Логин без @', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton>.exitIcon');
        cy.clearAllCookies();
    })  

    it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton>.exitIcon');
        cy.clearAllCookies();
    })  
})