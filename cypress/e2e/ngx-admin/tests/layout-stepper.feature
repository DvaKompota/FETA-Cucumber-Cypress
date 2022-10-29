Feature: Layout Stepper validation

    Scenario: Validate Layout Stepper Page happy elements
        When user navigates to the Layout Stepper Page
        Then Layout Stepper Page url is correct
        And Layout Stepper Page cards are visible
        And Layout Stepper Card "1" has "4" step labels
        And Layout Stepper Card "2" has "3" step labels
        And Layout Stepper Card "3" has "4" step labels
