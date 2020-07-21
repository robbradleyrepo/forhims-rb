import PropTypes from "prop-types";
import React from "react";

const Name = props => (
  <div className="text-muted text-u-c m-b-xs">
    <small>
      {props.me.firstName} {props.me.lastName}
    </small>
  </div>
);

Name.propTypes = {
  me: PropTypes.object
};

Name.displayName = "Name";

export default Name;
