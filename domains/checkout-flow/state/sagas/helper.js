// nnasoody
// pattern generator

// with t as (select
//   *,
//   case when contains_rx and not has_dob
//       then 'CHECKOUT_STEP_NAMES.DATE_OF_BIRTH'
//     when not cart_has_address and not has_address
//       then 'CHECKOUT_STEP_NAMES.SHIPPING'
//     when not cart_has_address and has_address
//       then 'CHECKOUT_STEP_NAMES.SHIPPING_LIST'
//     when not has_payment
//       then 'CHECKOUT_STEP_NAMES.PAYMENT'
//     when cart_has_address and not has_address
//       then 'undefined'
//     else 'CHECKOUT_STEP_NAMES.REVIEW_ORDER'
//   end page,
//   session || ',' ||  contains_rx || ',' || has_dob || ',' || cart_has_address || ',' || has_address || ',' || has_payment as lookup
// from
//   unnest(array[true]) session
//   cross join (select unnest(array[true, false]) contains_rx) b
//   cross join (select unnest(array[true, false]) has_dob) c
//   cross join (select unnest(array[true, false]) cart_has_address) d
//   cross join (select unnest(array[true, false]) has_address) e
//   cross join (select unnest(array[true, false]) has_payment) f
// )
// select
//   '"' || lookup || '"' || ': ' || '"' || page || '"'
// from t;

// cart: {
//   items: [{ productId, quantity, subscription }],
//   addressId,
//   coupon
// }

import { CHECKOUT_STEP_NAMES } from "../../checkout-flow.constants";

// Pattern :: (has_session, contains_rx, has_dob, cart_has_address, has_address, has_payment)
const PATTERNS = {
  // "true,true,true,true,true,true": CHECKOUT_STEP_NAMES.REVIEW_ORDER,
  "true,true,true,false,true,true": CHECKOUT_STEP_NAMES.SHIPPING,
  "true,true,false,false,false,false": CHECKOUT_STEP_NAMES.VISIT,
  "true,true,true,true,true,false": CHECKOUT_STEP_NAMES.PAYMENT,
  "true,true,true,true,false,true": undefined,
  "true,true,true,true,false,false": CHECKOUT_STEP_NAMES.PAYMENT,
  "true,true,true,false,true,false": CHECKOUT_STEP_NAMES.SHIPPING,
  "true,true,true,false,false,true": CHECKOUT_STEP_NAMES.SHIPPING,
  "true,true,true,false,false,false": CHECKOUT_STEP_NAMES.SHIPPING,
  "true,false,true,true,true,true": CHECKOUT_STEP_NAMES.REVIEW_ORDER,
  "true,false,true,true,true,false": CHECKOUT_STEP_NAMES.PAYMENT,
  "true,false,true,true,false,true": undefined,
  "true,false,true,true,false,false": CHECKOUT_STEP_NAMES.PAYMENT,
  "true,false,true,false,true,true": CHECKOUT_STEP_NAMES.SHIPPING,
  "true,false,true,false,true,false": CHECKOUT_STEP_NAMES.SHIPPING,
  "true,false,true,false,false,true": CHECKOUT_STEP_NAMES.SHIPPING,
  "true,false,true,false,false,false": CHECKOUT_STEP_NAMES.SHIPPING,
  "true,false,false,true,true,true": CHECKOUT_STEP_NAMES.REVIEW_ORDER,
  "true,true,true,true,true,true": CHECKOUT_STEP_NAMES.REVIEW_ORDER,
  "true,false,false,true,true,false": CHECKOUT_STEP_NAMES.PAYMENT,
  "true,false,false,true,false,true": undefined,
  "true,false,false,true,false,false": CHECKOUT_STEP_NAMES.PAYMENT,
  "true,false,false,false,true,true": CHECKOUT_STEP_NAMES.SHIPPING,
  "true,false,false,false,true,false": CHECKOUT_STEP_NAMES.SHIPPING,
  "true,false,false,false,false,true": CHECKOUT_STEP_NAMES.SHIPPING,
  "true,false,false,false,false,false": CHECKOUT_STEP_NAMES.SHIPPING
};

export const getNextStep = (
  hasSession,
  containsRx,
  hasDob,
  cartHasShippingAddressId,
  hasShippingAddresses,
  hasPaymentMethod
) => {
  if (!hasSession) {
    return CHECKOUT_STEP_NAMES.ACCOUNT;
  }

  const arr = [
    hasSession,
    containsRx,
    hasDob,
    cartHasShippingAddressId,
    hasShippingAddresses,
    hasPaymentMethod
  ];
  return R.compose(
    R.prop(R.__, PATTERNS),
    R.join(","),
    R.map(R.toString)
  )(arr);
};
