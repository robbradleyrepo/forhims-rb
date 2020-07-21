// nnasoody
//  - There can be multiple visits of the same type e.g. hairloss, ed, etc.
//  - There can only be one pending visit of a type
//  - A visit can be marked as a renewal or new type
//

"use strict";

import R from "ramda";
import { createSelector } from "reselect";

const indexByStateCode = R.indexBy(R.prop("state"));

const stateToVisits = R.compose(
  R.values,
  R.path(["visits", "byId"])
);

const getPendingVisitsByType = (state, ordersByVisitId) => {
  return R.compose(
    R.groupBy(R.prop("questionnaireId")),
    R.filter(
      x =>
        (x.status = "pending" && ordersByVisitId[x.id].status !== "cancelled")
    ), // filter for pending visits with active orders
    stateToVisits
  )(state);
};

const getOrdersByVisitId = state => {
  let visits = R.values(state.visits.byId);

  return R.reduce(
    (r, visit) => {
      if (!r[visit.id]) {
        r[visit.id] = state.orders.byId[visit.orderId];
      }
    },
    {},
    visits
  );
};

// ====
// get visit by order id
// ====
const getVisitByOrderId = orderId =>
  createSelector(stateToVisits, R.find(R.propEq("orderId", orderId)));

const visitsToPending = R.filter(x => x.status === "pending");

const getPendingVisits = R.compose(
  visitsToPending,
  stateToVisits
);

const hasPendingVisits = R.compose(
  xs => !!xs.length,
  getPendingVisits
);

const statesByCode = R.compose(
  indexByStateCode,
  R.path(["states", "data"])
);

const getStateObjectByShippingAddress = (state, shippingAddress) => {
  return statesByCode(state)[shippingAddress.state];
};

const getLegalPathByAddress = (state, shippingAddress) => {
  const stateObj = getStateObjectByShippingAddress(state, shippingAddress);
  const pathname = R.toLower(stateObj.name.split(/\s+/).join("-"));

  return `/bailey-health/${pathname}`;
};

const getLegalEntityByAddress = (state, shippingAddress) => {
  const stateObj = getStateObjectByShippingAddress(state, shippingAddress);

  return stateObj.legalEntity;
};

module.exports = {
  getLegalEntityByAddress,
  getLegalPathByAddress,
  getOrdersByVisitId,
  getPendingVisits,
  getPendingVisitsByType,
  hasPendingVisits,
  getVisitByOrderId
};
