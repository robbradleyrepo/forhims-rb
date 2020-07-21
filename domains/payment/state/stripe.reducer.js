import { STRIPE_ACTIONS } from "./payment.actions";

const STRIPE_DEFAULT_STATE = {
  isReady: false
};

export const stripe = (state = STRIPE_DEFAULT_STATE, action) => {
  switch (action.type) {
    case STRIPE_ACTIONS.SET_STRIPE_IS_READY:
      return { isReady: true };
    default:
      return state;
  }
};
