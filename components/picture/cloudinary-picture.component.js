import React from "react";
import PropTypes from "prop-types";

import {
  createCloudinaryMobileUrl,
  createCloudinaryDesktopUrl
} from "../../utils/cloudinary";

import { LazyLoadPicture } from "./lazy-load-picture.component";
import styled from "styled-components";

export const CloudinaryPicture = ({ image, className, ...props }) => {
  const mobileImage = createCloudinaryMobileUrl(image);
  const desktopImage = createCloudinaryDesktopUrl(image);
  return (
    <LazyLoadPicture
      className={className}
      images={[mobileImage, mobileImage, desktopImage, desktopImage]}
      {...props}
    />
  );
};

CloudinaryPicture.propTypes = {
  image: PropTypes.string
};

export const CloudinaryCover = styled(CloudinaryPicture)`
  height: 100%;
  width: 100%;
  display: flex;

  // TODO: auto polyfill in webpack the object-fit
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

CloudinaryCover.propTypes = CloudinaryPicture.propTypes;
