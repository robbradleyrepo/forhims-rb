import React from "react";
import PropTypes from "prop-types";
import { cond, prop, propOr, always, equals, T } from "ramda";

import { LabelValue } from "../label-value";
import { OrderStatusWrapper } from "./order-status.style";
import { ORDER_STEPS } from "../../../../../constants/Enums";
import { RouterLink } from "../../../../../components/fonts/link";

const originStepStatusMessage = (
  <React.Fragment>
    Payment Error<br />
    <RouterLink to="/profile">Update payment method</RouterLink>
  </React.Fragment>
);

const stepStatusMessages = {
  [ORDER_STEPS.PAYMENT]: "",
  [ORDER_STEPS.EMR]: "Medical visit in progress",
  [ORDER_STEPS.PHARMACY]: "Preparing your shipment",
  [ORDER_STEPS.SHIPPING]: "In transit",
  [ORDER_STEPS.CUSTOMER]: "Delivered",
  [ORDER_STEPS.PENDING_EMR]: "Outstanding medical visit",
  [ORDER_STEPS.SHIPPED]: "Shipped",
  [ORDER_STEPS.SUBMITTED]: "Submitted",
  [ORDER_STEPS.CANCELLED]: "Cancelled"
};

const shouldShowOriginStepMessage = ({ step, subscriptionId, paymentStatus }) =>
  equals(step, ORDER_STEPS.ORIGIN) &&
  equals(subscriptionId, "refill") &&
  !equals(paymentStatus, "succeeded");

const stepStatusMessageExists = ({ step }) =>
  propOr(false, step, stepStatusMessages);

export const OrderStatus = ({
  isCancelled,
  step,
  subscriptionId,
  paymentStatus
}) => {
  const status = cond([
    [prop("isCancelled"), always("Cancelled & Refunded")],
    [shouldShowOriginStepMessage, always(originStepStatusMessage)],
    [stepStatusMessageExists, always(stepStatusMessages[step])],
    [T, always("")]
  ])({ step, isCancelled, subscriptionId, paymentStatus });
  return (
    <LabelValue
      label="Status"
      value={
        <OrderStatusWrapper isCancelled={isCancelled} step={step}>
          {status}
        </OrderStatusWrapper>
      }
    />
  );
};
OrderStatus.propTypes = {
  isCancelled: PropTypes.bool,
  step: PropTypes.string,
  subscriptionId: PropTypes.string,
  paymentStatus: PropTypes.string
};
