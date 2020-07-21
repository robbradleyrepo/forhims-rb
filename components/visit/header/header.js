import * as React from "react";
import PropTypes from "prop-types";
import { VisitHeaderContainer } from "./header.style";
import { ProgressBar } from "./progress-bar";

export const Header = ({ percentage }) => (
  <VisitHeaderContainer>
    <ProgressBar percentage={percentage} />
  </VisitHeaderContainer>
);

Header.defaultProps = {};

Header.propTypes = {
  percentage: PropTypes.number
};
