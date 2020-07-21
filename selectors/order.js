"use strict";

import R from "ramda";
import config from "../config";
import { createSelector } from "reselect";
import { selectProductsById } from "./products";

const RENEWAL_ORDER_ITEMS = [
  config.products.idByName.hairRenewal,
  config.products.idByName.edRenewal
];

// stateToOrders :: State -> [Order]
const stateToOrders = R.compose(
  R.values,
  R.path(["orders", "byId"])
);

const hasRenewalItem = R.any(x => R.contains(x.productId, RENEWAL_ORDER_ITEMS));

const hasEdRenewalItem = R.any(x =>
  R.contains(x.productId, [config.products.idByName.edRenewal])
);

const findAbandonedOrder = R.find(
  x => x.status === "pending" && !x.subscriptionId && !hasRenewalItem(x.items)
);

const isLoadableIntoCart = order => {
  return (
    order.status === "pending" &&
    !order.subscriptionId &&
    !hasRenewalItem(order.items)
  );
};

const findRenewalOrders = R.filter(
  x => x.status === "submitted" && hasRenewalItem(x.items)
);

const isEdRenewal = (orderId, state) => {
  return hasEdRenewalItem(state.orders.byId[orderId].items);
};

// ====
// Subscriptions by id
// ====

const getSubscriptionsById = createSelector(
  R.path(["subscriptions", "data"]),
  R.indexBy(R.prop("orderId"))
);

// ====
// get orders with address info
// ====

const sortInReverse = R.compose(
  xs => xs.reverse(),
  R.sortBy(R.prop("createdAt"))
);

const selectSortedOrderList = createSelector(
  R.path(["orders", "byId"]),
  R.compose(
    sortInReverse,
    R.filter(x => x.status !== "pending"),
    R.values
  )
);

const selectAddresses = createSelector(
  R.path(["me", "addresses"]),
  R.compose(
    R.indexBy(R.prop("id")),
    R.defaultTo([])
  )
);

// ====
// get all orders (including renewal orders)
// ====

const getAllOrders = stateToOrders;

// ====
// get all orders (except for renewals)
// ====

const getOrders = createSelector(
  selectSortedOrderList,
  selectAddresses,
  selectProductsById,
  (orderList, addresses, productsById) => {
    return R.compose(
      R.filter(({ renewalOrderForSubscription, items = [] }) =>
        R.all(
          item =>
            !!productsById[item.productId] && !renewalOrderForSubscription,
          items
        )
      ),
      R.map(order =>
        R.merge(order, { address: addresses[order.shippingAddressId] })
      )
    )(orderList);
  }
);

// ====
// get a specific order
// ====
const getOrderById = orderId =>
  createSelector(getOrders, R.find(R.propEq("id", orderId)));

// ====
// take the subscription id and filter the orders with it
// ====
const findOrderForSubscriptionId = R.curry((subscriptionId, orders) =>
  R.find(
    R.allPass([
      R.propEq("renewalOrderForSubscription", subscriptionId),
      R.propEq("origin", "rx_renewal")
    ])
  )(orders)
);

// ====
// get renewal order
// ====
const getRenewalOrderBySubscriptionId = subscriptionId =>
  createSelector(stateToOrders, findOrderForSubscriptionId(subscriptionId));

// ====
// get one-ff orders
// ====

const getOneOffOrders = createSelector(
  getOrders,
  getSubscriptionsById,
  (orders, subscriptionsById) =>
    R.filter(x => !subscriptionsById[x.id] && !x.subscriptionId)(orders)
);

const getAddressByOrderId = (orderId, state) => {
  return R.compose(
    x => R.find(R.propEq("id", x), state.me.addresses),
    R.prop("shippingAddressId"),
    R.prop(orderId),
    R.path(["orders", "byId"])
  )(state);
};

// ====
// get orders by subscription id
// ====

const getOrdersBySubscriptionId = createSelector(
  getOrders,
  getSubscriptionsById,
  (orders, subscriptionsById) =>
    R.reduce(
      (r, sid) => {
        r[sid] = R.filter(
          x => x.id === sid || x.subscriptionId === sid,
          orders
        );
        return r;
      },
      {},
      R.keys(subscriptionsById)
    )
);

// nnasoody
// HACK: to let the emr team continue with the development
// const getAddressByOrderId = R.always({
//   id: "ax0B20Kt",
//   addressType: "shipping",
//   userId: "vgJE8JUC",
//   line1: "3759 Fillmore St.",
//   line2: "Apt. 5",
//   city: "San Francisco",
//   state: "CA",
//   county: null,
//   zip: "94123",
//   country: "USA",
//   latitude: null,
//   longitude: null,
//   createdAt: "2018-10-25T07:03:39.85235+00:00"
// });

const getTreatmentTypeForOrder = state => {
  let order = R.path(["orders", "active"], state);
  let productsById = R.path(["products", "byId"], state);

  let productIds = R.compose(
    R.map(R.prop("productId")),
    R.defaultTo([]),
    R.prop("items")
  )(order);

  let prescriptions = R.reduce(
    (result, productId) =>
      R.concat(productsById[productId].prescriptions || [], result),
    [],
    productIds
  );

  return prescriptions.length
    ? R.compose(
        R.toLower,
        R.head,
        R.uniq
      )(prescriptions)
    : null;
};

const canPurchaseTreatmentByState = (address, state) => {
  let treatmentType = getTreatmentTypeForOrder(state);
  // no treatment? Then purchase is OTC, let it thru!
  return treatmentType ? !!state.licenses[treatmentType][address.state] : true;
};

// exports!

const hasAbandonedOrder = R.compose(
  R.identity,
  findAbandonedOrder,
  stateToOrders
);

const hasRenewalOrders = R.compose(
  xs => !!xs.length,
  findRenewalOrders,
  stateToOrders
);

module.exports = {
  findAbandonedCart: findAbandonedOrder,
  findAbandonedOrder: createSelector(
    R.compose(
      findAbandonedOrder,
      stateToOrders
    ),
    R.identity
  ),
  findRenewalOrders: createSelector(
    R.compose(
      findRenewalOrders,
      stateToOrders
    ),
    R.identity
  ),
  canPurchaseTreatmentByState,
  getAddressByOrderId,
  getOneOffOrders,
  getOrders,
  getOrderById,
  getOrdersBySubscriptionId,
  getRenewalOrderBySubscriptionId,
  getAllOrders,
  findOrderForSubscriptionId,
  hasRenewalOrders: createSelector(hasRenewalOrders, R.identity),
  hasAbandonedOrder: createSelector(hasAbandonedOrder, R.identity),
  hasRenewalItem,
  isEdRenewal,
  isLoadableIntoCart
};
