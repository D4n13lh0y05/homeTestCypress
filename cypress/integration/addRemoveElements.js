describe('Add remove elements',()=>{
    before(()=>{
        cy.visit('/add_remove_elements/');
    })
    it ('Add elements',()=>{
        cy.addElement()
        cy.fixture('addRemoveElements').then((addRemoveElements)=>{
            cy.get(addRemoveElements.removeElement).should('be.visible');
        })
    })
    it ('Remove elements',()=>{
        cy.removeElement()
        cy.fixture('addRemoveElements').then((addRemoveElements)=>{
            cy.get(addRemoveElements.removeElement).should('not.exist');
        })
    })
})