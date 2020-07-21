"use strict";

import STEPS from "../constants/CheckoutSteps";
import { createSelector } from "reselect";
import { getDifferenceInYears } from "../utils/date";

import R from "ramda";

// constants
// ---

const HAIR_TAG = "hair";

const INVALID_ORDERS = ["pending", "cancelled"];

// Functions
// ---

const concatAllAndUniq = R.compose(
  R.uniq,
  R.flatten
);

// orderItems :: Order -> [ Item ]
const orderItems = R.compose(
  R.defaultTo([]),
  R.prop("items")
);

// stateToOrder :: State -> Order
const stateToOrder = R.compose(
  R.defaultTo({}),
  R.path(["orders", "active"])
);

// isCartEmpty :: State -> Bool
const isCartEmpty = R.compose(
  R.equals(0),
  R.length,
  orderItems,
  stateToOrder
);

// rxHairItems :: State -> [ Item ]
const rxHairItems = state => {
  return R.compose(
    R.filter(item => {
      let p = state.products.byId[item.productId];
      return p.requiresConsultation && R.contains(HAIR_TAG, p.tags);
    }),
    orderItems,
    stateToOrder
  )(state);
};

const hasDuplicateRxHairProducts = R.compose(
  R.gt(R.__, 1),
  R.length,
  rxHairItems
);

// id :: String
// itemsToProductIds :: [ Item ] -> [ id ]
const itemsToProductIds = R.map(R.prop("productId"));

const getProductIdListOfRxHairItems = R.compose(
  itemsToProductIds,
  rxHairItems
);

// Determine products that should be removed from the cart;
// e.g. can't have RX kit + Fin or RX kit + Edible kit
// Finasteride < Edible Kit < RX Kit
// getProductIdListToRemove :: State -> [ Item ]
const getProductIdListToRemove = state => {
  const {
    products: { idByName }
  } = state.config;
  if (hasDuplicateRxHairProducts(state)) {
    let productIds = R.compose(
      itemsToProductIds,
      rxHairItems
    )(state);
    return R.contains(idByName.rxHairKit, productIds)
      ? [idByName.edibleHairKit, idByName.finasteride] // Includes RX kit? Remove all others
      : [idByName.finasteride]; // Otherwise has to be edible and fin; remove fin
  } else {
    return [];
  }
};

// RX products with active subscriptions; Can't by too many dick pills
// offendingItems :: State -> [ Product ]
function getProductIdListOfOffendingItems(state) {
  let offendingProductsById = getOffendingProductsById(state);
  return R.compose(
    R.filter(R.prop(R.__, offendingProductsById)),
    R.map(R.prop("productId")),
    R.filter(x => state.products.byId[x.productId].requiresConsultation),
    orderItems,
    stateToOrder
  )(state);
}

// validOrder :: State -> [ Order ]
const stateToValidOrders = R.compose(
  R.filter(x => !R.contains(x.status, INVALID_ORDERS)),
  R.values,
  R.path(["orders", "byId"])
);

const getRxProductIdListWithActiveSub = state => {
  return R.compose(
    R.map(R.prop("id")),
    prescriptionsWithActiveSub =>
      R.compose(
        R.filter(x => {
          return R.contains(
            x.prescriptions && R.head(x.prescriptions),
            prescriptionsWithActiveSub
          );
        }),
        R.values
      )(state.products.byId),
    concatAllAndUniq,
    R.map(x => state.products.byId[x].prescriptions),
    R.filter(x => state.products.byId[x].prescriptions), // filter for rx ones
    R.uniq,
    R.map(R.prop("productId")),
    R.flatten,
    R.map(orderItems),
    stateToValidOrders
  )(state);
};

const inAgeRange = (dob, range) => {
  let age = getDifferenceInYears(new Date(), dob);
  return age >= range.MIN && age <= range.MAX;
};

const getRxProductIdListOutsideAgeRange = state => {
  let {
    products: { ageRange, rxIdsByType }
  } = state.config;
  let user = state.me;
  // Don't have age yet? don't blacklist anything just yet
  if (!user || !user.dob) {
    return [];
  }
  //
  return R.reduce(
    (result, prescriptionType) => {
      return inAgeRange(user.dob, ageRange[prescriptionType])
        ? result
        : R.concat(result, rxIdsByType[prescriptionType]);
    },
    [],
    R.keys(rxIdsByType) // [ "HAIR_LOSS", "ED" ]
  );
};

// computes the list of product ids the user cannot purchase
// getOffendingProductsById = Rx products with active prescription + Rx products outside of age range
// getOffendingProductsById  :: State -> { ProductId : true }
function getOffendingProductsById(state) {
  let result = concatAllAndUniq([
    getRxProductIdListOutsideAgeRange(state),
    getRxProductIdListWithActiveSub(state)
  ]);
  // Make a truth table
  return R.zipObj(result, R.repeat(true, result.length));
}

const hasSubscriptionItemInCart = state =>
  R.compose(
    R.any(x => state.products.byId[x.productId].requiresSubscription),
    orderItems,
    stateToOrder
  )(state);

