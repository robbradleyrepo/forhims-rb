import React from "react";
import PropTypes from "prop-types";
import { Grid } from "../../components/layout";
import { ImageAndTextWrapper, ImageAndTextP } from "./image-and-text.style";
import { Headline2 } from "../../components/fonts";
import { Block } from "../../components/block";
import { CloudinaryPicture } from "../../components/picture";
import { ButtonLink } from "../../components/button";

export const ImageAndText = ({
  image,
  imageAltText,
  heading,
  text,
  textTwo,
  ctaText,
  ctaUrl,
  ctaLabel
}) => (
  <ImageAndTextWrapper>
    <Grid item xsOffset={2} xs={8} smOffset={2} sm={8} mdOffset={2} md={6}>
      <CloudinaryPicture image={image} title={imageAltText} />
    </Grid>
    <Grid item xsOffset={1} xs={10} smOffset={1} sm={10} mdOffset={2} md={12}>
      <Block mt={4} flexDirection="column" display="flex">
        <Headline2>{heading}</Headline2>
        <ImageAndTextP>{text}</ImageAndTextP>
        <ImageAndTextP>{textTwo}</ImageAndTextP>
        <Block textAlign="left">
          <ButtonLink
            accessibilityLabel={ctaLabel}
            to={ctaUrl}
            label={ctaText}
            target="new"
          />
        </Block>
      </Block>
    </Grid>
  </ImageAndTextWrapper>
);

ImageAndText.propTypes = {
  image: PropTypes.string,
  imageAltText: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  textTwo: PropTypes.string,
  ctaLabel: PropTypes.string,
  ctaText: PropTypes.string,
  ctaUrl: PropTypes.node
};
