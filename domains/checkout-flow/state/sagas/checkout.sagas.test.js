import {
  createVisit,
  getNextOrderStep,
  handleCalculateCartTotal,
  handleCheckoutGotoStep,
  handleCheckoutNextStep,
  handleCheckoutStepChanged,
  maybeApplyCoupon,
  maybeCreateOrder
} from "./checkout.sagas";
import { stopSubmit } from "redux-form";
import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { CHECKOUT, CHECKOUT_ACTIONS, CART, ACTIVITY } from "../actions";
import { toastrHandler } from "../../../../modules/toastr/toastr.actions";
import actions from "../../../../actions";
import {
  cartHasShippingAddressId,
  containsRx,
  getActiveOrder,
  getCartItems,
  getCartShippingAddressId,
  hasSession,
  hasPendingOrder,
  selectCouponFromCart,
  selectIsOrderWaitingOnFinalReview,
  getActiveOrderItems,
  getCouponFromAnyState,
  selectActiveVisit
} from "../selectors/checkout";
import { getMe } from "../../../../selectors/me";
import { CHECKOUT_STEP_NAMES } from "../../checkout-flow.constants";
import {
  calculateCartTotals,
  createItemInOrder,
  makeOrder,
  updateOrderById,
  validateCart
} from "./requests";
import { selectTotalFromCartState } from "../selectors/cart";
import { put, select, call } from "redux-saga/effects";
import { setupRequestSpy } from "../../../../utils/tests";
import { CART_PROMO_FORM } from "../../../../components/checkout/cart/cart-promo/cart-promo.constants";
import "isomorphic-fetch";

global.$S = {};

