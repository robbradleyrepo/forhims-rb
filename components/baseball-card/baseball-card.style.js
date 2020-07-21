import styled, { css } from "styled-components";
import { Link } from "react-router";
import { rem } from "polished";

import { CardWithBorder } from "../card";
import { Block } from "../block";
import { Headline3 } from "../fonts";
import { ProductImage } from "../product-image";
import {
  createFluidCssValueByBreakpoint,
  createMinWidthMediaQuery
} from "../../utils/breakpoints";
import { combineRems } from "../../utils/rem";

const CARD_WIDTH_MIN = 312;
const CARD_WIDTH_MAX = 448;
const CARD_RATIO_SMALL = 5 / 3;
const CARD_RATIO_LARGE = 4 / 3;

const fluidHeightCalculation = createFluidCssValueByBreakpoint({
  min: rem(Math.round(CARD_WIDTH_MIN * CARD_RATIO_SMALL)),
  max: rem(Math.round(CARD_WIDTH_MAX * CARD_RATIO_LARGE)),
  breakpointMin: "minimum",
  breakpointMax: "large"
});

const fluidImageHeightCalculation = createFluidCssValueByBreakpoint({
  min: rem(176),
  max: rem(235),
  breakpointMin: "minimum",
  breakpointMax: "large"
});

const fluidBorderWidthCalculation = createFluidCssValueByBreakpoint({
  min: rem(12),
  max: rem(24),
  breakpointMin: "minimum",
  breakpointMax: "large"
});

const FillStyles = css`
  height: 100%;
  width: 100%;
`;
const CoverStyles = css`
  ${FillStyles};
  left: 0;
  position: absolute;
  top: 0;
`;
const ProductTransitionStyles = css`
  transition-duration: ${({ theme }) => theme.transitions.speed.medium};
  transition-property: all;
  transition-timing-function: ${({ theme }) =>
    theme.transitions.easing.default};
`;
const FadeInStyles = css`
  ${ProductTransitionStyles};
  opacity: 0;
  transform: translate3d(0, 0, 0);
`;

export const BaseballCardWithBorder = styled(CardWithBorder)`
  ${ProductTransitionStyles};
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
  border-color: ${({ theme }) => theme.colors.canvas.primary};
  border-width: calc(${fluidBorderWidthCalculation});
  min-height: calc(${fluidHeightCalculation});
  padding: calc(${fluidBorderWidthCalculation});
  position: relative;
  width: 100%;
`;

export const CenteredProductImage = styled(ProductImage)`
  img {
    margin: 0 auto;
  }
`;

export const ProductImageWrapper = styled(Block)`
  height: calc(${fluidImageHeightCalculation});
  width: 100%;

  ${CenteredProductImage} {
    height: 100%;
    img {
      height: 100%;
      width: auto;
    }
  }
`;

export const BaseballCardContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  justify-content: flex-end;
`;

export const BaseballCardCopyContainer = styled.div`
  margin-bottom: ${({ theme: { spacing } }) =>
    combineRems(spacing.three, spacing.four)};

  ${createMinWidthMediaQuery("small")} {
    margin-bottom: ${({ theme: { spacing } }) =>
      combineRems(spacing.two, spacing.three)};
  }
`;

export const BaseballCardButtonContainer = styled(Block)`
  position: relative;
  z-index: ${({ theme }) => theme.zIndexes.header};
`;

export const Headline = styled(Headline3)`
  line-height: 1.2;
`;

// Force hers wide image size to fill vertical card container
// TODO: Remove once we have correct aspect ratio hover images
const ForceFullWidthHoverImageStyles = css`
  span,
  img {
    ${FillStyles};
  }

  img {
    object-fit: cover;
  }
`;

export const HoverImage = styled.div`
  ${CoverStyles};
  ${FadeInStyles};
  ${ForceFullWidthHoverImageStyles};
  z-index: ${({ theme }) => theme.zIndexes.foreground};
`;

const ProductCardBoxShadowStyles = css`
  ${CoverStyles};
  ${FadeInStyles};
  box-shadow: ${({ theme }) => theme.boxShadows.small};
`;

const ProductCardLinkActiveStyles = css`
  &::after {
    content: "";
    ${ProductCardBoxShadowStyles};
  }

  &:hover,
  &:focus {
    ${BaseballCardWithBorder} {
      border-color: ${({ theme }) => theme.colors.canvas.white};
    }

    &::after,
    ${HoverImage} {
      opacity: 1;
    }
  }
`;

const ProductCardLinkDisabledStyles = css`
  pointer-events: none;
`;

export const ProductCardLink = styled(Link)`
  color: inherit;
  display: block;
  position: relative;
  text-decoration: none;

  ${({ disabled }) =>
    disabled ? ProductCardLinkDisabledStyles : ProductCardLinkActiveStyles};
`;
