Feature: Layout Stepper validation

    Scenario: Validate page happy elements
        When user navigates to the Layout Stepper Page
        Then Layout Stepper Page url is correct
        And Layout Stepper happy elements are visible

    Scenario: Validate top stepper buttons
        Given user navigates to the Layout Stepper Page
        And Layout Stepper Card "1" has "4" steps
        And Layout Stepper Card "1" all step indices are "visible"
        And Layout Stepper Card "1" all step checkmarks are "not visible"
        And Layout Stepper Card "1" has "Step content #1" heading
        And Layout Stepper Card "1" Prev button is "disabled"
        And Layout Stepper Card "1" Next button is "enabled"

        When user clicks Layout Stepper Card "1" Next button
        Then Layout Stepper Card "1" step "1" index is "not visible"
        Then Layout Stepper Card "1" step "2" index is "visible"
        Then Layout Stepper Card "1" step "3" index is "visible"
        Then Layout Stepper Card "1" step "4" index is "visible"
        Then Layout Stepper Card "1" step "1" checkmark is "visible"
        Then Layout Stepper Card "1" step "2" checkmark is "not visible"
        Then Layout Stepper Card "1" step "3" checkmark is "not visible"
        Then Layout Stepper Card "1" step "4" checkmark is "not visible"
        Then Layout Stepper Card "1" has "Step content #2" heading
        Then Layout Stepper Card "1" Prev button is "enabled"
        Then Layout Stepper Card "1" Next button is "enabled"

        When user clicks Layout Stepper Card "1" Next button
        Then Layout Stepper Card "1" step "1" index is "not visible"
        Then Layout Stepper Card "1" step "2" index is "not visible"
        Then Layout Stepper Card "1" step "3" index is "visible"
        Then Layout Stepper Card "1" step "4" index is "visible"
        Then Layout Stepper Card "1" step "1" checkmark is "visible"
        Then Layout Stepper Card "1" step "2" checkmark is "visible"
        Then Layout Stepper Card "1" step "3" checkmark is "not visible"
        Then Layout Stepper Card "1" step "4" checkmark is "not visible"
        Then Layout Stepper Card "1" has "Step content #3" heading
        Then Layout Stepper Card "1" Prev button is "enabled"
        Then Layout Stepper Card "1" Next button is "enabled"

        When user clicks Layout Stepper Card "1" Next button
        Then Layout Stepper Card "1" step "1" index is "not visible"
        Then Layout Stepper Card "1" step "2" index is "not visible"
        Then Layout Stepper Card "1" step "3" index is "not visible"
        Then Layout Stepper Card "1" step "4" index is "visible"
        Then Layout Stepper Card "1" step "1" checkmark is "visible"
        Then Layout Stepper Card "1" step "2" checkmark is "visible"
        Then Layout Stepper Card "1" step "3" checkmark is "visible"
        Then Layout Stepper Card "1" step "4" checkmark is "not visible"
        Then Layout Stepper Card "1" has "Step content #4" heading
        Then Layout Stepper Card "1" Prev button is "enabled"
        Then Layout Stepper Card "1" Next button is "disabled"

        When user clicks Layout Stepper Card "1" Prev button
        Then Layout Stepper Card "1" step "1" index is "not visible"
        Then Layout Stepper Card "1" step "2" index is "not visible"
        Then Layout Stepper Card "1" step "3" index is "visible"
        Then Layout Stepper Card "1" step "4" index is "not visible"
        Then Layout Stepper Card "1" step "1" checkmark is "visible"
        Then Layout Stepper Card "1" step "2" checkmark is "visible"
        Then Layout Stepper Card "1" step "3" checkmark is "not visible"
        Then Layout Stepper Card "1" step "4" checkmark is "visible"
        Then Layout Stepper Card "1" has "Step content #3" heading
        Then Layout Stepper Card "1" Prev button is "enabled"
        Then Layout Stepper Card "1" Next button is "enabled"

        When user clicks Layout Stepper Card "1" Prev button
        Then Layout Stepper Card "1" step "1" index is "not visible"
        Then Layout Stepper Card "1" step "2" index is "visible"
        Then Layout Stepper Card "1" step "3" index is "not visible"
        Then Layout Stepper Card "1" step "4" index is "not visible"
        Then Layout Stepper Card "1" step "1" checkmark is "visible"
        Then Layout Stepper Card "1" step "2" checkmark is "not visible"
        Then Layout Stepper Card "1" step "3" checkmark is "visible"
        Then Layout Stepper Card "1" step "4" checkmark is "visible"
        Then Layout Stepper Card "1" has "Step content #2" heading
        Then Layout Stepper Card "1" Prev button is "enabled"
        Then Layout Stepper Card "1" Next button is "enabled"

        When user clicks Layout Stepper Card "1" Prev button
        Then Layout Stepper Card "1" step "1" index is "visible"
        Then Layout Stepper Card "1" step "2" index is "not visible"
        Then Layout Stepper Card "1" step "3" index is "not visible"
        Then Layout Stepper Card "1" step "4" index is "not visible"
        Then Layout Stepper Card "1" step "1" checkmark is "not visible"
        Then Layout Stepper Card "1" step "2" checkmark is "visible"
        Then Layout Stepper Card "1" step "3" checkmark is "visible"
        Then Layout Stepper Card "1" step "4" checkmark is "visible"
        Then Layout Stepper Card "1" has "Step content #1" heading
        Then Layout Stepper Card "1" Prev button is "disabled"
        Then Layout Stepper Card "1" Next button is "enabled"
