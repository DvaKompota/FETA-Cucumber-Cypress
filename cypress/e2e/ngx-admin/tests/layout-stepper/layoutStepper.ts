import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import StepperPage from '../../page-objects/pages/StepperPage'


When(/^user navigates to the Layout Stepper Page$/, () => {
    StepperPage.visitPage()
});

Then(/^Layout Stepper Page url is correct$/, () => {
    StepperPage.validateURL()
});
