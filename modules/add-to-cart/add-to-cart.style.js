import styled, { createGlobalStyle } from "styled-components";

import { createMinWidthMediaQuery } from "../../utils/breakpoints";

export const AddToCartFixedContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.white};
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  z-index: ${({ theme }) => theme.zIndexes.popover};

  ${createMinWidthMediaQuery("small")} {
    display: none;
  }
`;

export const AddToCartGlobalStyles = createGlobalStyle`
  body {
    padding-bottom: ${({ theme }) => theme.sizing.buttons.height};
    
    ${createMinWidthMediaQuery("small")} {
      padding-bottom: 0;
    }
  }
`;
