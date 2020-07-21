import styled from "styled-components";
import { divide } from "ramda";
import { CloudinaryPicture } from "../picture";

import { combineRems } from "../../utils/rem";
import { colors } from "../../theme/colors";

const slideCountToPercentage = divide(100);

const carouselStyles = {
  dark: {
    default: colors.ui.highlight,
    activeBar: colors.canvas.primaryLight
  },
  light: {
    default: colors.ui.shadow,
    activeBar: colors.text.secondary
  }
};

// TODO: Decouple this logic from direct carousel component
export const CarouselPicture = styled(CloudinaryPicture)`
  overflow: hidden;
  width: 100%;

  img {
    max-height: 70vh;
    object-fit: cover;
    object-position: center top;
    width: 100%;
  }
`;

export const BottomControlWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  height: ${({ theme }) => theme.spacing.three};
  top: ${({ theme: { spacing } }) => combineRems(spacing.four, spacing.two)};
`;

export const SliderBar = styled.div`
  height: 100%;
  width: 80%;
  position: relative;
  display: flex;
`;

export const SliderBarSection = styled.div`
  height: 100%;
  width: ${({ slideCount }) => slideCountToPercentage(slideCount)}%;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SliderBarSectionLine = styled.div`
  height: ${({ theme }) => theme.spacing.half};
  width: 100%;
  background-color: ${({ carouselTheme }) =>
    carouselStyles[carouselTheme].default};
`;

export const ActiveSlideMarker = styled.div`
  position: absolute;
  height: ${({ theme }) => theme.spacing.one};
  background-color: ${({ carouselTheme }) =>
    carouselStyles[carouselTheme].activeBar};
  top: 50%;
  transform: translateY(-50%);
  left: ${({ slideCount, currentSlide }) =>
    currentSlide * slideCountToPercentage(slideCount)}%;
  width: ${({ slideCount }) => slideCountToPercentage(slideCount)}%;
  transition-duration: ${({ theme }) => theme.transitions.speed.default};
  transition-property: left;
  transition-timing-function: ${({ theme }) =>
    theme.transitions.easing.default};
`;

export const DotsBar = styled.div`
  height: 100%;
  width: 80%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DotMarker = styled.div`
  margin: auto;

  width: ${({ theme }) => theme.spacing.two};
  height: ${({ theme }) => theme.spacing.two};
  border-radius: ${({ theme }) => theme.spacing.one};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.text.primary : theme.colors.ui.shadow};

  transition: background-color ${({ theme }) => theme.transitions.speed.default};
  transition-timing-function: ${({ theme }) =>
    theme.transitions.easing.default};
`;

export const DotMarkerWrapper = styled.div`
  flex-shrink: 0;

  margin: 0 ${({ theme }) => theme.spacing.two};

  width: ${({ theme }) => theme.spacing.three};
  height: ${({ theme }) => theme.spacing.three};

  :hover {
    cursor: pointer;
    ${DotMarker} {
      background-color: ${({ theme }) => theme.colors.text.primary};
    }
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing.four};

  .slider-control-bottomcenter {
    width: 100%;
  }
`;
