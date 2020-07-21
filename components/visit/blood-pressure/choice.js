import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

const Choice = props => (
  <div
    key={props.id}
    className="visit__choice-container"
    onClick={props.onClick}
  >
    <div className={classNames("visit__choice w100", { active: props.active })}>
      {props.label}
    </div>
  </div>
);

Choice.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.number,
  onClick: PropTypes.func
};

Choice.displayName = "Choice";

export default Choice;
