import { hasFutureShipDate } from "./pdp-hero.utils";

describe("PDP Hero Date Utils", () => {
  it("Should determine if a given Shipping date string is in the future", () => {
    const shipsOn = "3000-01-01";
    const isValidDate = hasFutureShipDate(shipsOn);
    expect(isValidDate).toBeTruthy();
  });
  it("Should determine if a given Shipping date string is not in the future", () => {
    const shipsOn = "2000-01-01";
    const isValidDate = hasFutureShipDate(shipsOn);
    expect(isValidDate).toBeFalsy();
  });
});
