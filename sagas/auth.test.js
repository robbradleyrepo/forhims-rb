import { getExpirationTimestamp } from "./auth";

describe("getExpiration timestamp", () => {
  it("Should add 12 hours to the date and convert to milliseconds", () => {
    const date = new Date();
    expect(getExpirationTimestamp(date) - date).toEqual(12 * 60 * 60 * 1000);
  });
});
