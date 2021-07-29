describe('Login page',()=>{

    beforeEach(()=>{
        cy.visit('/login');
    })

    it ('Successful login - valid parameters',()=>{
        cy.fixture('index').then((index)=>{
            cy.get(index.usernameBox).type("tomsmith");
            cy.get(index.passwordBox).type("SuperSecretPassword!");
            cy.get(index.loginButton).click();
        })

        cy.fixture('secureArea').then((secureArea)=>{
            cy.get(secureArea.notificationLb).should('contain','You logged into a secure area!');
        })
    })

    it ('Unsuccessful login - invalid parameters',()=>{
        cy.fixture('index').then((index)=>{
            cy.get(index.usernameBox).type("test");
            cy.get(index.passwordBox).type("test!");
            cy.get(index.loginButton).click();
        })

        cy.fixture('index').then((index)=>{
            cy.get(index.notificationLoginLb).should('contain','Your username is invalid!');
        })
    })

})