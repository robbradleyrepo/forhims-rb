import * as R from "ramda";
import * as types from "../../../../constants/ActionTypes";
import { CART_ACTIONS } from "../actions";

/**
 * TODO: Nuke when checkout is implemented
 */
const CART_STATUS = {
  pending: "pending",
  submitting: "submitting",
  complete: "complete"
};

export const CART_DEFAULT_STATE = {
  coupon: null,
  grandTotal: null,
  items: [],
  shipping: null,
  status: CART_STATUS.pending,
  tax: null,
  total: null,
  userId: null
};

export const cart = (state = CART_DEFAULT_STATE, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload.product]
      };
    case CART_ACTIONS.REMOVE_FROM_CART:
      return {
        ...state
      };
    case CART_ACTIONS.UPDATE_CART:
      return {
        ...action.payload.cart
      };
    case CART_ACTIONS.APPLY_PRICING:
      return R.merge(state, action.payload);
    case CART_ACTIONS.INCREASE_QUANTITY:
      return {
        ...state
      };
    case CART_ACTIONS.DECREASE_QUANTITY:
      return {
        ...state
      };
    case types.RESET_CART:
      return CART_DEFAULT_STATE;
    case types.APPLY_COUPON_TO_ORDER:
      return R.assoc("coupon", action.payload, state);
    default:
      return state;
  }
};
