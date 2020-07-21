import styled, { css } from "styled-components";
import { rem } from "polished";

import { createFluidFontSizingByBreakpoint } from "../fonts.utils";
import { HeadlineReset } from "../fonts.style";
import { createMinWidthMediaQuery } from "../../../utils/breakpoints";
import { fontSizes } from "../../../theme/typography";

const lineHeight = 56 / 40;
const fontScale = {
  min: rem(28),
  sm: fontSizes.headingLarge,
  lg: fontSizes.headingXLarge,
  max: fontSizes.displayMedium
};

export const Headline2Styles = css`
  font-size: ${fontScale.min};
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

export const Headline2 = styled.h2`
  ${HeadlineReset};
  ${Headline2Styles};
`;
