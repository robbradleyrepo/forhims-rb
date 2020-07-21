import { action } from "@storybook/addon-actions";
import { MultipleOrderOffense } from "./multiple-order-offense.component";
import { storiesOf } from "@storybook/react";
import React from "react";

storiesOf("Domains|Checkout/Multiple Order Offense", module).add(
  "Default",
  () => {
    const onClick = action("on click");
    return <MultipleOrderOffense onClick={onClick} />;
  }
);
