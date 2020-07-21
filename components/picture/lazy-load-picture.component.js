import React, { createRef } from "react";
import PropTypes from "prop-types";
import { propEq, propOr, pathOr } from "ramda";
import { withTheme } from "styled-components";
import Observer from "react-intersection-observer";
import { compose } from "recompose";

import { spacing } from "../../theme/spacing";
import { Loading } from "../loading";
import { isClient } from "../../utils";

import { Picture } from "./picture.component";
import { LazyLoadPictureWrapper, PictureLoaderWrapper } from "./picture.style";
import { findActiveQueryIndex } from "./picture.utils";
import { imageBreakpoints } from "./picture.constants";

// Polyfill intersection-observer for safari, IE
// TODO: Enable dynamic polyfilling in Webpack build
if (isClient()) {
  const IntersectionObserverPolyfill = require("intersection-observer"); // eslint-disable-line
}

export class LazyLoadPictureComponent extends React.Component {
  image = createRef();
  loader = null;

  constructor(props) {
    super(props);
    const { height, width, dimensions } = props;
    const activeQueryIndex = findActiveQueryIndex(imageBreakpoints);
    const placeholderW = pathOr(null, [activeQueryIndex, "width"], dimensions);
    const placeholderH = pathOr(null, [activeQueryIndex, "height"], dimensions);

    this.state = {
      error: null,
      hasError: false,
      isLoaded: false,
      isLoading: false,
      height: height || placeholderH,
      width: width || placeholderW
    };
  }

  componentDidMount() {
    if (this.props.loadImage) {
      this.initializeImageLoad();
    }
  }
  componentDidUpdate(prevProps) {
    const isInitialized =
      this.state.isLoaded || this.state.isLoading || this.state.hasError;
    if (this.props.loadImage && !isInitialized) {
      this.initializeImageLoad();
    }
  }
  componentWillUnmount() {
    if (this.loader) {
      this.loader.removeEventListener("load", this.handleImageLoaded, false);
      this.loader.removeEventListener("error", this.handleImageError, false);
    }
  }
  handleImageError = error => {
    this.setState({
      error,
      hasError: true,
      isLoading: false
    });
    if (this.props.handleError) {
      this.props.handleError(error);
    }
  };
  handleImageLoaded = () => {
    const displayImageDelay = propOr(0, "delay")(this.props);
    setTimeout(() => {
      this.setState({ isLoaded: true, isLoading: false }, () => {
        if (this.props.handleLoad) {
          this.props.handleLoad();
        }
      });
    }, displayImageDelay);
  };
  initializeImageLoad = () => {
    const lazyImage = this.image.current;
    if (lazyImage) {
      const isImageServerRendered = propEq("complete", true, lazyImage);
      if (isImageServerRendered) {
        this.handleImageLoaded();
      } else {
        this.lazyLoadCurrentImage();
      }
      this.setState({
        isLoading: true
      });
    }
  };
  lazyLoadCurrentImage = () => {
    const { images } = this.props;
    const activeQueryIndex = findActiveQueryIndex(imageBreakpoints);
    const imgSrc = images[activeQueryIndex] || images[0];

    const lazyLoader = new Image();
    lazyLoader.src = imgSrc;
    lazyLoader.addEventListener("load", this.handleImageLoaded, false);
    lazyLoader.addEventListener("error", this.handleImageError, false);
    this.loader = lazyLoader;
  };
  render() {
    const { className, theme, showLoader, forwardedRef } = this.props;
    const { isLoaded, isLoading, height, width } = this.state;
    const isLoaderVisible = showLoader && isLoading;
    return (
      <LazyLoadPictureWrapper
        isLoaded={isLoaded}
        className={className}
        width={width}
        height={height}
        ref={forwardedRef}
      >
        <Picture ref={this.image} {...this.props} />
        {isLoaderVisible && (
          <PictureLoaderWrapper>
            <Loading
              color={theme && theme.colors.text.secondary}
              size={spacing.three}
            />
          </PictureLoaderWrapper>
        )}
      </LazyLoadPictureWrapper>
    );
  }
}
LazyLoadPictureComponent.propTypes = {
  className: PropTypes.string,
  delay: PropTypes.number,
  handleLoad: PropTypes.func,
  height: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  showLoader: PropTypes.bool,
  loadImage: PropTypes.bool,
  title: PropTypes.string.isRequired,
  width: PropTypes.number
};

const withScrollListener = Component => ({
  loadImmediately = false,
  offset = "0px",
  threshold = 0,
  ...props
}) => {
  const ScrollAwareComponent = (
    <Observer rootMargin={offset} threshold={threshold} triggerOnce>
      {({ inView, ref }) => (
        <Component
          {...props}
          loadImage={loadImmediately || inView}
          forwardedRef={ref}
        />
      )}
    </Observer>
  );
  return ScrollAwareComponent;
};

export const LazyLoadPicture = compose(
  withTheme,
  withScrollListener
)(LazyLoadPictureComponent);

LazyLoadPicture.propTypes = {
  loadImmediately: PropTypes.bool,
  offset: PropTypes.string,
  threshold: PropTypes.number
};
