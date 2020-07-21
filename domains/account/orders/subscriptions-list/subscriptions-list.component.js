import React from "react";
import PropTypes from "prop-types";

import { OrdersListWrapper } from "../orders.style";
import {
  // SubscriptionActionList,
  RenewButton
} from "./subscriptions-list.style";
import { Subscription } from "../subscription";
import {
  // SUBSCRIPTION_ACTION_LABELS,
  // SUBSCRIPTION_ACTION_DISABLED_FNS,
  SUBSCRIPTION_ACTIONS
} from "../subscription/subscription.constants";

export const SubscriptionsList = ({
  subscriptions,
  selectedOrderId,
  renew,
  selectOrder
}) => (
  <OrdersListWrapper>
    {subscriptions.map((subscription, i) => {
      const {
        subscriptionStatus,
        nextEstimatedDeliveryDate,
        subscriptionType,
        subscriptionOrders,
        orderId,
        subscriptionActions
      } = subscription;

      // const actionOnClick = {
      //   // [SUBSCRIPTION_ACTIONS.SNOOZE]: () => snooze({ orderId }),
      //   [SUBSCRIPTION_ACTIONS.RENEW]: () => renew({ orderId })
      // };
      // const subscriptionActionButton = (
      // <SubscriptionActionList
      //     buttonLabel="Renew"
      //     actions={subscriptionActions.map(action => {
      //       const validateIsActionDisabled =
      //         SUBSCRIPTION_ACTION_DISABLED_FNS[action];
      //       const isDisabled = validateIsActionDisabled
      //         ? validateIsActionDisabled(subscription)
      //         : false;
      //       return {
      //         label: SUBSCRIPTION_ACTION_LABELS[action],
      //         onClick: actionOnClick[action],
      //         disabled: isDisabled
      //       };
      //     })}
      //   />
      // );

      // The only action we support at the momnet is subscription renewal
      // todo: track more actions and provide use the expanding list element above
      const subscriptionActionButton = subscriptionActions.includes(
        SUBSCRIPTION_ACTIONS.RENEW
      ) ? (
        <RenewButton label="Renew" onClick={() => renew({ orderId })} />
      ) : null;

      return (
        <li key={`subscription-${orderId}-${i}`}>
          <Subscription
            selectedOrderId={selectedOrderId}
            subscriptionStatus={subscriptionStatus}
            nextEstimatedDeliveryDate={nextEstimatedDeliveryDate}
            subscriptionType={subscriptionType}
            subscriptionOrders={subscriptionOrders}
            subscriptionActionButton={subscriptionActionButton}
            selectOrder={selectOrder}
          />
        </li>
      );
    })}
  </OrdersListWrapper>
);

SubscriptionsList.propTypes = {
  subscriptions: PropTypes.array,
  selectedOrderId: PropTypes.string,
  snooze: PropTypes.func,
  renew: PropTypes.func,
  cancel: PropTypes.func,
  reactivate: PropTypes.func,
  selectOrder: PropTypes.func,
  openModal: PropTypes.func
};
