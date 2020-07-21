import { isMatchingRoute } from "./navigation";

describe("isMatchingRoute", () => {
  it("handles empty strings", () => {
    expect(isMatchingRoute("")("/some-url")).toEqual(false);
  });

  it("handles a simple route and pathname", () => {
    expect(isMatchingRoute("sweat")("/sweat")).toEqual(true);
  });

  it("handles a path with more slashes", () => {
    expect(
      isMatchingRoute("hair-loss")("/hair-loss/shampoo/something-even-longer")
    ).toEqual(true);
  });
});
