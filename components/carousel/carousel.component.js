import React from "react";
import PropTypes from "prop-types";
import NukaCarousel from "nuka-carousel";
import { range } from "ramda";

import { speed } from "../../theme/motion";
import {
  CarouselPicture,
  SliderBar,
  ActiveSlideMarker,
  CarouselWrapper,
  BottomControlWrapper,
  SliderBarSection,
  SliderBarSectionLine,
  DotMarker,
  DotsBar,
  DotMarkerWrapper
} from "./carousel.style";

export class Carousel extends React.Component {
  componentDidUpdate() {
    this.forceResizeEvent();
  }
  // Trigger a browser resize event
  // Forcing the Carousel library to recalculate sizing
  // Ensures that the carousel always uses the current height of first image
  forceResizeEvent() {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 0);
  }
  handleImageLoad = () => {
    this.forceResizeEvent();
  };
  renderBottomSliderControl = ({ currentSlide, slideCount, goToSlide }) => {
    const { carouselTheme = "dark" } = this.props;
    return (
      <BottomControlWrapper>
        <SliderBar>
          {range(0, slideCount).map(slideNumber => (
            <SliderBarSection
              key={`slider-bar-section-${slideNumber}`}
              onClick={() => goToSlide(slideNumber)}
              slideCount={slideCount}
            >
              <SliderBarSectionLine carouselTheme={carouselTheme} />
            </SliderBarSection>
          ))}
          <ActiveSlideMarker
            currentSlide={currentSlide}
            slideCount={slideCount}
            carouselTheme={carouselTheme}
          />
        </SliderBar>
      </BottomControlWrapper>
    );
  };
  renderBottomDotsControl = ({ currentSlide, slideCount, goToSlide }) => {
    return (
      <BottomControlWrapper>
        <DotsBar>
          {range(0, slideCount).map(slideNumber => (
            <DotMarkerWrapper
              onClick={() => goToSlide(slideNumber)}
              key={`slider-bar-section-${slideNumber}`}
            >
              <DotMarker isActive={slideNumber === currentSlide} />
            </DotMarkerWrapper>
          ))}
        </DotsBar>
      </BottomControlWrapper>
    );
  };
  render() {
    const {
      slides,
      fullWidthSlides,
      customSlides = false,
      className,
      carouselControls
    } = this.props;

    const bottomCenterShouldRenderDots = carouselControls === "dots";

    return (
      <CarouselWrapper className={className}>
        <NukaCarousel
          ref={this.carousel}
          speed={speed.default}
          easing="easeCubicInOut"
          slideWidth={fullWidthSlides ? 1 : 0.8}
          cellSpacing={60}
          renderBottomCenterControls={
            bottomCenterShouldRenderDots
              ? this.renderBottomDotsControl
              : this.renderBottomSliderControl
          }
          renderCenterLeftControls={() => null}
          renderCenterRightControls={() => null}
          swiping
          heightMode={customSlides ? "max" : "first"}
        >
          {slides.map(
            (slide, i) =>
              customSlides ? (
                slide
              ) : (
                <CarouselPicture
                  key={`carousel-${i}-${slide}`}
                  image={slide}
                  title=""
                  handleLoad={this.handleImageLoad}
                  loadImmediately
                />
              )
          )}
        </NukaCarousel>
      </CarouselWrapper>
    );
  }
}

Carousel.defaultProps = {
  carouselControls: "slider"
};

Carousel.propTypes = {
  className: PropTypes.string,
  customSlides: PropTypes.bool,
  fullWidthSlides: PropTypes.bool,
  slides: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.element)
  ]),
  carouselTheme: PropTypes.oneOf(["dark", "light"]),
  carouselControls: PropTypes.oneOf(["slider", "dots"])
};
