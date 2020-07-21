import styled, { css } from "styled-components";
import { Link } from "react-router";

import { ButtonReset } from "../elements";
import { createFluidFontSizingByBreakpoint } from "../fonts/fonts.utils";
import { createMinWidthMediaQuery } from "../../utils/breakpoints";
import { fontSizes } from "../../theme/typography";
import { BUTTON_VARIANTS } from "../../theme/buttons";

const fontScale = {
  min: fontSizes.bodySmall,
  max: fontSizes.bodyMedium
};

export const ButtonIconWrapper = styled.span`
  /* default font has some empty space below, needed to bump the icon. */
  transform: translateY(-${({ theme }) => theme.spacing.half});

  display: inline-block;

  svg path.icon-styleable-color {
    transition-duration: ${({ theme }) => theme.transitions.speed.xfast};
    transition-property: fill;
    transition-timing-function: ${({ theme }) =>
      theme.transitions.easing.default};
  }

  margin-left: ${({ theme }) => theme.spacing.one};
`;

const setIconColor = css`
  ${ButtonIconWrapper} svg path.icon-styleable-color {
    fill: currentColor;
  }
`;

const createButtonVariantStyles = (activeId, variants) => css`
  ${variants[activeId].default};

  ${setIconColor};

  &:focus,
  &:hover,
  &:active {
    ${variants[activeId].hover};
    ${setIconColor};
  }

  &[disabled] {
    ${variants[activeId].disabled};
    ${setIconColor};
  }
`;

const fullWidthStyles = css`
  display: block;
  min-width: auto;
  width: 100%;
`;

export const BrandButtonWithVariantStyles = css`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  font-size: ${fontScale.min};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  height: ${({ theme }) => theme.sizing.buttons.height};
  min-width: ${({ theme, shrinkToText }) =>
    shrinkToText ? "initial" : theme.sizing.buttons.width};
  padding: ${({ theme }) => `${theme.spacing.three} ${theme.spacing.four}`};
  text-align: center;
  transition-duration: ${({ theme }) => theme.transitions.speed.xfast};
  transition-property: background, border, box-shadow, color;
  transition-timing-function: ${({ theme }) =>
    theme.transitions.easing.default};

  ${createFluidFontSizingByBreakpoint({
    breakpointMin: "large",
    breakpointMax: "maximum",
    min: fontScale.min,
    max: fontScale.max
  })};
  ${createMinWidthMediaQuery("maximum")} {
    font-size: ${fontScale.max};
  }

  ${({ variant = BUTTON_VARIANTS.PRIMARY, theme: { buttons } }) =>
    createButtonVariantStyles(variant, buttons)};

  ${({ fullWidth }) => fullWidth && fullWidthStyles};

  * {
    vertical-align: middle;
  }
`;

export const ButtonVariant = styled(ButtonReset)`
  ${BrandButtonWithVariantStyles};
`;

export const ButtonVariantLink = styled(Link)`
  ${BrandButtonWithVariantStyles};
  text-decoration: none;
`;
