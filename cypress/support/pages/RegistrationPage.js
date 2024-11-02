class RegistraionPage{

    webLocators={
        firstName:"#input-firstname",
        lastName:"#input-lastname",
        eMail:"#input-email",
        password:"#input-password",
        privacyPolicy:"[name='agree']",
        continue:"[type='submit']"
    }
    // Navigate to the url
    openUrl(){
        cy.visit('https://demo.opencart.com/en-gb?route=account/register')
    }
    // Enter your first name
    enterFirstName(FName){
        cy.get(this.webLocators.firstName).type(FName)
    }
    // Enter your last name
    enterLastName(LName){
        cy.get(this.webLocators.lastName).type(LName)
    }
    // Enter your email
    enterEmail(EMail){
        cy.get(this.webLocators.eMail).type(EMail)
    }
    // Enter your password
    enterPassword(Password){
        cy.get(this.webLocators.password).type(Password)
    }
    // Accept privacy policy
    checkPrivacyPolicy(){
        cy.get(this.webLocators.privacyPolicy).check()
    }
    // Click on continue to submit registration form
    clickOnContinue(){
        cy.get(this.webLocators.continue).click()
    }
    // Assertion
    isRegistrationSuccess(){
        cy.contains('Congratulations! Your new account has been successfully created!').should('be.visible')
    }
}
export default RegistraionPage;