import styled from "styled-components";
import { rgba } from "polished";

import { Headline2 } from "../fonts";
import { ButtonReset } from "../elements";
import { CloseIcon } from "../icons/close-icon";
import { combineRems } from "../../utils/rem";
import { Block } from "../block";

export const FixedToBottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: ${props => props.theme.zIndexes.overlay - 1};
`;

export const CouponBannerWrapper = styled.div`
  background-color: ${({ theme: { colors } }) =>
    rgba(colors.ui.callout, colors.opacity.alert)};
  color: ${({ theme }) => theme.colors.text.onPrimary};
  cursor: pointer;
  padding: ${({ theme: { spacing } }) => `${spacing.three} ${spacing.four}`};
  position: relative;
  text-align: center;
`;

export const CouponBannerHeaderWrapper = styled(Block)`
  padding: 0 ${({ theme }) => combineRems(theme.spacing.one, theme.spacing.two)};
`;

// Compact header styles
// To reduce height of banner over page content
export const CouponBannerHeader = styled(Headline2)`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  line-height: 1.2;
`;

export const CouponBannerDismissButton = styled(ButtonReset)`
  position: absolute;
  right: ${({ theme }) => theme.spacing.three};
  top: ${({ theme }) => theme.spacing.three};
  transition-duration: ${({ theme }) => theme.transitions.speed.xfast};
  transition-property: opacity;
  transition-timing-function: ${({ theme }) =>
    theme.transitions.easing.default};

  &:hover {
    opacity: ${({ theme }) => theme.colors.opacity.hover};
  }
`;

export const CouponBannerCloseIcon = styled(CloseIcon).attrs(({ theme }) => ({
  color: theme.colors.white
}))``;
