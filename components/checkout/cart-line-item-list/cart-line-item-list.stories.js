import { CartLineItemList } from "./cart-line-item-list.component";
import { object, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

storiesOf("Domains|Checkout/Cart", module).addWithJSX(
  "Cart Line Item List",
  () => {
    const items = object("Items", [
      { label: "Subtotal", value: "$1.25" },
      { label: "Total", value: "$2.25", isHighlighted: true }
    ]);

    const withLastItemBottomBorder = boolean(
      "with last item bottom border",
      false
    );

    return (
      <CartLineItemList
        items={items}
        withLastItemBottomBorder={withLastItemBottomBorder}
      />
    );
  }
);
