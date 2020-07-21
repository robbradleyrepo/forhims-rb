import config from "../../../config";
import {
  subscriptionToActionsAvailable,
  canSubscriptionBeSnoozed
} from "./orders.utils";
import { SUBSCRIPTION_ACTIONS } from "./subscription/subscription.constants";

const productsByName = config.products.idByName;

describe("Orders utils", () => {
  describe.skip("canSubscriptionBeSnoozed util", () => {
    it("Should return false if subscription type is not skin", () => {
      expect(
        canSubscriptionBeSnoozed({ productIds: [productsByName.shampoo] })
      ).toBeFalsy();
    });
    it("Should return true if subscription type is skin", () => {
      expect(
        canSubscriptionBeSnoozed({ productIds: [productsByName.antiAging] })
      ).toBeTruthy();
    });
  });
  describe.skip("Subscription to actions available util", () => {
    it("Should return a list of actions based on canSubscriptionBeCancelled and canSubscriptionBeSnoozed utils", () => {
      expect(
        subscriptionToActionsAvailable({
          status: "active",
          productIds: [productsByName.antiAging]
        })
      ).toEqual(expect.arrayContaining([SUBSCRIPTION_ACTIONS.SNOOZE]));
    });
  });
});
