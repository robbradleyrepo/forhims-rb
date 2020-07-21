import { colors } from "../../../../theme/colors";
import { Grid } from "../../../../components/layout";
import { SubscriptionWrapper, ActionButtonBlock } from "./subscription.style";
import { LabelValue } from "../order/label-value";
import PropTypes from "prop-types";
import React from "react";
import { OrdersList } from "../orders-list";
import { hasValue } from "../../../../utils";

export const Subscription = ({
  selectedOrderId,
  selectOrder,
  subscriptionOrders,
  subscriptionType,
  subscriptionStatus,
  nextEstimatedDeliveryDate,
  subscriptionActionButton
}) => {
  const subscriptionHasOrders = hasValue(subscriptionOrders);
  return (
    <React.Fragment>
      <SubscriptionWrapper>
        <div>
          <Grid container style={colors.black}>
            <Grid item xs={13} smOffset={0} sm={3} mdOffset={0} md={5}>
              <LabelValue label="Subscription" value={subscriptionType} />
            </Grid>
            <Grid item xs={13} smOffset={1} sm={4} mdOffset={1} md={5}>
              <LabelValue label="Status" value={subscriptionStatus} />
            </Grid>
            <Grid item xs={13} smOffset={1} sm={4} mdOffset={1} md={7}>
              <LabelValue
                label="Next Estimated Delivery Date"
                value={nextEstimatedDeliveryDate}
              />
            </Grid>
            <Grid item xs={13} smOffset={1} sm={2} md={4} mdOffset={1}>
              <ActionButtonBlock width="100%" display="flex">
                {subscriptionActionButton}
              </ActionButtonBlock>
            </Grid>
          </Grid>
        </div>
      </SubscriptionWrapper>
      {subscriptionHasOrders && (
        <OrdersList
          orders={subscriptionOrders}
          selectedOrderId={selectedOrderId}
          selectOrder={selectOrder}
          refill
        />
      )}
    </React.Fragment>
  );
};

Subscription.propTypes = {
  selectedOrderId: PropTypes.string,
  subscriptionOrders: PropTypes.array,
  subscriptionType: PropTypes.string,
  subscriptionStatus: PropTypes.string,
  nextEstimatedDeliveryDate: PropTypes.string,
  subscriptionActionButton: PropTypes.element,
  selectOrder: PropTypes.func
};

Subscription.displayName = "Subscription";
