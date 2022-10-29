import BasePage from "./BasePage";

export default class StepperPage extends BasePage {
    public static readonly URL = "http://localhost:4200/pages/layout/stepper"
    public static readonly STEP_LABEL_TEXT1 = "First step"
    public static readonly STEP_LABEL_TEXT2 = "Second step"
    public static readonly STEP_LABEL_TEXT3 = "Third step"
    public static readonly STEP_LABEL_TEXT4 = "Fourth step"

    public static elements = {
        stepperCard: (cardNo: number) => { return cy.get("nb-card nb-card-body").eq(cardNo - 1) },
        stepperSteps: (cardNo: number) => { return this.elements.stepperCard(cardNo).find(".step") },
        stepperStep: (cardNo: number, stepNo: number) => { return this.elements.stepperSteps(cardNo).eq(stepNo - 1) },
        stepIndex: () => { return cy.get(".label-index") },
        stepLabel: () => { return cy.get(".label") },
    }

    public static validateStepperCardVisible(cardNo: number): void {
        this.elements.stepperCard(cardNo).should('be.visible');
    }

    public static validateStepLabelsVisible(cardNo: number, stepsCount: number): void {
        this.elements.stepperSteps(cardNo).each((step, index) => {
                cy.wrap(step).contains(this[`STEP_LABEL_TEXT${index + 1}`]);
            });
    }

}