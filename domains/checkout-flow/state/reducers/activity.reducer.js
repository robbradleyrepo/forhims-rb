import R from "ramda";

import { ACTIVITY_ACTIONS } from "../actions/activity.actions";

export const ACTIVITY_DEFAULT_STATE = {
  visible: false
};

export const activity = (state = ACTIVITY_DEFAULT_STATE, action) => {
  switch (action.type) {
    case ACTIVITY_ACTIONS.SHOW:
      return R.assoc("visible", true, state);
    case ACTIVITY_ACTIONS.HIDE:
      return R.assoc("visible", false, state);
    default:
      return state;
  }
};
