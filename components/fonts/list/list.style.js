import styled from "styled-components";

import { createFluidFontSizingByBreakpoint } from "../fonts.utils";
import { createMinWidthMediaQuery } from "../../../utils/breakpoints";
import { fontSizes } from "../../../theme/typography";

const lineHeight = 28 / 18;
const fontScale = {
  min: fontSizes.bodyMedium,
  max: fontSizes.bodyLarge
};

export const List = styled.ul`
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.brandPrimary};
  font-size: ${fontScale.min};
  line-height: ${lineHeight};
  margin: 0;
  padding-left: ${({ theme }) => theme.spacing.three};

  li {
    margin: 0 0 1em;
  }

  ${createFluidFontSizingByBreakpoint({
    breakpointMin: "large",
    breakpointMax: "maximum",
    min: fontScale.min,
    max: fontScale.max
  })};
  ${createMinWidthMediaQuery("maximum")} {
    font-size: ${fontScale.max};
  }
`;
