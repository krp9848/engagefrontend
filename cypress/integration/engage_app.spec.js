describe('Engage app', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    const user = {
      name: 'kabiraj',
      username: 'kabi_pant',
      password: 'kabiraj',
    }
    cy.request('POST', 'http://localhost:3001/api/users/', user)
    cy.visit('http://localhost:3000')
  })
  it('front page can be opened', function () {
    cy.contains('Engage')
  })
  it('user can login', function () {
    cy.get('#username').type('kabi_pant')
    cy.get('#password').type('kabiraj')
    cy.get('#login-button').click()
    cy.contains('kabi_pant logged in')
  })
  it('login fails with wrong password', function () {
    cy.get('#username').type('kabi_pant')
    cy.get('#password').type('kabir')
    cy.get('#login-button').click()
    cy.get('.info')
      .should('contain', 'wrong username or password')
      .and('have.css', 'color', 'rgb(255, 0, 0)')
      .and('have.css', 'border-style', 'solid')

    cy.get('html').should('not.contain', 'kabi_pant logged in')
  })

  describe('when user is logged in', function () {
    beforeEach(function () {
      cy.login({ username: 'kabi_pant', password: 'kabiraj' })
    })
    it('new tweet can be created', function () {
      cy.get('#tweet-text').type('My third tweet')
      cy.get('#tweet-button').click()
      cy.contains('My third tweet')
    })
  })
})
