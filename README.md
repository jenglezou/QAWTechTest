# QAWTechTest
A webdriverio jasmine test running on chrome using selenium_standalone.

# General Comments 
An academic exercise demonstrating the use of open-source tooling to perform a relatively trivial UI test.

The test was described as a BDD feature using a Gherkin-style syntax and implemented as a Jasmine test specification.

# Improvements
Consider using the Page Object Pattern approach to separate the UI handling from the tests.

# Dependencies
## nodejs
https://nodejs.org/en/
## selenium-standalone
npm install selenium-standalone@latest -g

selenium-standalone install
## webdriverio
see package.json for required packages

# Run
selenium-standalone start

.\node_modules\.bin\wdio

