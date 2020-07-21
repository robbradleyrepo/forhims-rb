import React from "react";
import PropTypes from "prop-types";

import {
  ProductDetailWrapper,
  ProductDetailIconWrapper,
  ProductDetailBulletText,
  ProductDetailLabelWrapper
} from "./product-knowledge-detail.style";
import { ThemeIcon } from "../../../../components/icons/utils/theme-icon";
import { Block } from "../../../../components/block";

export const ProductKnowledgeDetail = ({ icon, label, bulletText }) => (
  <ProductDetailWrapper>
    {icon && (
      <ProductDetailIconWrapper>
        <ThemeIcon icon={icon} height={28} />
      </ProductDetailIconWrapper>
    )}

    {bulletText && (
      <ProductDetailBulletText>{bulletText}</ProductDetailBulletText>
    )}
    <Block pl={3} minWidth="50%">
      <ProductDetailLabelWrapper>{label}</ProductDetailLabelWrapper>
    </Block>
  </ProductDetailWrapper>
);

ProductKnowledgeDetail.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string,
  bulletText: PropTypes.string
};
