import LoginPage from "../pages/login-page"
import DashboardPage from "../pages/dashboard-page"
import RecruitmentPage from "../pages/recruitment-page"
import AddCandidatePage from "../pages/add-candidate-page"

const loginPage = new LoginPage
const dashboardPage = new DashboardPage
const recruitmentPage = new RecruitmentPage
const addCandidatePage = new AddCandidatePage

describe('Recruitment', () => {
    before(function ()  {
        loginPage.visit();
        cy.fixture('login').then((login) => {
            loginPage.performLogin(login.username, login.password);
        })
    })
    
    it('Add successfully a new candidate only with mandatory information', () => {
        dashboardPage.clickMenuOption('Recruitment');
        recruitmentPage.clickAdd();
        cy.fixture('candidate').then((candidate) => {
            addCandidatePage.completeMandatoryFields(candidate.firstName, candidate.lastName, candidate.email);
        })
        addCandidatePage.clickSave();
        addCandidatePage.getToastMessage()
            .invoke('text')
            .should('eq', 'Successfully Saved');
    })
})
