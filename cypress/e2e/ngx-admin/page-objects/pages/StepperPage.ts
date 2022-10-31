import BasePage from "./BasePage";

export default class StepperPage extends BasePage {
    public static readonly URL = "http://localhost:4200/pages/layout/stepper"
    public static readonly STEP_LABEL_TEXT1 = "First step"
    public static readonly STEP_HEADING1 = "Step content #1"
    public static readonly STEP_LABEL_TEXT2 = "Second step"
    public static readonly STEP_HEADING2 = "Step content #2"
    public static readonly STEP_LABEL_TEXT3 = "Third step"
    public static readonly STEP_HEADING3 = "Step content #3"
    public static readonly STEP_LABEL_TEXT4 = "Fourth step"
    public static readonly STEP_HEADING4 = "Step content #4"
    public static readonly WIZARD_HEADING = "Wizard completed!"

    public static locators = {
        stepIndex: ".label-index span",
        stepCheckmark: ".label-index nb-icon",
        stepLabel: ".label",
        stepContentHeading: ".step-content h3",
        stepContentText: ".step-content p.lorem",
        stepInput: "div input",
    }

    public static elements = {
        stepperCard: (cardNo: number) => { return cy.get("nb-card nb-card-body").eq(cardNo - 1) },
        stepperSteps: (cardNo: number) => { return this.elements.stepperCard(cardNo).find(".step") },
        stepperStep: (cardNo: number, stepNo: number) => { return this.elements.stepperSteps(cardNo).eq(stepNo - 1) },
        buttonPrev: (cardNo: number) => { return this.elements.stepperCard(cardNo).contains('button', 'prev') },
        buttonNext: (cardNo: number) => { return this.elements.stepperCard(cardNo).contains('button', 'next') },
        buttonConfirm: (cardNo: number) => { return this.elements.stepperCard(cardNo).contains('button', 'Confirm') },
        buttonAgain: (cardNo: number) => { return this.elements.stepperCard(cardNo).contains('button', 'Try again') },
    }

    public static stepperParams = {
        1: {steps: 4, heading: true, text: false, prev: true},
        2: {steps: 3, heading: false, text: true, prev: false, t1: 'consectetuer', t2: 'Maurizzle', t3: 'shackalack'},
        3: {steps: 4, heading: true, text: true, prev: true, t1: 'elit', t2: 'lacinia', t3: 'ligula', t4: 'lectus'},
    }

    public static validateStepperCardVisible(cardNo: number): void {
        this.elements.stepperCard(cardNo).should('be.visible');
    }

    public static validateStepsCount(cardNo: number, stepsCount: number): void {
        this.elements.stepperSteps(cardNo).its('length').should('eq', stepsCount)
    }

    public static validateStepIndexVisible(cardNo: number, stepNo: number): void {
        this.elements.stepperStep(cardNo, stepNo).contains(this.locators.stepIndex, `${stepNo}`);
    }

    public static validateStepIndexNotVisible(cardNo: number, stepNo: number): void {
        this.elements.stepperStep(cardNo, stepNo)
            .find(this.locators.stepIndex)
            .should('not.exist');
    }

    public static validateAllStepIndicesVisible(cardNo: number): void {
        this.elements.stepperSteps(cardNo).each((step, index) => {
                cy.wrap(step).contains(this.locators.stepIndex, `${index + 1}`);
            });
    }

    public static validateAllStepIndicesNotVisible(cardNo: number): void {
        this.elements.stepperSteps(cardNo).each((step, index) => {
                cy.wrap(step)
                .find(this.locators.stepIndex)
                .should('not.exist');
            });
    }

    public static clickStep(cardNo: number, stepNo: number): void {
        this.elements.stepperStep(cardNo, stepNo).click();
    }

    public static validateStepCheckmarkVisible(cardNo: number, stepNo: number): void {
        this.elements.stepperStep(cardNo, stepNo).find(this.locators.stepCheckmark).should('be.visible');
    }

    public static validateStepCheckmarkNotVisible(cardNo: number, stepNo: number): void {
        this.elements.stepperStep(cardNo, stepNo)
            .find(this.locators.stepCheckmark)
            .should('not.exist');
    }

    public static validateAllStepCheckmarksVisible(cardNo: number): void {
        this.elements.stepperSteps(cardNo).each((step, index) => {
                cy.wrap(step)
                .find(this.locators.stepCheckmark)
                .should('be.visible');
            });
    }

