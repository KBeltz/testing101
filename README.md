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
  - Assert: generate an expression that encapsulates some testable logic related to the target under test
- Avoid Test Interdependence: Each test should handle its own setup and tear down; you cannot count on the test suite or class to maintain state in between tests. The test runner will execute your tests in random order, and may also test them in parallel. If tests are interdependent, they will not pass or fail predictably, and developers cannot trust them.
- Keep it Short, Sweet, and Visible: Resist the impulse to abstract test setup (the "arrange") to other classes or functions - in other words, resist the urge to make your tests fancy! When a test fails, you want to understand what went wrong without hunting all over to figure out what went wrong.
- Tests Should be Readable: Tests double as a form of documentation. If they don't make sense, developers are more likely to misunderstand them and potentially introduce bugs.
- Painful Test Setup is Code Smell: If the "arrange" part of your unit test becomes cumbersome, stop what you're doing. One of the most powerful things about unit tests is that they provide excellent feedback on the design of your code - specificially its modularity. If you find yourself laboring heavily to get a test set up, you have a design problem. Setup heavy tests are brittle. Tests carry maintenance weight just like production code, so avoid unwieldy tests like the plague - they will break and make you and everyone else hate them.
- One Assertion Per Test (controversial): Proper unit tests should fail for exactly one reason. There are many different views on this, and there is no one answer to rule them all. Some people take this to mean that there is exactly one assert statement per test, never more. Others are fine with more than one assert statement per test, as long as it is still confined to testing a single object. The one thing that remains true, however, is that we should only test one logical concept per test.

### Integration Tests

Integration tests verify that different parts of the application work well together, such as components and services.

- Scope can span multiple components, but should not span the entire application
- More expensive to implement than unit tests
- Higher level than unit testing

### Running unit and integration tests

Run `ng test` to execute the tests via Jest.

## [Cypress](https://docs.cypress.io)

Cypress is an end to end testing framework

### End to End Tests

End to end tests replicate user behavior throughout the entire application from end to end, verifying that a user flow works as expected.

- Scope spans the entire application stack from frontend to backend
- Most expensive to implement, both in terms of hardware and software
- Higher level than integration testing
- Slowest to perform

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via Cypress.

## Suggested Guidelines for Test Implementation

- Test cost varies: Unit < Integration < e2e
  - Writing a lot of unit tests is the best way to make a big impact on your application without a large overhead
  - Integration tests are a bit more complex to implement than unit tests
  - e2e tests have higher setup and maintenance cost, and should be planned only for large, commonly used user flows
    - First e2e test suggestion: signup process
- Every bug fix should have an associated test that verifies that the bug is fixed
- All new code should have associated tests
- Zero tolerance policy for failing tests
  - Test failures should indicate a bug in the code, which should be addressed right away
  - Failing tests cost time and money to investigate each time they fail, and should be kept up-to-date each time the application chantes
  - Don't skip them
- Code Coverage?
  - Code coverage is a measure of how much of the production code is executed when your automated tests are running
  - Increasing code coverage is good, but reaching 100% coverage is not necessarily achievable (and quality > quantity anyway)
  - Best for finding gaps in testing
  - Good initial goal to strive for: 60%
  - Good overall goal: 80%
