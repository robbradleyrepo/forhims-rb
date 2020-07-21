import { createGlobalStyle } from "styled-components";

export const PageStyle = createGlobalStyle`

  body {
    background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
  }
`;
