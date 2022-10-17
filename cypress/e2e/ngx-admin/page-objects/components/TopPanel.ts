export default class LeftNav {
    private static readonly LEFT_NAV_TOGGLE = 'a.sidebar-toggle'
    public static readonly LOGO = "a.logo"

    public static verifyNavToggleVisible(): void {
        cy.get(this.LEFT_NAV_TOGGLE).should('be.visible')
    }

    public static validateLogoVisible(): void {
        cy.get(this.LOGO).should("be.visible")
    }
}