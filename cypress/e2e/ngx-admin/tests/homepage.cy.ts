import LeftNav from "../page-objects/components/LeftNav"
import TopPanel from "../page-objects/components/TopPanel"
import BasePage from "../page-objects/pages/BasePage"
import HomePage from "../page-objects/pages/HomePage"

describe('Validate Home Page', () => {

    it('loads correctly in FullHD', () => {
        BasePage.setFullHDViewport()
        HomePage.visitPage()
        HomePage.validateURL()
        TopPanel.validateLogoVisible()
        TopPanel.verifyNavToggleVisible()
        LeftNav.verifyNavToggleVisible()
        LeftNav.verifyAllMenuIconsVisible()
        LeftNav.verifyAllMenuTitlesVisible()
    })

    it('loads correctly in Macbook13 resolution', () => {
        BasePage.setMacbook13Viewport()
        HomePage.visitPage()
        HomePage.validateURL()
        TopPanel.validateLogoVisible()
        TopPanel.verifyNavToggleVisible()
        LeftNav.verifyNavToggleVisible()
        LeftNav.verifyAllMenuIconsVisible()
        LeftNav.verifyAllMenuTitlesVisible()
    })

    it('loads correctly in Tablet resolution', () => {
        BasePage.setTabletViewport()
        HomePage.visitPage()
        HomePage.validateURL()
        TopPanel.validateLogoVisible()
        TopPanel.verifyNavToggleVisible()
        LeftNav.verifyNavToggleVisible()
        LeftNav.verifyAllMenuIconsVisible()
        LeftNav.verifyAllMenuTitlesNotVisible()
    })

    it('loads correctly in Mobile resolution', () => {
        BasePage.setMobileViewport()
        HomePage.visitPage()
        HomePage.validateURL()
        TopPanel.validateLogoVisible()
        TopPanel.verifyNavToggleVisible()
        LeftNav.verifyNavToggleVisible()
        LeftNav.verifyAllMenuIconsNotVisible()
        LeftNav.verifyAllMenuTitlesNotVisible()
    })

})