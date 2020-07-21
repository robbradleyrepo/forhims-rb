import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { values } from "ramda";
import { Subscription } from "./subscription.component";
import { STATUS_VALUES } from "./subscription.constants";
import { Button } from "../../../../components/button";

storiesOf("Domains|Account/Orders/Subscription", module).add(
  "Subscription",
  () => {
    const selectOrder = action("select order");
    const subscriptionStatus = select(
      "Subscription status",
      values(STATUS_VALUES),
      "Active"
    );
    const nextEstimatedDeliveryDate = "2018-09-09";

    return (
      <Subscription
        selectedOrderId={"1"}
        selectOrder={selectOrder}
        subscriptionOrders={[]}
        subscriptionType={"Skin-care"}
        subscriptionStatus={subscriptionStatus}
        nextEstimatedDeliveryDate={nextEstimatedDeliveryDate}
        subscriptionActionButton={<Button label="Snooze" shrinkToText />}
      />
    );
  }
);
