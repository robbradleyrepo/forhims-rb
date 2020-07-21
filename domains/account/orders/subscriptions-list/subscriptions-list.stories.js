import styled from "styled-components";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { SubscriptionsList } from "./subscriptions-list.component";

const PreviewContainer = styled.div`
  height: 100vh;
`;

storiesOf("Domains|Account/Orders/Subscription", module).add(
  "Subscriptions List",
  () => {
    const snooze = action("snooze");
    const selectedOrderId = text("selected order id", "1");
    const subscriptions = [
      {
        subscriptionStatus: "Active",
        nextEstimatedDeliveryDate: "2018-01-02",
        subscriptionType: "Skin-care",
        subscriptionOrders: [],
        orderId: "1",
        subscriptionShouldShowReactivate: true,
        subscriptionActions: ["SNOOZE"]
      },
      {
        subscriptionStatus: "Active",
        nextEstimatedDeliveryDate: "2018-01-04",
        subscriptionType: "Sexual-health",
        subscriptionOrders: [],
        orderId: "2",
        subscriptionActions: ["SNOOZE"],
        userId: "Jr04XafJ",
        status: "cancelled",
        createdAt: "2018-02-10T06:36:45.532431+00:00",
        processOnDate: "2019-08-31",
        refilledCount: 4,
        productIds: ["65QIdY4y", "8VJm2WUc", "1DaGLrGX"],
        orderCreatedAt: "2018-02-10T05:28:49.510673+00:00"
      }
    ];

    return (
      <PreviewContainer>
        <SubscriptionsList
          subscriptions={subscriptions}
          selectedOrderId={selectedOrderId}
          snooze={snooze}
        />
      </PreviewContainer>
    );
  }
);
