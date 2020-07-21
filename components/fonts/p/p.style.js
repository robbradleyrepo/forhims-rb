import styled, { css } from "styled-components";

import { createFluidFontSizingByBreakpoint } from "../fonts.utils";
import { createMinWidthMediaQuery } from "../../../utils/breakpoints";
import { fontSizes } from "../../../theme/typography";

const lineHeight = 28 / 18;
const fontScale = {
  min: fontSizes.bodyMedium,
  max: fontSizes.bodyLarge
};

// Allow styles to be reused in global css
// Ex. injected blog content
export const ParagraphStyles = css`
  color: ${({ secondary, theme }) =>
    secondary ? theme.colors.text.secondary : theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.brandPrimary};
  font-size: ${fontScale.min};
  line-height: ${lineHeight};
  margin: 0 auto 1em;

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

export const P = styled.p`
  ${ParagraphStyles};
`;
