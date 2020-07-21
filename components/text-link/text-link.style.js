import styled, { css } from "styled-components";
import { createFluidFontSizingByBreakpoint } from "../fonts/fonts.utils";
import { createMinWidthMediaQuery } from "../../utils/breakpoints";
import { Link } from "react-router";
import { fontSizes } from "../../theme/typography";

const fontScale = {
  min: fontSizes.caption,
  max: fontSizes.bodySmall
};

const LinkStyles = css`
  border-bottom: ${({ theme }) => theme.spacing.half} solid transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${fontScale.min};
  letter-spacing: ${({ theme }) => theme.letterSpacing.medium};
  line-height: 1;
  margin: 0;
  padding-bottom: ${({ theme }) => theme.spacing.one};
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: ${({ theme: { transitions } }) =>
    `all ${transitions.speed.xfast} ${transitions.easing.enter}`};

  ${createFluidFontSizingByBreakpoint({
    breakpointMin: "large",
    breakpointMax: "maximum",
    min: fontScale.min,
    max: fontScale.max
  })};
  ${createMinWidthMediaQuery("maximum")} {
    font-size: ${fontScale.max};
  }

  &:hover,
  &:focus,
  &:active {
    border-color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const UnderlinedRouterLink = styled(Link)`
  ${LinkStyles};
  border-bottom-color: currentColor;

  &:hover,
  &:focus,
  &:active {
    opacity: ${({ theme }) => theme.colors.opacity.hover};
  }
`;
