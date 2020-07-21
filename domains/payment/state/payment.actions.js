export const PAYMENT_ACTIONS = {
  SAVE_PAYMENT_METHOD: "[checkout - payment] save payment method",
  INITIALIZE: "[checkout - payment] initialize"
};

export const PAYMENT = {
  savePaymentMethod: (data, context) => ({
    type: PAYMENT_ACTIONS.SAVE_PAYMENT_METHOD,
    payload: { data, context }
  }),
  initialize: () => ({
    type: PAYMENT_ACTIONS.INITIALIZE
  })
};

export const STRIPE_ACTIONS = {
  SET_STRIPE_IS_READY: "SET_STRIPE_IS_READY"
};

export const STRIPE = {
  setStripeIsReady: () => ({
    type: STRIPE_ACTIONS.SET_STRIPE_IS_READY
  })
};
