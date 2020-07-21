"use strict";

/**
 * TODO: This file can likely be removed, it's used in `routes/index.js` currently
 *   to wrap some routes (login, register)
 */
import actions from "../actions";
import PropTypes from "prop-types";
import R from "ramda";
import React from "react";
import utils from "../utils";
import { connect } from "react-redux";

const isBrowser = () => {
  try {
    return this === window;
  } catch (e) {
    return false;
  }
};

let _GLOBAL_ = isBrowser() ? window : global;

_GLOBAL_.$APP = _GLOBAL_.$APP || {};
_GLOBAL_.$APP.utils = utils;
_GLOBAL_.R = R;

/**
 * @module ApplicationContainer
 */

class ApplicationContainer extends React.Component {
  render() {
    return null;
  }
}

ApplicationContainer.defaultProps = {};

ApplicationContainer.propTypes = {
  location: PropTypes.object,
  setCookie: PropTypes.func
};

ApplicationContainer.displayName = "ApplicationContainer";

export default connect(
  state => {
    return state;
  },
  {
    ...actions.localStorage,
    ...actions.auth,
    ...actions.fetch,
    ...actions.global,
    ...actions.localStorage,
    ...actions.order,
    ...actions.ui
  }
)(ApplicationContainer);
