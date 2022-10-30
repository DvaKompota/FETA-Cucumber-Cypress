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

    public static locators = {
        stepIndex: ".label-index span",
        stepCheckmark: ".label-index nb-icon",
        stepLabel: ".label",
        stepContentHeading: "h3.ng-star-inserted",
        stepContentText: "p.lorem",
        stepInput: "div input",
    }

    public static elements = {
        stepperCard: (cardNo: number) => { return cy.get("nb-card nb-card-body").eq(cardNo - 1) },
        stepperSteps: (cardNo: number) => { return this.elements.stepperCard(cardNo).find(".step") },
        stepperStep: (cardNo: number, stepNo: number) => { return this.elements.stepperSteps(cardNo).eq(stepNo - 1) },
        buttonPrev: (cardNo: number) => { return this.elements.stepperCard(cardNo).contains('button', 'prev') },
        buttonNext: (cardNo: number) => { return this.elements.stepperCard(cardNo).contains('button', 'next') },
        buttonConfirm: (cardNo: number) => { return this.elements.stepperCard(cardNo).contains('button', 'Confirm') },
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

    public static validateStepLabelsVisible(cardNo: number): void {
        this.elements.stepperSteps(cardNo).each((step, index) => {
                cy.wrap(step).contains(this.locators.stepLabel, this[`STEP_LABEL_TEXT${index + 1}`]);
            });
    }

    public static validateContentHeadingVisible(cardNo: number): void {
        this.elements.stepperCard(cardNo).find(this.locators.stepContentHeading).should('be.visible');
    }

    public static validateContentHeadingText(cardNo: number, heading: string): void {
        this.elements.stepperCard(cardNo)
            .find(this.locators.stepContentHeading)
            .should('have.text', heading);
    }

    public static validateContentTextVisible(cardNo: number): void {
        this.elements.stepperCard(cardNo).find(this.locators.stepContentText).should('be.visible');
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

}