import { values } from "ramda";
import { rem } from "polished";

const fontFamilies = {
  brandSans: `"SofiaProWeb", Helvetica, Arial, sans-serif`,
  brandSerif: `"IvarWeb", Georgia, serif`
};

// TODO: Revisit a solution for primary vs secondary fonts across themes
export const fonts = {
  brandPrimary: fontFamilies.brandSans,
  brandSecondary: fontFamilies.brandSans
};

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  headingSmall: 400,
  headingLarge: 700
};

export const fontSizes = {
  tiny: rem(8),
  label: rem(10),
  caption: rem(12),
  bodySmall: rem(14),
  bodyMedium: rem(16),
  bodyLarge: rem(18),
  headingSmall: rem(20),
  headingMedium: rem(24),
  headingLarge: rem(32),
  headingXLarge: rem(36),
  displaySmall: rem(40),
  displayMedium: rem(48),
  displayLarge: rem(64),
  displayXLarge: rem(80)
};

export const letterSpacing = {
  none: "0",
  small: "0.1em",
  medium: "0.125em",
  large: "0.15em"
};

export const BASE_FONT_SIZE = 16;
export const fontSizeList = values(fontSizes);
