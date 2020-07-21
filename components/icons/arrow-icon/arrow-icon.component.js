import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { SvgIcon, fillProps } from "../svg-icon";
import { colors } from "../../../theme/colors";

const directionToRotation = {
  right: 0,
  up: 270,
  left: 180,
  down: 90
};

export const RotationWrapper = styled.span`
  display: inline-block;
  font-size: 0;
  transform: rotate(${({ direction }) => directionToRotation[direction]}deg);
`;

export const ArrowIcon = ({
  height = 24,
  forceColor,
  color = colors.black,
  direction = "down"
}) => (
  <RotationWrapper direction={direction}>
    <SvgIcon originalHeight={24} originalWidth={24} height={height}>
      <path
        {...fillProps(forceColor, color)}
        d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
      />
      <path fill="none" d="M0 0h24v24H0V0z" />
    </SvgIcon>
  </RotationWrapper>
);

ArrowIcon.defaultProps = {
  forceColor: true
};

ArrowIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string,
  forceColor: PropTypes.bool,
  direction: PropTypes.string
};
