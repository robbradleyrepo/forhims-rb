export const TOASTR_ACTIONS = {
  SHOW: "SHOW_TOAST",
  SHOW_WARNING: "SHOW_TOAST_WARNING",
  SHOW_INFO: "SHOW_TOAST_INFO",
  SHOW_SUCCESS: "SHOW_TOAST_SUCCESS",
  SHOW_ERROR: "SHOW_TOAST_ERROR",
  HIDE: "HIDE_TOAST",
  ADD: "@ReduxToastr/toastr/ADD",
  CLEAN: "@ReduxToastr/toastr/CLEAN"
};

export const TOASTR_TYPES = {
  WARNING: "warning",
  INFO: "info",
  SUCCESS: "success",
  ERROR: "error"
};

export const TOASTR_POSITIONS = {
  TOP: {
    LEFT: "top-left",
    CENTER: "top-center",
    RIGHT: "top-right"
  },
  BOTTOM: {
    LEFT: "bottom-left",
    CENTER: "bottom-center",
    RIGHT: "bottom-right"
  }
};

export const TOASTR_TRANSITIONS = {
  IN: {
    BOUNCE: "bounceIn",
    BOUNCE_DOWN: "bounceInDown",
    FADE: "fadeIn"
  },
  OUT: {
    BOUNCE: "bounceOut",
    BOUNCE_UP: "bounceOutUp",
    FADE: "fadeOut"
  }
};

export const TOASTR_DEFAULT = {
  TYPE: TOASTR_TYPES.WARNING,
  TIMEOUT: 10000,
  POSITION: TOASTR_POSITIONS.BOTTOM.RIGHT,
  TRANSITION_IN: TOASTR_TRANSITIONS.IN.FADE,
  TRANSITION_OUT: TOASTR_TRANSITIONS.OUT.FADE,
  OPTIONS: {
    CLOSE_ON_CLICK: true,
    CLOSE_ON_HOVER: false,
    SHOW_CLOSE_BUTTON: true
  }
};
