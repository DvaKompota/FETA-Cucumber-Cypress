export default class BasePage {

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

}