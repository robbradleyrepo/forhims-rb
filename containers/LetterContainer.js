"use strict";

import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import Letter from "../components/Letter";

/**
 * @module LetterContainer
 */

class LetterContainer extends React.Component {
  render() {
    return <Letter {...this.props} />;
  }
}

LetterContainer.defaultProps = {};

LetterContainer.propTypes = {
  example: PropTypes.string
};

LetterContainer.displayName = "LetterContainer";

export default connect(
  state => {
    return {};
  },
  {}
)(LetterContainer);
