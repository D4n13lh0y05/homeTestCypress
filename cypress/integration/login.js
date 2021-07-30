describe('Login page',()=>{
    beforeEach(()=>{
        cy.visit('/login');
    })
    it ('Successful login - valid parameters',()=>{
        cy.login('tomsmith','SuperSecretPassword!')
        cy.fixture('secureArea').then((secureArea)=>{
            cy.get(secureArea.notificationLb).should('contain','You logged into a secure area!');
        })
    })
    it ('Unsuccessful login - invalid parameters',()=>{
        cy.login('test','test!')
        cy.fixture('index').then((index)=>{
            cy.get(index.notificationLoginLb).should('contain','Your username is invalid!');
        })
    })
})