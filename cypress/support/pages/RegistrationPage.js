class RegistraionPage{

    webLocators={
        firstName:"#input-firstname",
        lastName:"#input-lastname",
        eMail:"#input-email",
        password:"#input-password",
        privacyPolicy:"[name='agree']",
        continue:"[type='submit']"
    }
    openUrl(){
        cy.visit('https://demo.opencart.com/en-gb?route=account/register')
    }

    enterFirstName(FName){
        cy.get(this.webLocators.firstName).type(FName)
    }

    enterLastName(LName){
        cy.get(this.webLocators.lastName).type(LName)
    }

    enterEmail(EMail){
        cy.get(this.webLocators.eMail).type(EMail)
    }

    enterPassword(Password){
        cy.get(this.webLocators.password).type(Password)
    }

    checkPrivacyPolicy(){
        cy.get(this.webLocators.privacyPolicy).check()
    }

    clickOnContinue(){
        cy.get(this.webLocators.continue).click()
    }
    // Assertion
    isRegistrationSuccess(){
        cy.contains('Congratulations! Your new account has been successfully created!').should('be.visible')
    }
}
export default RegistraionPage;