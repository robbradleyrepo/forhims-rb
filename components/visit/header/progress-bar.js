import * as React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";

import { Block } from "../../../components/block";

export const ProgressBarComponent = ({ percentage, theme }) => {
  return (
    <Block
      mr={`${100 - percentage}%`}
      height={"10px"}
      border={`2px solid ${theme.colors.ui.callout}`}
      bg={theme.colors.ui.callout}
    />
  );
};

ProgressBarComponent.defaultProps = {};

ProgressBarComponent.propTypes = {
  percentage: PropTypes.number,
  theme: PropTypes.object
};

export const ProgressBar = withTheme(ProgressBarComponent);
