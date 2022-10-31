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
    StepperPage.validateAllStepLabelsVisible(1);
    StepperPage.validateAllStepIndicesVisible(1);
    StepperPage.validateContentHeadingVisible(1);
    StepperPage.validateContentTextNotVisible(1);
    StepperPage.validateInputFieldNotVisible(1)
    StepperPage.validatePrevButtonVisible(1);
    StepperPage.validateNextButtonVisible(1);

    StepperPage.validateStepperCardVisible(2);
    StepperPage.validateAllStepLabelsVisible(2);
    StepperPage.validateAllStepIndicesVisible(2);
    StepperPage.validateContentHeadingNotVisible(2);
    StepperPage.validateContentTextVisible(2);
    StepperPage.validateInputFieldVisible(2);
    StepperPage.validateNextButtonVisible(2);

    StepperPage.validateStepperCardVisible(3);
    StepperPage.validateAllStepLabelsVisible(3);
    StepperPage.validateAllStepIndicesVisible(3);
    StepperPage.validateContentHeadingVisible(3);
    StepperPage.validateContentTextVisible(3);
    StepperPage.validateInputFieldNotVisible(3)
    StepperPage.validatePrevButtonVisible(3);
    StepperPage.validateNextButtonVisible(3);
});

Given(/^Layout Stepper card "(.*)" is in the initial state$/, (cardNo: string) => {
    StepperPage.validateStepperCardVisible(Number(cardNo));
    StepperPage.validateStepsCount(Number(cardNo), StepperPage.stepperParams[cardNo].steps);
    StepperPage.validateAllStepIndicesVisible(Number(cardNo));
    StepperPage.validateAllStepCheckmarksNotVisible(Number(cardNo));
    if (StepperPage.stepperParams[cardNo].heading) {
        StepperPage.validateContentHeadingVisible(Number(cardNo));
        StepperPage.validateContentHeadingText(Number(cardNo), StepperPage.STEP_HEADING1);
    } else {
        StepperPage.validateContentHeadingNotVisible(Number(cardNo))
    }
    if (StepperPage.stepperParams[cardNo].text) {
        StepperPage.validateContentTextVisible(Number(cardNo));
        StepperPage.validateContentTextCorrect(Number(cardNo), StepperPage.stepperParams[cardNo].firstStepText);
    } else {
        StepperPage.validateContentTextNotVisible(Number(cardNo))
    }
    if (StepperPage.stepperParams[cardNo].input) {
        StepperPage.validateInputFieldVisible(Number(cardNo));
        StepperPage.validateInputFieldValueIs(Number(cardNo), "");
    } else {
        StepperPage.validateInputFieldNotVisible(Number(cardNo))
    }
    if (StepperPage.stepperParams[cardNo].prevButton) {
        StepperPage.validatePrevButtonVisible(Number(cardNo));
        StepperPage.validatePrevButtonDisabled(Number(cardNo));
    }
    StepperPage.validateNextButtonVisible(Number(cardNo));
    StepperPage.validateNextButtonEnabled(Number(cardNo));
});

Then(/^user data for "(.*)" is loaded$/, (user: string) => {
    cy.fixture("ngx-admin/users").then(users => {
        cy.wrap(users[user]).as('user')
    })
});

Then(/^Layout Stepper card "(.*)" has "(.*)" steps$/, (cardNo: string, stepsCount: string) => {
    StepperPage.validateStepsCount(Number(cardNo), Number(stepsCount));
});

Then(/^Layout Stepper card "(.*)" step "(.*)" index is "(visible|not visible)"$/, 
    (cardNo: string, stepNo: number, visible: string) => {
        const isVisible = visible === 'visible'
        if (isVisible) {
            StepperPage.validateStepIndexVisible(Number(cardNo), Number(stepNo));
        } else {
            StepperPage.validateStepIndexNotVisible(Number(cardNo), Number(stepNo));
        }
    }
);

Then(/^Layout Stepper card "(.*)" all step indices are "(visible|not visible)"$/, 
    (cardNo: string, visible: string) => {
        const isVisible = visible === 'visible'
        if (isVisible) {
            StepperPage.validateAllStepIndicesVisible(Number(cardNo));
        } else {
            StepperPage.validateAllStepIndicesNotVisible(Number(cardNo));
        }
    }
);


When(/^user clicks Layout Stepper card "(.*)" step "(.*)" index$/, 
    (cardNo: string, stepNo: number) => {
        StepperPage.clickStep(Number(cardNo), Number(stepNo));
});

Then(/^Layout Stepper card "(.*)" step "(.*)" checkmark is "(visible|not visible)"$/, 
    (cardNo: string, stepNo: number, visible: string) => {
        const isVisible = visible === 'visible'
        if (isVisible) {
            StepperPage.validateStepCheckmarkVisible(Number(cardNo), Number(stepNo));
        } else {
            StepperPage.validateStepCheckmarkNotVisible(Number(cardNo), Number(stepNo));
        }
    }
);

