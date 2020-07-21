import R from "ramda";
import { createAction } from "redux-actions";

import { toastr } from "react-redux-toastr";

import {
  TOASTR_ACTIONS,
  TOASTR_DEFAULT,
  TOASTR_TYPES
} from "./toastr.constants";

const defaultOptions = {
  type: TOASTR_DEFAULT.TYPE,
  position: TOASTR_DEFAULT.POSITION,
  options: {
    transitionIn: TOASTR_DEFAULT.TRANSITION_IN,
    transitionOut: TOASTR_DEFAULT.TRANSITION_OUT,
    closeOnToastrClick: TOASTR_DEFAULT.OPTIONS.CLOSE_ON_CLICK,
    removeOnHover: TOASTR_DEFAULT.OPTIONS.CLOSE_ON_HOVER,
    showCloseButton: TOASTR_DEFAULT.OPTIONS.SHOW_CLOSE_BUTTON,
    position: TOASTR_DEFAULT.position,
    timeout: TOASTR_DEFAULT.timeout
  },
  title: "",
  message: ""
};

export const toastrHandler = {
  show: createAction(TOASTR_ACTIONS.ADD, R.merge(defaultOptions)),
  warning: createAction(
    TOASTR_ACTIONS.ADD,
    R.merge(R.assoc("type", TOASTR_TYPES.WARNING, defaultOptions))
  ),
  error: createAction(
    TOASTR_ACTIONS.ADD,
    R.merge(R.assoc("type", TOASTR_TYPES.ERROR, defaultOptions))
  ),
  info: createAction(
    TOASTR_ACTIONS.ADD,
    R.merge(R.assoc("type", TOASTR_TYPES.INFO, defaultOptions))
  ),
  hide: createAction(TOASTR_ACTIONS.CLEAN)
};
// TODO: Refactor and decouple the module
export const toastrEmitter = {
  warning: args => {
    const { title, message } = args;
    toastr.warning(title, message);
  },
  error: args => {
    const { title, message } = args;
    toastr.error(title, message);
  },
  info: args => {
    const { title, message } = args;
    toastr.info(title, message);
  }
};
