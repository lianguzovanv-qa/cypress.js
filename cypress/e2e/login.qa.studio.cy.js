describe('Проверка авторизации', function () {


   it('Верный пароль и верный логин', function () {
      cy.visit('https://login.qa.studio/'); // Зашла на сайт
      cy.get('#mail').type('german@dolnikov.ru'); // Ввожу верный логин
      cy.get('#pass').type('iLoveqastudio1'); // Ввожу верный пароль
      cy.get('#loginButton').click(); // Нажала войти
      cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю нужный текст
      cy.get('#messageHeader').should('be.visible'); // Проверила видимость текста
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // // Проверяю крестик и его видимость

    })

   it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').click(); // Нажимаю кнопку забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввожу почту
        cy.get('#restoreEmailButton').click(); // Нажимаю отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю нужный текст
        cy.get('#messageHeader').should('be.visible'); // Проверила видимость текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю крестик и его видимость 
    })

    it('Верный логин и неверный пароль', function () { 
      cy.visit('https://login.qa.studio/'); // Зашла на сайт
      cy.get('#mail').type('german@dolnikov.ru'); // Ввожу верный логин
      cy.get('#pass').type('iLoveqastudio7'); // Ввели неверный пароль
      cy.get('#loginButton').click(); // Нажала войти
      cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю нужный текст
      cy.get('#messageHeader').should('be.visible'); // Проверяю видимость текста
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю крестик и его видимость

    })

      it('Неправильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#mail').type('german@dolnikov_test.ru'); // Ввожу неправильный логин
        cy.get('#pass').type(' iLoveqastudio1'); // Ввожу верный пароль
        cy.get('#loginButton').click(); // Нажала войти
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю нужный текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю видимость текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю крестик и его видимость

    })

    it('Валидация на наличие @', function () {  
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввожу логин без @
        cy.get('#pass').type('iLoveqastudio'); // Ввожу верный пароль
        cy.get('#loginButton').click(); // Нажала войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю нужный текст
        cy.get('#messageHeader').should('be.visible'); // Проверила видимость текста 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю крестик и его видимость
   
    })

   it('Проверка на строчные буквы в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввожу логин 
        cy.get('#pass').type(' iLoveqastudio1'); // Ввожу верный пароль
        cy.get('#loginButton').click(); // Нажала войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю нужный текстs
        cy.get('#messageHeader').should('be.visible'); // Проверяю видимость текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю крестик и его видимость

    })


})







