import PropTypes from "prop-types";
import React from "react";
import { ArrowIcon } from "../../../../components/icons/arrow-icon";
import { Block } from "../../../../components/block";
import { currency } from "../../../../utils";
import { Grid } from "../../../../components/layout/grid";
import { IconButton } from "../../../../components/icon-button";
import { ItemList } from "./item-list";
import { OrderWrapper, OrderDetailsGridItem } from "./order.style";
import { transitions } from "../../../../theme/motion";
import AddressRecord from "../../../../components/address-record";
import Collapse from "react-css-collapse";
import { LabelValue } from "./label-value";
import { OrderNumber } from "./order-number";
import { OrderStatus } from "./order-status";
import { TrackingNumber } from "./tracking-number";

export const Order = ({
  refill,
  isMembershipOrder,
  isActiveOrder,
  step,
  isCancelled,
  id,
  subscriptionId,
  paymentStatus,
  trackingNumber,
  address,
  amount,
  items,
  handleClickOrder
}) => {
  return (
    <OrderWrapper
      cancelled={isCancelled}
      selected={isActiveOrder}
      onClick={handleClickOrder}
    >
      <Grid container>
        <Grid item xs={13} smOffset={0} sm={3} mdOffset={0} md={5}>
          <OrderNumber
            refill={refill}
            isMembershipOrder={isMembershipOrder}
            orderId={id}
          />
        </Grid>
        <Grid item xs={13} smOffset={1} sm={4} mdOffset={1} md={5}>
          {!isMembershipOrder && (
            <OrderStatus
              isCancelled={isCancelled}
              step={step}
              subscriptionId={subscriptionId}
              paymentStatus={paymentStatus}
            />
          )}
        </Grid>
        <Grid item xs={13} smOffset={1} sm={4} mdOffset={1} md={7}>
          {!isMembershipOrder && (
            <TrackingNumber trackingNumber={trackingNumber} />
          )}
        </Grid>
        <Grid item xs={13} smOffset={1} sm={2} md={4} mdOffset={1}>
          <Block width="100%" display="flex" justifyContent="flex-end">
            <IconButton
              borderColor="transparent"
              hoverBorderColor="transparent"
              onClick={handleClickOrder}
              icon={<ArrowIcon direction={isActiveOrder ? "up" : " right"} />}
              label="Toggle Order Details"
            />
          </Block>
        </Grid>
      </Grid>
      {/* Expanded view */}
      <Collapse
        isOpen={isActiveOrder}
        transition={`height ${transitions.speed.default} ${
          transitions.easing.default
        }`}
      >
        <Block mt={4}>
          <Grid container>
            <OrderDetailsGridItem
              item
              xs={13}
              smOffset={0}
              sm={7}
              mdOffset={0}
              md={11}
            >
              <Block>
                <LabelValue label="Amount" value={currency(amount)} />
                {!isMembershipOrder && (
                  <LabelValue
                    label="Shipping Address"
                    value={<AddressRecord address={address} />}
                  />
                )}
              </Block>
            </OrderDetailsGridItem>
            <OrderDetailsGridItem
              item
              xs={13}
              smOffset={1}
              sm={7}
              mdOffset={1}
              md={11}
            >
              <ItemList items={items} />
            </OrderDetailsGridItem>
          </Grid>
        </Block>
      </Collapse>
    </OrderWrapper>
  );
};

Order.propTypes = {
  refill: PropTypes.bool,
  isMembershipOrder: PropTypes.bool,
  isActiveOrder: PropTypes.bool,
  step: PropTypes.string,
  isCancelled: PropTypes.bool,
  id: PropTypes.string,
  subscriptionId: PropTypes.string,
  paymentStatus: PropTypes.string,
  trackingNumber: PropTypes.string,
  address: PropTypes.object.isRequired,
  amount: PropTypes.number,
  items: PropTypes.array,
  handleClickOrder: PropTypes.func.isRequired
};

Order.displayName = "Order";
