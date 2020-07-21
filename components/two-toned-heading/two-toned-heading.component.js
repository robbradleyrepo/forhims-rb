import { HeadingDarkColor, HeadingLightColor } from "./two-toned-heading.style";
import PropTypes from "prop-types";
import React from "react";

export const TwoTonedHeading = ({ children }) => {
  const parts = React.Children.toArray(children);
  return (
    <React.Fragment>
      <HeadingDarkColor>{parts[0]}</HeadingDarkColor>
      <HeadingLightColor>{parts[1]}</HeadingLightColor>
    </React.Fragment>
  );
};

TwoTonedHeading.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};
