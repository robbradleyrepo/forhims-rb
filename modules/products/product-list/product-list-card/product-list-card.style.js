import styled, { css } from "styled-components";

import { Link } from "react-router";
import { rem } from "polished";

import { Headline3, P } from "../../../../components/fonts";
import {
  createMinWidthMediaQuery,
  createFluidCssValueByBreakpoint,
  createMaxWidthMediaQuery
} from "../../../../utils/breakpoints";
import { ProductImage } from "../../../../components/product-image";
import {
  LazyLoadPictureWrapper,
  PictureWrapper
} from "../../../../components/picture/picture.style";
import { LegalProductText } from "../../../../components/legal-product-text";

const bgImageMobileHeightCalculation = createFluidCssValueByBreakpoint({
  min: rem(200),
  max: rem(384),
  breakpointMin: "minimum",
  breakpointMax: "small"
});

const featuredBgImageHeightCalculation = createFluidCssValueByBreakpoint({
  min: rem(202),
  max: rem(380),
  breakpointMin: "small",
  breakpointMax: "large"
});

const bgImageHeightCalculation = createFluidCssValueByBreakpoint({
  min: rem(192),
  max: rem(360),
  breakpointMin: "small",
  breakpointMax: "large"
});

const productImageMobileHeightCalculation = createFluidCssValueByBreakpoint({
  min: rem(300),
  max: rem(576),
  breakpointMin: "minimum",
  breakpointMax: "small"
});

const productImageHeightCalculation = createFluidCssValueByBreakpoint({
  min: rem(288),
  max: rem(540),
  breakpointMin: "small",
  breakpointMax: "large"
});

const ProductTransitionStyles = css`
  transition-duration: ${({ theme }) => theme.transitions.speed.fast};
  transition-property: all;
  transition-timing-function: ${({ theme }) => theme.transitions.easing.spring};
`;

export const BGImageContainer = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  ${LazyLoadPictureWrapper} {
    height: 100%;
    width: 100%;
  }

  ${PictureWrapper} img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center center;
  }
`;

export const BGImageWrapper = styled.div`
  ${ProductTransitionStyles};
  background-color: ${({ theme }) => theme.colors.canvas.brand};
  height: calc(${bgImageMobileHeightCalculation});
  overflow: hidden;
  position: relative;
  width: 100%;

  &::after {
    content: "";
    ${ProductTransitionStyles};
    box-shadow: ${({ theme }) => theme.boxShadows.large};
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transform: translate3d(0, 0, 0);
    width: 100%;
  }

  ${createMinWidthMediaQuery("small")} {
    height: calc(
      ${({ isFeatured }) =>
        isFeatured
          ? featuredBgImageHeightCalculation
          : bgImageHeightCalculation}
    );
  }
`;

export const HoverImage = styled(BGImageContainer)`
  opacity: 0;
  transform: translate3d(0, 0, 0);
  transition-duration: ${({ theme }) => theme.transitions.speed.fast};
  transition-property: opacity;
  transition-timing-function: ${({ theme }) => theme.transitions.easing.enter};
`;

// hers implementation
export const ProductImageWrapper = styled.div`
  height: calc(${productImageMobileHeightCalculation});
  z-index: ${({ theme }) => theme.zIndexes.foreground};

  ${createMinWidthMediaQuery("small")} {
    height: calc(${productImageHeightCalculation});
  }
`;

export const FluidHeightProductImage = styled(ProductImage)`
  height: 100%;

  img {
    max-height: 100%;
    margin: 0 auto;
    width: auto;
  }
`;

// TODO: Create Hover Card component with state and force hover props, refactor button style
const ProductCardLinkActiveStyles = css`
  button {
    transition-duration: ${({ theme }) => theme.transitions.speed.xfast};
  }

  @media (hover) {
    &:hover,
    &:focus {
      ${Headline3} {
        text-decoration: underline;
      }
      ${BGImageWrapper}::after {
        opacity: 1;
      }
      ${HoverImage} {
        opacity: 1;
      }
    }
  }
`;

const ProductCardLinkDisabledStyles = css`
  pointer-events: none;
`;

export const ProductCardLink = styled(Link)`
  color: inherit;
  display: block;
  text-decoration: none;
  position: relative;

  ${({ disabled }) =>
    disabled ? ProductCardLinkDisabledStyles : ProductCardLinkActiveStyles};
`;

export const ProductInformation = styled.div`
  ${createMinWidthMediaQuery("medium")} {
    max-width: 85%;
    margin-left: 0;
  }
`;

export const ProductTitle = styled(Headline3)`
  margin-bottom: ${({ theme }) => theme.spacing.three};

  ${createMaxWidthMediaQuery("small")} {
    text-decoration: underline;
  }
`;

export const ProductDescription = P;

export const ProductLegal = LegalProductText;

export const ProductListCardBadge = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(0%, -50%);

  box-shadow: ${({ theme }) => theme.boxShadows.small};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  background-color: ${({ theme }) => theme.colors.canvas.apricot};
  z-index: ${({ theme }) => theme.zIndexes.popover};

  ${createMinWidthMediaQuery("medium")} {
    transform: translate(50%, -50%);
  }
`;
