# QAWTechTest
An academic exercise demonstrating the use of open-source tooling to perform a relatively trivial UI test.
Developed as a webdriverio jasmine test running on chrome using selenium_standalone.

# General Comments 
The test was described as a BDD feature using a Gherkin-style syntax and has been implemented here as a Jasmine test specification.

Some issues were encountered during the development of even such a simple example:
- Installation of Java was required by the Selenium driver
- Installation of .NET SDK was required
- Some confusing or unclear documentation.  Although the WebdriverIO user and API documentation is refreshingly friendly.
- Unusual behaviour of Selenium/webdriverio APIs when performing seemingly simple actions

# Improvements
Should really ensure that the CONTACT US form is ready to receive data otherwise could misplace text.  

Should really clear the fields first before entering the required text.

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
Install the items listed above in the dependencies.

selenium-standalone start

.\node_modules\.bin\wdio
