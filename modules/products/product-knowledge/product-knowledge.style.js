import styled from "styled-components";

import { Grid } from "../../../components/layout";
import { CloudinaryPicture } from "../../../components/picture";
import { createMinWidthMediaQuery } from "../../../utils/breakpoints";

import { combineRems } from "../../../utils/rem";

export const FadeInContentContainer = styled.div`
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  position: relative;
  transform: ${({ isVisible, theme: { spacing } }) =>
    isVisible ? "none" : `translate3d(0, ${spacing.three}, 0)`};
  transition-delay: ${({ theme }) => theme.transitions.speed.default};
  transition-duration: ${({ theme }) => theme.transitions.speed.slow};
  transition-property: opacity, transform;
  transition-timing-function: ${({ theme }) => theme.transitions.easing.spring};
  will-change: opacity, transform;
  z-index: ${({ theme }) => theme.zIndexes.foreground};
`;

// TODO: Replace spacing with module wrapper component
export const ProductKnowledgeGridContainer = styled(Grid)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
  display: flex;
  padding-bottom: ${({ theme: { spacing } }) =>
    combineRems(spacing.four, spacing.five)};
  padding-top: ${({ theme: { spacing } }) => spacing.five};
  & + & {
    padding-top: ${({ theme: { spacing } }) => spacing.two};
  }
  ${createMinWidthMediaQuery("small")} {
    padding-top: ${({ theme: { spacing } }) =>
      combineRems(spacing.four, spacing.five)};
    & + & {
      padding-top: ${({ theme: { spacing } }) => spacing.four};
    }
  }
  ${createMinWidthMediaQuery("medium")} {
    padding-top: ${({ theme: { spacing } }) =>
      combineRems(spacing.four, spacing.five)};
    & + & {
      padding-top: ${({ theme: { spacing } }) => spacing.four};
    }
  }
`;

export const PhotoContainerGridItem = styled(Grid)`
  position: relative;
  padding-bottom: ${({ theme }) =>
    combineRems(theme.spacing.two, theme.spacing.four)};

  ${createMinWidthMediaQuery("medium")} {
    padding-bottom: 0;
  }
`;

export const CenteredPicture = styled(CloudinaryPicture)`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.sizing.productKnowledge.maxWidth};
  background-color: ${({ theme, colorBlock }) =>
    colorBlock ? theme.colors.canvas.brand : "transparent"};
  text-align: center;
  width: 100%;
  img {
    min-height: 100%;
  }
`;
