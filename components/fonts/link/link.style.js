import styled, { css } from "styled-components";
import { Link } from "react-router";

import { createFluidFontSizingByBreakpoint } from "../fonts.utils";
import { ButtonReset } from "../../elements";
import { createMinWidthMediaQuery } from "../../../utils/breakpoints";
import { fontSizes } from "../../../theme/typography";

const fontScale = {
  min: fontSizes.caption,
  max: fontSizes.bodySmall
};

export const BaseLinkStyles = css`
  border-bottom: ${({ theme }) => theme.spacing.half} solid transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1;
  text-align: center;
  margin: 0;
  text-decoration: none;
  transition: ${({ theme: { transitions } }) =>
    `all ${transitions.speed.xfast} ${transitions.easing.enter}`};
`;

export const ExtendedLinkStyles = css`
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${fontScale.min};
  letter-spacing: ${({ theme }) => theme.letterSpacing.medium};
  padding-bottom: ${({ theme }) => theme.spacing.one};
  text-transform: uppercase;

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
  &:visited {
    color: inherit;
  }
`;

export const BaseRouterLink = styled(Link)`
  ${BaseLinkStyles};
`;

export const ButtonLink = styled(ButtonReset)`
  ${BaseLinkStyles};
  ${ExtendedLinkStyles};
`;

export const RouterLink = styled(BaseRouterLink)`
  ${ExtendedLinkStyles};
`;

export const StealthLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const TextLink = styled.a`
  ${BaseLinkStyles};
  ${ExtendedLinkStyles};
`;

export const BodyTextLinkStyles = css`
  color: ${({ theme }) => theme.colors.brand.default};
  border-bottom: ${({ theme }) => theme.spacing.half} solid transparent;
  text-decoration: none;
  &:hover,
  &:active {
    border-color: ${({ theme }) => theme.colors.brand.default};
  }
`;

export const BodyTextLink = styled(Link)`
  ${BodyTextLinkStyles};
`;

export const UnderlinedRouterLink = styled(RouterLink)`
  border-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.black};

  &:hover,
  &:focus,
  &:active {
    border-color: ${({ theme }) => theme.colors.text.primary};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;
