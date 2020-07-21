import React from "react";
import PropTypes from "prop-types";
import { __, length, equals, subtract, pipe } from "ramda";

import { SliderPicture, ImageSlideWrapper } from "./slider.style";
import { Slider } from "./slider.component";
import { hasValue } from "../../utils";

const isLastSlide = (index, slides) =>
  hasValue(slides) &&
  pipe(
    length,
    subtract(__, 1),
    equals(index)
  )(slides);

const wrapImageSlides = (slides = []) =>
  slides.map((slide, index) => (
    <ImageSlideWrapper
      key={`image-slider-${index}`}
      hasBorder={!isLastSlide(index, slides)}
    >
      <SliderPicture image={slide} title="" />
    </ImageSlideWrapper>
  ));

export const ImageSlider = ({ slides, ...props }) => (
  <Slider {...props} slides={wrapImageSlides(slides)} />
);

ImageSlider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.node)
};
