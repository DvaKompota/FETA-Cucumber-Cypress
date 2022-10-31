Feature: Layout Stepper validation

    Scenario: Validate page happy elements
        When user navigates to the Layout Stepper Page
        Then Layout Stepper Page url is correct
        And Layout Stepper happy elements are visible

    Scenario: Validate top stepper buttons
        Given user navigates to the Layout Stepper Page
        And Layout Stepper card "1" is in the initial state

        When user clicks Layout Stepper card "1" Next button
        Then Layout Stepper card "1" step "1" index is "not visible"
        Then Layout Stepper card "1" step "2" index is "visible"
        Then Layout Stepper card "1" step "3" index is "visible"
        Then Layout Stepper card "1" step "4" index is "visible"
        Then Layout Stepper card "1" step "1" checkmark is "visible"
        Then Layout Stepper card "1" step "2" checkmark is "not visible"
        Then Layout Stepper card "1" step "3" checkmark is "not visible"
        Then Layout Stepper card "1" step "4" checkmark is "not visible"
        Then Layout Stepper card "1" has "Step content #2" heading
        Then Layout Stepper card "1" Prev button is "enabled"
        Then Layout Stepper card "1" Next button is "enabled"

        When user clicks Layout Stepper card "1" Next button
        Then Layout Stepper card "1" step "1" index is "not visible"
        Then Layout Stepper card "1" step "2" index is "not visible"
        Then Layout Stepper card "1" step "3" index is "visible"
        Then Layout Stepper card "1" step "4" index is "visible"
        Then Layout Stepper card "1" step "1" checkmark is "visible"
        Then Layout Stepper card "1" step "2" checkmark is "visible"
        Then Layout Stepper card "1" step "3" checkmark is "not visible"
        Then Layout Stepper card "1" step "4" checkmark is "not visible"
        Then Layout Stepper card "1" has "Step content #3" heading
        Then Layout Stepper card "1" Prev button is "enabled"
        Then Layout Stepper card "1" Next button is "enabled"

        When user clicks Layout Stepper card "1" Next button
        Then Layout Stepper card "1" step "1" index is "not visible"
        Then Layout Stepper card "1" step "2" index is "not visible"
        Then Layout Stepper card "1" step "3" index is "not visible"
        Then Layout Stepper card "1" step "4" index is "visible"
        Then Layout Stepper card "1" step "1" checkmark is "visible"
        Then Layout Stepper card "1" step "2" checkmark is "visible"
        Then Layout Stepper card "1" step "3" checkmark is "visible"
        Then Layout Stepper card "1" step "4" checkmark is "not visible"
        Then Layout Stepper card "1" has "Step content #4" heading
        Then Layout Stepper card "1" Prev button is "enabled"
        Then Layout Stepper card "1" Next button is "disabled"

        When user clicks Layout Stepper card "1" Prev button
        Then Layout Stepper card "1" step "1" index is "not visible"
        Then Layout Stepper card "1" step "2" index is "not visible"
        Then Layout Stepper card "1" step "3" index is "visible"
        Then Layout Stepper card "1" step "4" index is "not visible"
        Then Layout Stepper card "1" step "1" checkmark is "visible"
        Then Layout Stepper card "1" step "2" checkmark is "visible"
        Then Layout Stepper card "1" step "3" checkmark is "not visible"
        Then Layout Stepper card "1" step "4" checkmark is "visible"
        Then Layout Stepper card "1" has "Step content #3" heading
        Then Layout Stepper card "1" Prev button is "enabled"
        Then Layout Stepper card "1" Next button is "enabled"

        When user clicks Layout Stepper card "1" Prev button
        Then Layout Stepper card "1" step "1" index is "not visible"
        Then Layout Stepper card "1" step "2" index is "visible"
        Then Layout Stepper card "1" step "3" index is "not visible"
        Then Layout Stepper card "1" step "4" index is "not visible"
        Then Layout Stepper card "1" step "1" checkmark is "visible"
        Then Layout Stepper card "1" step "2" checkmark is "not visible"
        Then Layout Stepper card "1" step "3" checkmark is "visible"
        Then Layout Stepper card "1" step "4" checkmark is "visible"
        Then Layout Stepper card "1" has "Step content #2" heading
        Then Layout Stepper card "1" Prev button is "enabled"
        Then Layout Stepper card "1" Next button is "enabled"

        When user clicks Layout Stepper card "1" Prev button
        Then Layout Stepper card "1" step "1" index is "visible"
        Then Layout Stepper card "1" step "2" index is "not visible"
        Then Layout Stepper card "1" step "3" index is "not visible"
        Then Layout Stepper card "1" step "4" index is "not visible"
        Then Layout Stepper card "1" step "1" checkmark is "not visible"
        Then Layout Stepper card "1" step "2" checkmark is "visible"
        Then Layout Stepper card "1" step "3" checkmark is "visible"
        Then Layout Stepper card "1" step "4" checkmark is "visible"
        Then Layout Stepper card "1" has "Step content #1" heading
        Then Layout Stepper card "1" Prev button is "disabled"
        Then Layout Stepper card "1" Next button is "enabled"

    Scenario: Validate top stepper step icons
        Given user navigates to the Layout Stepper Page
        And Layout Stepper card "1" is in the initial state

        When user clicks Layout Stepper Card "1" step "1" index
        Then Layout Stepper card "1" is in the initial state
        When user clicks Layout Stepper Card "1" step "3" index
        Then Layout Stepper card "1" is in the initial state
        When user clicks Layout Stepper Card "1" step "4" index
        Then Layout Stepper card "1" is in the initial state

        When user clicks Layout Stepper Card "1" step "2" index
        Then Layout Stepper card "1" step "1" index is "not visible"
        Then Layout Stepper card "1" step "2" index is "visible"
        Then Layout Stepper card "1" step "3" index is "visible"
        Then Layout Stepper card "1" step "4" index is "visible"
        Then Layout Stepper card "1" step "1" checkmark is "visible"
        Then Layout Stepper card "1" step "2" checkmark is "not visible"
        Then Layout Stepper card "1" step "3" checkmark is "not visible"
        Then Layout Stepper card "1" step "4" checkmark is "not visible"
        Then Layout Stepper card "1" has "Step content #2" heading
        Then Layout Stepper card "1" Prev button is "enabled"
        Then Layout Stepper card "1" Next button is "enabled"

        When user clicks Layout Stepper Card "1" step "1" index
        Then Layout Stepper card "1" step "1" index is "visible"
        Then Layout Stepper card "1" step "2" index is "not visible"
        Then Layout Stepper card "1" step "3" index is "visible"
        Then Layout Stepper card "1" step "4" index is "visible"
        Then Layout Stepper card "1" step "1" checkmark is "not visible"
        Then Layout Stepper card "1" step "2" checkmark is "visible"
        Then Layout Stepper card "1" step "3" checkmark is "not visible"
        Then Layout Stepper card "1" step "4" checkmark is "not visible"
        Then Layout Stepper card "1" has "Step content #1" heading
        Then Layout Stepper card "1" Prev button is "disabled"
        Then Layout Stepper card "1" Next button is "enabled"

        When user clicks Layout Stepper Card "1" step "4" index
        Then Layout Stepper card "1" step "1" index is "visible"
        Then Layout Stepper card "1" step "2" index is "not visible"
        Then Layout Stepper card "1" step "3" index is "visible"
        Then Layout Stepper card "1" step "4" index is "visible"
        Then Layout Stepper card "1" step "1" checkmark is "not visible"
        Then Layout Stepper card "1" step "2" checkmark is "visible"
        Then Layout Stepper card "1" step "3" checkmark is "not visible"
        Then Layout Stepper card "1" step "4" checkmark is "not visible"
        Then Layout Stepper card "1" has "Step content #1" heading
        Then Layout Stepper card "1" Prev button is "disabled"
        Then Layout Stepper card "1" Next button is "enabled"

        When user clicks Layout Stepper Card "1" step "3" index
        Then Layout Stepper card "1" step "1" index is "not visible"
        Then Layout Stepper card "1" step "2" index is "not visible"
        Then Layout Stepper card "1" step "3" index is "visible"
        Then Layout Stepper card "1" step "4" index is "visible"
        Then Layout Stepper card "1" step "1" checkmark is "visible"
        Then Layout Stepper card "1" step "2" checkmark is "visible"
        Then Layout Stepper card "1" step "3" checkmark is "not visible"
        Then Layout Stepper card "1" step "4" checkmark is "not visible"
        Then Layout Stepper card "1" has "Step content #3" heading
        Then Layout Stepper card "1" Prev button is "enabled"
        Then Layout Stepper card "1" Next button is "enabled"

        When user clicks Layout Stepper Card "1" step "1" index
        Then Layout Stepper card "1" step "1" index is "visible"
        Then Layout Stepper card "1" step "2" index is "not visible"
        Then Layout Stepper card "1" step "3" index is "not visible"
        Then Layout Stepper card "1" step "4" index is "visible"
        Then Layout Stepper card "1" step "1" checkmark is "not visible"
        Then Layout Stepper card "1" step "2" checkmark is "visible"
        Then Layout Stepper card "1" step "3" checkmark is "visible"
        Then Layout Stepper card "1" step "4" checkmark is "not visible"
        Then Layout Stepper card "1" has "Step content #1" heading
        Then Layout Stepper card "1" Prev button is "disabled"
        Then Layout Stepper card "1" Next button is "enabled"

        When user clicks Layout Stepper Card "1" step "4" index
        Then Layout Stepper card "1" step "1" index is "not visible"
        Then Layout Stepper card "1" step "2" index is "not visible"
        Then Layout Stepper card "1" step "3" index is "not visible"
        Then Layout Stepper card "1" step "4" index is "visible"
        Then Layout Stepper card "1" step "1" checkmark is "visible"
        Then Layout Stepper card "1" step "2" checkmark is "visible"
        Then Layout Stepper card "1" step "3" checkmark is "visible"
        Then Layout Stepper card "1" step "4" checkmark is "not visible"
        Then Layout Stepper card "1" has "Step content #4" heading
        Then Layout Stepper card "1" Prev button is "enabled"
        Then Layout Stepper card "1" Next button is "disabled"

        When user clicks Layout Stepper Card "1" step "2" index
        Then Layout Stepper card "1" step "1" index is "not visible"
        Then Layout Stepper card "1" step "2" index is "visible"
        Then Layout Stepper card "1" step "3" index is "not visible"
        Then Layout Stepper card "1" step "4" index is "not visible"
        Then Layout Stepper card "1" step "1" checkmark is "visible"
        Then Layout Stepper card "1" step "2" checkmark is "not visible"
        Then Layout Stepper card "1" step "3" checkmark is "visible"
        Then Layout Stepper card "1" step "4" checkmark is "visible"
        Then Layout Stepper card "1" has "Step content #2" heading
        Then Layout Stepper card "1" Prev button is "enabled"
        Then Layout Stepper card "1" Next button is "enabled"

    Scenario: Validate left stepper buttons
        Given user navigates to the Layout Stepper Page
        And Layout Stepper card "2" is in the initial state
        And user data for "Arthur" is loaded

        When user clicks Layout Stepper card "2" Next button
        Then Layout Stepper card "2" is in the initial state

        When user fills Layout Stepper card "2" input with user "name"
        Then Layout Stepper card "2" input field value is user "name"
        When user clicks Layout Stepper card "2" Next button
        Then Layout Stepper card "2" step "1" index is "not visible"
        Then Layout Stepper card "2" step "2" index is "visible"
        Then Layout Stepper card "2" step "3" index is "visible"
        Then Layout Stepper card "2" step "1" checkmark is "visible"
        Then Layout Stepper card "2" step "2" checkmark is "not visible"
        Then Layout Stepper card "2" step "3" checkmark is "not visible"
        Then Layout Stepper card "2" content heading is "not visible"
        Then Layout Stepper card "2" has "Maurizzle" content text
        Then Layout Stepper card "2" input field value is "empty"
        Then Layout Stepper card "2" Prev button is "enabled"
        Then Layout Stepper card "2" Next button is "enabled"

        When user clicks Layout Stepper card "2" Next button
        Then Layout Stepper card "2" step "1" index is "not visible"
        Then Layout Stepper card "2" step "2" index is "visible"
        Then Layout Stepper card "2" step "3" index is "visible"
        Then Layout Stepper card "2" step "1" checkmark is "visible"
        Then Layout Stepper card "2" step "2" checkmark is "not visible"
        Then Layout Stepper card "2" step "3" checkmark is "not visible"
        Then Layout Stepper card "2" content heading is "not visible"
        Then Layout Stepper card "2" has "Maurizzle" content text
        Then Layout Stepper card "2" input field value is "empty"
        Then Layout Stepper card "2" Prev button is "enabled"
        Then Layout Stepper card "2" Next button is "enabled"

        When user clicks Layout Stepper card "2" Prev button
        Then Layout Stepper card "2" step "1" index is "visible"
        Then Layout Stepper card "2" step "2" index is "visible"
        Then Layout Stepper card "2" step "3" index is "visible"
        Then Layout Stepper card "2" step "1" checkmark is "not visible"
        Then Layout Stepper card "2" step "2" checkmark is "not visible"
        Then Layout Stepper card "2" step "3" checkmark is "not visible"
        Then Layout Stepper card "2" content heading is "not visible"
        Then Layout Stepper card "2" has "consectetuer" content text
        Then Layout Stepper card "2" input field value is user "name"
        Then Layout Stepper card "2" Next button is "enabled"

        When user clicks Layout Stepper card "2" Next button
        Then Layout Stepper card "2" step "1" index is "not visible"
        Then Layout Stepper card "2" step "2" index is "visible"
        Then Layout Stepper card "2" step "3" index is "visible"
        Then Layout Stepper card "2" step "1" checkmark is "visible"
        Then Layout Stepper card "2" step "2" checkmark is "not visible"
        Then Layout Stepper card "2" step "3" checkmark is "not visible"
        Then Layout Stepper card "2" content heading is "not visible"
        Then Layout Stepper card "2" has "Maurizzle" content text
        Then Layout Stepper card "2" input field value is "empty"
        Then Layout Stepper card "2" Prev button is "enabled"
        Then Layout Stepper card "2" Next button is "enabled"

        When user fills Layout Stepper card "2" input with user "movie"
        Then Layout Stepper card "2" input field value is user "movie"
        When user clicks Layout Stepper card "2" Next button
        Then Layout Stepper card "2" step "1" index is "not visible"
        Then Layout Stepper card "2" step "2" index is "not visible"
        Then Layout Stepper card "2" step "3" index is "visible"
        Then Layout Stepper card "2" step "1" checkmark is "visible"
        Then Layout Stepper card "2" step "2" checkmark is "visible"
        Then Layout Stepper card "2" step "3" checkmark is "not visible"
        Then Layout Stepper card "2" content heading is "not visible"
        Then Layout Stepper card "2" has "shackalack" content text
        Then Layout Stepper card "2" input field value is "empty"
        Then Layout Stepper card "2" Prev button is "enabled"
        Then Layout Stepper card "2" Confirm button is "enabled"

        When user clicks Layout Stepper card "2" Confirm button
        Then Layout Stepper card "2" step "1" index is "not visible"
        Then Layout Stepper card "2" step "2" index is "not visible"
        Then Layout Stepper card "2" step "3" index is "visible"
        Then Layout Stepper card "2" step "1" checkmark is "visible"
        Then Layout Stepper card "2" step "2" checkmark is "visible"
        Then Layout Stepper card "2" step "3" checkmark is "not visible"
        Then Layout Stepper card "2" content heading is "not visible"
        Then Layout Stepper card "2" has "shackalack" content text
        Then Layout Stepper card "2" input field value is "empty"
        Then Layout Stepper card "2" Prev button is "enabled"
        Then Layout Stepper card "2" Confirm button is "enabled"

        When user clicks Layout Stepper card "2" Prev button
        Then Layout Stepper card "2" step "1" index is "not visible"
        Then Layout Stepper card "2" step "2" index is "visible"
        Then Layout Stepper card "2" step "3" index is "visible"
        Then Layout Stepper card "2" step "1" checkmark is "visible"
        Then Layout Stepper card "2" step "2" checkmark is "not visible"
        Then Layout Stepper card "2" step "3" checkmark is "not visible"
        Then Layout Stepper card "2" content heading is "not visible"
        Then Layout Stepper card "2" has "Maurizzle" content text
        Then Layout Stepper card "2" input field value is user "movie"
        Then Layout Stepper card "2" Prev button is "enabled"
        Then Layout Stepper card "2" Next button is "enabled"

        When user clicks Layout Stepper card "2" Next button
        Then Layout Stepper card "2" step "1" index is "not visible"
        Then Layout Stepper card "2" step "2" index is "not visible"
        Then Layout Stepper card "2" step "3" index is "visible"
        Then Layout Stepper card "2" step "1" checkmark is "visible"
        Then Layout Stepper card "2" step "2" checkmark is "visible"
        Then Layout Stepper card "2" step "3" checkmark is "not visible"
        Then Layout Stepper card "2" content heading is "not visible"
        Then Layout Stepper card "2" has "shackalack" content text
        Then Layout Stepper card "2" input field value is "empty"
        Then Layout Stepper card "2" Prev button is "enabled"
        Then Layout Stepper card "2" Confirm button is "enabled"

        When user fills Layout Stepper card "2" input with user "something"
        Then Layout Stepper card "2" input field value is user "something"
        When user clicks Layout Stepper card "2" Confirm button
        Then Layout Stepper card "2" step "1" index is "not visible"
        Then Layout Stepper card "2" step "2" index is "not visible"
        Then Layout Stepper card "2" step "3" index is "not visible"
        Then Layout Stepper card "2" step "1" checkmark is "visible"
        Then Layout Stepper card "2" step "2" checkmark is "visible"
        Then Layout Stepper card "2" step "3" checkmark is "visible"
        Then Layout Stepper card "2" has "Wizard completed!" heading
        Then Layout Stepper card "2" content text is "not visible"
        Then Layout Stepper card "2" input field is "not visible"
        Then Layout Stepper card "2" Try Again button is "enabled"

        When user clicks Layout Stepper card "2" Try Again button
        Then Layout Stepper card "2" is in the initial state

    Scenario: Validate left stepper step icons
        Given user navigates to the Layout Stepper Page
        And Layout Stepper card "2" is in the initial state
        And user data for "Arthur" is loaded

        When user clicks Layout Stepper Card "2" step "1" index
        Then Layout Stepper card "2" is in the initial state
        When user clicks Layout Stepper Card "2" step "2" index
        Then Layout Stepper card "2" is in the initial state
        When user clicks Layout Stepper Card "2" step "3" index
        Then Layout Stepper card "2" is in the initial state

        When user fills Layout Stepper card "2" input with user "name"
        Then Layout Stepper card "2" input field value is user "name"
        When user clicks Layout Stepper Card "2" step "2" index
        Then Layout Stepper card "2" step "1" index is "not visible"
        Then Layout Stepper card "2" step "2" index is "visible"
        Then Layout Stepper card "2" step "3" index is "visible"
        Then Layout Stepper card "2" step "1" checkmark is "visible"
        Then Layout Stepper card "2" step "2" checkmark is "not visible"
        Then Layout Stepper card "2" step "3" checkmark is "not visible"
        Then Layout Stepper card "2" content heading is "not visible"
        Then Layout Stepper card "2" has "Maurizzle" content text
        Then Layout Stepper card "2" input field value is "empty"
        Then Layout Stepper card "2" Prev button is "enabled"
        Then Layout Stepper card "2" Next button is "enabled"

        When user clicks Layout Stepper Card "2" step "2" index
        Then Layout Stepper card "2" step "1" index is "not visible"
        Then Layout Stepper card "2" step "2" index is "visible"
        Then Layout Stepper card "2" step "3" index is "visible"
        Then Layout Stepper card "2" step "1" checkmark is "visible"
        Then Layout Stepper card "2" step "2" checkmark is "not visible"
        Then Layout Stepper card "2" step "3" checkmark is "not visible"
        Then Layout Stepper card "2" content heading is "not visible"
        Then Layout Stepper card "2" has "Maurizzle" content text
        Then Layout Stepper card "2" input field value is "empty"
        Then Layout Stepper card "2" Prev button is "enabled"
        Then Layout Stepper card "2" Next button is "enabled"

        When user clicks Layout Stepper Card "2" step "3" index
        Then Layout Stepper card "2" step "1" index is "not visible"
        Then Layout Stepper card "2" step "2" index is "visible"
        Then Layout Stepper card "2" step "3" index is "visible"
        Then Layout Stepper card "2" step "1" checkmark is "visible"
        Then Layout Stepper card "2" step "2" checkmark is "not visible"
        Then Layout Stepper card "2" step "3" checkmark is "not visible"
        Then Layout Stepper card "2" content heading is "not visible"
        Then Layout Stepper card "2" has "Maurizzle" content text
        Then Layout Stepper card "2" input field value is "empty"
        Then Layout Stepper card "2" Prev button is "enabled"
        Then Layout Stepper card "2" Next button is "enabled"

        When user clicks Layout Stepper Card "2" step "1" index
        Then Layout Stepper card "2" step "1" index is "visible"
        Then Layout Stepper card "2" step "2" index is "visible"
        Then Layout Stepper card "2" step "3" index is "visible"
        Then Layout Stepper card "2" step "1" checkmark is "not visible"
        Then Layout Stepper card "2" step "2" checkmark is "not visible"
        Then Layout Stepper card "2" step "3" checkmark is "not visible"
        Then Layout Stepper card "2" content heading is "not visible"
        Then Layout Stepper card "2" has "consectetuer" content text
        Then Layout Stepper card "2" input field value is user "name"
        Then Layout Stepper card "2" Next button is "enabled"

        When user clicks Layout Stepper Card "2" step "3" index
        Then Layout Stepper card "2" step "1" index is "visible"
        Then Layout Stepper card "2" step "2" index is "visible"
        Then Layout Stepper card "2" step "3" index is "visible"
        Then Layout Stepper card "2" step "1" checkmark is "not visible"
        Then Layout Stepper card "2" step "2" checkmark is "not visible"
        Then Layout Stepper card "2" step "3" checkmark is "not visible"
        Then Layout Stepper card "2" content heading is "not visible"
        Then Layout Stepper card "2" has "consectetuer" content text
        Then Layout Stepper card "2" input field value is user "name"
        Then Layout Stepper card "2" Next button is "enabled"

        When user clicks Layout Stepper Card "2" step "2" index
        Then Layout Stepper card "2" step "1" index is "not visible"
        Then Layout Stepper card "2" step "2" index is "visible"
        Then Layout Stepper card "2" step "3" index is "visible"
        Then Layout Stepper card "2" step "1" checkmark is "visible"
        Then Layout Stepper card "2" step "2" checkmark is "not visible"
        Then Layout Stepper card "2" step "3" checkmark is "not visible"
        Then Layout Stepper card "2" content heading is "not visible"
        Then Layout Stepper card "2" has "Maurizzle" content text
        Then Layout Stepper card "2" input field value is "empty"
        Then Layout Stepper card "2" Prev button is "enabled"
        Then Layout Stepper card "2" Next button is "enabled"

        When user fills Layout Stepper card "2" input with user "movie"
        Then Layout Stepper card "2" input field value is user "movie"
        When user clicks Layout Stepper Card "2" step "3" index
        Then Layout Stepper card "2" step "1" index is "not visible"
        Then Layout Stepper card "2" step "2" index is "not visible"
        Then Layout Stepper card "2" step "3" index is "visible"
        Then Layout Stepper card "2" step "1" checkmark is "visible"
        Then Layout Stepper card "2" step "2" checkmark is "visible"
        Then Layout Stepper card "2" step "3" checkmark is "not visible"
        Then Layout Stepper card "2" content heading is "not visible"
        Then Layout Stepper card "2" has "shackalack" content text
        Then Layout Stepper card "2" input field value is "empty"
        Then Layout Stepper card "2" Prev button is "enabled"
        Then Layout Stepper card "2" Confirm button is "enabled"

        When user clicks Layout Stepper Card "2" step "1" index
        Then Layout Stepper card "2" step "1" index is "visible"
        Then Layout Stepper card "2" step "2" index is "not visible"
        Then Layout Stepper card "2" step "3" index is "visible"
        Then Layout Stepper card "2" step "1" checkmark is "not visible"
        Then Layout Stepper card "2" step "2" checkmark is "visible"
        Then Layout Stepper card "2" step "3" checkmark is "not visible"
        Then Layout Stepper card "2" content heading is "not visible"
        Then Layout Stepper card "2" has "consectetuer" content text
        Then Layout Stepper card "2" input field value is user "name"
        Then Layout Stepper card "2" Next button is "enabled"

        When user clicks Layout Stepper Card "2" step "3" index
        Then Layout Stepper card "2" step "1" index is "not visible"
        Then Layout Stepper card "2" step "2" index is "not visible"
        Then Layout Stepper card "2" step "3" index is "visible"
        Then Layout Stepper card "2" step "1" checkmark is "visible"
        Then Layout Stepper card "2" step "2" checkmark is "visible"
        Then Layout Stepper card "2" step "3" checkmark is "not visible"
        Then Layout Stepper card "2" content heading is "not visible"
        Then Layout Stepper card "2" has "shackalack" content text
        Then Layout Stepper card "2" input field value is "empty"
        Then Layout Stepper card "2" Prev button is "enabled"
        Then Layout Stepper card "2" Confirm button is "enabled"
