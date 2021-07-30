Cypress.Commands.add('login',(username,password)=>{
    cy.fixture('index').then((index)=>{
        cy.get(index.usernameBox).type(username);
        cy.get(index.passwordBox).type(password);
        cy.get(index.loginButton).click();
    })
})