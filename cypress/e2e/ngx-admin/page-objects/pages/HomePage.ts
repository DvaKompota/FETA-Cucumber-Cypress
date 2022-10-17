import BasePage from "./BasePage";

export default class HomePage extends BasePage {
    public static readonly URL = "http://localhost:4200/pages"

    public static visitPage(): void {
        cy.visit(this.URL)
    }

    public static validateURL(): void {
        cy.url().should("contain", this.URL)
    }

}