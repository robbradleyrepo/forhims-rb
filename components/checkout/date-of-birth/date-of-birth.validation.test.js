import { validateEntireDateOfBirth } from "./date-of-birth.validation";

describe("date of birth component validation", () => {
  const errorMessage = { invalidDate: "Please enter a valid date." };

  it("will wait for all three fields to be present before starting to validate", () => {
    expect(validateEntireDateOfBirth({})).toEqual({});
    expect(
      validateEntireDateOfBirth({
        day: 123,
        month: 78273,
        minutes: 59
      })
    ).toEqual({});
  });

  it("should validate certain cases", () => {
    expect(
      validateEntireDateOfBirth({
        day: 1,
        month: 1,
        year: 1920
      })
    ).toEqual({});
    expect(
      validateEntireDateOfBirth({
        day: 10,
        month: 6,
        year: 1967
      })
    ).toEqual({});
    expect(
      validateEntireDateOfBirth({
        day: 31,
        month: 12,
        year: 1999
      })
    ).toEqual({});
    expect(
      validateEntireDateOfBirth({
        day: 31,
        month: 12,
        year: 1999
      })
    ).toEqual({});
  });

  it("should invalidate certain cases", () => {
    expect(
      validateEntireDateOfBirth({
        day: 1,
        month: 1,
        year: 2222
      })
    ).toEqual(errorMessage);
    expect(
      validateEntireDateOfBirth({
        day: 32,
        month: 12,
        year: 1999
      })
    ).toEqual(errorMessage);
    expect(
      validateEntireDateOfBirth({
        day: 31,
        month: 13,
        year: 1999
      })
    ).toEqual(errorMessage);

    expect(
      validateEntireDateOfBirth({
        day: 31,
        month: 4,
        year: 1999
      })
    ).toEqual(errorMessage);
  });
});
