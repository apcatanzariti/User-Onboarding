describe('User Onboarding App', () => {
    beforeEach(() => {
        // arbitrary code you want to run before test starts
        cy.visit('http://localhost:3000/');
    });

    //can do our selector const variables here

    // our tests go here
    it('making sure tests work', () => {
        // expect is an assertion
        // there can be many assertions per test 
        expect(1 + 2).to.equal(3);
    });

});