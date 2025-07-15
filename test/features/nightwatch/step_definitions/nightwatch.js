const {Given, Then, When, Before} = require('@cucumber/cucumber');
const assert = require('assert');

Given(/^I open the Rijksmuseum page$/, function() {
  return browser.navigateTo('https://www.rijksmuseum.nl/en');
});

Given(/^I dismiss the cookie dialog$/, async function() {
  const cookieDialogVisible = await browser.isVisible({
    selector: '.cookie-consent-bar-wrap',
    suppressNotFoundErrors: true
  });

  if (cookieDialogVisible) {
    return browser.click('.cookie-consent-bar-wrap button.link');
  }
});

Given(/^I search "([^"]*)"$/, async function(searchTerm) {
  // FIXME: chaining the click command to the rest of the commands causes an uncaughtRejection in case of an element locate error
  await browser.pause(1000).click('a[aria-label="Search"]');

  return browser.waitForElementVisible('#rijksmuseum-app')
    .setValue('input.search-bar-input[type=text]', [searchTerm, browser.Keys.ENTER])
    .pause(1000);
});

Given(/^I launch the website "([^"]*)"$/, function(url) {
  return browser.navigateTo(url);
});

When(/^I enter name "([^"]*)" and email "([^"]*)" in the signup form$/, async function(name, email) {
  await browser.setValue('input[data-qa="signup-name"]', name);
  await browser.setValue('input[data-qa="signup-email"]', email);
});

When(/^I click the Signup button$/, async function() {
  await browser.click('button[data-qa="signup-button"]');
});

Then(/^the signup should be processed$/, async function() {
  // Placeholder: Add a real check for successful signup, e.g., check for a confirmation message or redirect
  await browser.pause(2000); // Wait for any response
});

Then(/^the title is "([^"]*)"$/, function(title) {
  return browser.assert.titleEquals(title);
});

Then(/^Body contains "([^"]*)"$/, function(contains) {
  return  browser.assert.textContains('.search-results', contains);
});

Then(/^the website title should contain "([^"]*)"$/, async function(expectedTitle) {
  const title = await browser.getTitle();
  assert.ok(title.includes(expectedTitle), `Expected title to include '${expectedTitle}', but got '${title}'`);
});
