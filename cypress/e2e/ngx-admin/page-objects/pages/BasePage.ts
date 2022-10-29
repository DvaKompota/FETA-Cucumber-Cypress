export default class BasePage {
    public static URL = "http://localhost:4200/"

    static pause(seconds: number) {
        cy.wait(seconds * 1000);
    }

    static cyLog(message: string) {
        cy.log(message);
    }

    static setMobileViewport() {
        cy.viewport("iphone-x");
    }

    static setTabletViewport() {
        cy.viewport("ipad-2");
    }

    static setMacbook13Viewport() {
        cy.viewport("macbook-13");
    }

    static setFullHDViewport() {
        cy.viewport(1920, 1080);
    }

    public static visitPage(): void {
        cy.visit(this.URL);
    }

    public static validateURL(): void {
        cy.url().should("contain", this.URL);
    }

}