class RecruitmentPage {
    elements = {
        addCandidate: () => cy.get('.oxd-button')
    }

    clickAdd() {
        this.elements.addCandidate().contains("Add").click();
    }
}

export default RecruitmentPage