import {
  filterPairByValue,
  selectKeyFromPair,
  selectResponsiveDeviceType
} from "./responsive";

describe("UI Responsive State Selectors", () => {
  describe("Responsive Utils", () => {
    it("Should determine if a breakpoint is currently active", () => {
      const mockBreakpoint = ["desktop", true];
      const isActive = filterPairByValue(mockBreakpoint);
      expect(isActive).toEqual(true);
    });
    it("Should determine if a breakpoint is not currently active", () => {
      const mockBreakpoint = ["tablet", false];
      const isActive = filterPairByValue(mockBreakpoint);
      expect(isActive).toEqual(false);
    });
    it("Should return the key from a [key, value] pair", () => {
      const mockBreakpoint = ["phone", false];
      const breakpointName = selectKeyFromPair(mockBreakpoint);
      expect(breakpointName).toBe("phone");
    });
  });

  describe("Responsive Selectors", () => {
    const mockState = {
      responsive: {
        desktop: true,
        tablet: false,
        phone: false
      }
    };
    it("Should select the currently active device type", () => {
      const state = mockState;
      const activeDevice = selectResponsiveDeviceType(state);
      expect(activeDevice).toBe("desktop");
    });
  });
});
