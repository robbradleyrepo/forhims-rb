import { equals, pipe, prop, pathOr, contains, assocPath, not } from "ramda";

import {
  isPendingRenewal,
  identifySubscriptionType
} from "../../../selectors/subscriptions";
import { ORDER_STATUSES } from "../../../constants/Enums";
import { hasMembershipFee } from "../../../selectors/products";
import {
  STATUS_VALUES,
  SUBSCRIPTION_STATUS,
  SUBSCRIPTION_ACTIONS
} from "./subscription/subscription.constants";
import { getStep } from "../../../selectors/order-logic";
import config from "../../../config";
import { formatDate, addDaysToDate } from "../../../utils/date";

export const subscriptionToStatus = subscription =>
  STATUS_VALUES[subscription.status];

export const subscriptionShouldShowDeliveryDate = pipe(
  prop("status"),
  equals(SUBSCRIPTION_STATUS.ACTIVE)
);
export const subscriptionToDeliveryDate = subscription =>
  subscription.processOnDate && subscriptionShouldShowDeliveryDate(subscription)
    ? pipe(
        addDaysToDate(
          config.subscriptions.daysFromProcessDateToEstimatedDelivery
        ),
        formatDate("MMM D, YYYY")
      )(subscription.processOnDate)
    : "-";

export const transformOrders = productsById => orders =>
  orders.map(order => ({
    ...order,
    step: getStep(order),
    isCancelled: equals(order.status, ORDER_STATUSES.CANCELLED),
    isMembershipOrder: hasMembershipFee(order),
    items: order.items.map(item =>
      assocPath(["title"], productsById[item.productId].title, item)
    )
  }));

export const subscriptionToOrders = (
  ordersBySubscriptionId,
  productsById,
  subscription
) =>
  pipe(
    pathOr([], [subscription.orderId]),
    transformOrders(productsById)
  )(ordersBySubscriptionId);

export const subscriptionToType = subscription =>
  identifySubscriptionType(subscription).type || "-";

export const subscriptionShouldShowReactivate = subscription =>
  pipe(
    prop("status"),
    equals(SUBSCRIPTION_STATUS.CANCELLED)
  )(subscription);

export const canSubscriptionBeSnoozed = subscription =>
  contains(
    subscriptionToType(subscription),
    config.subscriptions.typesCanBeSnoozed
  );

export const canSubscriptionBeCancelled = subscription =>
  pipe(
    prop("status"),
    equals(SUBSCRIPTION_STATUS.CANCELLED),
    not
  )(subscription);

export const canSubscriptionBeRenewed = isPendingRenewal;

// export const subscriptionToActionsAvailable = subscription =>
//   canSubscriptionBeSnoozed(subscription) ? [SUBSCRIPTION_ACTIONS.SNOOZE] : [];

export const subscriptionToActionsAvailable = (subscription, orders) => {
  const actions = [];
  if (canSubscriptionBeRenewed(subscription, orders))
    actions.push(SUBSCRIPTION_ACTIONS.RENEW);
  return actions;
};
