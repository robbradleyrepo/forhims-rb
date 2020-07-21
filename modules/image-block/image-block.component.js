import React from "react";
import PropTypes from "prop-types";
import { hasValue } from "../../utils";
import {
  ImageBlockWrapper,
  FullWidthPicture,
  HoverPicture
} from "./image-block.style";

export const ImageBlock = ({
  id,
  image,
  hoverImage,
  title,
  hoverImageTitle
}) => {
  const hasHoverImage = hasValue(hoverImage);
  return (
    <ImageBlockWrapper hasHoverImage={hasHoverImage}>
      {hasHoverImage && (
        <HoverPicture
          image={hoverImage}
          title={hoverImageTitle}
          id={`hover-${id}`}
        />
      )}
      <FullWidthPicture image={image} title={title} id={id} />
    </ImageBlockWrapper>
  );
};

ImageBlock.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string.isRequired,
  hoverImage: PropTypes.string,
  title: PropTypes.string,
  hoverImageTitle: PropTypes.string
};
