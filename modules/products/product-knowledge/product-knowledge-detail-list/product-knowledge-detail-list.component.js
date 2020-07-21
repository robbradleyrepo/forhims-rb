import React from "react";
import PropTypes from "prop-types";

import { ProductDetailListWrapper } from "./product-knowledge-detail-list.style";

export const ProductKnowledgeDetailList = ({ productDetails }) => {
  return <ProductDetailListWrapper>{productDetails}</ProductDetailListWrapper>;
};

ProductKnowledgeDetailList.propTypes = {
  productDetails: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};
