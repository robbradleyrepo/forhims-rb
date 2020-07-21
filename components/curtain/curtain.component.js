import React from "react";
import PropTypes from "prop-types";
import styled, { css, createGlobalStyle } from "styled-components";

const scrollBlockerStyles = css`
  body {
    overflow: hidden;
  }
`;

export const CurtainGlobalStyle = createGlobalStyle`
  ${({ visible }) => visible && scrollBlockerStyles};
`;

export const Curtain = ({ visible, onClick }) => (
  <CurtainStyle visible={visible} onClick={onClick}>
    <CurtainGlobalStyle visible={visible} />
  </CurtainStyle>
);

const CurtainStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.colors.ui.overlay};
  opacity: ${({ visible, theme }) =>
    visible ? theme.colors.opacity.overlay : 0};
  transition: opacity ${props => props.theme.transitions.speed.xslow}
    ${props => props.theme.transitions.easing.spring};
  pointer-events: ${props => (props.visible ? "auto" : "none")};
  transform: translate3d(0, 0, 0);
  z-index: ${props => props.theme.zIndexes.overlay};
`;

Curtain.propTypes = {
  onClick: PropTypes.func,
  visible: PropTypes.bool
};

Curtain.displayName = "Curtain";