Then(/^Layout Stepper card "(.*)" all step checkmarks are "(visible|not visible)"$/, 
    (cardNo: string, visible: string) => {
        const isVisible = visible === 'visible'
        if (isVisible) {
            StepperPage.validateAllStepCheckmarksVisible(Number(cardNo));
        } else {
            StepperPage.validateAllStepCheckmarksNotVisible(Number(cardNo));
        }
    }
);

Then(/^Layout Stepper card "(.*)" has all step labels visible$/, (cardNo: string) => {
    StepperPage.validateAllStepLabelsVisible(Number(cardNo));
});

Then(/^Layout Stepper card "(.*)" content heading is "(visible|not visible)"$/, 
    (cardNo: string, visible: string) => {
        const isVisible = visible === 'visible'
        if (isVisible) {
            StepperPage.validateContentHeadingVisible(Number(cardNo));
        } else {
            StepperPage.validateContentHeadingNotVisible(Number(cardNo));
        }
    }
);

Then(/^Layout Stepper card "(.*)" has "(.*)" heading$/, (cardNo: string, heading: string) => {
    StepperPage.validateContentHeadingText(Number(cardNo), heading);
});

Then(/^Layout Stepper card "(.*)" content text is "(visible|not visible)"$/, 
    (cardNo: string, visible: string) => {
        const isVisible = visible === 'visible'
        if (isVisible) {
            StepperPage.validateContentTextVisible(Number(cardNo));
        } else {
            StepperPage.validateContentTextNotVisible(Number(cardNo));
        }
    }
);

Then(/^Layout Stepper card "(.*)" has "(.*)" in content text$/, (cardNo: string, text: string) => {
    StepperPage.validateContentTextCorrect(Number(cardNo), text);
});

Then(/^Layout Stepper card "(.*)" input field is "(visible|not visible)"$/, 
    (cardNo: string, visible: string) => {
        const isVisible = visible === 'visible'
        if (isVisible) {
            StepperPage.validateInputFieldVisible(Number(cardNo));
        } else {
            StepperPage.validateInputFieldNotVisible(Number(cardNo));
        }
    }
);

Then(/^Layout Stepper card "(.*)" input field value is (?:user )?"(empty|name|movie|something)"$/, 
    (cardNo: string, userData: string) => {
        cy.log(`cardNo = ${cardNo}`)
        cy.log(`userData = ${userData}`)
        if (userData == "empty"){
            StepperPage.validateInputFieldValueIs(Number(cardNo), "")
        } else {
            cy.get<Object>('@user').then(user => {
                StepperPage.validateInputFieldValueIs(Number(cardNo), user[userData]);
            });
        }
    }
);

When(/^user fills Layout Stepper card "(.*)" input with user "(name|movie|something)"$/, 
    (cardNo: string, userData: string) => {
        cy.get<Object>('@user').then(user => {
            StepperPage.fillInputField(Number(cardNo), user[userData]);
        })
    }
);

Then(/^Layout Stepper card "(.*)" Prev button is "(enabled|disabled)"$/, (cardNo: string, enabled: string) => {
    const isEnabled = enabled === 'enabled'
    if (isEnabled) {
        StepperPage.validatePrevButtonEnabled(Number(cardNo));
    } else {
        StepperPage.validatePrevButtonDisabled(Number(cardNo));
    }
});

When(/^user clicks Layout Stepper card "(.*)" Prev button$/, (cardNo: string) => {
    StepperPage.clickPrevButton(Number(cardNo));
});

Then(/^Layout Stepper card "(.*)" Next button is "(enabled|disabled)"$/, (cardNo: string, enabled: string) => {
    const isEnabled = enabled === 'enabled'
    if (isEnabled) {
        StepperPage.validateNextButtonEnabled(Number(cardNo));
    } else {
        StepperPage.validateNextButtonDisabled(Number(cardNo));
    }
});

When(/^user clicks Layout Stepper card "(.*)" Next button$/, (cardNo: string) => {
    StepperPage.clickNextButton(Number(cardNo));
});

Then(/^Layout Stepper card "(.*)" Confirm button is "(enabled|disabled)"$/, (cardNo: string, enabled: string) => {
    const isEnabled = enabled === 'enabled'
    if (isEnabled) {
        StepperPage.validateConfirmButtonEnabled(Number(cardNo));
    } else {
        StepperPage.validateConfirmButtonDisabled(Number(cardNo));
    }
});

When(/^user clicks Layout Stepper card "(.*)" Confirm button$/, (cardNo: string) => {
    StepperPage.clickConfirmButton(Number(cardNo));
});

Then(/^Layout Stepper card "(.*)" Try Again button is "(enabled|disabled)"$/, (cardNo: string, enabled: string) => {
    const isEnabled = enabled === 'enabled'
    if (isEnabled) {
        StepperPage.validateTryAgainButtonEnabled(Number(cardNo));
    } else {
        StepperPage.validateTryAgainButtonDisabled(Number(cardNo));
    }
});

When(/^user clicks Layout Stepper card "(.*)" Try Again button$/, (cardNo: string) => {
    StepperPage.clickTryAgainButton(Number(cardNo));
});
