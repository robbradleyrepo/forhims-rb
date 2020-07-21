import React from "react";
import {
  HoverSpriteStyle,
  FullWidthLazyLoadPicture
} from "./hover-sprite.style";
import PropTypes from "prop-types";
import { breakpoints } from "../../theme/breakpoints";
import MediaQuery from "react-responsive";
import {
  createCloudinaryDesktopUrl,
  createCloudinaryMobileUrl
} from "../../utils/cloudinary";
import { withProps } from "recompose";

export const HoverSpriteWithoutCloudinary = ({
  duration,
  desktopImageSrc,
  mobileImageSrc,
  ratio,
  steps,
  vertical,
  title
}) => (
  <div>
    <MediaQuery maxWidth={breakpoints.medium}>
      {/** this is mobile only, so repeating mobileImgSrc where desktop images usually go in the images array is OK */}
      <FullWidthLazyLoadPicture
        title={title}
        images={[
          mobileImageSrc,
          mobileImageSrc,
          mobileImageSrc,
          mobileImageSrc
        ]}
      />
    </MediaQuery>
    <MediaQuery minWidth={breakpoints.medium + 1}>
      <HoverSpriteStyle
        aria-label={title}
        duration={duration}
        imageSrc={desktopImageSrc}
        ratio={ratio}
        role="img"
        steps={steps}
        vertical={vertical}
      />
    </MediaQuery>
  </div>
);

const withCloudinaryImageUrls = withProps(({ imageId }) => ({
  mobileImageSrc: createCloudinaryMobileUrl(imageId),
  desktopImageSrc: createCloudinaryDesktopUrl(imageId)
}));

export const HoverSprite = withCloudinaryImageUrls(
  HoverSpriteWithoutCloudinary
);

HoverSpriteWithoutCloudinary.propTypes = {
  desktopImageSrc: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  mobileImageSrc: PropTypes.string.isRequired,
  ratio: PropTypes.number.isRequired,
  steps: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  vertical: PropTypes.bool
};
