import styled from "styled-components";
import { themeGet } from "styled-system";

import { Block } from "../../block";
import { createMinWidthMediaQuery } from "../../../utils/breakpoints";
import { combineRems } from "../../../utils/rem";

export const CardBlock = styled(Block)`
  border-style: solid;
  border-color: ${({ borderColor, theme }) =>
    themeGet(borderColor, theme.colors.brand.sex)};
  border-width: ${({ theme: { spacing } }) =>
    combineRems(spacing.one, spacing.two)};
  background-color: ${({ backgroundColor, theme }) =>
    themeGet(backgroundColor, theme.colors.white)};

  ${createMinWidthMediaQuery("large")} {
    border-width: ${({ theme: { spacing } }) =>
      combineRems(spacing.two, spacing.two)};
  }
`;
