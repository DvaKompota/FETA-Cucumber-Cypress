import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import StepperPage from '../../page-objects/pages/StepperPage'


When(/^user navigates to the Layout Stepper Page$/, () => {
    StepperPage.visitPage()
});

Then(/^Layout Stepper Page url is correct$/, () => {
    StepperPage.validateURL()
});

Then(/^Layout Stepper Page cards are visible$/, () => {
    StepperPage.validateStepperCardVisible(1)
    StepperPage.validateStepperCardVisible(2)
    StepperPage.validateStepperCardVisible(3)
});

Then(/^Layout Stepper Card "(.*)" has "(.*)" step labels$/, (cardNo: string, stepsCount: string) => {
    StepperPage.validateStepLabelsVisible(Number(cardNo), Number(stepsCount))
});
