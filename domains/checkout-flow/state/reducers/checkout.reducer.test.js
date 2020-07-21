import * as types from "../../../../constants/ActionTypes";
import { CHECKOUT_ACTIONS } from "../actions";
import { CHECKOUT_STEP_NAMES } from "../../checkout-flow.constants";

import { checkout, CHECKOUT_DEFAULT_STATE } from "./checkout.reducer";

describe("Checkout Reducer", () => {
  describe("Change Checkout Step", () => {
    it("Changes the active step to the one provided", () => {
      const nextStep = CHECKOUT_STEP_NAMES.PAYMENT;
      const action = {
        type: CHECKOUT_ACTIONS.CHANGE_STEP,
        payload: {
          step: nextStep
        }
      };
      const nextState = checkout(CHECKOUT_DEFAULT_STATE, action);
      expect(nextState).toEqual({
        step: nextStep
      });
    });
  });
  describe("Reset Checkout Step", () => {
    it("Resets the checkout step to Cart when the drawer visibility is toggled", () => {
      const action = {
        type: types.SHOW_DRAWER
      };
      const nextState = checkout(CHECKOUT_DEFAULT_STATE, action);
      expect(nextState).toEqual({
        step: CHECKOUT_STEP_NAMES.CART
      });
    });
  });
  describe("Default State", () => {
    it("Returns a default state for any other actions", () => {
      const action = {
        type: null
      };
      const nextState = checkout(CHECKOUT_DEFAULT_STATE, action);
      expect(nextState).toEqual(CHECKOUT_DEFAULT_STATE);
    });
  });
});
