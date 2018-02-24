# QAWTechTest
An academic exercise demonstrating the use of open-source tooling to perform a relatively trivial UI test.
Developed as a webdriverio jasmine test running on chrome using selenium_standalone.

# General Comments 
The test was described as a BDD feature using a Gherkin-style syntax and implemented as a Jasmine test specification.

Many issues were encountered during the development of even such a simple example:
- Installation of Java version required by the Selenium driver
- Installation of .NET SDK required by WebdriverIO
- Confusing or unclear documentation
- Behaviour of Selenium/webdriverio APIs for performing seemingly simple actions

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

