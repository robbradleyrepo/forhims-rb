import moment from "moment";
import { pipe, prop, equals, not, anyPass } from "ramda";
import { SUBSCRIPTION_STATUS } from "./subscription.constants";

export const isOlderThanThirtyDays = subscription =>
  moment(subscription.processOnDate, "YYYY-MM-DD").diff(moment(), "days") > 30;

export const isNotActive = subscription =>
  pipe(
    prop("status"),
    equals(SUBSCRIPTION_STATUS.ACTIVE),
    not
  )(subscription);

export const isSnoozeDisabled = anyPass([isOlderThanThirtyDays, isNotActive]);
