"use strict";

import R from "ramda";

import { PRODUCT_ID_BY_NAME } from "../config/product-ids-by-name";

const PRODUCTS = [
  {
    id: PRODUCT_ID_BY_NAME.finasteride,
    blurb:
      "Finasteride treats male pattern baldness, at the crown and the middle of the scalp.",
    url: "/finasteride",
    cartThumbnail:
      "images/product-thumbs/Hims_ProductThumbs_Cart_Finasteride.png",
    imageSrc:
      "images/product-thumbs/Hims_ProductThumbs_ExitRamp_Finasteride.png",
    hoverSrc:
      "images/product-thumbs/Hims_ProductThumb_ExitRamp_Finasteride_Hover.jpg",
    cartPayload: {
      quantity: 1,
      subscription: 1
    }
  },
  {
    id: "1DaGLrGX",
    blurb:
      "These are vitamins for thicker hair, stronger nails, better skin and the key nutrients that are good for you.",
    url: "/hair-loss/vitamins",
    cartThumbnail: "images/product-thumbs/Hims_ProductThumbs_Cart_Gummies.png",
    imageSrc: "images/product-thumbs/Hims_ProductThumbs_ExitRamp_Gummies.png",
    hoverSrc:
      "images/product-thumbs/Hims_ProductThumb_ExitRamp_Gummies_Hover.jpg",
    cartPayload: {
      quantity: 1,
      subscription: 0
    }
  }
];

module.exports = R.map(x => {
  return R.merge(
    x,
    R.assoc("cartPayload", R.merge(x.cartPayload, { productId: x.id }), x)
  );
}, PRODUCTS);
