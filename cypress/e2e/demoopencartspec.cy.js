import regData from "../fixtures/registrationData.json"
import RegistraionPage from "../support/pages/registrationPage"
const registration = new RegistraionPage();
describe('Demo Opencart', () => {
  it('Validate registration process', () => {
    registration.openUrl();
    registration.enterFirstName(regData.firstName);
    registration.enterLastName(regData.lastName);
    registration.enterEmail(regData.email);
    registration.enterPassword(regData.password);
    registration.checkPrivacyPolicy();
    registration.clickOnContinue();
  })
})