import React from "react";
import PropTypes from "prop-types";
import { propOr } from "ramda";

import { BaseballCard } from "../../../components/baseball-card";
import { Block } from "../../../components/block";
import { ProductProps } from "../product.types";
import { Headline } from "../../headline";
import {
  ProductBaseballCardGrid,
  ProductBaseballCardWrapper
} from "./product-baseball-cards.style";

const getCategoryFromTags = tags => propOr(null, 0, tags);

export const ProductBaseballCardsComponent = ({
  eyebrow,
  handleAddToCartClick = () => {},
  products,
  title,
  subtitle
}) => (
  <Block pb={5} bg="canvas.primaryLight">
    {title && (
      <Block py={5}>
        <Headline
          eyebrowText={eyebrow}
          headlineText={title}
          subHeadlineText={subtitle}
        />
      </Block>
    )}
    <ProductBaseballCardGrid numProducts={products.length}>
      {products.map(
        ({
          title,
          description,
          url,
          id,
          price,
          buttonLabel,
          disabled,
          tags,
          productDetail,
          purchaseDetail
        }) => {
          const handleProductClick = handleAddToCartClick(id);
          return (
            <ProductBaseballCardWrapper key={id}>
              <BaseballCard
                {...{
                  description,
                  disabled,
                  buttonLabel,
                  id,
                  price,
                  title,
                  url,
                  productDetail,
                  purchaseDetail
                }}
                category={getCategoryFromTags(tags)}
                onButtonClick={handleProductClick}
              />
            </ProductBaseballCardWrapper>
          );
        }
      )}
    </ProductBaseballCardGrid>
  </Block>
);

ProductBaseballCardsComponent.propTypes = {
  eyebrow: PropTypes.string,
  handleAddToCartClick: PropTypes.func,
  products: PropTypes.arrayOf(PropTypes.shape(ProductProps)).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};
