import { numberInRange } from "./custom-prop-types";

describe("numberInRange", () => {
  it("returns an error if the prop is a number outside of the range", () => {
    // check the error message once
    expect(numberInRange(0, 10)({ width: -1 }, "width", "Grid")).toMatchObject({
      message:
        "Invalid prop `width` of value `-1` supplied to `Grid`. Expected prop to be a number between `0` and `10`."
    });

    // if message property exists on the returned object, it is probably an error. Good enough!
    expect(
      numberInRange(0, 10)({ width: 10.5 }, "width", "Grid")
    ).toHaveProperty("message");
  });

  it("returns an error if prop is not a number", () => {
    // check the error message once
    expect(
      numberInRange(0, 10)({ width: "words" }, "width", "Grid")
    ).toMatchObject({
      message:
        "Invalid prop `width` of value `words` supplied to `Grid`. Expected prop to be a number, but has type of `string`."
    });
    // if message property exists on the returned object, it is probably an error. Good enough!
    expect(
      numberInRange(0, 10)({ width: null }, "width", "Grid")
    ).toHaveProperty("message");
    expect(numberInRange(0, 10)({ width: {} }, "width", "Grid")).toHaveProperty(
      "message"
    );
  });

  it("returns undefined the prop is a number within the range", () => {
    expect(numberInRange(0, 10)({ width: 0 }, "width", "Grid")).toBeUndefined();
    expect(numberInRange(0, 10)({ width: 5 }, "width", "Grid")).toBeUndefined();
    expect(
      numberInRange(0, 10)({ width: 10 }, "width", "Grid")
    ).toBeUndefined();
  });

  it("returns undefined if the prop doesn't exist", () => {
    expect(numberInRange(0, 10)({}, "width", "Grid")).toBeUndefined();
  });
});
