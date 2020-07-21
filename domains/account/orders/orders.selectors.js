import { createSelector, createStructuredSelector } from "reselect";
import { path, or, compose, equals, length, identity } from "ramda";
import { getSubscriptionsWithType } from "../../../selectors/subscriptions";
import {
  getOrders,
  getAllOrders,
  getOneOffOrders,
  getOrdersBySubscriptionId
} from "../../../selectors/order";
import { selectProductsById } from "../../../selectors/products";
import { hasSubmitSucceeded } from "redux-form";

import { hasValue } from "../../../utils";
import {
  subscriptionToOrders,
  subscriptionToType,
  subscriptionToStatus,
  subscriptionToDeliveryDate,
  subscriptionShouldShowReactivate,
  subscriptionToActionsAvailable,
  transformOrders
} from "./orders.utils";

const selectSubscriptionState = path(["subscriptions"]);

const selectOrdersIsLoading = path(["orders", "loading"]);

const selectSubscriptionsIsLoading = createSelector(
  selectSubscriptionState,
  path(["loading"])
);
const selectOrdersAreLoading = createSelector(
  selectOrdersIsLoading,
  selectSubscriptionsIsLoading,
  or
);
const selectHasNoOrders = createSelector(
  getOrders,
  compose(
    equals(0),
    length
  )
);
const CUSTOMIZE_SUBSCRIPTION_FORM = "CUSTOMIZE_SUBSCRIPTION_FORM";
const selectSubmitSucceeded = createSelector(
  hasSubmitSucceeded(CUSTOMIZE_SUBSCRIPTION_FORM),
  identity
);

const selectTransformedSubscriptions = createSelector(
  getSubscriptionsWithType,
  getOrdersBySubscriptionId,
  selectProductsById,
  getAllOrders,
  (subscriptions, ordersBySubscriptionId, productsById, allOrders) =>
    subscriptions.map(subscription => ({
      ...subscription,
      subscriptionOrders: subscriptionToOrders(
        ordersBySubscriptionId,
        productsById,
        subscription
      ),
      subscriptionType: subscriptionToType(subscription),
      subscriptionStatus: subscriptionToStatus(subscription),
      nextEstimatedDeliveryDate: subscriptionToDeliveryDate(subscription),
      subscriptionShouldShowReactivate: subscriptionShouldShowReactivate(
        subscription
      ),
      subscriptionActions: subscriptionToActionsAvailable(
        subscription,
        allOrders
      )
    }))
);

// getRenewalOrderBySubscriptionId(subscription)

const selectHasSubscriptions = createSelector(
  getSubscriptionsWithType,
  hasValue
);

const selectTransformedOneOffOrders = createSelector(
  getOneOffOrders,
  selectProductsById,
  (orders, productsById) => transformOrders(productsById)(orders)
);

export const ordersConnector = createStructuredSelector({
  loading: selectOrdersAreLoading,
  oneOffOrders: selectTransformedOneOffOrders,
  hasNoOrders: selectHasNoOrders,
  hasSubscriptions: selectHasSubscriptions,
  submitSucceeded: selectSubmitSucceeded
});

export const subscriptionsListConnector = createStructuredSelector({
  subscriptions: selectTransformedSubscriptions
});
