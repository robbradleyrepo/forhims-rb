export const ACTIVITY_ACTIONS = {
  SHOW: "[checkout - activity] show",
  HIDE: "[checkout - activity] hide"
};

export const ACTIVITY = {
  show: () => ({ type: ACTIVITY_ACTIONS.SHOW }),
  hide: () => ({ type: ACTIVITY_ACTIONS.HIDE })
};
