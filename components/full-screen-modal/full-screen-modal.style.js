import { ButtonResetStyles } from "../../components/elements";
import { combineRems } from "../../utils/rem";
import { Headline3 } from "../fonts";
import styled, { createGlobalStyle } from "styled-components";

export const Background = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.canvas.primary};
  width: 100%;
  height: 100vh;
  max-height: 100%;
`;

export const ScrollingArea = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  width: 100%;
  height: 100vh;
  max-height: 100%;
  padding: ${({ theme }) =>
    `${theme.spacing.four} ${combineRems(
      theme.spacing.four,
      theme.spacing.two
    )} ${theme.spacing.four} ${theme.spacing.four}`};
  -webkit-overflow-scrolling: touch;
`;

export const ContentBlock = styled.div`
  max-width: 960px;
  margin: ${({ theme }) => `${theme.spacing.two} auto`};
`;

export const FullScreenModalHeading = styled(Headline3)`
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.two};
`;

export const CloseButton = styled.button`
  ${ButtonResetStyles};
  position: fixed;
  right: 0;
  top: 0;
  margin: ${({ theme }) => theme.spacing.three};
  z-index: ${({ theme }) => theme.zIndexes.modal};
`;

/* 
    Despite overflow: hidden, iOS Safari still scrolls the content of the page behind the modal once you reach the end of the content in the modal
    Hiding the content while the modal is open is a quick fix.z-index
      */

export const ScrollBlocker = createGlobalStyle`
  body {
    overflow:hidden;
    .content {
      display:none
    }
}`;
