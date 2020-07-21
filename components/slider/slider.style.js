import styled, { css } from "styled-components";
import Scrollbar from "react-scrollbars-custom";

import { createMinWidthMediaQuery } from "../../utils/breakpoints";
import { combineRems } from "../../utils/rem";
import { colors } from "../../theme/colors";
import { CloudinaryPicture } from "../picture";
import { PictureWrapper } from "../picture/picture.style";

// TODO: Refactor slider and carousel themes under theme object
const sliderStyles = {
  dark: {
    default: colors.ui.highlight,
    activeBar: colors.canvas.primaryLight
  },
  light: {
    default: colors.ui.shadow,
    activeBar: colors.text.secondary
  }
};

// Allow component height to be set using CSS
// Always add space below for scrollbar
const SliderScrollBarSpacingStyles = css`
  box-sizing: content-box;
  padding-bottom: ${({ theme }) => theme.spacing.four};

  ${createMinWidthMediaQuery("small")} {
    padding-bottom: ${({ theme: { spacing } }) =>
      combineRems(spacing.three, spacing.four)};
  }
`;

export const ScrollSlider = styled(Scrollbar)`
  ${SliderScrollBarSpacingStyles};
  height: ${({ height }) => height};
  width: 100%;
  position: relative;
`;

// Custom renderer for library inner wrapper
export const SliderWrapper = styled.div`
  height: 100%;
`;

// Ensure that all slider children sit inline to be scrolled by parent
export const SliderContentWrapper = styled.div`
  display: inline-block;
  font-size: 0px;
  height: 100%;
  white-space: nowrap;
  overflow-y: hidden;
`;

// Wraps individual slides
export const SlideWrapper = styled.div`
  display: inline-block;
  height: 100%;
`;

// -- Slider Scrollbar Navigation --

// Slider library has a limitation that will only take one child as custom renderer
// Position and presentation styles are combined into one component
// Along with any style props provided by library
export const SliderScrollerTrack = styled.div`
  background-color: ${({ sliderTheme }) => sliderStyles[sliderTheme].default};
  bottom: 0;
  height: ${({ theme }) => theme.spacing.half};
  left: 0;
  position: absolute;
  right: ${({ theme }) => theme.grid.column};

  ${createMinWidthMediaQuery("medium")} {
    left: ${({ theme }) => theme.grid.getColumns(2)};
    right: ${({ theme }) => theme.grid.getColumns(4)};
  }
`;

// Create a padded hit box on outer container
// Branded scrubber styles are set on a pseudo element inside
export const SliderScrollerThumb = styled.div`
  background-color: transparent;
  cursor: pointer;
  height: ${({ theme }) => theme.spacing.four};
  margin-top: -${({ theme }) => theme.spacing.three};
  position: absolute;
  top: 50%;

  &::after {
    background-color: ${({ sliderTheme }) =>
      sliderStyles[sliderTheme].activeBar};
    content: "";
    display: block;
    height: ${({ theme }) => theme.spacing.one};
    margin-top: ${({ theme }) => theme.spacing.three};
    transform: translateY(-50%);
  }
`;

// -- Image Slider Styles --

export const ImageSlideWrapper = styled(SlideWrapper)`
  padding-right: ${({ hasBorder, theme }) => hasBorder && theme.spacing.three};

  ${createMinWidthMediaQuery("small")} {
    padding-right: ${({ hasBorder, theme }) => hasBorder && theme.spacing.four};
  }

  ${createMinWidthMediaQuery("medium")} {
    padding-right: ${({ hasBorder, theme }) => hasBorder && theme.spacing.five};
  }
`;

// Ensure that all images match height of Slider component
// Images will keep aspect ratio by unsetting any width restriction
export const SliderPicture = styled(CloudinaryPicture)`
  height: 100%;

  ${PictureWrapper} img {
    display: inline-block;
    height: 100%;
    max-width: none;
    width: auto;
  }
`;
