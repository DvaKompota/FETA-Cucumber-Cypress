Feature: Homepage resolution validation

    Scenario: Validate Home Page loads correctly in full HD resolution
        Given viewport is set to "1080p" resolution
        When user navigates to the Homepage
        Then Homepage url is correct
        And Top Panel logo is visible
        And Top Panel navigation toggle is visible
        And all navigation menu icons are "visible"
        And all navigation menu titles are "visible"

    Scenario: Validate Home Page loads correctly in laptop resolution
        Given viewport is set to "Macbook13" resolution
        When user navigates to the Homepage
        Then Homepage url is correct
        And Top Panel logo is visible
        And Top Panel navigation toggle is visible
        And all navigation menu icons are "visible"
        And all navigation menu titles are "visible"

    Scenario: Validate Home Page loads correctly in tablet resolution
        Given viewport is set to "tablet" resolution
        When user navigates to the Homepage
        Then Homepage url is correct
        And Top Panel logo is visible
        And Top Panel navigation toggle is visible
        And all navigation menu icons are "visible"
        And all navigation menu titles are "not visible"

    Scenario: Validate Home Page loads correctly in mobile resolution
        Given viewport is set to "mobile" resolution
        When user navigates to the Homepage
        Then Homepage url is correct
        And Top Panel logo is visible
        And Top Panel navigation toggle is visible
        And all navigation menu icons are "not visible"
        And all navigation menu titles are "not visible"