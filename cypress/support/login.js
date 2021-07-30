Cypress.Commands.add('login',(username,password)=>{
    cy.fixture('login').then((login)=>{
        cy.get(login.usernameBox).type(username);
        cy.get(login.passwordBox).type(password);
        cy.get(login.loginButton).click();
    })
})