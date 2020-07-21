import R, { curry } from "ramda";
import config from "../config";
import { createSelector } from "reselect";
import { selectProductsById } from "./products";
import { findOrderForSubscriptionId, getAllOrders } from "./order";
import { SUBSCRIPTION_STATUSES, EMR_STATUSES } from "../constants/Enums";

const subscriptionTypeFactory = R.curry((productId, subscription) =>
  R.contains(productId, subscription.productIds)
);

const isShampooSub = subscriptionTypeFactory(config.products.idByName.shampoo);

const isStarterHairKitSub = subscriptionTypeFactory(
  config.products.idByName.starterHairKit
);

const isCompleteHairKitSub = subscriptionTypeFactory(
  config.products.idByName.completeHairKit
);

const isMinoxidilSub = subscriptionTypeFactory(
  config.products.idByName.minoxidil
);

const isVitaminsSub = subscriptionTypeFactory(
  config.products.idByName.vitamins
);

const isFinasterideSub = subscriptionTypeFactory(
  config.products.idByName.finasteride
);

const isEdSub = subscription =>
  R.any(
    x =>
      R.contains(x, [
        config.products.idByName.sildenafil,
        config.products.idByName.sildenafilV2,
        config.products.idByName.sildenafilV3
      ]),
    subscription.productIds
  );

const isHairSub = sub => {
  return (
    isFinasterideSub(sub) ||
    isMinoxidilSub(sub) ||
    isVitaminsSub(sub) ||
    isShampooSub(sub) ||
    isStarterHairKitSub(sub) ||
    isCompleteHairKitSub(sub)
  );
};

const isColdSoreSub = sub => {
  return R.any(
    x => R.contains(x, [config.products.idByName.valacyclovir]),
    sub.productIds
  );
};

const isSkinCareAcneSub = sub => {
  return R.any(
    x => R.contains(x, [config.products.idByName.acneTreatmentKit]),
    sub.productIds
  );
};

const isSkinCareAgingSub = sub => {
  return R.any(
    x => R.contains(x, [config.products.idByName.antiAgingCream]),
    sub.productIds
  );
};
const productsByName = config.products.idByName;

const isSkinCareSub = sub => {
  return R.any(
    subscribedProduct =>
      R.contains(subscribedProduct, [
        productsByName.antiAging,
        productsByName.antiAgingKit,
        productsByName.acne,
        productsByName.acneKit,
        productsByName.melasma
      ]),
    sub.productIds
  );
};
const isSexualHealthSub = sub => {
  return R.any(
    subscribedProduct =>
      R.contains(subscribedProduct, [
        productsByName.birthControl,
        productsByName.addyi
      ]),
    sub.productIds
  );
};

function identifySubscriptionType(subscription) {
  const copy = R.clone(subscription);

  if (isHairSub(subscription)) {
    copy.type = config.subscriptions.types.HAIR;
  } else if (isEdSub(subscription)) {
    copy.type = config.subscriptions.types.ED;
  } else if (isColdSoreSub(subscription)) {
    copy.type = config.subscriptions.types.COLD_SORE_RECURRENT;
  } else if (isSkinCareAcneSub(subscription)) {
    copy.type = config.subscriptions.types.SKINCARE_ACNE;
  } else if (isSkinCareAgingSub(subscription)) {
    copy.type = config.subscriptions.types.SKINCARE_AGING;
  } else if (isSexualHealthSub(subscription)) {
    copy.type = config.subscriptions.types.SEX;
  } else if (isSkinCareSub(subscription)) {
    copy.type = config.subscriptions.types.SKIN;
  }
  return copy;
}

// type :: enum hair, ed, skin...
// Subscription :: { ...subscription, type }
// stateToSubscription :: State -> [Subscription]
const stateToSubscription = R.path(["subscriptions", "data"]);

const isKnownProduct = productIds => productId =>
  productIds.includes(productId);

const allAssociatedProductsAreValid = productIds => subscription =>
  R.pipe(
    R.prop("productIds"),
    R.all(isKnownProduct(productIds))
  )(subscription);

const getAllSubscriptions = stateToSubscription;

const getSubscriptionsWithType = createSelector(
  getAllSubscriptions,
  selectProductsById,
  (subscriptions, productsById) =>
    R.pipe(
      R.filter(allAssociatedProductsAreValid(R.keys(productsById))),
      R.map(identifySubscriptionType)
    )(subscriptions)
);

const findCancelledSubscription = createSelector(
  getSubscriptionsWithType,
  R.find(sub => sub.status === "cancelled" && !sub.dismissed)
);

const getCancelledSubscription = createSelector(
  findCancelledSubscription,
  R.identity
);

const isPendingRenewal = curry((subscription, orders) =>
  R.allPass([
    // 1. The user has a status of PENDING_RX
    R.propEq("status", SUBSCRIPTION_STATUSES.PENDING_RX),
    // 2. The user has a renewal order for this subscribing prescription
    sub => findOrderForSubscriptionId(sub.orderId, orders) !== undefined,
    // 3. That renewal order has a pending visit
    sub =>
      findOrderForSubscriptionId(sub.orderId, orders).visitStatus !==
      EMR_STATUSES.ANSWERED
  ])(subscription)
);

const selectHasAnyPendingRenewal = createSelector(
  getAllSubscriptions,
  getAllOrders,
  (subscriptions, orders) =>
    subscriptions &&
    subscriptions.some(subscription => isPendingRenewal(subscription, orders))
);

module.exports = {
  identifySubscriptionType,
  getAllSubscriptions,
  getSubscriptionsWithType,
  getCancelledSubscription,
  selectHasAnyPendingRenewal,
  isPendingRenewal
};
