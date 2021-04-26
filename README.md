# Testing101

## Types of Tests

- Unit tests
- Integration tests
- End to end tests

## [Jest](https://jestjs.io)

Jest is a testing framework built on top of Jasmine, and it is used for unit and integration testing

### Unit Tests

Tests an individual function or component (in other words, a single _unit_); all functions or components needed to run the test are _mocked_.

You can think of a unit as a function or method. You thus write a unit test by writing something that tests a function or method _in isolation_. Don’t create something called TestAllTheThings and then proceed to call every function or method in a namespace.

#### Unit Testing Best Practices

- Arrange, Act, Assert
  - Arrange: arrange or set up everything you need to run the unit test, such as assigning values to variables
  - Act: invoke the function or method that you are testing
  - Assert:
- Avoid Test Interdependence: Each test should handle its own setup and tear down; you cannot count on the test suite or class to maintain state in between tests. The test runner will execute your tests in random order, and may also test them in parallel. If tests are interdependent, they will not pass or fail predictably, and developers cannot trust them.
- Keep it Short, Sweet, and Visible: Resist the impulse to abstract test setup (the "arrange") to other classes or functions - in other words, resist the urge to make your tests fancy! When a test fails, you want to understand what went wrong without hunting all over to figure out what went wrong.
- Tests Should be Readable: Tests double as a form of documentation. If they don't make sense, developers are more likely to misunderstand them and potentially introduce bugs.
- Painful Test Setup is Code Smell: If the "arrange" part of your unit test becomes cumbersome, stop what you're doing. One of the most powerful things about unit tests is that they provide excellent feedback on the design of your code - specificially its modularity. If you find yourself laboring heavily to get a test set up, you have a design problem. Setup heavy tests are brittle. Tests carry maintenance weight just like production code, so avoid unwieldy tests like the plague - they will break and make you and everyone else hate them.

### Integration Tests

Integration tests verify that different parts of the application work well together, such as components and services.

### Running unit and integration tests

Run `ng test` to execute the unit tests via Jest.

## [Cypress](https://docs.cypress.io)

Cypress is an end to end testing framework

### End to End Tests

End to end tests replicate user behavior throughout the entire application from end to end, verifying that a user flow works as expected.

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via Cypress.

## Suggested Guidelines for test implementation

- If there is a bug in the code, write a test when you fix it
