export const emptyBrandName=()=>{
    cy.get('.ti-package').realHover()
    cy.wait(2000)
    cy.get('.title:contains("Products")').click({force:true})
    cy.get('a:contains("Brand"):first').click({force:true})
    cy.get('.btn').click()
    cy.get('input[formcontrolname="name"]').type(" ")
    cy.get('.ng-input > input').click().type("Stephanie")
    cy.get('.ng-option-label:contains("Stephanie")').first().click()
    cy.get('textarea[formcontrolname="description"]').clear().type("Black Hair")
    cy.get('form > .btn').click()
    cy.get('#swal2-content').should("have.text","undefined")
    cy.get('.swal2-confirm').click()
}
export const createDuplicateBrand=()=>{
    cy.get('input[formcontrolname="name"]').clear().type("Blackxyz")
    cy.get('form > .btn').click()
    cy.get('#swal2-content').should("have.text","Brand with name Blackxyz already exists")
    cy.get('.swal2-confirm').click()
}
export const createBrandForManufacturer=()=>{
    const time = Date.now()
    cy.get('input[formcontrolname="name"]').clear().type("Blackxyz" + time)
    cy.get('form > .btn').click()
    cy.get('#swal2-content').should("have.text","Brand was succesfully created")
    cy.get('.swal2-confirm').click()
}


