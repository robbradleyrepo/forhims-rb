import styled, { css } from "styled-components";

const PictureTransitionStyles = css`
  transition-property: opacity;
  will-change: opacity;
`;

export const PictureWrapper = styled.picture`
  img {
    height: auto;
    max-width: 100%;
  }
`;

const PicturePlaceholderSizingStyles = css`
  height: 0;
  padding-bottom: ${({ height, width }) => `${(height / width) * 100}%`};
`;

export const LazyLoadPictureWrapper = styled.span`
  display: block;
  position: relative;

  ${PictureWrapper} img {
    ${PictureTransitionStyles};
    display: block;
    opacity: ${({ isLoaded }) => (isLoaded ? "1" : "0")};
    transition-duration: ${({ theme }) => theme.transitions.speed.slow};
    transition-timing-function: ${({ theme }) =>
      theme.transitions.easing.enter};
  }

  ${({ isLoaded, height, width }) =>
    width && height && !isLoaded && PicturePlaceholderSizingStyles};
`;

export const PictureLoaderWrapper = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${({ theme }) => theme.zIndexes.foreground};
`;
