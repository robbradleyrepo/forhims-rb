"use strict";

import actions from "../actions";
import PropTypes from "prop-types";
import R from "ramda";
import React from "react";
import { connect } from "react-redux";
import {{displayName}} from "../components/{{displayName}}";

/**
 * @module {{displayName}}Container
 */

class {{displayName}}Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <{{displayName}} { ...this.props } />
    );
  }
}

{{displayName}}Container.defaultProps = {};

{{displayName}}Container.propTypes = {
  example: PropTypes.string
};

{{displayName}}Container.displayName = "{{displayName}}Container";

export default connect((state) => {
  return {};
}, {

})({{displayName}}Container);