const hasRequiredConsultation = state =>
  R.compose(
    R.any(id => state.products.byId[id].requiresConsultation),
    R.map(R.prop("productId")),
    orderItems,
    stateToOrder
  )(state);

const stateToMe = R.compose(
  R.defaultTo({}),
  R.prop("me")
);

const meToAddresses = R.compose(
  R.defaultTo([]),
  R.prop("addresses")
);

const meToCardDetails = R.compose(
  R.defaultTo([]),
  R.prop("cardDetails")
);

function getCard(state) {
  return R.compose(
    x => x && x.card,
    R.find(x => state.me && x.id === state.me.paymentToken),
    meToCardDetails,
    stateToMe
  )(state);
}

function getShippingAddress(state) {
  let addressId = R.compose(
    R.prop("shippingAddressId"),
    stateToOrder
  )(state);
  let addresses = R.compose(
    meToAddresses,
    stateToMe
  )(state);
  return addressId ? R.find(x => x.id === addressId, addresses) : null;
}

function getPrescriptionType(state) {
  return R.compose(
    R.head,
    concatAllAndUniq,
    R.map(x => state.products.byId[x].prescriptions),
    R.filter(x => state.products.byId[x].prescriptions), // filter for rx ones
    R.map(R.prop("productId")),
    orderItems,
    stateToOrder
  )(state);
}

function hasProductIdInCart(state, productId) {
  return R.compose(
    R.contains(productId),
    R.map(R.prop("productId")),
    orderItems,
    stateToOrder
  )(state);
}

// ===
//
// ===

const showProfile = ({ me }) => !me;

const showShipping = ({ orders }) =>
  orders.active && !orders.active.shippingAddressId;

const showBilling = ({ me }) => !!me && !me.paymentToken;

// licenseType :: Enum
// Enum :: ed, hair
const isStateLicensed = (state, licenseType) => {
  let addressId = R.path(["orders", "active", "shippingAddressId"], state);
  let address = R.find(R.propEq("id", addressId), state.me.addresses);

  return address ? !!state.licenses[licenseType][address.state] : true;
};

const getProductIdsInOrder = R.compose(
  R.map(R.prop("productId")),
  R.defaultTo([]),
  R.prop("items"),
  R.defaultTo({})
);

const getTreatmentsInOrder = (productsById, productIdsInOrder) =>
  R.reduce(
    (result, productId) =>
      R.concat(productsById[productId].prescriptions || [], result),
    [],
    productIdsInOrder
  );

const productsToRequiredLicenses = state => {
  let {
    orders: { active: order },
    products
  } = state;
  let productIdsInOrder = getProductIdsInOrder(order);
  let treatments = getTreatmentsInOrder(products.byId, productIdsInOrder);

  return treatments.length
    ? R.compose(
        R.toLower,
        R.head,
        R.uniq
      )(treatments)
    : null;
};

const getCheckoutStep = state => {
  let step;
  let licenses = productsToRequiredLicenses(state);
  let licenseCheckRequired = !!licenses;
  let prescriptionType = getPrescriptionType(state);
  let offendingItems = getProductIdListOfOffendingItems(state);

  if (showProfile(state)) {
    step = STEPS.REGISTER;
  } else if (state.me && state.me.dob && offendingItems.length) {
    step = STEPS.CART;
  } else if (prescriptionType && !(state.me && state.me.dob)) {
    step = STEPS.AGE_CHECK;
  } else if (showShipping(state)) {
    step = STEPS.SHIPPING;
  } else if (licenseCheckRequired && !isStateLicensed(state, licenses)) {
    step = STEPS.SWITCH;
  } else if (showBilling(state)) {
    step = STEPS.BILLING;
  } else {
    step = STEPS.CONFIRM;
  }

  return step;
};

module.exports = {
  getCard: createSelector(getCard, R.identity),
  getPrescriptionType: createSelector(getPrescriptionType, R.identity),
  getProductIdListOfOffendingItems: createSelector(
    getProductIdListOfOffendingItems,
    R.identity
  ),
  getProductIdListOfRxHairItems: createSelector(
    getProductIdListOfRxHairItems,
    R.identity
  ),
  getProductIdListToRemove: createSelector(
    getProductIdListToRemove,
    R.identity
  ),
  getRxProductIdListOutsideAgeRange: createSelector(
    getRxProductIdListOutsideAgeRange,
    R.identity
  ),
  getRxProductIdListWithActiveSub: createSelector(
    getRxProductIdListWithActiveSub,
    R.identity
  ),
  getShippingAddress: createSelector(getShippingAddress, R.identity),
  getStep: createSelector(getCheckoutStep, R.identity),
  hasDuplicateRxHairProducts: createSelector(
    hasDuplicateRxHairProducts,
    R.identity
  ),
  hasProductIdInCart: createSelector(hasProductIdInCart, R.identity),
  hasRequiredConsultation: createSelector(hasRequiredConsultation, R.identity),
  hasSubscriptionItemInCart: createSelector(
    hasSubscriptionItemInCart,
    R.identity
  ),
  isCartEmpty: createSelector(isCartEmpty, R.identity)
};
