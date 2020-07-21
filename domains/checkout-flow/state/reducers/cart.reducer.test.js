import * as types from "../../../../constants/ActionTypes";
import { CART_ACTIONS } from "../actions";

import { cart, CART_DEFAULT_STATE } from "./cart.reducer";

describe("Cart Reducer", () => {
  describe("Add To Cart", () => {
    it("Should add a product to the list of items", () => {
      const product = {
        id: "abc123",
        name: "Addyi"
      };
      const action = {
        type: CART_ACTIONS.ADD_TO_CART_SUCCESS,
        payload: {
          product
        }
      };
      const nextState = cart(CART_DEFAULT_STATE, action);
      expect(nextState.items).toContain(product);
    });
  });

  describe.skip("Remove From Cart", () => {
    // TODO: Determine why remove from cart does not modify state
  });
  describe("Update Cart", () => {
    it("Should update the entire cart with a new state", () => {
      const product = {
        id: "abc123",
        name: "Addyi"
      };
      const productVariation = {
        id: "xyz789",
        name: "Birth Control"
      };
      const nextCart = {
        ...CART_DEFAULT_STATE,
        items: [product, productVariation]
      };
      const action = {
        type: CART_ACTIONS.UPDATE_CART,
        payload: {
          cart: nextCart
        }
      };
      const nextState = cart(CART_DEFAULT_STATE, action);
      expect(nextState).toEqual(nextCart);
    });
  });
  describe("Pricing", () => {
    it("Should apply all new pricing to the cart", () => {
      const promoPricing = {
        coupon: 500,
        grandTotal: 10000
      };
      const action = {
        type: CART_ACTIONS.APPLY_PRICING,
        payload: promoPricing
      };
      const nextState = cart(CART_DEFAULT_STATE, action);
      expect(nextState).toMatchObject(promoPricing);
    });
    it("Should maintain existing pricing if provided an invalid update", () => {
      const mockState = {
        ...CART_DEFAULT_STATE,
        grandTotal: 105000
      };
      const action = {
        type: CART_ACTIONS.APPLY_PRICING,
        payload: null
      };
      const nextState = cart(mockState, action);
      expect(nextState).toEqual(mockState);
    });
  });
  describe.skip("Quantity", () => {
    // TODO: Determine why remove from cart does not modify state
  });
  describe("Reset Cart", () => {
    it("Should restore the initial state with no pricing or products", () => {
      const product = {
        id: "abc123",
        name: "Addyi"
      };
      const productVariation = {
        id: "xyz789",
        name: "Birth Control"
      };
      const mockState = {
        ...CART_DEFAULT_STATE,
        grandTotal: 105000,
        items: [product, productVariation]
      };
      const action = {
        type: types.RESET_CART
      };
      const nextState = cart(mockState, action);
      expect(nextState).toEqual(CART_DEFAULT_STATE);
    });
  });
  describe("Coupons", () => {
    it("Should apply the provided coupon code", () => {
      const coupon = "shine10d";
      const action = {
        type: types.APPLY_COUPON_TO_ORDER,
        payload: coupon
      };
      const nextState = cart(CART_DEFAULT_STATE, action);
      expect(nextState).toMatchObject({ coupon });
    });
  });
  describe("Default State", () => {
    it("Returns a default state for any other actions", () => {
      const action = {
        type: "give me free products"
      };
      const nextState = cart(CART_DEFAULT_STATE, action);
      expect(nextState).toEqual(CART_DEFAULT_STATE);
    });
  });
});
