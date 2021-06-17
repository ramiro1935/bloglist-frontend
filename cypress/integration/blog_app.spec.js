describe('blog app', function () {
	beforeEach(function () {
		cy.request('POST', 'http://localhost:3003/api/testing/reset')
		const user = {
			name: 'Ramiro',
			username: 'bestoroot',
			password: 'testing',
		}

		cy.request('POST', 'http://localhost:3003/api/users/', user)
		cy.visit('http://localhost:3000')
	})
	it('front page can be opened', function () {
		cy.contains('blogs')
	})

	it('login form can be openined', function () {
		cy.contains('login').click()
		cy.get('#user').type('bestoroot')
		cy.get('#password').type('testing')
		cy.get('#loginButton').click()

		cy.contains('create new')
	})

	it('login fails with wrong password', function () {
		cy.contains('login').click()
		cy.get('#user').type('bestoroot')
		cy.get('#password').type('12345')
		cy.get('#loginButton').click()
		cy.get('.error').should('contain', 'invalid username or password')
	})

	describe('when logged in', function () {
		beforeEach(function () {
			cy.request('POST', 'http://localhost:3003/api/login/', {
				username: 'bestoroot',
				password: 'testing',
			}).then(response => {
				localStorage.setItem('user', JSON.stringify(response.body))
			})
			cy.visit('http://localhost:3000')
		})

		it('a new blog can be created', function () {
			cy.contains('create new note').click()
			cy.get('#title').type('a new blog')
			cy.get('#author').type('created by cypress')
			cy.get('#url').type('https://cypress.com')
			cy.get('#createBlog').click()
			cy.contains('a new blog was added')
		})
	})
})