    public static validateAllStepCheckmarksNotVisible(cardNo: number): void {
        this.elements.stepperSteps(cardNo).each((step, index) => {
                cy.wrap(step)
                .find(this.locators.stepCheckmark)
                .should('not.exist');
            });
    }

    public static validateAllStepLabelsVisible(cardNo: number): void {
        this.elements.stepperSteps(cardNo).each((step, index) => {
                cy.wrap(step).contains(this.locators.stepLabel, this[`STEP_LABEL_TEXT${index + 1}`]);
            });
    }

    public static validateContentHeadingVisible(cardNo: number): void {
        this.elements.stepperCard(cardNo).find(this.locators.stepContentHeading).should('be.visible');
    }

    public static validateContentHeadingNotVisible(cardNo: number): void {
        this.elements.stepperCard(cardNo)
            .find(this.locators.stepContentHeading)
            .should('not.exist');
    }

    public static validateContentHeadingText(cardNo: number, heading: string): void {
        this.elements.stepperCard(cardNo)
            .find(this.locators.stepContentHeading)
            .should('have.text', heading);
    }

    public static validateContentTextVisible(cardNo: number): void {
        this.elements.stepperCard(cardNo).find(this.locators.stepContentText).should('be.visible');
    }

    public static validateContentTextNotVisible(cardNo: number): void {
        this.elements.stepperCard(cardNo)
            .find(this.locators.stepContentText)
            .should('not.exist');
    }

    public static validateContentTextCorrect(cardNo: number, text: string): void {
        this.elements.stepperCard(cardNo).find(this.locators.stepContentText).contains(text);
    }

    public static validateInputFieldVisible(cardNo: number): void {
        this.elements.stepperCard(cardNo).find(this.locators.stepInput).should('be.visible');
    }

    public static validateInputFieldNotVisible(cardNo: number): void {
        this.elements.stepperCard(cardNo)
        .find(this.locators.stepInput)
        .should('not.exist');
}

    public static validateInputFieldValueIs(cardNo: number, text: string): void {
        this.elements.stepperCard(cardNo)
            .find(this.locators.stepInput)
            .should('have.value', text);
    }

    public static fillInputField(cardNo: number, text: string): void {
        this.elements.stepperCard(cardNo).find(this.locators.stepInput).type(text);
    }

    public static validatePrevButtonVisible(cardNo: number): void {
        this.elements.buttonPrev(cardNo).should('be.visible');
    }

    public static validatePrevButtonEnabled(cardNo: number): void {
        this.elements.buttonPrev(cardNo).should('be.enabled');
    }

    public static validatePrevButtonDisabled(cardNo: number): void {
        this.elements.buttonPrev(cardNo).should('be.disabled');
    }

    public static clickPrevButton(cardNo: number): void {
        this.elements.buttonPrev(cardNo).click();
    }

    public static validateNextButtonVisible(cardNo: number): void {
        this.elements.buttonNext(cardNo).should('be.visible');
    }

    public static validateNextButtonEnabled(cardNo: number): void {
        this.elements.buttonNext(cardNo).should('be.enabled');
    }

    public static validateNextButtonDisabled(cardNo: number): void {
        this.elements.buttonNext(cardNo).should('be.disabled');
    }

    public static clickNextButton(cardNo: number): void {
        this.elements.buttonNext(cardNo).click();
    }

    public static validateConfirmButtonVisible(cardNo: number): void {
        this.elements.buttonConfirm(cardNo).should('be.visible');
    }

    public static validateConfirmButtonEnabled(cardNo: number): void {
        this.elements.buttonConfirm(cardNo).should('be.enabled');
    }

    public static validateConfirmButtonDisabled(cardNo: number): void {
        this.elements.buttonConfirm(cardNo).should('be.disabled');
    }

    public static clickConfirmButton(cardNo: number): void {
        this.elements.buttonConfirm(cardNo).click();
    }

    public static validateTryAgainButtonVisible(cardNo: number): void {
        this.elements.buttonAgain(cardNo).should('be.visible');
    }

    public static validateTryAgainButtonEnabled(cardNo: number): void {
        this.elements.buttonAgain(cardNo).should('be.enabled');
    }

    public static validateTryAgainButtonDisabled(cardNo: number): void {
        this.elements.buttonAgain(cardNo).should('be.disabled');
    }

    public static clickTryAgainButton(cardNo: number): void {
        this.elements.buttonAgain(cardNo).click();
    }

}