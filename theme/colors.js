import { assocPath, pipe } from "ramda";
import { rgba } from "polished";

const coreColors = {
  clear: "transparent",
  black: "#000000",
  black88: "rgba(0, 0, 0, .88)", // #1F1F1F on white
  black44: "rgba(0, 0, 0, .44)", // #A8A8A8 on white
  black12: "rgba(0,0,0, .12)", // #E0E0E0 on white
  white: "#FFFFFF",
  white44: "rgba(255,255,255,.44)",
  white12: "rgba(255,255,255, .12)",
  grey: "#A8A8A8",
  coolGray: "#939aa0",
  redOrange: "#f44336",
  brightGreen: "#1DCC74"
};

const himsColors = {
  darkBlue: "#23527c",
  blue: "#cddbdb",
  grayBlue: "#b7c7c9",
  grayPink: "#f4f1ee",
  frostGray: "#d5dade", // Soft Footer gray
  lighterBlue: "#d5e3ec",
  lightBlue: "#f0f8ff",
  flatGray: "#EDEDED",
  offWhite: "#f6f6f4",
  lightPeach: "#eee2d7",
  peach50: "#FBF8F5",
  peach: "#d8a285",
  orange: "#c49875",
  darkPeach: "#cc835c",
  hairPeach: "#eee2d7",
  sexGray: "#d7d7d2",
  skinGray: "#cbb9b5",
  apricot: "#f9c6ac",
  skyBlue: "#9ecede",
  beige: "#efe3d7",
  islandBlue: "#9ECEDE",
  green: "#47d9b3",
  pink: "#fd89d1",
  peachOrange: "rgb(246, 197, 154)",
  vistaWhite: "rgb(235, 219, 203)",
  newBlue: "rgb(194, 212, 222)",
  skinBlue: "rgb(198, 222, 229)"
};

export const colorPalette = {
  ...coreColors,
  ...himsColors
};

export const colors = {
  black: colorPalette.black,
  white: colorPalette.white,
  // Content backgrounds
  canvas: {
    primary: colorPalette.lightPeach,
    primaryLight: colorPalette.peach50,
    secondary: colorPalette.peach,
    secondaryLight: colorPalette.peach50,
    brand: colorPalette.darkPeach,
    white: colorPalette.white,
    cancelled: colorPalette.white12,
    error: rgba(colorPalette.redOrange, 0.12),
    frostGray: colorPalette.frostGray,
    apricot: colorPalette.apricot,
    blue: colorPalette.blue,
    blog: colorPalette.grayBlue,
    grayPink: colorPalette.grayPink,
    skyBlue: colorPalette.skyBlue,
    beige: colorPalette.beige,
    islandBlue: colorPalette.islandBlue,
    peachOrange: colorPalette.peachOrange,
    vistaWhite: colorPalette.vistaWhite,
    newBlue: colorPalette.newBlue,
    skinBlue: colorPalette.skinBlue
  },
  // Primary categories and global branding
  brand: {
    default: colorPalette.darkPeach,
    hair: colorPalette.hairPeach,
    sex: colorPalette.sexGray,
    skin: colorPalette.skinGray
  },
  // Content with transparency preferred over solid greys for contrast
  text: {
    primary: colorPalette.black88,
    secondary: colorPalette.black44,
    onPrimary: colorPalette.white,
    active: colorPalette.orange,
    callout: colorPalette.darkPeach,
    legal: colorPalette.coolGray
  },
  button: {
    primary: colorPalette.black,
    primaryText: colorPalette.white,
    primaryHover: colorPalette.clear,
    primaryHoverText: colorPalette.black,
    secondary: colorPalette.black,
    secondaryText: colorPalette.white,
    secondaryHover: colorPalette.white44,
    secondaryHoverText: colorPalette.black,
    accent: colorPalette.darkPeach,
    accentHover: rgba(colorPalette.darkPeach, 0.88),
    accentText: colorPalette.white,
    accentHoverText: colorPalette.white,
    disabled: colorPalette.frostGray,
    disabledText: colorPalette.black44
  },
  ui: {
    divider: colorPalette.black12,
    separator: colorPalette.black88,
    shadow: colorPalette.black12,
    highlight: colorPalette.white12,
    overlay: colorPalette.lightPeach,
    callout: colorPalette.darkPeach
  },
  form: {
    error: colorPalette.redOrange,
    success: colorPalette.brightGreen
  },
  bloodPressure: {
    systolic: colorPalette.green,
    diastolic: colorPalette.pink
  },
  emr: {
    headingColor: colorPalette.white
  },
  opacity: {
    hidden: 0,
    hover: 0.8,
    overlay: 0.88,
    alert: 0.95,
    visible: 1
  }
};

export const hairColors = pipe(
  assocPath(["canvas", "brand"], colors.brand.hair),
  assocPath(["text", "secondary"], colors.brand.hair)
)(colors);
export const sexColors = pipe(
  assocPath(["canvas", "brand"], colors.brand.sex),
  assocPath(["text", "secondary"], colors.brand.sex)
)(colors);
export const skinColors = pipe(
  assocPath(["canvas", "brand"], colors.brand.skin),
  assocPath(["text", "secondary"], colors.brand.skin)
)(colors);
