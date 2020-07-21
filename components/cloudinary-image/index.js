import { Image } from "cloudinary-react";
import React, { Component } from "react";
import R from "ramda";
import PropTypes from "prop-types";

export default class CloudinaryImage extends Component {
  render() {
    return (
      <Image
        cloudName="ForHims"
        publicId={R.pathOr(
          "Hers-pdp-hair-shampoo-howtouse01-m-2x",
          ["props", "publicID"],
          this
        )}
      />
    );
  }
}

Image.propTypes = {
  name: PropTypes.string
};
