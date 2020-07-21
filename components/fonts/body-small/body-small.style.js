import styled from "styled-components";

import { createFluidFontSizingByBreakpoint } from "../fonts.utils";
import { createMinWidthMediaQuery } from "../../../utils/breakpoints";
import { fontSizes } from "../../../theme/typography";

const lineHeight = 24 / 14;
const fontScale = {
  min: fontSizes.bodySmall,
  max: fontSizes.bodyMedium
};

export const BodySmall = styled.p`
  color: ${({ secondary, theme }) =>
    secondary ? theme.colors.text.secondary : theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  font-size: ${fontScale.min};
  line-height: ${lineHeight};
  margin: 0;

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
