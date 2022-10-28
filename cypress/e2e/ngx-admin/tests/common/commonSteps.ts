import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'


Given(/^True is True$/, () => {
    assert(true == true)
});