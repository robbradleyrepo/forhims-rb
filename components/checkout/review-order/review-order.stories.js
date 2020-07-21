import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, object, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { withRedux, withPreviewContainer } from "../../../utils/storybook";
import { ReviewOrder } from "./review-order.component";
import { Checkout } from "../checkout.component";

const title = "Sweatshirt";
const description = "Dark grey L";
const price = "$54.00";
const productId = text("Product Image (Product ID)", "DWraq9FV");

const product = {
  title,
  description,
  price,
  productId,
  quantity: 1
};

const createRandomProductId = () => Math.floor(Math.random() * 10000);
const addRandomId = product => ({
  ...product,
  id: createRandomProductId()
});

export const mockProducts = [
  addRandomId(product),
  addRandomId(product),
  addRandomId(product)
];

export const mockLineItems = [
  { label: "Order Sub-total*", value: "$34.00" },
  {
    label: "Membership",
    value: "$10.00"
  },
  {
    label: "Medical Fee",
    value: "$5.00"
  },
  {
    label: "Promo Discount",
    value: "$0.00"
  },
  {
    label: "Grand Total",
    value: "$49.00",
    isHighlighted: true
  }
];

storiesOf("Domains|Checkout/Review Order", module)
  .addDecorator(withRedux)
  .addDecorator(withPreviewContainer)
  .add("Review Order in Checkout", () => {
    const emptyCart = boolean("Empty Cart", false);
    const handleGoToShippingAddress = action("go to shipping");
    const handleGoToBilling = action("go to billing");
    const handleCreateOrder = action("create order");
    const handleGoToCart = action("go to cart");
    const handleRemoveItemFromCart = action("remove item from cart");
    const handleIncreaseProductQuantity = action("increase product quantity");
    const handleDecreaseProductQuantity = action("decrease product quantity");
    const shippingAddress = object("shipping address", {
      line1: "1710 Monte Cielo Ct",
      line2: "(line 2)",
      city: "Beverley Street",
      state: "CA",
      country: "USA",
      zip: "90210-24"
    });
    const billingInfo = object("billing info", {
      cardType: "Visa",
      last4: "4242"
    });
    return (
      <Checkout
        activeStep={"confirmation"}
        enabledSteps={["cart"]}
        goToStep={() => {}}
        stepTitle="Review Order"
      >
        <ReviewOrder
          createOrder={handleCreateOrder}
          billingInformation={billingInfo}
          goToBilling={handleGoToBilling}
          goToCart={handleGoToCart}
          goToShippingAddress={handleGoToShippingAddress}
          removeItemFromCart={handleRemoveItemFromCart}
          lineItems={mockLineItems}
          products={emptyCart ? [] : mockProducts}
          shippingAddress={shippingAddress}
          onIncreaseQuantity={handleIncreaseProductQuantity}
          onDecreaseQuantity={handleDecreaseProductQuantity}
        />
      </Checkout>
    );
  });
