import Choice from "./choice";
import Example from "./example";
import Header from "../questions/header";
import Name from "../name";
import PropTypes from "prop-types";
import R from "ramda";
import React from "react";

const Root = props => (
  <div className="blood-pressure__question">
    <div className="text-left m-t-xxl m-b-lg visit__question-container">
      <Header {...props} />
    </div>
    <div className="text-right">
      <Name me={props.me} />
      {R.map(
        choice => (
          <Choice
            key={choice.id}
            active={props.isActive(choice)}
            onClick={() => props.onClick(choice)}
            {...choice}
          />
        ),
        props.choices
      )}
      <div className="visit__choice-container">
        <Example />
      </div>
    </div>
  </div>
);

Root.propTypes = {
  choices: PropTypes.array,
  isActive: PropTypes.func,
  me: PropTypes.object,
  onClick: PropTypes.func
};

Root.displayName = "BloodPressureRootQuestion";

export default Root;
