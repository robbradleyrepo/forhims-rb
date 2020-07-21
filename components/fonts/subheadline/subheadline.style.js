import styled from "styled-components";
import { rem } from "polished";
import { themeGet } from "styled-system";

import { createFluidFontSizingByBreakpoint } from "../fonts.utils";
import {
  createMinWidthMediaQuery,
  createRangeMediaQuery
} from "../../../utils/breakpoints";
import { fontSizes } from "../../../theme/typography";

const lineHeight = 32 / 20;
const fontScale = {
  min: fontSizes.bodyLarge,
  md: fontSizes.headingSmall,
  max: rem(22)
};

export const Subheadline = styled.p`
  color: ${({ color, theme }) =>
    themeGet(`colors.text.${color}`, theme.colors.text.primary)};
  font-family: ${({ theme }) => theme.fonts.brandPrimary};
  font-size: ${fontScale.min};
  line-height: ${lineHeight};
  margin: 0;

  ${createFluidFontSizingByBreakpoint({
    breakpointMin: "minimum",
    breakpointMax: "small",
    min: fontScale.min,
    max: fontScale.md
  })};
  ${createRangeMediaQuery("small", "large")} {
    font-size: ${fontScale.md};
  }
  ${createFluidFontSizingByBreakpoint({
    breakpointMin: "large",
    breakpointMax: "maximum",
    min: fontScale.md,
    max: fontScale.max
  })};
  ${createMinWidthMediaQuery("maximum")} {
    font-size: ${fontScale.max};
  }
`;
