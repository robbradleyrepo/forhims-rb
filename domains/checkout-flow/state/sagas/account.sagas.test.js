import { runSaga } from "redux-saga";
import { browserHistory } from "react-router";
import R from "ramda";

import { handleAccountLogin, maybeOpenLoginDrawer } from "./account.sagas";
import api from "../../../../sagas/api";
import { showDrawerWithContentId } from "../../../../actions/drawer";
import { ACCOUNT } from "../actions";
// import { CHECKOUT_STEP_NAMES } from "../../checkout-flow.constants";

const stateTemplate = {
  products: {
    byId: {
      PM6nxruC: {
        id: "PM6nxruC"
      }
    }
  },
  messages: {
    byId: {}
  },
  visits: {
    byId: {}
  },
  orders: {
    active: {
      items: []
    }
  },
  checkoutTemp: {
    cart: {
      items: []
    }
  },
  routing: {
    locationBeforeTransitions: {
      action: "PUSH",
      key: "0hs9sl",
      query: { redirect: "/profile" }
    }
  },
  form: {
    "checkout-login": {
      values: {
        doesnot: "matter"
      }
    }
  }
};

describe("account sagas", () => {
  let pushSpy, postSpy, getSpy, payload;

  beforeEach(() => {
    pushSpy = jest.spyOn(browserHistory, "push");
    postSpy = jest.spyOn(api, "post");
    getSpy = jest.spyOn(api, "get");
    payload = { resolve: jest.fn(), reject: jest.fn() };

    postSpy.mockImplementation(arg => {
      return Promise.resolve({
        response: [{ token: "a_token", user: { id: "wat" } }]
      });
    });

    getSpy.mockImplementation(arg => {
      return Promise.resolve({
        response: [[]]
      });
    });
  });

  afterEach(() => {
    pushSpy.mockReset();
    postSpy.mockReset();
    getSpy.mockReset();
  });

  it("can redirect if the correct query param is in the URL & user has no items in cart", async () => {
    const dispatches = [];

    const io = {
      dispatch: action => dispatches.push(action),
      getState: () => stateTemplate
    };

    // run the whole saga
    await runSaga(io, handleAccountLogin, { payload }).done;

    // we could assert the correct actions appear in the dispatches array

    expect(pushSpy).toBeCalledTimes(1);
    expect(payload.resolve).toBeCalledTimes(1);
  });

  it("does not redirect if there is a good query param, but user has items in their cart", async () => {
    const dispatches = [];

    const io = {
      dispatch: action => dispatches.push(action),
      getState: () =>
        R.assocPath(
          ["orders", "active", "items"],
          [{ id: "PM6nxruC" }],
          stateTemplate
        )
    };

    // run the whole saga
    await runSaga(io, handleAccountLogin, { payload }).done;

    // we could assert the correct actions appear in the dispatches array

    expect(pushSpy).toBeCalledTimes(0);
    expect(payload.resolve).toBeCalledTimes(1);
  });

  it("does not redirect after login if the redirect path is not included in the whitelist, even if the user has items in their cart", async () => {
    const dispatches = [];

    const io = {
      dispatch: action => dispatches.push(action),
      getState: () =>
        R.assocPath(
          ["routing", "locationBeforeTransitions", "query", "redirect"],
          "/notreal",
          stateTemplate
        )
    };

    // run the whole saga
    await runSaga(io, handleAccountLogin, { payload }).done;

    // we could assert the correct actions appear in the dispatches array

    expect(pushSpy).toBeCalledTimes(0);
    expect(payload.resolve).toBeCalledTimes(1);
  });
});

