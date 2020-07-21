import React from "react";
import PropTypes from "prop-types";
import { rem } from "polished";

import {
  ScrollSlider,
  SlideWrapper,
  SliderContentWrapper,
  SliderScrollerTrack,
  SliderScrollerThumb,
  SliderWrapper
} from "./slider.style";

export class Slider extends React.Component {
  componentDidUpdate() {
    this.forceResizeEvent();
  }
  // Trigger a browser resize event
  // Forcing the Slider library to recalculate sizing
  forceResizeEvent() {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 0);
  }

  render() {
    const { slides, className, height, sliderTheme } = this.props;
    return (
      <ScrollSlider
        className={className}
        defaultStyles={false}
        height={height}
        renderTrackHorizontal={props => (
          <SliderScrollerTrack sliderTheme={sliderTheme} {...props} />
        )}
        renderThumbHorizontal={props => (
          <SliderScrollerThumb sliderTheme={sliderTheme} {...props} />
        )}
        renderWrapper={props => <SliderWrapper {...props} />}
        noScrollY
      >
        <SliderContentWrapper>
          {slides.map((slide, i) => (
            <SlideWrapper key={`slider-slide-${i}`}>{slide}</SlideWrapper>
          ))}
        </SliderContentWrapper>
      </ScrollSlider>
    );
  }
}
Slider.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  slides: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.element)
  ]),
  sliderTheme: PropTypes.oneOf(["dark", "light"])
};
Slider.defaultProps = {
  height: rem(320),
  sliderTheme: "dark"
};
