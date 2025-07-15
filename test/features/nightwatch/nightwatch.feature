Feature: Google Search
Background: Background name
  Given I open the Rijksmuseum page
  And I dismiss the cookie dialog
  Then the website title should contain "Dutch master"

@a @b
Scenario: Searching the Rijksmuseum
  Given I search "night watch"
  Then Body contains "Operation Night Watch"

@automationexercise
Scenario: Launch Automation Exercise Login Page
  Given I launch the website "https://www.automationexercise.com/login"
  Then the website title should contain "Signup / Login"

@automationexercise
Scenario: Signup as a new user on Automation Exercise
  Given I launch the website "https://www.automationexercise.com/login"
  When I enter name "Test User" and email "testuser@example.com" in the signup form
  And I click the Signup button
  Then the signup should be processed
