import React from "react";
import PropTypes from "prop-types";
import { LabelStyle, LabelValueStyle } from "./label-value.style";

export const LabelValue = ({ label, value }) => (
  <LabelValueStyle>
    <LabelStyle>{label}</LabelStyle>
    {value}
  </LabelValueStyle>
);

LabelValue.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};
