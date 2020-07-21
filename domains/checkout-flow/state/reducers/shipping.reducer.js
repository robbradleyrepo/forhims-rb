import * as R from "ramda";

import * as types from "../../../../constants/ActionTypes";
import { SHIPPING_ACTIONS } from "../actions";
import { SHIPPING_VIEWS } from "../../../shipping/shipping.constants";

export const SHIPPING_DEFAULT_STATE = {
  activeView: SHIPPING_VIEWS.NEW,
  validation: {
    original: null,
    suggested: null
  },
  addressId: null,
  editingAddressId: null
};

export const shipping = (state = SHIPPING_DEFAULT_STATE, action) => {
  switch (action.type) {
    case SHIPPING_ACTIONS.CHANGE_VIEW:
      return {
        ...state,
        activeView: action.payload.view
      };
    case SHIPPING_ACTIONS.SET_CART_ADDRESS:
      return R.assoc("addressId", action.payload.addressId, state);
    case SHIPPING_ACTIONS.VALIDATE_SHIPPING_ADDRESS:
      return {
        ...state,
        validation: null
      };
    case SHIPPING_ACTIONS.CONFIRM_VALIDATED_ADDRESS:
      return {
        ...state,
        validation: {
          ...action.payload
        }
      };
    case SHIPPING_ACTIONS.EDIT_SAVED_ADDRESS:
      return {
        ...state,
        editingAddressId: R.pathOr(null, ["payload", "addressId"], action)
      };
    case types.RESET_CART:
      return SHIPPING_DEFAULT_STATE;
    default:
      return state;
  }
};
