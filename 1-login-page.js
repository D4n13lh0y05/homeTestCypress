describe('Login page tests cases',function(){

    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php');
      })

    it('Successful login - valid parameters',function(){

        cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('"dress"');
    })

    it('Unsuccessful login - invalid parameters',function(){
        cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('"dress"');
    })

})