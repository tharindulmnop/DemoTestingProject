class LoginPage {

    visit(){
        cy.visit('https://the-internet.herokuapp.com/')
    }

}

export default new LoginPage();