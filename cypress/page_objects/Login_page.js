   export const navigate=()=>{
        cy.visit("https://dashboard-test.merchlist.co/")
       }

      export const valid_login=(email, password)=>{
       cy.get("input[type=email]").type(email).should("have.value", "bi@yopmail.com")
       cy.get("input[type=password]").type(password).should("have.value", "Ren@1234567")
       cy.get("button[type=submit]").click()

       }

       export const logout=()=>{
        cy.get('.user-info > .ti-angle-down').click()
        cy.get('.ti-power-off').click({force: true})
       }
   

