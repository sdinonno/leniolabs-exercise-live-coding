class LoginPage {

    elements = {
        usernameInput: () => cy.get('input[name="username"]'),
        passwordInput: () => cy.get('input[name="password"]'),
        loginBtn: () => cy.get('.oxd-button'),
    }

    visit() {
        cy.visit("/");
    }

    typeUsername(username) {
        this.elements.usernameInput().type(username);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickLoginButton() {
        this.elements.loginBtn().click();
    }

    performLogin(username, password) {
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLoginButton();
    }
}

export default LoginPage