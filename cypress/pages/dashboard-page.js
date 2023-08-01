class DashboardPage {

    elements = {
        menuOptions: () => cy.get('.oxd-main-menu-item')
    }

    clickMenuOption(option) {
        this.elements.menuOptions().contains(option).click()
    }
}

export default DashboardPage