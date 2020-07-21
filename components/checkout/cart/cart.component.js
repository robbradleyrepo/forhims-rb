import React from "react";
import PropTypes from "prop-types";
import { pipe } from "ramda";

import { Block } from "../../block";
import { BodySmall } from "../../fonts/body-small";
import { Button } from "../../button";
import { CartEmpty } from "./cart-empty";
import { CartPromo } from "./cart-promo";
import { CartLineItemList } from "../cart-line-item-list";
import { CartLineItemProps, CartProductProps } from "./cart.types";
import { CartProductList } from "../cart-product-list";
import { CheckoutFooter, CouponAppliedText } from "../checkout.style";
import { combineRems } from "../../../utils/rem";
import { hasValue } from "../../../utils";
import { reduxForm } from "redux-form";
import { spacing } from "../../../theme/spacing";
import { CHECKOUT_STEP_NAMES } from "../../../domains/checkout-flow/checkout-flow.constants";
import { CART_PROMO_FORM } from "./cart-promo/cart-promo.constants";

const CartPromoForm = reduxForm({
  form: CART_PROMO_FORM
})(CartPromo);

function getCartPromoForm(order, handleCalculateCartTotal) {
  if (!order || !order.coupon) {
    return (
      <CartPromoForm handleCalculateCartTotal={handleCalculateCartTotal} />
    );
  }

  return <CouponAppliedText>Coupon Applied Successfuly</CouponAppliedText>;
}

const shouldProductNotBlockRender = products =>
  !products ||
  !Array.isArray(products) ||
  (products.length < 1 && !products[0].prescriptions) ||
  !Array.isArray(products[0].prescriptions);

const selectFirstProduct = products => products[0];

const getProductBlockText = ({ title }) =>
  `${title} is a possible treatment for you. You will have a chance to review your order before checkout.`;

const buildProductBlockText = pipe(
  selectFirstProduct,
  getProductBlockText
);

const getProductBlock = products =>
  shouldProductNotBlockRender(products) ? null : (
    <Block maxWidth="80rem" mb={combineRems(spacing.two, spacing.four)}>
      {buildProductBlockText(products)}
    </Block>
  );

export const Cart = ({
  handleCalculateCartTotal,
  handleEmptyCartCtaClick,
  handleGoToStep,
  lineItems,
  currentOrder,
  products,
  removeProduct,
  hasError
}) =>
  hasValue(products) ? (
    <Block
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxWidth="50rem"
      mx="auto"
    >
      {getProductBlock(products)}
      <Block mb={combineRems(spacing.two, spacing.four)}>
        <CartProductList products={products} onRemoveProduct={removeProduct} />
      </Block>
      <Block width="100%" mb={4}>
        <CartLineItemList items={lineItems} />
      </Block>
      <Block mb={4}>
        {getCartPromoForm(currentOrder, handleCalculateCartTotal)}
      </Block>
      <Block mb={combineRems(spacing.two, spacing.four)}>
        <BodySmall>
          Your consultation will be reviewed by&nbsp;
          <a
            href="https://www.cqc.org.uk/location/1-6322360454"
            rel="noopener noreferrer"
            target="_blank"
          >
            Stadn Ltd
          </a>.
        </BodySmall>
      </Block>
      <CheckoutFooter>
        <Button
          label={hasError ? "CANNOT PROCEED" : "NEXT"}
          fullWidth
          onClick={() => {
            handleGoToStep(CHECKOUT_STEP_NAMES.DATE_OF_BIRTH);
          }}
          testId="CheckoutCartNextButton"
          disabled={hasError}
        />
      </CheckoutFooter>
    </Block>
  ) : (
    <CartEmpty onCtaClick={handleEmptyCartCtaClick} />
  );

Cart.propTypes = {
  coupon: PropTypes.string,
  decreaseQuantity: PropTypes.func,
  currentOrder: PropTypes.object,
  handleGoToStep: PropTypes.func.isRequired,
  handleCalculateCartTotal: PropTypes.func.isRequired,
  handleEmptyCartCtaClick: PropTypes.func,
  handleNextStep: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func,
  lineItems: PropTypes.arrayOf(PropTypes.shape(CartLineItemProps)),
  products: PropTypes.arrayOf(PropTypes.shape(CartProductProps)),
  removeProduct: PropTypes.func,
  hasError: PropTypes.bool
};
