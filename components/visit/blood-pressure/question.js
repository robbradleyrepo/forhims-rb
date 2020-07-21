import Choice from "./choice";
import Header from "../questions/header";
import Icon from "./icon";
import iconMap from "./icon-map";
import Name from "../name";
import PropTypes from "prop-types";
import R from "ramda";
import React from "react";
import styled from "styled-components";

const ExtendedIcon = styled(Icon)`
  display: inline;
  padding-left: 8px;
`;

const Question = props => (
  <div className="blood-pressure__question">
    <div className="text-left m-t-xxl m-b-lg visit__question-container">
      <Header
        {...props}
        component={
          <ExtendedIcon
            key={`icon-${props.type}`}
            {...R.prop(props.type, iconMap)}
          />
        }
      />
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
    </div>
  </div>
);

Question.propTypes = {
  choices: PropTypes.array,
  isActive: PropTypes.func,
  me: PropTypes.object,
  onClick: PropTypes.func,
  type: PropTypes.string
};

Question.displayName = "BloodPressureQuestion";

export default Question;
