describe('user can create a contact', () => {
	it('test', () => {
        cy.visit('http://localhost:3001')
        cy.get('#add-contact').click()
        cy.get('#name').type('Noyaandstuff')
		cy.get('#email').type('noyastuff@craft.se')
		cy.get('#phone').type('0700 777799966')
		cy.get('#company').type('Nope')
		cy.get('#notes').type('Awesome nope')
		cy.get('#twitter').type('@god')
	})
})