describe("Checkout sagas and reducers", () => {
  describe("Checkout - goToStep saga", () => {
    it("When goToStep action is fired: dispatches changeStep action", () => {
      return expectSaga(handleCheckoutGotoStep, {
        type: CHECKOUT_ACTIONS.GO_TO_STEP,
        payload: { step: CHECKOUT_STEP_NAMES.DATE_OF_BIRTH }
      })
        .run()
        .then(result => {
          const { effects } = result;

          expect(effects.put).toEqual(
            expect.arrayContaining([
              put(CHECKOUT.changeStep(CHECKOUT_STEP_NAMES.DATE_OF_BIRTH))
            ])
          );
        });
    });
  });
  describe("Checkout - next step saga", () => {
    it("When nextStep action is fired: gets what the next step should be and dispatches changeStep action with that step", () => {
      return expectSaga(handleCheckoutNextStep, {
        type: CHECKOUT_ACTIONS.NEXT_STEP
      })
        .provide([
          [call(maybeCreateOrder), undefined],
          [select(getActiveOrder), { id: "123" }],
          // TODO: unit test get next order step
          [call(getNextOrderStep), CHECKOUT_STEP_NAMES.CART]
        ])
        .run()
        .then(result => {
          const { effects } = result;
          expect(effects.put).toEqual(
            expect.arrayContaining([
              put(CHECKOUT.changeStep(CHECKOUT_STEP_NAMES.CART))
            ])
          );
        });
    });
  });
  describe("Checkout - stepChanged saga", () => {
    const mockOrder = { id: "123" };
    beforeEach(() => {
      global.$S = {
        getState: () => {
          return { token: "asdf" };
        },
        dispatch: () => {}
      };
    });
    it("Should recalculate the cart total when changing to the CART step", () => {
      return expectSaga(handleCheckoutStepChanged, {
        type: CHECKOUT_ACTIONS.CHANGE_STEP,
        payload: {
          step: CHECKOUT_STEP_NAMES.CART
        }
      })
        .provide([
          [select(selectActiveVisit), true],
          [select(getMe), true],
          [select(getActiveOrder), mockOrder]
        ])
        .run()
        .then(result => {
          const { effects } = result;
          expect(effects.put).toEqual(
            expect.arrayContaining(
              [put(ACTIVITY.hide())],
              [put(CHECKOUT.calculateCartTotal())]
            )
          );
          // expect(effects.put).toEqual(
          //   expect.arrayContaining([put(CHECKOUT.calculateCartTotal())])
          // );
        });
    });
    it("Should recalculate the cart total when changing to the REVIEW_ORDER step", () => {
      return expectSaga(handleCheckoutStepChanged, {
        type: CHECKOUT_ACTIONS.CHANGE_STEP,
        payload: {
          step: CHECKOUT_STEP_NAMES.REVIEW_ORDER
        }
      })
        .provide([
          [select(selectActiveVisit), true],
          [select(getMe), true],
          [select(getActiveOrder), mockOrder]
        ])
        .run()
        .then(result => {
          const { effects } = result;
          expect(effects.put).toEqual(
            expect.arrayContaining([put(actions.order.calculateTotal())])
          );
        });
    });
    it("Should re-route to Review Order if the step is Visit and the order is ready", () => {
      return expectSaga(handleCheckoutStepChanged, {
        type: CHECKOUT_ACTIONS.CHANGE_STEP,
        payload: {
          step: CHECKOUT_STEP_NAMES.VISIT
        }
      })
        .provide([
          [select(getActiveOrder), mockOrder],
          [select(selectIsOrderWaitingOnFinalReview), true],
          [select(getMe), true]
        ])
        .run()
        .then(result => {
          const { effects } = result;
          expect(effects.put).toEqual(
            expect.arrayContaining([put(ACTIVITY.show())])
          );
        });
    });
    it("Should create and show the visit when changing to the VISIT step", () => {
      return expectSaga(handleCheckoutStepChanged, {
        type: CHECKOUT_ACTIONS.CHANGE_STEP,
        payload: {
          step: CHECKOUT_STEP_NAMES.VISIT
        }
      })
        .provide([
          [select(getActiveOrder), mockOrder],
          [select(selectIsOrderWaitingOnFinalReview), false],
          [matchers.call.like(createVisit), undefined],
          [select(getMe), true]
        ])
        .run()
        .then(result => {
          const { effects } = result;
          expect(effects.put).toEqual(
            expect.arrayContaining([put(ACTIVITY.show()), put(ACTIVITY.hide())])
          );
          expect(effects.call).toEqual(
            expect.arrayContaining([call(createVisit, mockOrder)])
          );
        });
    });
  });
  describe("Checkout - maybeCreateOrder saga", () => {
    let postSpy, patchSpy;
    beforeEach(() => {
      patchSpy = setupRequestSpy(patchSpy, "patch");
      postSpy = setupRequestSpy(postSpy, "post");
    });

    afterEach(() => {
      postSpy.mockReset();
      patchSpy.mockReset();
    });
    const mockOrder = { id: "order-id" };
    const mockCartItemBase = {
      id: "cart-item-id"
    };
    const mockTotal = {
      discount: 0,
      grandTotal: 4900,
      medicalFee: 500,
      processingFee: 0
    };
    const mockShippingAddressId = "shipping-id-1";
    const mockValidateCartResponse = { validates: true };
    const mockValidateCartErrorResponse = {
      error: "cannot have more than one RX product"
    };
    const mockItem = { id: "mock-item-id" };
    const provideBase = [
      [select(selectTotalFromCartState), mockTotal],
      // [select(handleCheckoutStepChanged), true]
      // [select(hasDob), true],
      [select(hasSession), true],
      [select(cartHasShippingAddressId), true],
      [call(makeOrder), mockOrder],
      [select(getCartShippingAddressId), mockShippingAddressId],
      [matchers.call.fn(createItemInOrder), mockItem]
    ];
    const expectCallsIfOrderShouldBeMade = [
      call(updateOrderById, mockOrder.id, {
        shippingAddressId: mockShippingAddressId
      })
    ];
    const expectCallsIfCartValidationSucceeds = [
      call(maybeApplyCoupon, mockOrder)
    ];
    const expectPutsIfOrderShouldBeMade = [
      put(
        actions.order.patchOrder({
          shippingAddressId: mockShippingAddressId
        })
      )
    ];
    const expectPutsIfCartValidationSucceeds = [
      put(CART.applyPricing(mockTotal)),
      put(actions.cart.resetCart()),
      put(ACTIVITY.show()),
      put(ACTIVITY.hide())
    ];
    it("When requirements met to make an RX order, should dispatch necessary actions and call necessary functions", () => {
      // call makeOrder (request), dispatch action createOrderResp with the response,
      // call updateOrderById (request) with the cart shipping address ID,
      // dispatch patchOrder with the shipping address ID,
      // for every item in the cart: call createItemInOrder (request) then call validateCart
      // (request) then call updateItemInOrderResp if validation is successful,
      // call maybeApplyCoupon with the order, put applyPricing, put resetCart
      const mockCartItem = {
        ...mockCartItemBase,
        requiresSubscription: true,
        quantity: 1
      };

      return expectSaga(maybeCreateOrder, null)
        .provide([
          ...provideBase,
          [select(getCartItems), [mockCartItem]],
          // to make shouldCreateRxOrder true
          [select(containsRx), true],
          [select(hasPendingOrder), false],
          [matchers.call.fn(validateCart), mockValidateCartResponse]
        ])

        .run()
        .then(result => {
          const { effects } = result;
          expect(effects.put).toEqual(
            expect.arrayContaining([
              ...expectPutsIfOrderShouldBeMade,
              ...expectPutsIfCartValidationSucceeds,
              put(actions.order.updateItemInOrderResp(mockItem))
            ])
          );
          expect(effects.call).toEqual(
            expect.arrayContaining([
              ...expectCallsIfOrderShouldBeMade,
              ...expectCallsIfCartValidationSucceeds,
              call(createItemInOrder, {
                productId: mockCartItem.id,
                // quantity 1 for RX
                quantity: 1,
                // subscription quantity 1 for RX
                subscription: 1,
                orderId: mockOrder.id
              })
            ])
          );
        });
    });
    it("When requirements met to make an OTC order, should dispatch necessary actions and call necessary functions", () => {
      const mockCartItem = {
        ...mockCartItemBase,
        requiresSubscription: false,
        quantity: 2
      };

      return expectSaga(maybeCreateOrder, null)
        .provide([
          ...provideBase,
          [select(getCartItems), [mockCartItem]],
          // to make shouldCreateOtcOrder true
          [select(containsRx), false],
          [select(hasPendingOrder), false],
          [matchers.call.fn(validateCart), mockValidateCartResponse]
        ])
        .run()
        .then(result => {
          const { effects } = result;
          expect(effects.put).toEqual(
            expect.arrayContaining([
              ...expectPutsIfOrderShouldBeMade,
              ...expectPutsIfCartValidationSucceeds,
              put(actions.order.updateItemInOrderResp(mockItem))
            ])
          );
          expect(effects.call).toEqual(
            expect.arrayContaining([
              ...expectCallsIfOrderShouldBeMade,
              ...expectCallsIfCartValidationSucceeds,
              call(createItemInOrder, {
                productId: mockCartItem.id,
                quantity: 2,
                // 0 for non-RX
                subscription: 0,
                orderId: mockOrder.id
              })
            ])
          );
        });
    });
    it("When requirements are not met to make an order, should not dispatch any further actions", () => {
      const mockCartItem = {
        ...mockCartItemBase,
        requiresSubscription: true,
        quantity: 1
      };

      return expectSaga(maybeCreateOrder)
        .provide([
          ...provideBase,
          [select(getCartItems), [mockCartItem]],
          [select(containsRx), true],
          [select(hasPendingOrder), true],
          [matchers.call.fn(validateCart), mockValidateCartResponse]
        ])
        .run()
        .then(result => {
          const { effects } = result;
          expect(effects.put).toBeUndefined();
          expect(effects.call).toBeUndefined();
        });
    });
    it("When cart validation fails, dispatches changeStep action to go back to cart step and fires error toast", () => {
      const mockCartItem = {
        ...mockCartItemBase,
        requiresSubscription: true,
        quantity: 1
      };

      return expectSaga(maybeCreateOrder, null)
        .provide([
          ...provideBase,
          [matchers.call.fn(validateCart), mockValidateCartErrorResponse],
          [select(getCartItems), [mockCartItem]],
          [select(containsRx), true],
          [select(hasPendingOrder), false]
        ])
        .run()
        .then(result => {
          const { effects } = result;
          expect(effects.put).toEqual(
            expect.arrayContaining([
              ...expectPutsIfOrderShouldBeMade,
              put(
                toastrHandler.error({
                  message: mockValidateCartErrorResponse.error
                })
              ),
              put(CHECKOUT.changeStep(CHECKOUT_STEP_NAMES.CART)),
              put(ACTIVITY.hide())
            ])
          );
          expect(effects.call).toEqual(
            expect.arrayContaining([
              ...expectCallsIfOrderShouldBeMade,
              call(createItemInOrder, {
                productId: mockCartItem.id,
                quantity: 1,
                subscription: 1,
                orderId: mockOrder.id
              })
            ])
          );
        });
    });
  });
  describe("Checkout - maybeApplyCoupon saga", () => {
    it("Calls updateOrderById (request) to apply the coupon if a cart coupon exists", () => {
      return expectSaga(maybeApplyCoupon, {
        id: "order-with-coupon-id"
      })
        .provide([[select(selectCouponFromCart), "coupon-123"]])
        .run()
        .then(result => {
          const { effects } = result;
          expect(effects.call).toEqual(
            expect.arrayContaining([
              call(updateOrderById, "order-with-coupon-id", {
                coupon: "coupon-123"
              })
            ])
          );
        });
    });
  });
  describe("handleCalculateCartTotal", () => {
    const cartItems = [
      {
        product_id: "DWraq9FV",
        quantity: 1
      }
    ];

    it("updates the form with an error message when the promo code is invalid (discount of 0)", () => {
      const calculateCartTotalsResponse = {
        grand_total: 4300,
        discount: 0,
        processing_fee: 0,
        medical_fee: 1000
      };

      return expectSaga(handleCalculateCartTotal)
        .provide([
          [select(getCouponFromAnyState), "invalidCouponCode"],
          [select(getActiveOrderItems), cartItems],
          [matchers.call.fn(calculateCartTotals), calculateCartTotalsResponse]
        ])
        .put(actions.order.applyCouponToOrder(null))
        .put(
          stopSubmit(CART_PROMO_FORM, { discount: "Promo code is not valid" })
        )
        .put(CART.applyPricing(calculateCartTotalsResponse))
        .run()
        .then(result => {
          expect(result.effects.select.length).toBe(2);
          expect(result.effects.call.length).toBe(1);
        });
    });

    it("accepts valid promo codes", () => {
      const calculateCartTotalsResponse = {
        grand_total: 4300,
        discount: 900,
        processing_fee: 0,
        medical_fee: 1000
      };

      return expectSaga(handleCalculateCartTotal)
        .provide([
          [select(getCouponFromAnyState), "validCouponCode"],
          [select(getActiveOrderItems), cartItems],
          [matchers.call.fn(calculateCartTotals), calculateCartTotalsResponse]
        ])
        .put(
          CART.applyPricing({
            ...calculateCartTotalsResponse,
            coupon: "validcouponcode"
          })
        )
        .run()
        .then(result => {
          expect(result.effects.select.length).toBe(2);
          expect(result.effects.call.length).toBe(1);
        });
    });
  });
});
