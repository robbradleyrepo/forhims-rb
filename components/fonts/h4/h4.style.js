import styled, { css } from "styled-components";

import { createFluidFontSizingByBreakpoint } from "../fonts.utils";
import { HeadlineReset } from "../fonts.style";
import { createMinWidthMediaQuery } from "../../../utils/breakpoints";
import { fontSizes } from "../../../theme/typography";

const lineHeight = 36 / 24;
const fontScale = {
  min: fontSizes.headingSmall,
  md: fontSizes.headingMedium,
  max: fontSizes.headingLarge
};

export const Headline4Styles = css`
  font-size: ${fontScale.min};
  line-height: ${lineHeight};

  ${createFluidFontSizingByBreakpoint({
    breakpointMin: "minimum",
    breakpointMax: "small",
    min: fontScale.min,
    max: fontScale.md
  })};
  ${createMinWidthMediaQuery("small")} {
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

export const Headline4 = styled.h4`
  ${HeadlineReset};
  ${Headline4Styles};
`;
