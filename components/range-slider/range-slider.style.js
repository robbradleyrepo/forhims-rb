import styled from "styled-components";

const SLIDER_THUMB_WIDTH = 1.5;
const SLIDER_PATH_HEIGHT = 0.2;

export const RangeSliderWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

export const RangeInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const RangeBoundsWrapper = styled.div`
  height: 2rem;
  display: flex;
  position: relative;
`;

export const RangePathTrack = styled.div`
  width: calc(100% - ${SLIDER_THUMB_WIDTH}rem);
  margin-left: ${SLIDER_THUMB_WIDTH / 2}rem;
  height: ${SLIDER_PATH_HEIGHT}rem;
  background: ${({ theme }) => theme.colors.ui.divider};
  transform: translateY(-${SLIDER_THUMB_WIDTH - SLIDER_PATH_HEIGHT}rem);
`;

export const IconPathTrack = styled.div`
  width: calc(100% - ${SLIDER_THUMB_WIDTH}rem);
  margin-left: ${SLIDER_THUMB_WIDTH / 2}rem;
  height: 0;
  position: relative;
  z-index: 2;
  background: none;
  pointer-events: none;
`;

export const RangePathTrackInner = styled.div`
  height: ${SLIDER_PATH_HEIGHT}rem;
  width: ${({ width }) => `${width}%`};
  background: ${({ theme }) => theme.colors.button.primary};
`;

export const RangeSliderMin = styled.div`
  position: absolute;
  width: 2rem;
  text-align: center;
  left: -0.5rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const RangeSliderMax = styled.div`
  position: absolute;
  width: 30px;
  text-align: center;
  right: -0.5rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const RangeValue = styled.div`
  width: 2rem;
  text-align: center;
  margin-top: 2rem;
  position: absolute;
  left: ${({ left }) => `${left}%`};
  top: -4.7rem;
  transform: translateX(-1rem);
`;

const commonThumbStyles = theme => `
  height: ${SLIDER_THUMB_WIDTH}rem;
  width: ${SLIDER_THUMB_WIDTH}rem;
  border-radius: ${SLIDER_THUMB_WIDTH / 2}rem;
  background: white;
  cursor: pointer;
  border: none;
  box-shadow: 0 0 0.3125rem 0.125rem ${theme.colors.ui.shadow};
`;

const commonTrackStyles = `
  background: transparent;
`;

export const ThumbIcon = styled.span`
  position: absolute;
  left: ${({ left }) => `${left}%`};
  color: ${({ color }) => `${color}`};
  transform: translate(-7px, -28px);
`;

export const RangeInput = styled.input.attrs(() => ({
  type: "range"
}))`
  // Reset user-agent styles
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  position: relative;
  z-index: 1;

  &:focus {
    outline: none;
  }

  &::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  // Browser specific styling
  // NOTE: we're repeating code here because you can't comma-separate these type of selectors.
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -9px;
    ${({ theme }) => commonThumbStyles(theme)};
  }

  &::-moz-range-thumb {
    ${({ theme }) => commonThumbStyles(theme)};
  }

  &::-ms-thumb {
    ${({ theme }) => commonThumbStyles(theme)};
  }

  &::-webkit-slider-runnable-track {
    margin-top: 10px;
    ${commonTrackStyles};
  }

  &::-moz-range-track {
    ${commonTrackStyles};
  }

  &::-ms-track {
    ${commonTrackStyles};
  }
`;
