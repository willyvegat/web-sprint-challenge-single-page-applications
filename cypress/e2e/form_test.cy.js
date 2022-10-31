describe("User Onboarding App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza");
    })
    
    it("check to make sure tests work", () => {
        expect(5 + 2).to.equal(7);  
        expect(3 + 5).not.equal(5);
    })

    const nameInput = () => cy.get("input[name=name]");
    const specialInput = () => cy.get("input[name=special]");
    const submitBtn = () => cy.get("button[id='order-button']");

    it("can type in the inputs", () => {
        nameInput() 
            .should("have.value", "")
            .type("Willy")
            .should("have.value", "Willy");
        specialInput()
            .should("have.value", "")
            .type("please mae it extra crunchy")
            .should("have.value", "please mae it extra crunchy")
    })

    it("can submit the form data", () => {
        submitBtn().click()
    })
})