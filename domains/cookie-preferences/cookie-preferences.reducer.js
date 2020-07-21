import { COOKIE_ACTIONS } from "./cookie-preferences.actions";

const defaultState = { accepted: false };

export default (state = defaultState, action) => {
  switch (action.type) {
    case COOKIE_ACTIONS.PREFERENCE_CHANGE:
      return action.payload;
    default:
      return state;
  }
};
