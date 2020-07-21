import { colors } from "./colors";

export const DRAWER_THEMES = {
  LIGHT: "LIGHT",
  DARK: "DARK"
};

export const modules = {
  drawers: {
    [DRAWER_THEMES.LIGHT]: {
      backgroundColor: colors.canvas.primaryLight,
      iconColor: colors.text.primary,
      strokeColor: colors.ui.overlay
    },
    [DRAWER_THEMES.DARK]: {
      backgroundColor: colors.button.primary,
      iconColor: colors.button.primaryText,
      strokeColor: colors.ui.overlay
    }
  },
  navigation: {
    global: {
      backgroundColor: colors.transparent,
      stickyBackgroundColor: colors.white
    },
    primary: {
      color: colors.text.primary,
      hover: colors.text.callout
    }
  }
};
