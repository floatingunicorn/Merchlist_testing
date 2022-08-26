export const product_name="irishcream"

export const hover_btn = (value) => {
  cy.get(value).realHover();
};

export const wait_for= (sec)=>{
    cy.wait(sec * 1000)
}

export const get_find_click=(get_value, find_value)=>{
    cy.get(get_value)
    .find(find_value)
    .click()
}

export const get_and_click=(get_value)=>{
    cy.get(get_value).click({ force: true });
}


export const select_and_type = (selector, type_value) => {
  cy.get(selector).click().type(type_value);
};

export const submit = ()=>{
    cy.get(".btn").click()
}

export const loop_selector= (get_value,find_value, text_value)=>{
    cy.get(get_value)
    .find(find_value)
    .each(($el,index,$list)=>{
        const text_select = $el.find('span.ng-option-label').text()
        if(text_select === text_value){
            cy.wrap($el).find('span.ng-option-label').click()
        }
    })
}


export const awaitingApproval = (value)=>{
    cy.get('.container-fluid > :nth-child(3) > :nth-child(2) > span').click()
    cy.get(".table tbody").contains(value).should("contain", value)
    cy.get(':nth-child(1) > :nth-child(4) > .mrg-top-10 > .user-profile > .dropdown-toggle > .fa').click()
    cy.get(':nth-child(1) > :nth-child(4) > .mrg-top-10 > .user-profile > .dropdown-menu > :nth-child(1) > .ng-star-inserted > .ti-check').click()
    cy.get('.swal2-confirm').click()
    cy.get('#swal2-title').should("have.text","Success")
    cy.get('.swal2-confirm').click()
}
