import React, { Component } from "react";
import R from "ramda";
import PropTypes from "prop-types";

import { CloudinaryPicture } from "../picture";
import { productDetailAssociations } from "../../content/content.constants";

import {
  PRODUCT_IMAGES,
  DEFAULT_PRODUCT_IMAGES
} from "./product-image.constants";
export class ProductImage extends Component {
  getImage(id, imageType = PRODUCT_IMAGES.CROSS_SELL) {
    let productDetails = R.defaultTo(
      DEFAULT_PRODUCT_IMAGES,
      productDetailAssociations[id]
    );
    return productDetails[imageType];
  }
  render() {
    const { id, imageType, title, className, ...imageProps } = this.props;
    return (
      <CloudinaryPicture
        title={title}
        image={this.getImage(id, imageType)}
        className={className}
        {...imageProps}
      />
    );
  }
}

ProductImage.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  imageType: PropTypes.oneOf(R.values(PRODUCT_IMAGES)),
  title: PropTypes.string
};
