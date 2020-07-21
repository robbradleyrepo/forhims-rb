"use strict";

import R from "ramda";
import selectors from "../selectors";
import {
  EMR_STATUSES,
  ORDER_STEPS,
  SHIPPING_STATUSES
} from "../constants/Enums";

const CONCLUDED_EMR_STATUSES = [EMR_STATUSES.CLOSED, EMR_STATUSES.CANCELLED];

const IN_TRANSIT_SHIPPING_STATUS = [
  SHIPPING_STATUSES.TRANSIT,
  SHIPPING_STATUSES.UNKNOWN
];

function getStep({
  items,
  origin,
  paymentStatus,
  pharmacy,
  pharmacyStatus,
  shippingStatus,
  trackingNumber,
  visitStatus
}) {
  let visitConcluded = R.contains(visitStatus, CONCLUDED_EMR_STATUSES);
  let inTransit =
    (trackingNumber &&
      R.contains(shippingStatus, IN_TRANSIT_SHIPPING_STATUS)) ||
    (trackingNumber &&
      pharmacy === "curexa" &&
      shippingStatus !== SHIPPING_STATUSES.DELIVERED);
  let delivered = shippingStatus === SHIPPING_STATUSES.DELIVERED;
  let shippedWithoutStatus = trackingNumber && !shippingStatus;
  let refillAtPharmacy =
    !visitConcluded && origin === "refill" && pharmacyStatus === "new";
  let isOtc = !visitStatus;
  let isErxRenewal = selectors.order.hasRenewalItem(items);

  if (isErxRenewal) {
    if (!paymentStatus) {
      // No payment or failed payment? Your sitting at home son!
      return ORDER_STEPS.SUBMITTED;
    } else if (!visitConcluded) {
      return ORDER_STEPS.SUBMITTED;
    } else if (visitConcluded) {
      return ORDER_STEPS.SHIPPED;
    }
  } else if (isOtc) {
    if (!paymentStatus) {
      // No payment or failed payment? Your sitting at home son!
      return ORDER_STEPS.ORIGIN;
    } else if (!inTransit && !delivered && pharmacyStatus !== "completed") {
      return ORDER_STEPS.SHIPPED;
    } else if (inTransit || shippedWithoutStatus) {
      return ORDER_STEPS.SHIPPED;
    } else {
      return ORDER_STEPS.SHIPPED;
    }
  } else {
    if (!paymentStatus) {
      // No payment or failed payment? Your sitting at home son!
      return ORDER_STEPS.ORIGIN;
    } else if (
      paymentStatus === "succeeded" &&
      origin === "new" &&
      !visitConcluded
    ) {
      // Successful payment and new order but visit not concluded? Sitting with the doc!
      return ORDER_STEPS.SUBMITTED;
    } else if (
      (visitConcluded &&
        !inTransit &&
        !delivered &&
        pharmacyStatus !== "completed") ||
      refillAtPharmacy
    ) {
      // Visit concluded but not in delivery? At pharmacy!
      return ORDER_STEPS.SHIPPED;
    } else if (inTransit || shippedWithoutStatus) {
      return ORDER_STEPS.SHIPPED;
    } else {
      return ORDER_STEPS.SHIPPED;
    }
  }
}

module.exports = {
  getStep
};
