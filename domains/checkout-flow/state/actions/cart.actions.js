export const CART_ACTIONS = {
  // TODO: Routine?
  ADD_TO_CART: "[cart] add to cart",
  ADD_TO_CART_SUCCESS: "[cart] add to cart success",
  ADD_TO_CART_FAILURE: "[cart] add to cart failure",
  APPLY_PRICING: "[cart] apply pricing",
  INCREASE_QUANTITY: "[cart] increase quantity",
  DECREASE_QUANTITY: "[cart] decrease quantity",
  REMOVE_FROM_CART: "[cart] remove from cart",
  UPDATE_CART: "[cart] update cart"
};

export const CART = {
  applyPricing: payload => ({
    type: CART_ACTIONS.APPLY_PRICING,
    payload
  }),
  addToCart: id => ({ type: CART_ACTIONS.ADD_TO_CART, payload: { id } }),
  addToCartSuccess: product => ({
    type: CART_ACTIONS.ADD_TO_CART_SUCCESS,
    payload: { product }
  }),
  addToCartFailure: () => ({
    type: CART_ACTIONS.ADD_TO_CART_FAILURE,
    paylaod: {}
  }),
  increaseQuantity: id => ({
    type: CART_ACTIONS.INCREASE_QUANTITY,
    payload: { id }
  }),
  decreaseQuantity: id => ({
    type: CART_ACTIONS.DECREASE_QUANTITY,
    payload: { id }
  }),
  removeFromCart: id => ({
    type: CART_ACTIONS.REMOVE_FROM_CART,
    payload: { id }
  }),
  updateCart: cart => ({
    type: CART_ACTIONS.UPDATE_CART,
    payload: { cart }
  })
};
