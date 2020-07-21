"use strict";
import PropTypes from "prop-types";
import React, { Component } from "react";

class TupleContainer extends Component {
  render() {
    const { Tuple, tupleProps } = this.props;
    return <Tuple {...tupleProps} />;
  }
}

TupleContainer.propTypes = {
  Tuple: PropTypes.func,
  tupleProps: PropTypes.object,
  type: PropTypes.string
};

export default TupleContainer;
