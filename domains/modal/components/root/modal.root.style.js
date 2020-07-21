import styled, { createGlobalStyle } from "styled-components";
import { rgba } from "polished";

export const ActiveModalBodyScrollDisable = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const Overlay = styled.div`
  z-index: ${props => props.theme.zIndexes.modal};

  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || rgba(theme.colors.ui.overlay, 0.58)};
`;
