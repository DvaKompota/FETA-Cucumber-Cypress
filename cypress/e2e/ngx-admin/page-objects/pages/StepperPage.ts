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
        stepIndex: ".label-index",
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

    public static validateStepLabelsVisible(cardNo: number): void {
        this.elements.stepperSteps(cardNo).each((step, index) => {
                cy.wrap(step).contains(this[`STEP_LABEL_TEXT${index + 1}`]);
            });
    }

    public static validateContentHeadingVisible(cardNo: number): void {
        this.elements.stepperCard(cardNo).find(this.locators.stepContentHeading).should('be.visible');
    }

    public static validateContentHeadingText(cardNo: number, stepNo: number): void {
        this.elements.stepperCard(cardNo)
            .find(this.locators.stepContentHeading)
            .should('have.text', this[`STEP_HEADING${stepNo}`]);
    }

    public static validateContentTextVisible(cardNo: number): void {
        this.elements.stepperCard(cardNo).find(this.locators.stepContentText).should('be.visible');
    }

    public static validatePrevButtonVisible(cardNo: number): void {
        this.elements.buttonPrev(cardNo).should('be.visible');
    }

    public static validateNextButtonVisible(cardNo: number): void {
        this.elements.buttonNext(cardNo).should('be.visible');
    }

    public static validateConfirmButtonVisible(cardNo: number): void {
        this.elements.buttonConfirm(cardNo).should('be.visible');
    }

}