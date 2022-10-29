import BasePage from "./BasePage";

export default class StepperPage extends BasePage {
    public static readonly URL = "http://localhost:4200/pages/layout/stepper"
    public static readonly NB_CARD = "nb-card nb-card-body"
    public static readonly STEP = ".step"
    public static readonly STEP_INDEX = ".label-index"
    public static readonly STEP_LABEL = ".label"
    public static readonly STEP_LABEL_TEXT1 = "First step"
    public static readonly STEP_LABEL_TEXT2 = "Second step"
    public static readonly STEP_LABEL_TEXT3 = "Third step"
    public static readonly STEP_LABEL_TEXT4 = "Fourth step"

    public static visitPage(): void {
        cy.visit(this.URL);
    }

    public static validateURL(): void {
        cy.url().should("contain", this.URL);
    }

    public static validateStepperCardVisible(cardNo: number): void {
        cy.get(this.NB_CARD).eq(cardNo - 1 ).should('be.visible');
    }

    public static validateStepLabelsVisible(cardNo: number, stepsCount: number): void {
        cy.get(this.NB_CARD).eq(cardNo - 1).then(card => {
            cy.wrap(card).find(this.STEP_LABEL).each((label, index) => {
                cy.wrap(label).contains(this[`STEP_LABEL_TEXT${index + 1}`]);
            });
        });
    }

}