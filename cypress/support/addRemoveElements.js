Cypress.Commands.add('addElement',()=>{
    cy.fixture('addRemoveElements').then((addRemoveElements)=>{
        cy.get(addRemoveElements.addElement).click();
    })
})
Cypress.Commands.add('removeElement',()=>{
    cy.fixture('addRemoveElements').then((addRemoveElements)=>{
        cy.get(addRemoveElements.removeElement).click();
    })
})