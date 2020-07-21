import { assoc, propOr } from "ramda";

import { animations, transitions } from "./motion";
import { borders } from "./borders";
import { boxShadows } from "./box-shadows";
import { breakpoints } from "./breakpoints";
import { buttons } from "./buttons";
import { colors, hairColors, skinColors, sexColors } from "./colors";
import { modules } from "./modules";
import { fonts, fontSizes, fontWeights, letterSpacing } from "./typography";
import { spacing, spacingList, sizing, grid } from "./spacing";
import { zIndexes } from "./z-index";

const styledSystemTheme = {
  space: spacingList
};

export const hims = {
  ...styledSystemTheme,
  animations,
  borders,
  boxShadows,
  breakpoints,
  buttons,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  grid,
  letterSpacing,
  modules,
  sizing,
  spacing,
  transitions,
  zIndexes
};

const hair = assoc("colors", hairColors)(hims);
const sex = assoc("colors", sexColors)(hims);
const skin = assoc("colors", skinColors)(hims);

export const themes = {
  hair,
  hims,
  sex,
  skin
};
export const getTheme = themeId => propOr(themes.hims, themeId)(themes);
