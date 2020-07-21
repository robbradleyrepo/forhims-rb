import { breakpoints } from "../../theme/breakpoints";
import { Headline3 } from "../../components/fonts";
import { PropTypes } from "prop-types";
import MediaQuery from "react-responsive";
import React from "react";
import {
  ImageTornadoBackground,
  TextContent,
  TornadoButton,
  FullWidthImage
} from "./image-tornado.style";
import {
  createCloudinaryMobileUrl,
  createCloudinaryDesktopUrl
} from "../../utils/cloudinary";

import { withProps, compose } from "recompose";
import { BUTTON_VARIANTS } from "../../theme/buttons";
import ReactMarkdown from "react-markdown";

export const ImageTornadoWithoutCdnSupport = ({
  buttonLabel,
  buttonUrl,
  description,
  images = []
}) => {
  return (
    <div>
      <MediaQuery maxWidth={breakpoints.medium}>
        <FullWidthImage images={images} title={description} />
        <Content
          description={description}
          buttonUrl={buttonUrl}
          buttonLabel={buttonLabel}
        />
      </MediaQuery>

      <MediaQuery minWidth={breakpoints.medium + 1}>
        <ImageTornadoBackground bgImages={images}>
          <Content
            description={description}
            buttonUrl={buttonUrl}
            buttonLabel={buttonLabel}
          />
        </ImageTornadoBackground>
      </MediaQuery>
    </div>
  );
};

ImageTornadoWithoutCdnSupport.propTypes = {
  buttonLabel: PropTypes.string,
  description: PropTypes.string,
  buttonUrl: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string)
};

export const ImageTornado = compose(
  withProps(
    ({ images }) =>
      typeof images === "string"
        ? {
            images: [
              createCloudinaryMobileUrl(images),
              createCloudinaryMobileUrl(images),
              createCloudinaryDesktopUrl(images),
              createCloudinaryDesktopUrl(images)
            ]
          }
        : {}
  )
)(ImageTornadoWithoutCdnSupport);

const Content = ({ description, buttonUrl, buttonLabel }) => (
  <TextContent>
    <Headline3>
      <ReactMarkdown source={description} />
    </Headline3>
    <TornadoButton
      to={buttonUrl}
      label={buttonLabel}
      variant={BUTTON_VARIANTS.SECONDARY}
    />
  </TextContent>
);

Content.propTypes = {
  description: PropTypes.string,
  buttonUrl: PropTypes.string,
  buttonLabel: PropTypes.string
};
