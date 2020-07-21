import { colors } from "./colors";
import { spacing } from "./spacing";

export const borders = {
  coloredDivider: `${spacing.half} solid ${colors.canvas.primary}`,
  greyDivider: `${spacing.half} solid ${colors.text.secondary}`,
  greyDottedDivider: `${spacing.half} dotted ${colors.text.secondary}`,
  highlightedDivider: `${spacing.half} solid ${colors.text.primary}`,
  transparentDivider: `${spacing.half} solid transparent`
};
