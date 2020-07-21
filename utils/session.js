"use strict";

import R from "ramda";

const SHIPPING_ADDRESS = "shipping";

const getState = () => $S.getState();

const getShippingAddress = () => {
  if (!hasShippingAddress()) {
    return null;
  }

  return R.compose(
    R.find(x => x.addressType === SHIPPING_ADDRESS),
    R.prop("addresses")
  )(getState().me);
};

const hasShippingAddress = () => {
  if (!hasAddresses()) {
    return false;
  }

  return R.compose(
    R.any(x => x.addressType === SHIPPING_ADDRESS),
    R.prop("addresses")
  )(getState().me);
};

const hasAddresses = () => {
  let { me } = getState();
  return me && me.addresses && me.addresses.length;
};

export default {
  getShippingAddress,
  hasShippingAddress
};
