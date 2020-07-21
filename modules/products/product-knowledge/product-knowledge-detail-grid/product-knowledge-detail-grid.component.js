import React from "react";
import PropTypes from "prop-types";

import { ProductDetailGridWrapper } from "./product-knowledge-detail-grid.style";

export const ProductKnowledgeDetailGrid = ({ productDetails }) => (
  <ProductDetailGridWrapper>{productDetails}</ProductDetailGridWrapper>
);

ProductKnowledgeDetailGrid.propTypes = {
  productDetails: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};
