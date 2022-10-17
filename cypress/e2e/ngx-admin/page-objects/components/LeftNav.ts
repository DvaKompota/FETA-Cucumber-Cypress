export default class LeftNav {
    private static readonly LEFT_NAV_TOGGLE = 'a.sidebar-toggle'
    private static readonly MENU_HEADING = 'li.menu-item'
    private static readonly MENU_ITEM = 'li.menu-item .menu-title'
    private static readonly LAYOUT = 'a[title="Layout"]'
    private static readonly LAYOUT_TITLE = this.LAYOUT + ' span.menu-title'
    private static readonly LAYOUT_ICON = this.LAYOUT + ' nb-icon.menu-icon'
    private static readonly FORMS = 'a[title="Forms"]'
    private static readonly FORMS_TITLE = this.FORMS + ' span.menu-title'
    private static readonly FORMS_ICON = this.FORMS + ' nb-icon.menu-icon'
    private static readonly MODAL_OVERLAYS = 'a[title="Modal & Overlays"]'
    private static readonly MODAL_OVERLAYS_TITLE = this.MODAL_OVERLAYS + ' span.menu-title'
    private static readonly MODAL_OVERLAYS_ICON = this.MODAL_OVERLAYS + ' nb-icon.menu-icon'
    private static readonly EXTRA_COMPONENTS = 'a[title="Extra Components"]'
    private static readonly EXTRA_COMPONENTS_TITLE = this.EXTRA_COMPONENTS + ' span.menu-title'
    private static readonly EXTRA_COMPONENTS_ICON = this.EXTRA_COMPONENTS + ' nb-icon.menu-icon'
    private static readonly TABLES_DATA = 'a[title="Tables & Data"]'
    private static readonly TABLES_DATA_TITLE = this.TABLES_DATA + ' span.menu-title'
    private static readonly TABLES_DATA_ICON = this.TABLES_DATA + ' nb-icon.menu-icon'
    private static readonly AUTH = 'a[title="Auth"]'
    private static readonly AUTH_TITLE = this.AUTH + ' span.menu-title'
    private static readonly AUTH_ICON = this.AUTH + ' nb-icon.menu-icon'

    public static verifyNavToggleVisible(): void {
        cy.get(this.LEFT_NAV_TOGGLE).should('be.visible')
    }

    public static verifyAllMenuTitlesVisible(): void {
        cy.contains(this.MENU_HEADING, 'FEATURES').should('be.visible')
        cy.get(this.LAYOUT_TITLE).should('be.visible')
        cy.get(this.FORMS_TITLE).should('be.visible')
        cy.get(this.MODAL_OVERLAYS_TITLE).should('be.visible')
        cy.get(this.EXTRA_COMPONENTS_TITLE).should('be.visible')
        cy.get(this.TABLES_DATA_TITLE).should('be.visible')
        cy.get(this.AUTH_TITLE).should('be.visible')
    }

    public static verifyAllMenuTitlesNotVisible(): void {
        cy.contains(this.MENU_HEADING, 'FEATURES').should('not.be.visible')
        cy.get(this.LAYOUT_TITLE).should('not.be.visible')
        cy.get(this.FORMS_TITLE).should('not.be.visible')
        cy.get(this.MODAL_OVERLAYS_TITLE).should('not.be.visible')
        cy.get(this.EXTRA_COMPONENTS_TITLE).should('not.be.visible')
        cy.get(this.TABLES_DATA_TITLE).should('not.be.visible')
        cy.get(this.AUTH_TITLE).should('not.be.visible')
    }

    public static verifyAllMenuIconsVisible(): void {
        cy.get(this.LAYOUT_ICON).should('be.visible')
        cy.get(this.FORMS_ICON).should('be.visible')
        cy.get(this.MODAL_OVERLAYS_ICON).should('be.visible')
        cy.get(this.EXTRA_COMPONENTS_ICON).should('be.visible')
        cy.get(this.TABLES_DATA_ICON).should('be.visible')
        cy.get(this.AUTH_ICON).should('be.visible')
    }

    public static verifyAllMenuIconsNotVisible(): void {
        cy.get(this.LAYOUT_ICON).should('not.be.visible')
        cy.get(this.FORMS_ICON).should('not.be.visible')
        cy.get(this.MODAL_OVERLAYS_ICON).should('not.be.visible')
        cy.get(this.EXTRA_COMPONENTS_ICON).should('not.be.visible')
        cy.get(this.TABLES_DATA_ICON).should('not.be.visible')
        cy.get(this.AUTH_ICON).should('not.be.visible')
    }
}