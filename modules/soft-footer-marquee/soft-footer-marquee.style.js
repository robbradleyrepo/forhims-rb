import styled from "styled-components";

import { CloudinaryPicture } from "../../components/picture";
import { Headline1 } from "../../components/fonts";
import { createMinWidthMediaQuery } from "../../utils/breakpoints";

export const SoftFooterWrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.button.primary};
  display: flex;
  height: ${({ theme }) => theme.sizing.softFooterMarquee.xsRatio * 100}vw;
  overflow: hidden;
  position: relative;
  width: 100%;

  ${createMinWidthMediaQuery("small")} {
    height: ${({ theme }) => theme.sizing.softFooterMarquee.smRatio * 100}vw;
  }

  ${createMinWidthMediaQuery("medium")} {
    height: ${({ theme }) => theme.sizing.softFooterMarquee.mdRatio * 100}vw;
  }
`;

export const SoftFooterPicture = styled(CloudinaryPicture)`
  overflow: hidden;
  width: 100%;
  height: 100%;

  picture img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

// This speed constant is approximate based on a preview
const SEC_PER_CHAR = 0.45;
const charsToAnimationLength = chars => Math.round(chars * SEC_PER_CHAR);

const MarqueeBase = styled(Headline1)`
  position: absolute;
  white-space: pre;
  font-size: ${({ theme }) => theme.fontSizes.displayXLarge};
  color: ${({ theme }) => theme.colors.canvas.secondary};
  backface-visibility: hidden;
`;

/* animation delay is for safari https://stackoverflow.com/questions/9211261/css3-animation-not-working-in-safari#answer-40028240 */
export const Marquee = styled(MarqueeBase)`
  animation: marquee ${({ chars }) => charsToAnimationLength(chars)}s linear
    infinite;
  animation-delay: 0.1s;
  @keyframes marquee {
    0% {
      transform: ${({ viewportWidth }) =>
        `translate3d(calc(-100% + ${viewportWidth}px), 0, 0)`};
    }
    100% {
      transform: ${({ viewportWidth }) =>
        `translate3d(calc(-200% + ${viewportWidth}px), 0, 0)`};
    }
  }
`;

export const MarqueeContinuation = styled(Marquee)`
  animation: marqueeContinuation
    ${({ chars }) => charsToAnimationLength(chars)}s linear infinite;
  animation-delay: 0.1s;

  @keyframes marqueeContinuation {
    0% {
      transform: ${({ viewportWidth }) =>
        `translate3d(${viewportWidth}px, 0, 0)`};
    }
    100% {
      transform: ${({ viewportWidth }) =>
        `translate3d(calc(-100% + ${viewportWidth}px), 0, 0)`};
    }
  }
`;
