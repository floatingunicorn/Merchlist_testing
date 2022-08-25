
export const createManufacturerWithBlankName=()=>{
       cy.get('.ti-package').realHover()
       cy.get('.title:contains("Products")').click()
       cy.get('a:contains("Manufacturers")').click()
       cy.get('.btn').click()
       cy.get('input[formcontrolname="name"]').type(" ")
       cy.get('textarea[formcontrolname="address"]').type("Lekki, Lagos")
       cy.get('form > .btn').click()
       cy.get('#swal2-title').should("have.text","Error")
       cy.get('.swal2-confirm').click()
}

export const createManufacturerWithDuplicateName=()=>{
       cy.get('input[formcontrolname="name"]').clear().type("George")
       cy.get('textarea[formcontrolname="address"]').clear().type(" ")
       cy.get('form > .btn').click()
       cy.get('#swal2-content').should("have.text","Manufacturer with name George already exist.")
       cy.get('.swal2-confirm').click()
}
export const createManufacturer=()=>{
       const time = Date.now()
       cy.get('input[formcontrolname="name"]').clear().type("Stephanie" + time)
       cy.get('textarea[formcontrolname="address"]').clear().type("Lekki, Lagos")
       cy.get('form > .btn').click()
       cy.get('#swal2-title').should("have.text","Success")
       cy.get('.swal2-confirm').click()
}