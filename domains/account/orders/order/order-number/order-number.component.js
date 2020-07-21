import React from "react";
import PropTypes from "prop-types";
import { and } from "ramda";

import { LabelValue } from "../label-value";

export const OrderNumber = ({ refill, isMembershipOrder, orderId }) => (
  <LabelValue
    label={and(refill, !isMembershipOrder) ? "Shipment No." : "Order No."}
    value={orderId}
  />
);

OrderNumber.propTypes = {
  refill: PropTypes.bool,
  isMembershipOrder: PropTypes.bool,
  orderId: PropTypes.string
};
