import { postcode, phoneNumber, age } from "./form-validation";

describe("postcode validation", () => {
  it("return the expected value for different postcodes", () => {
    expect(postcode("EC1A 1BB")).toBeUndefined();
    expect(postcode("W1A 0AX")).toBeUndefined();
    expect(postcode("M1 1AE")).toBeUndefined();
    expect(postcode("B33 8TH")).toBeUndefined();
    expect(postcode("CR2 6XH")).toBeUndefined();
    expect(postcode("DN55 1PT")).toBeUndefined();

    expect(postcode("obviously fake")).toEqual("Invalid postcode");

    // 1 character too short
    expect(postcode("DN55 1P")).toEqual("Invalid postcode");

    // enforce having a space in the postcode
    expect(postcode("CR26XH")).toEqual("Invalid postcode");
  });
});

describe("phone number validation", () => {
  it("returns the expected value for different phone numbers", () => {
    // extracted from the pdf document, works with spaces
    expect(phoneNumber("01123 12334")).toBeUndefined();
    expect(phoneNumber("01123 123123")).toBeUndefined();
    expect(phoneNumber("0115 123 1235")).toBeUndefined();
    expect(phoneNumber("0151 123 1235")).toBeUndefined();
    expect(phoneNumber("013397 12334")).toBeUndefined();
    expect(phoneNumber("013398 12334")).toBeUndefined();
    expect(phoneNumber("013873 12334")).toBeUndefined();
    expect(phoneNumber("015242 12334")).toBeUndefined();
    expect(phoneNumber("015394 12334")).toBeUndefined();
    expect(phoneNumber("015395 12334")).toBeUndefined();
    expect(phoneNumber("015396 12334")).toBeUndefined();
    expect(phoneNumber("016973 12334")).toBeUndefined();
    expect(phoneNumber("016974 12334")).toBeUndefined();
    expect(phoneNumber("016977 1235")).toBeUndefined();
    expect(phoneNumber("016977 12334")).toBeUndefined();
    expect(phoneNumber("017683 12334")).toBeUndefined();
    expect(phoneNumber("017684 12334")).toBeUndefined();
    expect(phoneNumber("017687 12334")).toBeUndefined();
    expect(phoneNumber("019467 12334")).toBeUndefined();
    expect(phoneNumber("019755 12334")).toBeUndefined();
    expect(phoneNumber("019756 12334")).toBeUndefined();
    expect(phoneNumber("025 1235 1235")).toBeUndefined();
    expect(phoneNumber("0334 123 1235")).toBeUndefined();
    expect(phoneNumber("05123 123123")).toBeUndefined();
    expect(phoneNumber("07123 123123")).toBeUndefined();
    expect(phoneNumber("0800 123123")).toBeUndefined();
    expect(phoneNumber("0834 123 1235")).toBeUndefined();
    expect(phoneNumber("0934 123 1235")).toBeUndefined();

    // no spaces
    expect(phoneNumber("0112312334")).toBeUndefined();
    expect(phoneNumber("01123123123")).toBeUndefined();
    expect(phoneNumber("01151231235")).toBeUndefined();
    expect(phoneNumber("01511231235")).toBeUndefined();
    expect(phoneNumber("01339712334")).toBeUndefined();
    expect(phoneNumber("01339812334")).toBeUndefined();
    expect(phoneNumber("01387312334")).toBeUndefined();
    expect(phoneNumber("01524212334")).toBeUndefined();
    expect(phoneNumber("01539412334")).toBeUndefined();
    expect(phoneNumber("01539512334")).toBeUndefined();
    expect(phoneNumber("01539612334")).toBeUndefined();
    expect(phoneNumber("01697312334")).toBeUndefined();
    expect(phoneNumber("01697412334")).toBeUndefined();
    expect(phoneNumber("0169771235")).toBeUndefined();
    expect(phoneNumber("01697712334")).toBeUndefined();
    expect(phoneNumber("01768312334")).toBeUndefined();
    expect(phoneNumber("01768412334")).toBeUndefined();
    expect(phoneNumber("01768712334")).toBeUndefined();
    expect(phoneNumber("01946712334")).toBeUndefined();
    expect(phoneNumber("01975512334")).toBeUndefined();
    expect(phoneNumber("01975612334")).toBeUndefined();
    expect(phoneNumber("02512351235")).toBeUndefined();
    expect(phoneNumber("03341231235")).toBeUndefined();
    expect(phoneNumber("05123123123")).toBeUndefined();
    expect(phoneNumber("07123123123")).toBeUndefined();
    expect(phoneNumber("0800123123")).toBeUndefined();
    expect(phoneNumber("08341231235")).toBeUndefined();
    expect(phoneNumber("09341231235")).toBeUndefined();

    expect(phoneNumber("obviously fake")).toEqual("Invalid phone number");
    expect(phoneNumber("0934 123 fake")).toEqual("Invalid phone number");

    // 7 or more repeating digits
    expect(phoneNumber("01111111111")).toEqual("Invalid phone number");
    expect(phoneNumber("01111111432")).toEqual("Invalid phone number");
    expect(phoneNumber("01111115432")).toBeUndefined();

    // does not crash the program
    expect(phoneNumber(null)).toEqual("Invalid phone number");
    expect(phoneNumber()).toEqual("Invalid phone number");
  });
});

describe("age validation", () => {
  const errorMessage = "Enter valid date of birth";

  it("validates the date of birth value", () => {
    expect(age("11/11/1980")).toBeUndefined();
    expect(age("01/12/1980")).toBeUndefined();
    expect(age("11/01/1920")).toBeUndefined();
    expect(age("31/01/1920")).toBeUndefined();
    expect(age("30/04/1920")).toBeUndefined();

    expect(age("31/04/1920")).toEqual(errorMessage);
    expect(age("31/02/1920")).toEqual(errorMessage);

    expect(age("11/13/1980")).toEqual(errorMessage);
    expect(age("32/12/1980")).toEqual(errorMessage);
    expect(age("30/30/1980")).toEqual(errorMessage);
  });
});
