import { expectSaga } from "redux-saga-test-plan";
import { handleDrawerCartShowRequest } from "./cart.sagas";
import { CHECKOUT, UI } from "../actions";
import { CHECKOUT_STEP_NAMES } from "../../checkout-flow.constants";

describe("handleDrawerCartShowRequest", () => {
  const showCartAction = UI.showCart();
  const reviewOrderAction = CHECKOUT.goToStep(CHECKOUT_STEP_NAMES.REVIEW_ORDER);

  it("should just launch the cart if we haven't visited the review order page or have already finalized the previous order", () => {
    return expectSaga(handleDrawerCartShowRequest)
      .withState({
        visits: {
          activeOrderNeedsFinalReviewConfirmation: false
        }
      })
      .put(showCartAction)
      .not.put(reviewOrderAction)
      .run();
  });

  it("should launch the review order page if we haven't finalized the order yet", () => {
    return expectSaga(handleDrawerCartShowRequest)
      .withState({
        visits: {
          activeOrderNeedsFinalReviewConfirmation: true
        }
      })
      .put(showCartAction)
      .put(reviewOrderAction)
      .run();
  });
});
