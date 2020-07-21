import styled from "styled-components";
import { themeGet } from "styled-system";

import { Block } from "../../components/block";

export const BlockWithTheme = styled(Block)`
  position: relative;
  background-color: ${({ backgroundColor, theme }) =>
    themeGet(`colors.canvas.${backgroundColor}`, theme.colors.white)};
`;
