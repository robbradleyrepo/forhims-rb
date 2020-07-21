import styled, { css } from "styled-components";
import { rem } from "polished";

import { combineRems } from "../../utils/rem";
import { createMinWidthMediaQuery } from "../../utils/breakpoints";
import { Grid } from "../../components/layout/grid";
import { P } from "../../components/fonts/p";
import { Headline2 } from "../../components/fonts";
import { LazyLoadPicture } from "../../components/picture/lazy-load-picture.component";

const HERO_HEADER_SPACING = rem(64);

export const HERO_THEMES = {
  LIGHT: "light",
  DARK: "dark"
};

const FadeInContentContainerStyles = css`
  opacity: ${({ isLoaded }) => (isLoaded ? "1" : "0")};
  transform: ${({ isLoaded }) =>
    isLoaded ? "none" : "translate3d(0, 1rem, 0)"};
  transition-delay: ${({ theme }) => theme.transitions.speed.default};
  transition-duration: ${({ theme }) => theme.transitions.speed.default};
  transition-property: opacity, transform;
  transition-timing-function: ${({ theme }) =>
    theme.transitions.easing.default};
  will-change: opacity, transform;
`;

export const PlpHeroGridContainer = styled(Grid)`
  background-color: ${({ bgTheme, theme }) =>
    bgTheme === HERO_THEMES.DARK
      ? theme.colors.button.primary
      : theme.colors.canvas.primary};
  height: 140vw;
  position: relative;

  ${createMinWidthMediaQuery("small")} {
    height: 77vw;
  }
  ${createMinWidthMediaQuery("medium")} {
    height: 39vw;
    text-align: left;
  }
`;

export const PlpHeroBg = styled(LazyLoadPicture)`
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

export const ContentContainerGridItem = styled(Grid)`
  ${FadeInContentContainerStyles};
  flex-direction: column;
  height: calc(100% - ${HERO_HEADER_SPACING});
  justify-content: center;
  margin-top: ${HERO_HEADER_SPACING};
  text-align: center;
  z-index: ${({ theme }) => theme.zIndexes.foreground};

  ${createMinWidthMediaQuery("medium")} {
    align-items: flex-start;
    text-align: left;
  }
`;

export const HeadingWrapper = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing.four};
`;

export const DescriptionWrapper = styled.div`
  padding-bottom: ${({ theme: { spacing } }) =>
    combineRems(spacing.three, spacing.two)};

  ${P} {
    color: ${({ theme }) => theme.colors.text.onPrimary};
    font-size: ${({ theme }) => theme.fontSizes.headingSmall};
    line-height: 1.75;
  }
`;

export const Heading = styled(Headline2)`
  color: ${({ theme }) => theme.colors.text.onPrimary};
`;
