import styled, { css } from "styled-components";
import { rem, rgba } from "polished";
import { ButtonReset } from "../../elements";
import { HeadlineReset } from "../../fonts/fonts.style";
import { combineRems } from "../../../utils/rem";
import { ProductImage } from "../../../components/product-image";

const CARD_MIN_HEIGHT = rem("170px");

const CardProductErrorStyles = css`
  ${({ hasError, theme: { colors } }) =>
    hasError && `color: ${colors.form.error}`};
`;

const CartProductTextStyles = css`
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  font-size: ${({ theme }) => theme.fontSizes.bodySmall};
  line-height: 1;
  margin: 0 0 ${({ theme }) => theme.spacing.two};
`;

export const CartProductWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.white};
  display: flex;
  position: relative;
`;

export const CartProductImageContainer = styled.div`
  background-color: ${({ theme }) => rgba(theme.colors.ui.callout, 0.5)};
  height: ${CARD_MIN_HEIGHT};
  width: 35%;
`;

export const CartProductImage = styled(ProductImage)`
  height: 100%;
  position: relative;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export const CartProductContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) =>
    `${combineRems(theme.spacing.one, theme.spacing.three)} ${
      theme.spacing.three
    }`};
  width: 65%;
`;

export const CartProductTitle = styled.h3`
  ${HeadlineReset};
  ${CartProductTextStyles};
  ${CardProductErrorStyles};
`;

export const CartProductDescription = styled.p`
  ${CartProductTextStyles};
  color: ${({ theme }) => theme.colors.text.secondary};
  ${CardProductErrorStyles};
`;

export const CartProductPrice = styled.p`
  ${CartProductTextStyles};
  ${CardProductErrorStyles};
`;

export const CartProductRemoveButtonContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

export const CartProductRemoveButton = styled(ButtonReset)`
  padding: ${({ theme }) =>
    `${theme.spacing.three} ${combineRems(
      theme.spacing.one,
      theme.spacing.two
    )}`};

  path {
    fill: ${({ theme }) => theme.colors.text.secondary};
    transition-duration: ${({ theme }) => theme.transitions.speed.xfast};
    transition-property: fill;
    transition-timing-function: ${({ theme }) =>
      theme.transitions.easing.default};
  }

  &:hover path {
    fill: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const CartProductControls = styled.div`
  align-items: center;
  display: flex;
  margin-top: auto;
`;

export const CartProductQuantity = styled.span`
  ${CartProductTextStyles};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin: 0 ${({ theme }) => theme.spacing.two};
`;

export const CartProductQuantityButton = styled(ButtonReset)`
  path {
    fill: ${({ theme }) => theme.colors.text.primary};
    transition-duration: ${({ theme }) => theme.transitions.speed.xfast};
    transition-property: fill;
    transition-timing-function: ${({ theme }) =>
      theme.transitions.easing.default};
  }

  &:hover path {
    fill: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const CartProductAutoRenewContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const CartProductAutoRenewBadge = styled.div`
  background-color: ${({ theme }) => theme.colors.text.secondary};
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: ${({ theme }) => theme.sizing.badge};
  width: ${({ theme }) => theme.sizing.badge};

  path {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

export const CartProductError = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.error};
  color: ${({ theme }) => theme.colors.form.error};
  padding: ${({ theme }) => theme.spacing.three};
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.bodySmall};
`;
