import R from "ramda";
import { createStructuredSelector, createSelector } from "reselect";
import {
  CHECKOUT_FLOW_STEPS,
  CHECKOUT_STEP_NAMES
} from "./checkout-flow.constants";
import { selectActiveStep } from "./state/selectors/checkout";
import { selectCartItems } from "./state/selectors/cart";
import { selectIsAuthenticated } from "../../selectors/me";
import CART from "../../selectors/cart";
import { selectShippingAddress } from "../checkout-flow/state/selectors/review-order";
const { getCard } = CART;

const selectActiveStepConfig = createSelector(
  selectActiveStep,
  R.propOr(CHECKOUT_FLOW_STEPS.cart, R.__, CHECKOUT_FLOW_STEPS)
);

const selectActiveOrderItems = createSelector(
  R.pathOr([], ["orders", "active", "items"]),
  R.identity
);

const selectActiveOrderItemsCount = createSelector(
  selectActiveOrderItems,
  items => items.length
);

const selectCartItemsCount = createSelector(
  selectCartItems,
  items => items.length
);

const selectIsCartEmpty = createSelector(
  selectCartItemsCount,
  selectActiveOrderItemsCount,
  (cartItemsCount, activeOrderItemsCount) =>
    cartItemsCount === 0 && activeOrderItemsCount === 0
);

const selectIsOnCartStep = createSelector(
  selectActiveStep,
  activeStep => activeStep === CHECKOUT_STEP_NAMES.CART
);

const selectShowEmptyCartBackgroundImage = createSelector(
  selectIsCartEmpty,
  selectIsOnCartStep,
  (isCartEmpty, isOnCartStep) => isCartEmpty && isOnCartStep
);

const selectEnabledCheckoutSteps = createSelector(
  selectIsAuthenticated,
  selectIsCartEmpty,
  selectShippingAddress,
  getCard,
  (isAuthenticated, isCartEmpty, shippingAddressId, card) => {
    return {
      [CHECKOUT_STEP_NAMES.CART]: true,
      [CHECKOUT_STEP_NAMES.DATE_OF_BIRTH]: false,
      [CHECKOUT_STEP_NAMES.ACCOUNT]: !isAuthenticated && !isCartEmpty,
      [CHECKOUT_STEP_NAMES.SHIPPING]: isAuthenticated && !isCartEmpty,
      [CHECKOUT_STEP_NAMES.PAYMENT]:
        isAuthenticated && !R.isEmpty(shippingAddressId) && !R.isNil(card),
      [CHECKOUT_STEP_NAMES.REVIEW_ORDER]:
        isAuthenticated && !isCartEmpty && !R.isEmpty(shippingAddressId),
      [CHECKOUT_STEP_NAMES.VISIT]: true
    };
  }
);

export const selectIsVisitPending = R.pathOr(false, [
  "visits",
  "activeOrderHasPendingVisit"
]);

export const checkoutFlowConnector = createStructuredSelector({
  activeStep: selectActiveStep,
  activeStepConfig: selectActiveStepConfig,
  enabledSteps: selectEnabledCheckoutSteps,
  isVisitStatusPending: selectIsVisitPending,
  showEmptyCartBackgroundImage: selectShowEmptyCartBackgroundImage
});
