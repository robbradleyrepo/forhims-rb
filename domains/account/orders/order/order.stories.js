import { action } from "@storybook/addon-actions";
import { ItemList } from "./item-list";
import { storiesOf } from "@storybook/react";
import { text, number, boolean, select } from "@storybook/addon-knobs";
import { LabelValue } from "./label-value";
import { Order } from "./index";
import React from "react";
import { values } from "ramda";
import { ORDER_STEPS } from "../../../../constants/Enums";

storiesOf("Domains|Account/Orders/Order", module)
  .add("ItemList", () => {
    const title = text("title", "Addyi");
    const quantity = number("quantity", 5);
    return (
      <ItemList items={[{ quantity, productId: "34fedfdsf", title: title }]} />
    );
  })
  .add("LabelValue", () => {
    const label = text("label", "label");
    const value = text("value", "value");
    return <LabelValue label={label} value={value} />;
  })
  .add("Order", () => {
    const handleClickOrder = action("select order");
    const refill = boolean("refill", false);
    const isMembershipOrder = boolean("is membership order", false);
    const isActiveOrder = boolean("is active order", true);
    const isCancelled = boolean("is cancelled", false);
    const id = text("id", "3hf8ejd");
    const subscriptionId = text("subscription id", "refill");
    const paymentStatus = text("payment status", "succeeded");
    const trackingNumber = text("tracking number", "34rejfhjdferf8yerf");
    const address = {
      id: "YZI1PaI4",
      addressType: "shipping",
      userId: "dZ4YqJKV",
      line1: "2060 Leavenworth St Apt 1",
      line2: "",
      city: "San Francisco",
      state: "CA",
      county: null,
      zip: "94133-2550",
      country: "United States",
      latitude: null,
      longitude: null,
      createdAt: "2018-07-11T05:25:14.981281+00:00"
    };

    const stepOptions = values(ORDER_STEPS);
    const step = select("step", stepOptions, "CUSTOMER");
    const amount = number("amount", 4300);
    const items = [
      {
        id: "WPCAwNWZ",
        orderId: "Q5W3Uqum",
        productId: "BXG5ere5",
        title: "Addyi",
        quantity: 1,
        subscription: 0,
        meta: null,
        createdAt: "2018-10-11T00:30:07.528685+00:00"
      },
      {
        id: "7CZpgRAd",
        orderId: "Q5W3Uqum",
        productId: "fAmIG6uH",
        title: "Addyi",
        quantity: 1,
        subscription: 0,
        meta: null,
        createdAt: "2018-10-11T00:30:03.319141+00:00"
      }
    ];

    return (
      <Order
        refill={refill}
        isMembershipOrder={isMembershipOrder}
        isActiveOrder={isActiveOrder}
        step={step}
        isCancelled={isCancelled}
        id={id}
        subscriptionId={subscriptionId}
        paymentStatus={paymentStatus}
        trackingNumber={trackingNumber}
        address={address}
        amount={amount}
        items={items}
        handleClickOrder={handleClickOrder}
      />
    );
  });
