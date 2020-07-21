import React from "react";
import PropTypes from "prop-types";

import { CartLineItemList } from "../cart-line-item-list";
import { CartProductList } from "../cart-product-list";
import { CartLineItemProps, CartProductProps } from "../cart/cart.types";
import { CheckoutFooter } from "../checkout.style";
import { Button } from "../../button";
import { Block } from "../../block";
import { spacing } from "../../../theme/spacing";
import { combineRems } from "../../../utils/rem";
import { Heading, Info, Divider, EditButton } from "./review-order.style";
import { BodySmall } from "../../fonts/body-small";
import { BodyTextLink } from "../../fonts";

export const ReviewOrder = ({
  billingInformation,
  confirmOrder,
  goToBilling,
  goToShippingAddress,
  lineItems,
  onDecreaseQuantity,
  onIncreaseQuantity,
  products,
  onRemoveProduct,
  shippingAddress,
  orderContext
}) => (
  <Block maxWidth="80rems" alignSelf="center">
    <Block mb={combineRems(spacing.two, spacing.four)}>
      <CartProductList
        products={products}
        onRemoveProduct={onRemoveProduct}
        onDecreaseQuantity={onDecreaseQuantity}
        onIncreaseQuantity={onIncreaseQuantity}
      />
    </Block>
    <Block mb={2}>
      <CartLineItemList items={lineItems} withLastItemBottomBorder={true} />
    </Block>
    <Block mb={4}>
      <BodySmall>
        <Info>
          <sup>1</sup> This order will{" "}
          {orderContext.isRenewal ? "renew" : "create"} a&nbsp;
          <BodyTextLink to="/service-terms" target="_blank">
            subscription
          </BodyTextLink>
          <br />
          <sup>2</sup> Includes pharmacy &amp; drug fees.
        </Info>
      </BodySmall>
    </Block>
    <Block mb={4}>
      <Divider />
      <Heading>
        Shipping Address
        <EditButton onClick={goToShippingAddress}>edit</EditButton>
      </Heading>
      <Address {...shippingAddress} />
    </Block>
    <Block mb={4}>
      <Divider />
      <Heading>
        Billing Information <EditButton onClick={goToBilling}>edit</EditButton>
      </Heading>
      <BillingInfo {...billingInformation} />
    </Block>
    <Block mb={combineRems(spacing.two, spacing.four)}>
      <BodySmall>Your order will be fulfilled by Cedarwood Pharmacy.</BodySmall>
    </Block>
    <Block mb={combineRems(spacing.two, spacing.four)}>
      {orderContext.isRenewal ? (
        <BodySmall>
          Prescription medicines are subject to approval by a physician based
          upon your medical consultation. If your prescription request is not
          approved, your subscription will be ended and no further refills will
          be sent. Any outstanding refills will be cancelled and a refund for
          the full amount issued.
        </BodySmall>
      ) : (
        <BodySmall>
          When you click "Confirm Order" you will be charged for the full amount
          shown. Prescription medicines are subject to approval by a physician
          based upon your medical consultation. If your prescription request is
          not approved, you will be refunded the amount charged.
        </BodySmall>
      )}
    </Block>
    <CheckoutFooter>
      <Button
        label="Confirm Order"
        fullWidth
        onClick={() => confirmOrder("emr")}
        testId="CheckoutConfirmOrderButton"
      />
    </CheckoutFooter>
  </Block>
);

ReviewOrder.propTypes = {
  billingInformation: PropTypes.any.isRequired,
  coupon: PropTypes.string,
  confirmOrder: PropTypes.func.isRequired,
  deleteOrderFromCart: PropTypes.func.isRequired,
  goToBilling: PropTypes.func.isRequired,
  goToCart: PropTypes.func.isRequired,
  goToShippingAddress: PropTypes.func.isRequired,
  lineItems: PropTypes.arrayOf(PropTypes.shape(CartLineItemProps)),
  onDecreaseQuantity: PropTypes.func.isRequired,
  onIncreaseQuantity: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape(CartProductProps)),
  removeItemFromCart: PropTypes.func.isRequired,
  shippingAddress: PropTypes.object.isRequired,
  orderContext: PropTypes.object.isRequired
};

const Address = ({ city, country, line1, line2, state, zip }) => (
  <Info>
    {line1} <br />
    {line2 && (
      <React.Fragment>
        {line2} <br />
      </React.Fragment>
    )}
    {city}, {state}
    <br />
    {zip} {country}
  </Info>
);

Address.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  line1: PropTypes.string.isRequired,
  line2: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired
};

const BillingInfo = ({ brand, last4 }) => (
  <Info>
    {brand} Card<br />
    •••• •••• •••• {last4}
  </Info>
);

BillingInfo.propTypes = {
  brand: PropTypes.string.isRequired,
  last4: PropTypes.string.isRequired
};
