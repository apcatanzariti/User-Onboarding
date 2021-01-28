describe('User Onboarding App', () => {
    beforeEach(() => {
        // arbitrary code you want to run before test starts
        cy.visit('http://localhost:3000/');
    });

    //can do our selector const variables here
    const nameInput = () => cy.get('input[name="name"]');
    const emailInput = () => cy.get('input[name="email"]');
    const passInput = () => cy.get('input[name="password"]');
    const termsInput = () => cy.get('input[name="terms"]');
    const button = () => cy.contains('Welcome Aboard!');

    // our tests go here
    it('making sure tests work', () => {
        // expect is an assertion
        // there can be many assertions per test 
        expect(1 + 2).to.equal(3);
    });

    it('type a name into the correct input', () => {
        nameInput().type('Anthony');
    });

    it('check if name input contains correct name', () => {
        nameInput().type('Anthony');
        nameInput().should('have.value', 'Anthony');
    });

    it('type an email into the correct input', () => {
        emailInput().type('test@test.com');
    });

    it('typing a password into the correct input', () => {
        passInput().type('mypassword');
    });

    it('checking and unchecking terms of service checkbox', () => {
        termsInput().should('not.be.checked');
        termsInput().check();
        termsInput().uncheck();
    });

    it('checking to see if button stays disabled until the required fields are filled out', () => {
        // button should start off disabled
        button().should('be.disabled');
        // fill in the name input and checking that button is still disabled
        nameInput().type('Bobby Orr');
        button().should('be.disabled');
        // fill in email and check if button remains disabled
        emailInput().type('email@bruins.com');
        button().should('be.disabled');
        // fill in password and button should enable
        passInput().type('Bruins4');
        button().should('not.be.disabled');
        // click the button now that it is enabled
        button().click();
        
    });

    it('check to see if button disables if all inputs are filled out, then one is deleted', () => {
        // button starts out disabled
        button().should('be.disabled');
        // three inputs filled out and button should enable
        nameInput().type('Anthony C');
        emailInput().type('thisemail@gmail.com');
        passInput().type('c00lpassword');
        button().should('not.be.disabled');
        // delete one of the inputs and the button should disable
        emailInput().clear();
        button().should('be.disabled');

    })

});

// Get the Name input and type a name in it.
// Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
// Get the Email input and type an email address in it
// Get the password input and type a password in it
// Set up a test that will check to see if a user can check the terms of service box
// Check to see if a user can submit the form data
// Check for form validation if an input is left empty