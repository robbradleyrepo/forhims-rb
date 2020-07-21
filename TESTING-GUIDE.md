# Testing Guide

We want a [testing pyramid not a testing ice-cream cone](https://watirmelon.blog/testing-pyramids/).

The priority now is on having tests for **checkout, visit, login and registration**.
Our goal is to have automated tests (unit, acceptance and e2e) running for pull requests and during the build pipeline.
Depending on how much time it takes to run the e2e tests we'll have to gauge when to run them.
Right now we're working on getting Cypress and CircleCI working together.

Any of this can be changed depending on what we think makes sense.

## End to End tests - E2E

We're using [Cypress.io](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell) for testing the UI, and [Mock-Server](https://www.mock-server.com) for mocking the API.

- [Best Practices](https://docs.cypress.io/guides/references/best-practices.html)
- Cypress only works on Chrome which is okay for now since we want to know if **critical functionality is broken**. Testing browser quirks should not need to be automated.
- E2E tests will take time to run, so we have decided to test checkout, visit, login and registration.
- For icon buttons we're using `data-testid` attributes to find the button so we can interact with it. e.g `cy.get("[data-testid='GlobalNavigationIconItem_Button']")`
- Buttons which have text can be found by looking for the text content e.g `cy.contains("Login")`
- It's not necessary to write explicit assertions for each test, since certain commands contain [default assertions](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Default-Assertions)
- Tests for mobile, tablet and desktop are combined together in one spec. For example successful login will test all device layouts in one spec instead of creating three spec files.

To start the mock server you will need [Docker for Mac](https://docs.docker.com/docker-for-mac/) installed.
Before you can run the mock server you will need to get the image
```
docker pull jamesdbloom/mockserver
```

Then to start the server use the following command:
```
docker run -d -p 1080:1080 jamesdbloom/mockserver /opt/mockserver/run_mockserver.sh -serverPort 1080
```

Once the mock server is running, you can start Cypress
```
npm run api:mock
npm run cypress:open:mock OR npm run cypress:run:mock
```

- Todo
  - Having the API + DB running on Docker so we can run a full Hers environment locally.
  - Need test data to seed the database with.
  - Need to provide a list of requests that the API can handle so we can control behaviour via curl/postman/httpie. This will allow us to login a user without having to execute the login steps through the UI.

## Acceptance Tests

A level above unit tests, we’re testing features while stubbing the API. Faster to execute than E2E tests and easier to drive UI behaviour by manipulating API responses.

We have not written any tests which mock the API yet, but we plan on writing these tests in Cypress.

- Todo
  - Provide an example of user login while mocking the API

## Unit Tests

Anywhere data is converted we need to have tests. Code coverage tools help to identify if we’re increasing or decreasing coverage, but trying to target an x% of lines covered is easy to game and will lead to creating tests which don’t matter.

No preference on what unit testing tools we use, Jest, Enzyme whatever. No snapshots tests until we reach a stable design for components. We should write tests for

- reducers
- selectors
- sagas

### Selectors

The pattern goes like this (example with Jest):

```
import {selectSomething} from './feature.selectors'

describe('selectSomething', () => {

  it('returns X under certain conditions', () => {
    expect(selectSomething.resultFunc('a', 'b')).toEqual('X')
  })

  it('returns Y under certain other conditions', () => {
    expect(selectSomething.resultFunc('d', 'e')).toEqual('Y')
  })

})
```

Notice `resultFunc` which retrieves the last argument passed to createSelector, the function that combines the results of other selectors and usually has some logic in it. Running that function directly saves us the work of setting up a whole state object for any selectors the one under test depends on.

#### Links

- [Selector testing docs](https://github.com/reduxjs/reselect#q-how-do-i-test-a-selector)

### Sagas

Regarding sagas, there may be more value in testing the outcome of a saga versus testing the internal flow of a saga.

Adam has started using [`runSaga`](https://redux-saga.js.org/docs/api/index.html#runsagaoptions-saga-args) (example: [account.sagas.test](https://github.com/Clubroom/hers/blob/1154b03318464a0fae5cd4e6ab8bce99bab4a552/domains/checkout-flow/state/sagas/account.sagas.test.js)). This approach lets us test that a saga dispatches the correct actions & payloads when we mock the application state and API responses. A few things to note:

- This style of testing does not include reducers and updates to the store in assertions. We can look into [Redux Saga Test Plan](http://redux-saga-test-plan.jeremyfairbank.com/)'s `withReducer` feature if we want to include the reducer.
- We're trying out Jest's [`jest.spyOn`](https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname) with [`mockImplementation`](https://jestjs.io/docs/en/mock-function-api#mockfnmockimplementationfn) rather than instead of `jest.mock` to change the behaviour of our API since it doesn't have to deal with [hosting mock implementations](https://jestjs.io/docs/en/manual-mocks#using-with-es-module-imports) and is more flexible with [scope](https://jestjs.io/docs/en/manual-mocks#examples).

Baran is using the library [redux-saga-test-plan](http://redux-saga-test-plan.jeremyfairbank.com/) in [action-items.sagas.test](https://github.com/Clubroom/hers/blob/e423e78b7cf47627481d5c920ae8221b349db752/domains/account/action-items/action-items.component.js). Its helper function [`expectSaga`](https://github.com/jfairbank/redux-saga-test-plan#simple-example) simplifies triggering side-effects and running assertions, and it can help with mocking via providers.

#### Links

- [Testing Sagas](https://redux-saga.js.org/docs/advanced/Testing.html) from Redux Saga docs
- [Redux Saga Test Plan](http://redux-saga-test-plan.jeremyfairbank.com/) library adds more features and reduces boiler plate
