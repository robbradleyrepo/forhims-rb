export const CHECKOUT_ACTIONS = {
  CALCULATE_CART_TOTAL: "[checkout] calculate cart total",
  CHANGE_STEP: "[checkout] change step",
  CONFIRM_ORDER: "[checkout] confirm order",
  ORDER_CONFIRMED: "[checkout] order confirmed",
  GO_TO_STEP: "[checkout] go to step",
  NEXT_STEP: "[checkout] next step"
};

export const CHECKOUT = {
  calculateCartTotal: () => ({ type: CHECKOUT_ACTIONS.CALCULATE_CART_TOTAL }),
  confirmOrder: () => ({ type: CHECKOUT_ACTIONS.CONFIRM_ORDER }),
  orderConfirmed: () => ({ type: CHECKOUT_ACTIONS.ORDER_CONFIRMED }),
  nextStep: () => ({ type: CHECKOUT_ACTIONS.NEXT_STEP }),
  goToStep: step => ({ type: CHECKOUT_ACTIONS.GO_TO_STEP, payload: { step } }),
  changeStep: step => ({
    type: CHECKOUT_ACTIONS.CHANGE_STEP,
    payload: { step }
  })
};
