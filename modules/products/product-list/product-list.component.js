import React, { Component } from "react";
import PropTypes from "prop-types";
import { ProductListCard } from "./product-list-card";
import { ProductGridWrapper, ProductsWrapper } from "./product-list.style";

import { ProductProps } from "../product.types";
import { TwoUpGrid } from "../../../components/layout";
import { currency } from "../../../utils";

export class ProductListComponent extends Component {
  getItems() {
    if (this.props.products) {
      return this.props.products.map(
        ({
          title,
          description,
          price,
          link,
          imageSrc,
          hoverImageSrc,
          productImageSrc,
          id,
          disabled,
          requiresConsultation,
          status
        }) => {
          return (
            <ProductGridWrapper key={id}>
              <ProductListCard
                description={description}
                handleShopButtonClick={() =>
                  this.props.handleShopButtonClick(id)
                }
                images={imageSrc}
                price={currency(price)}
                productImages={productImageSrc}
                secondaryImages={hoverImageSrc}
                title={title}
                url={link}
                id={id}
                disabled={disabled}
                requiresConsultation={requiresConsultation}
                category={this.props.category}
                status={status}
              />
            </ProductGridWrapper>
          );
        }
      );
    }
  }

  render() {
    const items = this.getItems();

    return (
      <ProductsWrapper id="product-list">
        <TwoUpGrid items={items} />
      </ProductsWrapper>
    );
  }
}
ProductListComponent.propTypes = {
  category: PropTypes.string,
  handleShopButtonClick: PropTypes.func,
  products: PropTypes.arrayOf(PropTypes.shape(ProductProps))
};
