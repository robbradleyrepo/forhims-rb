"use strict";

import PropTypes from "prop-types";
import R from "ramda";
import React from "react";
import { support } from "../../../constants/Contact";

const linkTypes = {
  email: "mailto:",
  phone: "tel:"
};

const getLinkType = name =>
  R.compose(
    R.defaultTo(""),
    R.prop(R.__, linkTypes)
  )(name);

const GenderRejected = props => (
  <div>
    <h2>We&apos;re sorry, this product is only available for women.</h2>
    <h3>Please contact support</h3>
    <div>
      {R.compose(
        R.map(name => (
          <span key={name}>
            <span>{name} </span>
            <a href={`${getLinkType(name)}${support[name]}`}>{support[name]}</a>
          </span>
        )),
        R.keys
      )(support)}
    </div>
    <div onClick={props.resetGender}>
      <span>Not a female? click here to set your correct gender</span>
    </div>
    <div onClick={props.close}>
      <span>Close Visit</span>
    </div>
  </div>
);

GenderRejected.propTypes = {
  close: PropTypes.func,
  resetGender: PropTypes.func
};

GenderRejected.displayName = "GenderRejected";

export default GenderRejected;
