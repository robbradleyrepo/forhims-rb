import React from "react";
import PropTypes from "prop-types";

import { CloseIcon } from "../../icons/close-icon";
import { PlusIcon } from "../../icons/plus-icon";
import { MinusIcon } from "../../icons/minus-icon";
import { RenewIcon } from "../../icons/renew-icon";
import { PRODUCT_IMAGES } from "../../product-image";
import { hasValue } from "../../../utils";
import { Block } from "../../../components/block";

import {
  CartProductAutoRenewContainer,
  CartProductContent,
  CartProductDescription,
  CartProductImage,
  CartProductImageContainer,
  CartProductPrice,
  CartProductQuantity,
  CartProductQuantityButton,
  CartProductRemoveButton,
  CartProductRemoveButtonContainer,
  CartProductTitle,
  CartProductWrapper,
  CartProductControls,
  CartProductAutoRenewBadge,
  CartProductError
} from "./cart-product.style";

export const CartProduct = ({
  description,
  isSubscription,
  onDecreaseQuantity,
  onIncreaseQuantity,
  onRemoveProduct,
  price,
  quantity,
  title,
  productId,
  id,
  showImage = true,
  errorMessage
}) => {
  const hasError = hasValue(errorMessage);
  return (
    <Block display="flex" flexDirection="column">
      <CartProductWrapper>
        {showImage && (
          <CartProductImageContainer>
            <CartProductImage
              id={productId || id}
              imageType={PRODUCT_IMAGES.CART}
              title={description}
            />
          </CartProductImageContainer>
        )}
        <CartProductContent>
          <Block mb={3}>
            <CartProductTitle hasError={hasError}>{title}</CartProductTitle>
            <CartProductDescription hasError={hasError}>
              {description}
            </CartProductDescription>
            <CartProductPrice hasError={hasError}>{price}</CartProductPrice>
          </Block>

          <CartProductControls>
            {isSubscription ? (
              <CartProductAutoRenewContainer>
                <CartProductAutoRenewBadge>
                  <RenewIcon height={24} />
                </CartProductAutoRenewBadge>
              </CartProductAutoRenewContainer>
            ) : hasValue(quantity) ? (
              <React.Fragment>
                <CartProductQuantityButton onClick={onDecreaseQuantity}>
                  <MinusIcon height={18} />
                </CartProductQuantityButton>
                <CartProductQuantity>{quantity}</CartProductQuantity>
                <CartProductQuantityButton onClick={onIncreaseQuantity}>
                  <PlusIcon height={18} />
                </CartProductQuantityButton>
              </React.Fragment>
            ) : null}
          </CartProductControls>
          <CartProductRemoveButtonContainer>
            <CartProductRemoveButton onClick={onRemoveProduct}>
              <CloseIcon height={18} />
            </CartProductRemoveButton>
          </CartProductRemoveButtonContainer>
        </CartProductContent>
      </CartProductWrapper>
      {hasError && <CartProductError>{`* ${errorMessage}`}</CartProductError>}
    </Block>
  );
};

CartProduct.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  isSubscription: PropTypes.bool,
  onDecreaseQuantity: PropTypes.func,
  onIncreaseQuantity: PropTypes.func,
  onRemoveProduct: PropTypes.func,
  price: PropTypes.string,
  quantity: PropTypes.number,
  title: PropTypes.string,
  id: PropTypes.string,
  productId: PropTypes.string,
  showImage: PropTypes.bool,
  errorMessage: PropTypes.string
};
