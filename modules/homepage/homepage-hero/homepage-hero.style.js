import styled from "styled-components";
import { Link } from "react-router";

import { combineRems } from "../../../utils/rem";
import { createMinWidthMediaQuery } from "../../../utils/breakpoints";
import { Grid } from "../../../components/layout";
import { CloudinaryPicture } from "../../../components/picture";
import { Headline4 } from "../../../components/fonts/h4";
import { Headline1 } from "../../../components/fonts/h1";

const FadeInContentContainer = styled.div`
  backface-visibility: hidden;
  opacity: ${({ isLoaded }) => (isLoaded ? "1" : "0")};
  transition-delay: ${({ theme }) => theme.transitions.speed.slow};
  transition-duration: ${({ theme }) => theme.transitions.speed.slow};
  transition-property: opacity;
  transition-timing-function: ${({ theme }) =>
    theme.transitions.easing.default};
  transform: translate3d(0, 0, 0);
  will-change: opacity;
`;

export const HeroGridContainer = styled(Grid)`
  background-color: ${props => props.theme.colors.canvas.primaryLight};
  width: 100%;
  position: relative;
  min-height: 120vw;
  align-items: flex-start;

  ${createMinWidthMediaQuery("medium")} {
    min-height: 90vw;
  }
`;

export const LeftPhotoGridItem = styled(Grid)`
  left: 0;
  position: absolute;
`;

export const RightPhotoGridItem = styled(Grid)`
  left: 0;
  margin-top: 20vw;
  position: absolute;
  top: 0;

  ${createMinWidthMediaQuery("medium")} {
    margin-top: 7vw;
    z-index: ${({ theme }) => theme.zIndexes.base};
  }

  img {
    box-shadow: ${({ isLoaded, theme }) => isLoaded && theme.boxShadows.large};
  }
`;

// TODO: Polyfill object-fit
export const FillPicture = styled(CloudinaryPicture)`
  width: 100%;
  img {
    display: block;
    width: 100%;
  }
`;

export const DescriptionGridItem = styled(Grid)`
  z-index: ${({ theme }) => theme.zIndexes.foreground};
  margin-top: 87vw;
  ${createMinWidthMediaQuery("small")} {
    margin-top: 80vw;
  }
  ${createMinWidthMediaQuery("medium")} {
    margin-top: 11vw;
  }
`;

export const ContentWrapper = styled(FadeInContentContainer)`
  background-color: ${({ theme }) => theme.colors.canvas.white};
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${({ theme: { spacing, grid } }) =>
    `10vw ${grid.column} ${spacing.four} ${grid.column}`};
  width: 100%;

  ${createMinWidthMediaQuery("medium")} {
    padding-top: 4vw;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing.four};
  a {
    margin: ${({ theme: { spacing } }) =>
      `0 ${spacing.two} ${spacing.three} ${spacing.two}`};
    width: 100%;
  }
  button {
    width: 100%;
  }
  ${createMinWidthMediaQuery("small")} {
    button {
      min-width: 9rem;
    }
    a {
      width: initial;
    }
  }
  ${createMinWidthMediaQuery("medium")} {
    a {
      width: 100%;
    }
  }
  ${createMinWidthMediaQuery("large")} {
    a {
      width: initial;
      margin: ${({ theme: { spacing } }) =>
        `0 ${combineRems(spacing.one, spacing.half)} ${
          spacing.two
        } ${combineRems(spacing.one, spacing.half)}`};
    }
  }
`;

export const TitleWrapper = styled(Headline1)`
  color: ${({ theme }) => theme.colors.brand.hair};
  margin-bottom: ${({ theme }) => theme.spacing.three};
`;

export const DescriptionText = styled(Headline4)`
  color: ${({ theme }) => theme.colors.brand.hair};
`;

export const DescriptionLink = styled(Link)`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.brand.hair};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  transition-duration: ${({ theme }) => theme.transitions.speed.xfast};
  transition-property: color;
  transition-timing-function: ${({ theme }) =>
    theme.transitions.easing.default};

  &:visited {
    color: inherit;
  }
  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.colors.brand.sex};
  }
`;

export const DescriptionWrapper = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing.three};
  ${createMinWidthMediaQuery("medium")} {
    margin-bottom: ${({ theme }) =>
      combineRems(theme.spacing.three, theme.spacing.two)}};
  }
`;
