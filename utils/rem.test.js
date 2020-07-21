import { spacing } from "../theme/spacing";

import { applyRatioToRem, combineRems, invertRem } from "./rem";

test("combine 1, 2 rems to 3rems", () => {
  const output = "3rem";
  expect(combineRems("1rem", "2rem")).toBe(output);
});

test("combine spacing rems to 3rems", () => {
  const output = "3rem";
  expect(combineRems(spacing.three, spacing.four)).toBe(output);
});

test("invert 2rems", () => {
  const input = "2rem";
  const output = "-2rem";
  expect(invertRem(input)).toBe(output);
});

test("invert -2rems", () => {
  const input = "-2rem";
  const output = "2rem";
  expect(invertRem(input)).toBe(output);
});

test("Multiple rems by a given value", () => {
  const input = "4rem";
  const ratio = 0.25;
  expect(applyRatioToRem(input, ratio)).toBe("1rem");
});
