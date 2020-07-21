import { selectIsVisitPending } from "./checkout-flow.selectors";

describe("Checkout Flow State Selectors", () => {
  describe("Visit Status Pending", () => {
    it("Should be true if active order has pending visit", () => {
      const state = { visits: { activeOrderHasPendingVisit: true } };
      const visitStatus = selectIsVisitPending(state);
      expect(visitStatus).toBe(true);
    });

    it("Should be false if active order does not have a pending visit", () => {
      const state = { visits: { activeOrderHasPendingVisit: false } };
      const visitStatus = selectIsVisitPending(state);
      expect(visitStatus).toBe(false);
    });

    it("Should be false if active order has null for pending visit", () => {
      const visitStatus = selectIsVisitPending({});
      expect(visitStatus).toBe(false);
    });
  });
});