describe("maybeOpenLoginDrawer", () => {
  it("dispatches the drawer opening action if the query param `action` has the right value and user is logged out", async () => {
    const dispatches = [];

    const io = {
      dispatch: action => dispatches.push(action),
      getState: () => ({
        routing: { locationBeforeTransitions: { query: { action: "login" } } }
      })
    };

    // run the whole saga
    await runSaga(io, maybeOpenLoginDrawer).done;

    expect(dispatches).toEqual([
      ACCOUNT.changeView("login"),
      showDrawerWithContentId("login")
    ]);
  });
  it("dispatches nothing if the query param `action` has the wrong value and user is logged out", async () => {
    const dispatches = [];

    const io = {
      dispatch: action => dispatches.push(action),
      getState: () => ({
        routing: { locationBeforeTransitions: { query: { action: "nope" } } }
      })
    };

    // run the whole saga
    await runSaga(io, maybeOpenLoginDrawer).done;

    expect(dispatches).toHaveLength(0);
  });
  it("dispatches the drawer opening action if the query param `redirect` has a value and user is logged out", async () => {
    const payload = { resolve: jest.fn(), reject: jest.fn() };

    const dispatches = [];

    const io = {
      dispatch: action => dispatches.push(action),
      getState: () => ({
        routing: {
          locationBeforeTransitions: { query: { redirect: "/anything" } }
        }
      })
    };

    // run the whole saga
    await runSaga(io, maybeOpenLoginDrawer, { payload }).done;

    expect(dispatches).toEqual([
      ACCOUNT.changeView("login"),
      showDrawerWithContentId("login")
    ]);
  });
  it("dispatches nothing if redirect is undefined and user is logged out", async () => {
    const dispatches = [];

    const io = {
      dispatch: action => dispatches.push(action),
      getState: () => ({
        routing: {
          locationBeforeTransitions: { query: {} }
        }
      })
    };

    // run the whole saga
    await runSaga(io, maybeOpenLoginDrawer).done;

    expect(dispatches).toHaveLength(0);
  });
  it("dispatches nothing if the query parameters 'open the drawer', but the user is logged in", async () => {
    const dispatches = [];

    const io = {
      dispatch: action => dispatches.push(action),
      getState: () => ({
        routing: {
          locationBeforeTransitions: { query: { redirect: "/orders" } }
        },
        me: {
          id: "abc123"
        }
      })
    };

    // run the whole saga
    await runSaga(io, maybeOpenLoginDrawer).done;

    expect(dispatches).toHaveLength(0);
  });
});
describe("Rx Age Validation", () => {
  // const mockRxProduct = {
  //   status: "active",
  //   id: "hZviGAgU",
  //   productId: "hZviGAgU",
  //   title: "Finasteride 90 x 1 mg",
  //   description: "1 mg x 90",
  //   price: 4700,
  //   sku: "*FH*Finasteride*90*1mg",
  //   meta: null,
  //   isBundle: false,
  //   requiresSubscription: true,
  //   requiresConsultation: true,
  //   bundleId: null,
  //   tags: ["hair"],
  //   prescriptions: ["HAIR_LOSS"],
  //   taxCode: null,
  //   bundleIds: null,
  //   contents: null
  // };
  // const mockRxState = {
  //   products: {
  //     byId: {
  //       hZviGAgU: mockRxProduct
  //     }
  //   },
  //   checkoutTemp: {
  //     cart: {
  //       items: [mockRxProduct]
  //     }
  //   }
  // };
  // it("Should revert to the cart step if a user logs with an invalid age during Rx checkout", async () => {
  //   const mockState = {
  //     ...mockRxState,
  //     me: {
  //       name: "Lil User",
  //       dob: "2004-01-01"
  //     }
  //   };
  //   const payload = {
  //     onSuccessNavigationAction: CHECKOUT.nextStep
  //   };
  //   const goToCartAction = CHECKOUT.goToStep(CHECKOUT_STEP_NAMES.CART);
  //   const dispatches = [];
  //   const io = {
  //     dispatch: action => dispatches.push(action),
  //     getState: () => mockState
  //   };
  //   // run the whole saga
  //   await runSaga(io, validateUserAgeBeforeNavigation, payload).done;
  //   expect(dispatches).not.toContain(payload.onSuccessNavigationAction());
  //   expect(dispatches).toContainEqual(goToCartAction);
  // });
  // it("Should trigger a navigation callback if a user logs with a valid age during Rx checkout", async () => {
  //   const mockState = {
  //     ...mockRxState,
  //     me: {
  //       name: "Average User",
  //       dob: "1980-01-01"
  //     }
  //   };
  //   const payload = {
  //     onSuccessNavigationAction: CHECKOUT.nextStep
  //   };
  //   const goToCartAction = CHECKOUT.goToStep(CHECKOUT_STEP_NAMES.CART);
  //   const dispatches = [];
  //   const io = {
  //     dispatch: action => dispatches.push(action),
  //     getState: () => mockState
  //   };
  //   // run the whole saga
  //   await runSaga(io, validateUserAgeBeforeNavigation, payload).done;
  //   expect(dispatches).toContainEqual(payload.onSuccessNavigationAction());
  //   expect(dispatches).not.toContain(goToCartAction);
  // });
});
