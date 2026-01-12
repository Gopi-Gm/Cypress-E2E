class registerPage {


    weblocators = {

        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        passwordConfirm: '#input-confirm',
        policyCheckbox: 'input[type="checkbox"]',
        continue: '.btn.btn-primary'
    }

    openURL(URL) {
        cy.visit(URL)
    }

    enterFirstName(FName) {
        cy.get(this.weblocators.firstName).type(FName)
    }

    enterLastName(LName) {
        cy.get(this.weblocators.lastName).type(LName)
    }

    enterEmail(Email) {
        cy.get(this.weblocators.email).type(Email)
    }

    enterTelephone(Telephone) {
        cy.get(this.weblocators.telephone).type(Telephone)
    }

    enterPassword(Password) {
        cy.get(this.weblocators.password).type(Password)
    }

    enterConfirmPassword(confirmPassword) {
        cy.get(this.weblocators.passwordConfirm).type(confirmPassword)
    }

    clickPolicyCheckbox() {
        cy.get(this.weblocators.policyCheckbox).click()
    }

    clickContinue() {
        cy.get(this.weblocators.continue).click()
    }

}

module.exports = { registerPage }

