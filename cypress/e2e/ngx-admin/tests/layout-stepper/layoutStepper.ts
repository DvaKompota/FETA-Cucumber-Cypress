import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import StepperPage from '../../page-objects/pages/StepperPage'


When(/^user navigates to the Layout Stepper Page$/, () => {
    StepperPage.visitPage();
});

Then(/^Layout Stepper Page url is correct$/, () => {
    StepperPage.validateURL();
});

Then(/^Layout Stepper Page cards are visible$/, () => {
    StepperPage.validateStepperCardVisible(1);
    StepperPage.validateStepperCardVisible(2);
    StepperPage.validateStepperCardVisible(3);
});

Then(/^Layout Stepper happy elements are visible$/, () => {
    StepperPage.validateStepperCardVisible(1);
    StepperPage.validateStepLabelsVisible(1);
    StepperPage.validateAllStepIndicesVisible(1);
    StepperPage.validateContentHeadingVisible(1);
    StepperPage.validatePrevButtonVisible(1);
    StepperPage.validateNextButtonVisible(1);

    StepperPage.validateStepperCardVisible(2);
    StepperPage.validateStepLabelsVisible(2);
    StepperPage.validateAllStepIndicesVisible(2);
    StepperPage.validateContentTextVisible(2);
    StepperPage.validateNextButtonVisible(2);

    StepperPage.validateStepperCardVisible(3);
    StepperPage.validateStepLabelsVisible(3);
    StepperPage.validateAllStepIndicesVisible(3);
    StepperPage.validateContentHeadingVisible(3);
    StepperPage.validateContentTextVisible(3);
    StepperPage.validatePrevButtonVisible(3);
    StepperPage.validateNextButtonVisible(3);
});

Then(/^Layout Stepper Card "(.*)" step "(.*)" index is "(visible|not visible)"$/, 
    (cardNo: string, stepNo: number, visible: string) => {
        const isVisible = visible === 'visible'
        if (isVisible) {
            StepperPage.validateStepIndexVisible(Number(cardNo), Number(stepNo));
        } else {
            StepperPage.validateStepIndexNotVisible(Number(cardNo), Number(stepNo));
        }
    }
);

Then(/^Layout Stepper Card "(.*)" all step indices are "(visible|not visible)"$/, 
    (cardNo: string, visible: string) => {
        const isVisible = visible === 'visible'
        if (isVisible) {
            StepperPage.validateAllStepIndicesVisible(Number(cardNo));
        } else {
            StepperPage.validateAllStepIndicesNotVisible(Number(cardNo));
        }
    }
);

Then(/^Layout Stepper Card "(.*)" step "(.*)" checkmark is "(visible|not visible)"$/, 
    (cardNo: string, stepNo: number, visible: string) => {
        const isVisible = visible === 'visible'
        if (isVisible) {
            StepperPage.validateStepCheckmarkVisible(Number(cardNo), Number(stepNo));
        } else {
            StepperPage.validateStepCheckmarkNotVisible(Number(cardNo), Number(stepNo));
        }
    }
);

Then(/^Layout Stepper Card "(.*)" all step checkmarks are "(visible|not visible)"$/, 
    (cardNo: string, visible: string) => {
        const isVisible = visible === 'visible'
        if (isVisible) {
            StepperPage.validateAllStepCheckmarksVisible(Number(cardNo));
        } else {
            StepperPage.validateAllStepCheckmarksNotVisible(Number(cardNo));
        }
    }
);

Then(/^Layout Stepper Card "(.*)" has all step labels visible$/, (cardNo: string) => {
    StepperPage.validateStepLabelsVisible(Number(cardNo));
});

Then(/^Layout Stepper Card "(.*)" has "(.*)" steps$/, (cardNo: string, stepsCount: string) => {
    StepperPage.validateStepsCount(Number(cardNo), Number(stepsCount));
});

Then(/^Layout Stepper Card "(.*)" has "(.*)" heading$/, (cardNo: string, heading: string) => {
    StepperPage.validateContentHeadingText(Number(cardNo), heading);
});

Then(/^Layout Stepper Card "(.*)" Prev button is "(enabled|disabled)"$/, (cardNo: string, enabled: string) => {
    const isEnabled = enabled === 'enabled'
    if (isEnabled) {
        StepperPage.validatePrevButtonEnabled(Number(cardNo));
    } else {
        StepperPage.validatePrevButtonDisabled(Number(cardNo));
    }
});

When(/^user clicks Layout Stepper Card "(.*)" Prev button$/, (cardNo: string) => {
    StepperPage.clickPrevButton(Number(cardNo));
});

Then(/^Layout Stepper Card "(.*)" Next button is "(enabled|disabled)"$/, (cardNo: string, enabled: string) => {
    const isEnabled = enabled === 'enabled'
    if (isEnabled) {
        StepperPage.validateNextButtonEnabled(Number(cardNo));
    } else {
        StepperPage.validateNextButtonDisabled(Number(cardNo));
    }
});

When(/^user clicks Layout Stepper Card "(.*)" Next button$/, (cardNo: string) => {
    StepperPage.clickNextButton(Number(cardNo));
});

Then(/^Layout Stepper Card "(.*)" Confirm button is "(enabled|disabled)"$/, (cardNo: string, enabled: string) => {
    const isEnabled = enabled === 'enabled'
    if (isEnabled) {
        StepperPage.validateConfirmButtonEnabled(Number(cardNo));
    } else {
        StepperPage.validateConfirmButtonDisabled(Number(cardNo));
    }
});

When(/^user clicks Layout Stepper Card "(.*)" Confirm button$/, (cardNo: string) => {
    StepperPage.clickConfirmButton(Number(cardNo));
});
