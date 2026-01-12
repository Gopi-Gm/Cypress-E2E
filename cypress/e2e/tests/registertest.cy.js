import { registerPage } from "../../Pages/registerpage";
import registerData from "../../fixtures/registerData.json";


const registerPageObj = new registerPage();



describe("Register Page Test", () => {
    it("Should register a new user", () => {
        registerPageObj.openURL(Cypress.env('URL'))
        registerPageObj.enterFirstName(registerData.firstName)
        registerPageObj.enterLastName(registerData.lastName)
        registerPageObj.enterEmail(registerData.email)
        registerPageObj.enterTelephone(registerData.telephone)
        registerPageObj.enterPassword(registerData.password)
        registerPageObj.enterConfirmPassword(registerData.confirmPassword)
        registerPageObj.clickPolicyCheckbox()
        registerPageObj.clickContinue()
    })
});