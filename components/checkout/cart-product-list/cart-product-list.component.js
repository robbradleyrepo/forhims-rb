import React from "react";
import PropTypes from "prop-types";

import {
  CartProductListWrapper,
  CartProductListItem
} from "./cart-product-list.style";
import { CartProduct } from "../cart-product";
import { CartProductProps } from "../cart/cart.types";
import { currency } from "../checkout.utils";

export const CartProductList = ({
  onDecreaseQuantity,
  onIncreaseQuantity,
  onRemoveProduct,
  products
}) => (
  <CartProductListWrapper>
    {products.map(
      ({
        description,
        id,
        image,
        price,
        quantity,
        requiresSubscription,
        title,
        productId,
        showImage,
        errorMessage
      }) => (
        <CartProductListItem key={`cart-product-${id}-wrapper`}>
          <CartProduct
            productId={productId}
            key={`cart-product-${id}`}
            description={description}
            isSubscription={requiresSubscription}
            onDecreaseQuantity={() => onDecreaseQuantity(id)}
            onIncreaseQuantity={() => onIncreaseQuantity(id)}
            onRemoveProduct={() => onRemoveProduct(id)}
            price={currency(price)}
            quantity={quantity}
            title={title}
            id={id}
            showImage={showImage}
            errorMessage={errorMessage}
          />
        </CartProductListItem>
      )
    )}
  </CartProductListWrapper>
);

CartProductList.propTypes = {
  onDecreaseQuantity: PropTypes.func,
  onIncreaseQuantity: PropTypes.func,
  onRemoveProduct: PropTypes.func,
  products: PropTypes.arrayOf(PropTypes.shape(CartProductProps)).isRequired
};

CartProductList.displayName = "CartProductList";
