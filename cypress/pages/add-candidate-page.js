class AddCandidatePage {

    elements = {
        firstNameInput: () => cy.get('input[name=firstName]'),
        lastNameInput: () => cy.get('input[name=lastName]'),
        emailInput: () => cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        saveButton: () => cy.get('button[type=submit]'),
        toastMessage: () => cy.get('.oxd-text--toast-message')
    }

    typeFirstName(firstName) {
        this.elements.firstNameInput().type(firstName);
    }

    typeLastName(lastName) {
        this.elements.lastNameInput().type(lastName);
    }

    typeEmail(email) {
        this.elements.emailInput().type(email);
    }

    clickSave() {
        this.elements.saveButton().click();
    }

    completeMandatoryFields(firstName, lastName, email){
        this.typeFirstName(firstName);
        this.typeLastName(lastName);
        this.typeEmail(email);
    }

    getToastMessage() {
        return this.elements.toastMessage();
    }
}

export default AddCandidatePage