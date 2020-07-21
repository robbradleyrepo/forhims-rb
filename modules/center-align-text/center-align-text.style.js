import styled from "styled-components";

import { createMinWidthMediaQuery } from "../../utils/breakpoints";
import { Headline1 } from "../../components/fonts";
import { LazyLoadPicture } from "../../components/picture/lazy-load-picture.component";

const aspectRatioToHeight = ratio => `${ratio * 100}vw`;

export const UnderlineSans = styled.span`
  border-bottom: 0.1em solid black;
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
`;

export const Highlight = styled.span`
  text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black;
  color: ${({ theme }) => theme.colors.canvas.brand};
`;

export const TextStyle = styled(Headline1)`
  color: ${({ theme }) => theme.colors.white};
`;

export const LinkStyle = styled.a`
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  color: ${({ theme }) => theme.colors.text.callout};
  transition-duration: ${({ theme }) => theme.transitions.speed.xfast};
  transition-property: color;
  transition-timing-function: ${({ theme }) =>
    theme.transitions.easing.default};

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.colors.text.active};
  }
`;

export const CenterAlignTextWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  text-align: center;
`;

export const CenterAlignTextWithImageWrapper = styled(CenterAlignTextWrapper)`
  min-height: ${({ theme }) =>
    aspectRatioToHeight(theme.sizing.centerAlignText.xsRatio)};

  ${createMinWidthMediaQuery("small")} {
    min-height: ${({ theme }) =>
      aspectRatioToHeight(theme.sizing.centerAlignText.smRatio)};
  }

  ${createMinWidthMediaQuery("medium")} {
    min-height: ${({ theme }) =>
      aspectRatioToHeight(theme.sizing.centerAlignText.mdRatio)};
  }
`;

export const FillBg = styled(LazyLoadPicture)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${({ theme }) => theme.zIndexes.base};

  picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
`;

export const CenterAlignTextContent = styled.div`
  padding: ${({ theme }) => theme.spacing.four} 0;
  position: relative;
  z-index: ${({ theme }) => theme.zIndexes.foreground};
`;
