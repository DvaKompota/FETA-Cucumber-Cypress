import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import LeftNav from '../../page-objects/components/LeftNav'
import TopPanel from '../../page-objects/components/TopPanel'
import BasePage from '../../page-objects/pages/BasePage'
import HomePage from '../../page-objects/pages/HomePage'


Given(/^viewport is set to "(1080p|Macbook13|tablet|mobile)" resolution$/, (resolution: string) => {
    switch (resolution) {
        case "1080p": {
            BasePage.setFullHDViewport();
            break;
        };
        case "Macbook13": {
            BasePage.setMacbook13Viewport();
            break;
        };
        case "tablet": {
            BasePage.setTabletViewport();
            break;
        };
        case "mobile": {
            BasePage.setMobileViewport();
            break;
        };
    };
});

When(/^user navigates to the Homepage$/, () => {
    HomePage.visitPage()
});

Then(/^Homepage url is correct$/, () => {
    HomePage.validateURL()
});

And(/^Top Panel logo is visible$/, () => {
    TopPanel.validateLogoVisible()
});

And(/^Top Panel navigation toggle is visible$/, () => {
    TopPanel.verifyNavToggleVisible()
});

And(/^all navigation menu icons are "(visible|not visible)"$/, (visibility: string) => {
    switch (visibility) {
        case "visible":{
            LeftNav.verifyAllMenuIconsVisible();
            break;
        };
        case "not visible": {
            LeftNav.verifyAllMenuIconsNotVisible();
            break;
        };
    };
})

And(/^all navigation menu titles are "(visible|not visible)"$/, (visibility: string) => {
    switch (visibility) {
        case "visible": {
            LeftNav.verifyAllMenuTitlesVisible();
            break;
        };
        case "not visible": {
            LeftNav.verifyAllMenuTitlesNotVisible();
            break;
        };
    };
})