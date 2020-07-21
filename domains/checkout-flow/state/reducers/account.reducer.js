import { ACCOUNT_ACTIONS } from "../actions";

export const ACCOUNT_DEFAULT_STATE = {
  activeView: "login"
};

export const account = (state = ACCOUNT_DEFAULT_STATE, action) => {
  switch (action.type) {
    case ACCOUNT_ACTIONS.CHANGE_VIEW:
      return {
        ...state,
        activeView: action.payload.view
      };
    default:
      return state;
  }
};
