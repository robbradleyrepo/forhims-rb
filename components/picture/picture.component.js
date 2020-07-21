import React from "react";
import PropTypes from "prop-types";
import { propOr } from "ramda";

import { hasValue, isNotNil } from "../../utils";

import { PictureWrapper } from "./picture.style";
import { imageBreakpoints } from "./picture.constants";

const getWidth = propOr(null, "width");
const getHeight = propOr(null, "height");

// Picture component accepts an array of 4 images
// For display at xs, sm, md, large breakpoints
// Smallest image is currently used as fallback
export const Picture = React.forwardRef(
  (
    { image, images, title, className, width, height, dimensions = [] },
    ref
  ) => {
    if (hasValue(images) && Array.isArray(images)) {
      const [xs, sm, md, lg] = images;
      const [
        xsDimensions,
        smDimensions,
        mdDimensions,
        lgDimensions
      ] = dimensions;
      const fallbackImage = isNotNil(image) ? image : xs;
      return (
        <PictureWrapper className={className}>
          <source
            key={`img-xs-${xs}`}
            media={imageBreakpoints.xs}
            srcSet={xs}
            width={getWidth(xsDimensions)}
            height={getHeight(xsDimensions)}
          />
          <source
            key={`img-sm-${sm}`}
            media={imageBreakpoints.sm}
            srcSet={sm}
            width={getWidth(smDimensions)}
            height={getHeight(smDimensions)}
          />
          <source
            key={`img-md-${md}`}
            media={imageBreakpoints.md}
            srcSet={md}
            width={getWidth(mdDimensions)}
            height={getHeight(mdDimensions)}
          />
          <source
            key={`img-lg-${lg}`}
            media={imageBreakpoints.lg}
            srcSet={lg}
            width={getWidth(lgDimensions)}
            height={getHeight(lgDimensions)}
          />
          <img
            ref={ref}
            src={fallbackImage}
            alt={title}
            width={width}
            height={height}
          />
        </PictureWrapper>
      );
    }
    return (
      <PictureWrapper className={className}>
        <img ref={ref} src={image} alt={title} width={width} height={height} />
      </PictureWrapper>
    );
  }
);
// Avoid name confusion when using ForwardRef
Picture.displayName = "Picture";

Picture.propTypes = {
  className: PropTypes.string,
  dimensions: PropTypes.arrayOf(
    PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number
    })
  ),
  image: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  handleLoad: PropTypes.func,
  title: PropTypes.string.isRequired
};
