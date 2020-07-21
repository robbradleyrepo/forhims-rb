import { SHIPPING_VIEWS } from "../../../shipping/shipping.constants";

export const SHIPPING_ACTIONS = {
  CHANGE_VIEW: "[checkout - shipping] change view",
  EDIT_ORIGINAL_ADDRESS: "[checkout - shipping] edit original address",
  PRESAVE_SHIPPING_ADDRESS: "[checkout - shipping] presave shipping address",
  SAVE_SHIPPING_ADDRESS: "[checkout - shipping] save shipping address",
  SET_CART_ADDRESS: "[checkout - shipping] set shipping address",
  SELECT_SHIPPING_ADDRESS: "[checkout - shipping] select shipping address",
  VALIDATE_SHIPPING_ADDRESS: "[checkout - shipping] validate shipping address",
  VALIDATE_SHIPPING_ADDRESS_SUCCESS:
    "[checkout - shipping] validate shipping address success",
  VALIDATE_SHIPPING_ADDRESS_FAILURE:
    "[checkout - shipping] validate shipping address failure",
  CONFIRM_VALIDATED_ADDRESS: "[checkout - shipping] confirm validated address",
  SAVE_SELECTED_VALIDATED_ADDRESS:
    "[checkout - shipping] save selected validated addres",
  EDIT_SAVED_ADDRESS: "[profile - shipping] edit saved shipping address"
};

export const SHIPPING = {
  changeView: view => ({
    type: SHIPPING_ACTIONS.CHANGE_VIEW,
    payload: { view }
  }),
  gotoAddNewAddress: () => ({
    type: SHIPPING_ACTIONS.CHANGE_VIEW,
    payload: { view: SHIPPING_VIEWS.NEW }
  }),
  gotoValidateAddress: () => ({
    type: SHIPPING_ACTIONS.CHANGE_VIEW,
    payload: { view: SHIPPING_VIEWS.VALIDATE }
  }),
  gotoAddressList: () => ({
    type: SHIPPING_ACTIONS.CHANGE_VIEW,
    payload: { view: SHIPPING_VIEWS.LIST }
  }),
  editOriginalAddress: () => ({
    type: SHIPPING_ACTIONS.EDIT_ORIGINAL_ADDRESS
  }),
  editSavedAddress: (addressId, context, isValidating) => ({
    type: SHIPPING_ACTIONS.EDIT_SAVED_ADDRESS,
    payload: {
      addressId,
      context,
      isValidating
    }
  }),
  preSaveShippingAddress: (resolve, reject, context, isEditing) => ({
    type: SHIPPING_ACTIONS.PRESAVE_SHIPPING_ADDRESS,
    payload: { resolve, reject, context, isEditing }
  }),
  saveShippingAddress: (address, context) => ({
    type: SHIPPING_ACTIONS.SAVE_SHIPPING_ADDRESS,
    payload: { address, context }
  }),
  saveSelectedValidatedAddress: (resolve, reject, context) => ({
    type: SHIPPING_ACTIONS.SAVE_SELECTED_VALIDATED_ADDRESS,
    payload: { resolve, reject, context }
  }),
  setCartAddress: addressId => ({
    type: SHIPPING_ACTIONS.SET_CART_ADDRESS,
    payload: { addressId }
  }),
  selectCartAddress: (resolve, reject) => ({
    type: SHIPPING_ACTIONS.SELECT_SHIPPING_ADDRESS,
    payload: { resolve, reject }
  }),
  validateShippingAddress: (address, context) => ({
    type: SHIPPING_ACTIONS.VALIDATE_SHIPPING_ADDRESS,
    payload: { address, context }
  }),
  validateShippingAddressSuccess: (original, suggested, context) => ({
    type: SHIPPING_ACTIONS.VALIDATE_SHIPPING_ADDRESS_SUCCESS,
    payload: { original, suggested, context }
  }),
  validateShippingAddressFailure: (original, context) => ({
    type: SHIPPING_ACTIONS.VALIDATE_SHIPPING_ADDRESS_FAILURE,
    payload: { original, context }
  }),
  confirmValidatedAddress: (original, suggested, context) => ({
    type: SHIPPING_ACTIONS.CONFIRM_VALIDATED_ADDRESS,
    payload: { original, suggested, context }
  })
};
