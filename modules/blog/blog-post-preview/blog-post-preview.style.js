import { Link as RouterLink } from "react-router";
import styled, { css } from "styled-components";

import { Headline4, P, ButtonLink } from "../../../components/fonts";

const BlogPostPreviewTransitionStyles = css`
  transition-duration: ${({ theme }) => theme.transitions.speed.fast};
  transition-property: all;
  transition-timing-function: ${({ theme }) => theme.transitions.easing.spring};
`;

/* ** Displays a secondary image on hover ** */

// Avoids repaints by adding box-shadow on an additional hidden layer
// And transitions shadow opacity in and out
// TODO: Get final box shadow styles from design, add to theme
export const BlogPostThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;

  &::after {
    content: "";
    ${BlogPostPreviewTransitionStyles};
    box-shadow: ${({ theme }) => theme.boxShadows.large};
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transform: translate3d(0, 0, 0);
    width: 100%;
  }
`;

// Avoid transitions or repaints on image container
export const BlogPostThumbnailContainer = styled.div`
  overflow: hidden;
  position: relative;

  img {
    display: block;
    height: auto;
    width: 100%;
  }
`;

export const HoverImage = styled.div`
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  transform: translate3d(0, 0, 0);
  transition-duration: ${({ theme }) => theme.transitions.speed.fast};
  transition-property: opacity;
  transition-timing-function: ${({ theme }) => theme.transitions.easing.enter};
  width: 100%;
`;

/* ** Orchestrate multiple element transitions on component hover ** */

export const BlogPostPreviewTitle = styled(Headline4)`
  ${BlogPostPreviewTransitionStyles};
`;
export const BlogPostPreviewDescription = styled(P)`
  ${BlogPostPreviewTransitionStyles};
  margin-bottom: 0;
`;
export const BlogPostPreviewCta = styled(ButtonLink)`
  ${BlogPostPreviewTransitionStyles};
`;

export const BlogPostPreviewLink = styled(RouterLink)`
  color: inherit;
  display: block;
  text-decoration: none;

  &:hover,
  &:focus {
    ${BlogPostPreviewTitle}, ${BlogPostPreviewDescription}, ${BlogPostPreviewCta} {
      color: ${({ theme }) => theme.colors.text.active};
    }
    ${BlogPostPreviewCta} {
      border-color: ${({ theme }) => theme.colors.text.active};
    }
    ${BlogPostThumbnailWrapper} {
      &::after {
        opacity: 1;
      }
    }
    ${HoverImage} {
      opacity: 1;
    }
  }
`;
