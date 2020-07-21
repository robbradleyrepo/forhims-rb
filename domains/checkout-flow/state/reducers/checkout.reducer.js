import * as types from "../../../../constants/ActionTypes";
import { CHECKOUT_ACTIONS } from "../actions";
import { CHECKOUT_STEP_NAMES } from "../../checkout-flow.constants";

export const CHECKOUT_DEFAULT_STATE = {
  step: CHECKOUT_STEP_NAMES.CART
};

export const checkout = (state = CHECKOUT_DEFAULT_STATE, action) => {
  switch (action.type) {
    case CHECKOUT_ACTIONS.CHANGE_STEP:
      return {
        ...state,
        step: action.payload.step
      };
    case types.SHOW_DRAWER:
      return {
        ...state,
        step: CHECKOUT_STEP_NAMES.CART
      };
    default:
      return state;
  }
};
