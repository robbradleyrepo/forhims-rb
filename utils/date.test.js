import { parse as dateParse } from "date-fns";
import {
  formatDate,
  addDaysToDate,
  addHoursToDate,
  parseDate,
  getDifferenceInYears,
  getDifferenceInDays,
  isDateValid,
  getTimeInMs,
  isDateAfter,
  convertUkToYearMonthDayFormat,
  convertUkToUsDateFormat,
  isDateInCalendarRange,
  convertDateOfBirthToAge
} from "./date";

describe("Date Utilities", () => {
  describe("Date Validation", () => {
    it("Should determine if a provided date is valid", () => {
      const validDate = new Date("Nov 13 2018 00:00:00 GMT+0000");
      expect(isDateValid(validDate)).toBeTruthy();
    });
    it("Should determine if a provided date is invalid", () => {
      const inValidDate = new Date("nevuary");
      expect(isDateValid(inValidDate)).toBeFalsy();
    });
    it("Should determine that an empty value is invalid", () => {
      expect(isDateValid(null)).toBeFalsy();
    });
    it("Should determine that a missing value is invalid", () => {
      expect(isDateValid(undefined)).toBeFalsy();
    });
  });
  describe("Format Date to string", () => {
    it("Should format a date with the given formatting", () => {
      const date = new Date("Jan 1 2018");
      const toFormat = formatDate("MMMM D, YYYY h:mm A");
      expect(toFormat(date)).toEqual("January 1, 2018 12:00 AM");
    });
    it("Should not format an invalid date", () => {
      const date = null;
      const toFormat = formatDate("MMMM D, YYYY h:mm A");
      expect(toFormat(date)).toEqual("");
    });
  });
  describe("Parse Date", () => {
    it("Should convert a string to date object", () => {
      const dateStr = "2014-02-11T11:30:30";
      const parsedDate = parseDate(dateStr);
      expect(parsedDate instanceof Date).toBeTruthy();
    });
    it("Should not convert an invalid date string to date object", () => {
      const dateStr = "Lorem ipsum dolor sit amet January 666th";
      const parsedDate = parseDate(dateStr);
      expect(parsedDate).toBe(null);
    });
  });
  describe("Add Days to Date", () => {
    it("Should add a given number of days to the provided date", () => {
      const start = parseDate("January 1, 2018 12:00 AM");
      const startPlusOneWeek = addDaysToDate(7)(start);
      const formatResult = formatDate("MM-DD-YYYY");
      expect(formatResult(startPlusOneWeek)).toBe("01-08-2018");
    });
  });
  describe("Add Hours to Date", () => {
    it("Should add a given number of hours to the provided date", () => {
      const start = parseDate("January 1, 2018 12:00 AM");
      const startPlusOneWeek = addHoursToDate(7)(start);
      const formatResult = formatDate("MM-DD-YYYY h:mm A");
      expect(formatResult(startPlusOneWeek)).toBe("01-01-2018 7:00 AM");
    });
  });
  describe("Calculate Difference in Years", () => {
    it("Should get the difference between two dates as an integer of years", () => {
      const start = "January 1, 2018 12:00 AM";
      const end = "2014-02-11T11:30:30";
      expect(getDifferenceInYears(start, end)).toBe(3);
    });
  });
  describe("Calculate Difference In Days", () => {
    it("Should get the difference between two dates as an integer of days", () => {
      const start = "January 15, 2018 12:00 AM";
      const end = "January 1, 2018 12:00 AM";
      expect(getDifferenceInDays(start, end)).toBe(14);
    });
  });
  describe("Convert date to milliseconds", () => {
    it("Should return the number of ms since epoch time for a valid date", () => {
      const date = new Date("Feb 7 2018 00:00:00 GMT+0000");
      const dateInMs = getTimeInMs(date);
      expect(dateInMs).toBe(1517961600000);
    });
    it("Should not return ms for an invalid date", () => {
      const date = null;
      const dateInMs = getTimeInMs(date);
      expect(dateInMs).toBe(null);
    });
    it("Should not return ms for a missing date", () => {
      const date = undefined;
      const dateInMs = getTimeInMs(date);
      expect(dateInMs).toBe(null);
    });
  });
  describe("Date Comparison: Is Date After", () => {
    it("Should determine if the provided date is after another", () => {
      const date = new Date();
      const pastDate = new Date("Jan 1 2000");
      expect(isDateAfter(pastDate)(date)).toBeTruthy();
    });
    it("Should determine if the provided date is not after another", () => {
      const date = new Date();
      const pastDate = new Date("Jan 1 3000");
      expect(isDateAfter(pastDate)(date)).toBeFalsy();
    });
    it("Should determine that two dates are equal", () => {
      const date = new Date("January 15, 2018 12:00 AM");
      const pastDate = new Date("January 15, 2018 12:00 AM");
      expect(isDateAfter(pastDate)(date)).toBeFalsy();
    });
  });

  describe("Date format conversion", () => {
    it("should convert the UK dates to YYYY-MM-DD format", () => {
      const ukDate = "31/12/1980";
      const expected = "1980-12-31";
      expect(convertUkToYearMonthDayFormat(ukDate)).toBe(expected);
    });
  });

  describe("Date format conversion", () => {
    it("should convert the UK dates to US format", () => {
      const ukDate = "31/12/1980";
      const expected = "12-31-1980";
      expect(convertUkToUsDateFormat(ukDate)).toBe(expected);
    });
  });

  describe("Is date in calendar year", () => {
    it("Should return true if the date is a true date", () => {
      const format = "MM-DD-YYYY";
      const originalDate = "04-30-1990";
      const parsedDate = dateParse(originalDate);
      expect(isDateInCalendarRange(originalDate, parsedDate, format)).toEqual(
        true
      );
    });

    it("Should return false if the date is an overflow date", () => {
      const format = "MM-DD-YYYY";
      const originalDate = "04-44-1990";
      const parsedDate = dateParse(originalDate);
      expect(isDateInCalendarRange(originalDate, parsedDate, format)).toEqual(
        false
      );
    });
  });

  describe("Convert date of birth string to age", () => {
    beforeEach(() => {
      const mockDate = 1548714618000; // Jan. 28, 2019
      Date.now = jest.fn(() => mockDate);
    });

    it("Should get the user's age in years", () => {
      const dob = "1920-01-01";
      const userAge = 99;

      expect(convertDateOfBirthToAge(dob)).toEqual(userAge);
    });

    it("Should return 0 years for a future date", () => {
      const dob = "2020-01-01";
      const userAge = 0;

      expect(convertDateOfBirthToAge(dob)).toEqual(userAge);
    });

    it("Should return 0 years for an invalid date", () => {
      const dob = null;
      const userAge = 0;

      expect(convertDateOfBirthToAge(dob)).toEqual(userAge);
    });
  });
});
