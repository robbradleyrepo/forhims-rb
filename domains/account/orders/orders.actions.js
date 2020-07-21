import { subscriptions, renewals } from "../../../actions";

const { updateSubscriptionById, reactivateSubscription } = subscriptions;
const { startRenewalEmrVisit } = renewals;

const reactivate = ({ orderId }) =>
  reactivateSubscription({
    subscription_id: orderId,
    action_id: ""
  });

const snooze = ({ orderId }) =>
  updateSubscriptionById({
    subscriptionId: orderId,
    data: { action: "skip" }
  });

const cancel = ({ orderId }) =>
  updateSubscriptionById({
    subscriptionId: orderId,
    data: { action: "cancel" }
  });

const renew = ({ orderId }) =>
  startRenewalEmrVisit({
    subscriptionId: orderId
  });

export const SUBSCRIPTION_ACTION_CREATORS = {
  reactivate,
  snooze,
  renew,
  cancel
};
