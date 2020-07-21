import { defaultTo, pipe } from "ramda";

import { formatDate, parseDate, isDateAfter } from "../../utils/date";

// Renders as: Nov.19 2018
const PDP_SHIPPING_DISPLAY_FORMAT = "MMM.D YYYY";

const now = () => new Date();

const isAfterToday = dateToValidate =>
  defaultTo(false, isDateAfter(now())(dateToValidate));

export const formatShippingDate = dateStr =>
  pipe(
    parseDate,
    formatDate(PDP_SHIPPING_DISPLAY_FORMAT)
  )(dateStr);

export const hasFutureShipDate = dateStr =>
  pipe(
    parseDate,
    isAfterToday
  )(dateStr);
