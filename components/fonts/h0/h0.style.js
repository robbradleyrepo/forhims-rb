import styled from "styled-components";

import { createFluidFontSizingByBreakpoint } from "../fonts.utils";
import { HeadlineReset } from "../fonts.style";
import { createMinWidthMediaQuery } from "../../../utils/breakpoints";
import { fontSizes } from "../../../theme/typography";
import { rem } from "polished";

const lineHeight = 96 / 88;

const fontScale = {
  min: rem(72),
  sm: fontSizes.displayXLarge,
  lg: rem(88),
  max: rem(96)
};

export const Headline0 = styled.h1`
  ${HeadlineReset};
  font-size: ${fontScale.min};
  font-weight: ${({ theme }) => theme.fontWeights.headingLarge};
  line-height: ${lineHeight};

  ${createFluidFontSizingByBreakpoint({
    breakpointMin: "minimum",
    breakpointMax: "small",
    min: fontScale.min,
    max: fontScale.sm
  })};
  ${createFluidFontSizingByBreakpoint({
    breakpointMin: "small",
    breakpointMax: "large",
    min: fontScale.sm,
    max: fontScale.lg
  })};
  ${createFluidFontSizingByBreakpoint({
    breakpointMin: "large",
    breakpointMax: "maximum",
    min: fontScale.lg,
    max: fontScale.max
  })};
  ${createMinWidthMediaQuery("maximum")} {
    font-size: ${fontScale.max};
  }
`;
