"use strict";

import PropTypes from "prop-types";
import React from "react";
import termsOfService from "./termsOfService";
import { connect } from "react-redux";

// nnasoody
// THE FILE NAME SHOULD BE EQUAL TO state.name.split(/\s+/).join("-") VALUE
// THIS IS HOW THE DOC_LOOKUP MAP SHOULD ALSO BE UPDATED

/**
 * @module BailyHealth
 */

class BailyHealth extends React.Component {
  render() {
    return React.createElement(termsOfService, this.props);
  }
}

BailyHealth.defaultProps = {};

BailyHealth.propTypes = {
  state: PropTypes.object
};

BailyHealth.displayName = "BailyHealth";

export default connect(
  state => {
    return {
      states: state.states.data
    };
  },
  {}
)(BailyHealth);
