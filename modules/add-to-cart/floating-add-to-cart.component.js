import React from "react";
import { PropTypes } from "prop-types";

import {
  AddToCartFixedContainer,
  AddToCartGlobalStyles
} from "./add-to-cart.style";
import { AddToCartButton } from "./add-to-cart-button.container";

export const FloatingAddToCart = ({
  label,
  productId,
  variant,
  showForm = false
}) => (
  <div>
    {!showForm && (
      <AddToCartFixedContainer>
        <AddToCartButton
          label={label}
          productId={productId}
          testId="AddToCartButtonMobile"
          variant={variant}
          showForm={showForm}
        />
        <AddToCartGlobalStyles />
      </AddToCartFixedContainer>
    )}
  </div>
);
FloatingAddToCart.propTypes = {
  label: PropTypes.string,
  productId: PropTypes.string,
  variant: PropTypes.string,
  showForm: PropTypes.bool
};
