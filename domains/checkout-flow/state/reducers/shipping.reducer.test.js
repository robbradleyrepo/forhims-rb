import * as types from "../../../../constants/ActionTypes";
import { SHIPPING_ACTIONS } from "../actions";
import { SHIPPING_VIEWS } from "../../../shipping/shipping.constants";

import { SHIPPING_DEFAULT_STATE, shipping } from "./shipping.reducer";

describe("Shipping Reducer", () => {
  describe("Shipping UI", () => {
    it("Updates the Shipping UI view", () => {
      const nextView = SHIPPING_VIEWS.EDIT;
      const action = {
        type: SHIPPING_ACTIONS.CHANGE_VIEW,
        payload: { view: nextView }
      };
      const nextState = shipping(SHIPPING_DEFAULT_STATE, action);
      expect(nextState).toMatchObject({ activeView: nextView });
    });
  });
  describe("Shipping Addresses", () => {
    it("Should save a user's active address ID", () => {
      const addressId = "myHomeAddress";
      const action = {
        type: SHIPPING_ACTIONS.SET_CART_ADDRESS,
        payload: { addressId }
      };
      const nextState = shipping(SHIPPING_DEFAULT_STATE, action);
      expect(nextState).toMatchObject({
        addressId
      });
    });
    it("Should store a user's provided address ID for editing", () => {
      const addressId = "abc123";
      const action = {
        type: SHIPPING_ACTIONS.EDIT_SAVED_ADDRESS,
        payload: {
          addressId
        }
      };
      const nextState = shipping(SHIPPING_DEFAULT_STATE, action);
      expect(nextState).toMatchObject({
        editingAddressId: addressId
      });
    });
  });
  describe("Shipping Validation", () => {
    it("Should remove any previously validated addresses before validating a new one", () => {
      const mockState = {
        ...SHIPPING_DEFAULT_STATE,
        validation: {
          address: {
            street: "18 York St",
            city: "Toronto"
          }
        }
      };
      const action = {
        type: SHIPPING_ACTIONS.VALIDATE_SHIPPING_ADDRESS
      };
      const nextState = shipping(mockState, action);
      expect(nextState).toMatchObject({ validation: null });
    });
    it("Should store the new address after validation", () => {
      const validatedAddress = {
        id: "validated-address-123",
        city: "Toronto",
        province: "ON"
      };
      const action = {
        type: SHIPPING_ACTIONS.CONFIRM_VALIDATED_ADDRESS,
        payload: validatedAddress
      };
      const nextState = shipping(SHIPPING_DEFAULT_STATE, action);
      expect(nextState).toMatchObject({
        validation: validatedAddress
      });
    });
  });
  describe("Reset Shipping", () => {
    it("Resets all saved shipping details when the cart is emptied", () => {
      const mockState = {
        ...SHIPPING_DEFAULT_STATE,
        addressId: "myAddressId"
      };
      const action = {
        type: types.RESET_CART
      };
      const nextState = shipping(mockState, action);
      expect(nextState).toEqual(SHIPPING_DEFAULT_STATE);
    });
  });
  describe("Default State", () => {
    it("Returns a default state for any other actions", () => {
      const action = {
        type: null
      };
      const nextState = shipping(SHIPPING_DEFAULT_STATE, action);
      expect(nextState).toEqual(SHIPPING_DEFAULT_STATE);
    });
  });
});
