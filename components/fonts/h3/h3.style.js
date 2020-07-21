import styled, { css } from "styled-components";

import { createFluidFontSizingByBreakpoint } from "../fonts.utils";
import { HeadlineReset } from "../fonts.style";
import { createMinWidthMediaQuery } from "../../../utils/breakpoints";
import { fontSizes } from "../../../theme/typography";

const lineHeight = 48 / 32;
const fontScale = {
  min: fontSizes.headingSmall,
  sm: fontSizes.headingMedium,
  lg: fontSizes.headingLarge,
  max: fontSizes.displayMedium
};

export const Headline3Styles = css`
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

export const Headline3 = styled.h3`
  ${HeadlineReset};
  ${Headline3Styles};
`;
