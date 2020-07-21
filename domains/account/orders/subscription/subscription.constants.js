import { isSnoozeDisabled } from "./subscription.utils";

export {
  SUBSCRIPTION_STATUSES as SUBSCRIPTION_STATUS
} from "../../../../constants/Enums";

export const STATUS_VALUES = {
  active: "Active",
  arrears: "Arrears",
  cancelled: "Cancelled",
  pending_rx: "Awaiting prescription renewal"
};

export const SUBSCRIPTION_ACTIONS = {
  REACTIVATE: "REACTIVATE",
  RENEW: "RENEW",
  SNOOZE: "SNOOZE",
  CANCEL: "CANCEL"
};

export const SUBSCRIPTION_ACTION_LABELS = {
  [SUBSCRIPTION_ACTIONS.REACTIVATE]: "Reactivate",
  [SUBSCRIPTION_ACTIONS.SNOOZE]: "Snooze",
  [SUBSCRIPTION_ACTIONS.CANCEL]: "Cancel",
  [SUBSCRIPTION_ACTIONS.RENEW]: "Renew"
};

export const SUBSCRIPTION_ACTION_DISABLED_FNS = {
  [SUBSCRIPTION_ACTIONS.SNOOZE]: isSnoozeDisabled
};
