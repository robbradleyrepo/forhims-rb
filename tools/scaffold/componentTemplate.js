"use strict";

import R from "ramda";
import PropTypes from "prop-types"
import React from "react"

/**
 * @module {{displayName}}
 */

class {{displayName}} extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>{{displayName}} says... poop on ya!</div>
    );
  }
}

{{displayName}}.defaultProps = {};

{{displayName}}.propTypes = {
  example: PropTypes.string
};

{{displayName}}.displayName = "{{displayName}}";

export default {{displayName}};
