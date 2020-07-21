import React from "react";
import PropTypes from "prop-types";
import ReduxToastr from "react-redux-toastr";
import { values } from "ramda";
import { ToastrStyle } from "./toastr.style";

import {
  TOASTR_POSITIONS,
  TOASTR_TRANSITIONS,
  TOASTR_DEFAULT
} from "./toastr.constants";

export const Toastr = ({
  position,
  transitionIn,
  transitionOut,
  closeOnToastrClick,
  timeout
}) => (
  <div data-testid="Toastr">
    <ToastrStyle />
    <ReduxToastr
      timeOut={timeout}
      preventDuplicates
      position={position}
      transitionIn={transitionIn}
      transitionOut={transitionOut}
      closeOnToastrClick={closeOnToastrClick}
    />
  </div>
);

Toastr.propTypes = {
  timeout: PropTypes.number,
  closeOnToastrClick: PropTypes.bool,
  position: PropTypes.oneOf([
    ...values(TOASTR_POSITIONS.BOTTOM),
    ...values(TOASTR_POSITIONS.TOP)
  ]),
  transitionIn: PropTypes.oneOf(values(TOASTR_TRANSITIONS.IN)),
  transitionOut: PropTypes.oneOf(values(TOASTR_TRANSITIONS.OUT))
};

Toastr.defaultProps = {
  timeout: TOASTR_DEFAULT.TIMEOUT,
  closeOnToastrClick: TOASTR_DEFAULT.OPTIONS.CLOSE_ON_CLICK,
  position: TOASTR_DEFAULT.POSITION,
  transitionIn: TOASTR_DEFAULT.TRANSITION_IN,
  transitionOut: TOASTR_DEFAULT.TRANSITION_OUT
};
