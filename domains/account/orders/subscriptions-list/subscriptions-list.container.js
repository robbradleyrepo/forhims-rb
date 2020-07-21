import { connect } from "react-redux";
import { compose } from "recompose";
import { subscriptionsListConnector } from "../orders.selectors";
import { SubscriptionsList } from "./subscriptions-list.component";
import { SUBSCRIPTION_ACTION_CREATORS } from "../orders.actions";
import { MODAL } from "../../../../domains/modal/state/modal.actions";

const { renew, snooze, reactivate } = SUBSCRIPTION_ACTION_CREATORS;

const dispatchers = {
  renew,
  snooze,
  reactivate,
  openModal: MODAL.openModal
};

export const SubscriptionsListContainer = compose(
  connect(
    subscriptionsListConnector,
    dispatchers
  )
)(SubscriptionsList);
