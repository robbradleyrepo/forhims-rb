import React from "react";
import PropTypes from "prop-types";

import { FillPicture, FullScreenImageWrapper } from "./full-screen-image.style";

// TODO: Introduce intermediary step and remove reliance on CloudinaryComponent
export const FullScreenImage = ({ id, images, title }) => (
  <FullScreenImageWrapper>
    <FillPicture image={images} title={title} />
  </FullScreenImageWrapper>
);

FullScreenImage.propTypes = {
  id: PropTypes.string,
  images: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  title: PropTypes.string
};
