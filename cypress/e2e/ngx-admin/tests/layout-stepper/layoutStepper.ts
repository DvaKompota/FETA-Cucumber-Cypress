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

Then(/^Layout Stepper happy elements are visible$/, () => {
    StepperPage.validateStepperCardVisible(1)
    StepperPage.validateStepLabelsVisible(1)
    StepperPage.validateStepIndicesVisible(1)
    StepperPage.validateContentHeadingVisible(1)
    StepperPage.validateContentHeadingText(1, 1)
    StepperPage.validatePrevButtonVisible(1)
    StepperPage.validateNextButtonVisible(1)

    StepperPage.validateStepperCardVisible(2)
    StepperPage.validateStepLabelsVisible(2)
    StepperPage.validateStepIndicesVisible(2)
    StepperPage.validateContentTextVisible(2)
    StepperPage.validateNextButtonVisible(2)

    StepperPage.validateStepperCardVisible(3)
    StepperPage.validateStepLabelsVisible(3)
    StepperPage.validateStepIndicesVisible(3)
    StepperPage.validateContentHeadingVisible(3)
    StepperPage.validateContentHeadingText(3, 1)
    StepperPage.validateContentTextVisible(3)
    StepperPage.validatePrevButtonVisible(3)
    StepperPage.validateNextButtonVisible(3)
});

Then(/^Layout Stepper Card "(.*)" has all step labels visible$/, (cardNo: string) => {
    StepperPage.validateStepLabelsVisible(Number(cardNo))
});

Then(/^Layout Stepper Card "(.*)" has "(.*)" steps$/, (cardNo: string, stepsCount: string) => {
    StepperPage.validateStepsCount(Number(cardNo), Number(stepsCount))
});
