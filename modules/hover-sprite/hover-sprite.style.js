import styled, { css, keyframes } from "styled-components";
import PropTypes from "prop-types";
import { LazyLoadPicture } from "../../components/picture/lazy-load-picture.component";

/**
 * HoverSprite takes in an image sprite and creates a responsive animation
 * sequence.
 *
 * **Note:** To work around an issue where the last frame doesn't play, the
 * sprites must contain an extra frame on the end. This frame will not be shown
 * and can be left blank.
 *
 * The `ratio` is the part that makes the component responsive. Since we know
 * the width of the component based on its container, we can generate the height
 * of the component using this ratio of (height/width) of a single frame.
 *
 * This code was inspired by: https://codepen.io/SitePoint/pen/zxXrzP
 */

const spriteHorizontal = keyframes` 
  from { background-position: 0 0%; }
  to { background-position: 100% 0; }
`;
const spriteVertical = keyframes` 
  from { background-position: 0 0%; }
  to { background-position: 0 100%; }
`;

export const HoverSpriteStyle = styled.div`
  ${({ ratio, duration, steps, imageSrc, vertical = false }) => css`
    animation-duration: ${duration}s;
    animation-iteration-count: infinite;
    animation-name: ${vertical ? spriteVertical : spriteHorizontal};
    animation-play-state: paused;
    animation-timing-function: steps(${steps});
    background-image: url(${imageSrc});
    background-position: 0 0%;
    background-repeat: no-repeat;
    background-size: cover;
    height: ${ratio * 100}vw;
    width: 100%;

    &:hover {
      animation-play-state: running;
    }
  `};
`;

export const FullWidthLazyLoadPicture = styled(LazyLoadPicture)`
  img {
    display: block;
    width: 100%;
  }
`;

HoverSpriteStyle.displayName = "HoverSprite";

HoverSpriteStyle.propTypes = {
  // The total number of seconds for the duration of the animation. Each frame
  // will be shown for (steps/duration) seconds.
  duration: PropTypes.number.isRequired,
  // The link to the image sprite (with empty frame on the end).
  imageSrc: PropTypes.string.isRequired,
  // The ratio is the (height/width) of a single frame of the sprite.
  ratio: PropTypes.number.isRequired,
  // The number of steps in the animation sequence. This does not count the
  // first step (ie. number of non-blank frames in the sequence).
  steps: PropTypes.number.isRequired,
  // Optional flag to animate a vertical image (going from top to bottom)
  // instead of left to right. (_untested_)
  vertical: PropTypes.bool
};
