import {navigate,valid_login,logout} from "../page_objects/Login_page"
import {createManufacturer,createManufacturerWithBlankName,createManufacturerWithDuplicateName} from "../page_objects/manufacturer_page"
import {createDuplicateBrand,createBrandForManufacturer,emptyBrandName} from "../page_objects/brand_page"
import {hover_btn, wait_for,get_and_click,get_find_click,select_and_type, submit, loop_selector,awaitingApproval, product_name} from "../page_objects/product_page"
describe("Login to Sabi", ()=>{
    after(()=>{
        logout()
    })

    it("Login with valid email and invalid password",()=>{
        navigate()
       valid_login("bi@yopmail.com", "Ren@1234567")
    })
})

describe("Create Manufacturer", ()=>{
    after(()=>{
        logout()
    })

    it("Create a manufacturer", ()=>{
        valid_login("bi@yopmail.com", "Ren@1234567")
        createManufacturerWithBlankName()
        createManufacturerWithDuplicateName()
        createManufacturer()
    })

})

describe("Create a Brand", ()=>{
    after(()=>{
        logout()
    })

    it("create a Brand For a Manufacturer", ()=>{
        valid_login("bi@yopmail.com", "Ren@1234567")
        emptyBrandName()
        createDuplicateBrand()
        createBrandForManufacturer()
    })
})

describe("Create a Product with a Blank Name", ()=>{
    before(()=>{
        valid_login("bi@yopmail.com", "Ren@1234567")
        hover_btn(".ti-package")
        get_and_click('.title:contains("Products")')
        get_and_click('a:contains("Product Catalog")')
        get_and_click(".ti-plus")
    })
    afterEach(()=>{
        wait_for(2)
    })
    it("Enter product name", ()=>{
        select_and_type('input[formcontrolname="name"]', " ")
    })
    it("Enter Brand name", ()=>{
        select_and_type('.ng-select > :contains("Select Brand")', "girlinred")
        wait_for(2)
        loop_selector(".ng-dropdown-panel-items>div:nth-child(2)",".ng-option", "girlinred")
    })
    it("Enter Manufacturer's name", ()=>{
        select_and_type('.ng-select > :contains("Select Manufacturer")', "Stephanie{enter}")
        wait_for(2)
    })
    it("Enter Product's Category", ()=>{
        select_and_type('.ng-select > :contains("Select Category")', "Fashion{enter}")
        wait_for(2)
    })
    it("Enter Product's Sub-Category", ()=>{
        select_and_type('.ng-select > :contains("Select Sub-category")', "WOMEN FASHION{enter}")
        wait_for(2)
    })
    it("Enter Product Description", ()=>{
        select_and_type('textarea[formcontrolname="description"]', "Black Hair")
    })
    it("Submit Form", ()=>{
        submit()
        cy.get('#swal2-content').should("have.text","undefined")
        cy.get('.swal2-confirm').click()
    })
})

describe("Create a Product", ()=>{
   
    afterEach(()=>{
        wait_for(2)
    })
    it("Enter product name", ()=>{
        cy.get('input.ng-invalid.ng-touched').should("have.css", "border","1px solid red")
        cy.get('input[formcontrolname="name"]').clear()
        select_and_type('input[formcontrolname="name"]', product_name)
    })
    it("Enter Brand name", ()=>{
        select_and_type('.ng-select > :contains("Select Brand")', "girlinred")
        wait_for(2)
        loop_selector(".ng-dropdown-panel-items>div:nth-child(2)",".ng-option", "girlinred")
    })
    it("Enter Manufacturer's name", ()=>{
        select_and_type('.ng-select > :contains("Select Manufacturer")', "Stephanie{enter}")
        wait_for(2)
    })
    it("Enter Product's Category", ()=>{
        select_and_type('.ng-select > :contains("Select Category")', "Fashion{enter}")
        wait_for(2)
    })
    it("Enter Product's Sub-Category", ()=>{
        select_and_type('.ng-select > :contains("Select Sub-category")', "WOMEN FASHION{enter}")
        wait_for(2)
    })
    it("Enter Product Description", ()=>{
        select_and_type('textarea[formcontrolname="description"]', "Black Hair")
    })
    it("Submit Form", ()=>{
        submit()
    })
})

describe("Approve Product", ()=>{
    before(()=>{
        navigate()
        valid_login("bi@yopmail.com", "Ren@1234567")
        hover_btn(".ti-package")
        get_and_click('.title:contains("Products")')
        get_and_click('a:contains("Product Catalog")')
        hover_btn('.page-title')
    })
    after(()=>{
        logout()
    })

    it("approve product", ()=>{
        awaitingApproval(product_name)
    })
})
