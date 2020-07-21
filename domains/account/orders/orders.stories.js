import React from "react";
import { storiesOf } from "@storybook/react";
import { object, boolean } from "@storybook/addon-knobs";
import { productsById as productsByIdData } from "./story-data";
import { Orders } from "./orders.component";

storiesOf("Domains|Account/Orders", module)
  .add("List", () => {
    const loading = boolean("loading", false);
    const submitSucceeded = boolean("submitSucceeded", false);
    const hasNoOrders = boolean("hasNoOrders", false);
    const productsById = object("productsById", productsByIdData);
    const orders = [
      {
        refill: false,
        isMembershipOrder: false,
        isActiveOrder: true,
        isCancelled: false,
        id: "34fshdfsd",
        subscriptionId: "refill",
        paymentStatus: "succeeded",
        trackingNumber: "8sdfihsdf8",
        address: {
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
        },
        step: "CUSTOMER",
        amount: 3000,
        items: [
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
        ]
      },
      {
        refill: false,
        isMembershipOrder: false,
        isActiveOrder: true,
        isCancelled: true,
        id: "3asdasdasd",
        subscriptionId: "refill",
        paymentStatus: "succeeded",
        trackingNumber: "8sdfihsdf8",
        address: {
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
        },
        step: "CUSTOMER",
        amount: 3000,
        items: [
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
        ]
      }
    ];
    const subscriptions = [
      {
        subscriptionStatus: "Active",
        nextEstimatedDeliveryDate: "2018-01-02",
        subscriptionType: "Skin-care",
        subscriptionOrders: [],
        orderId: "1",
        subscriptionAction: "REACTIVATE"
      },
      {
        subscriptionStatus: "Active",
        nextEstimatedDeliveryDate: "2018-01-04",
        subscriptionType: "Sexual-health",
        subscriptionOrders: [],
        orderId: "2",
        subscriptionAction: "SNOOZE",
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
      <Orders
        productsById={productsById}
        oneOffOrders={orders}
        loading={loading}
        hasNoOrders={hasNoOrders}
        submitSucceeded={submitSucceeded}
        subscriptions={subscriptions}
      />
    );
  })
  .add("No orders", () => <Orders loading={false} hasNoOrders={true} />)
  .add("Loading", () => <Orders loading={true} />);
