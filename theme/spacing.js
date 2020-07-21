import { values } from "ramda";
import { rem } from "polished";

// TODO: Generate spacing scale with input from design team
export const spacing = {
  half: "0.125rem",
  one: "0.25rem",
  two: "0.5rem",
  three: "1rem",
  four: "2rem",
  five: "4rem",
  six: "8rem"
};

export const spacingList = values(spacing);

export const sizing = {
  badge: rem(44),
  buttons: {
    height: rem(56),
    width: rem(212)
  },
  centerAlignText: {
    xsRatio: 0.88,
    smRatio: 0.5625,
    mdRatio: 0.42
  },
  divider: {
    height: rem(2)
  },
  fullScreenImage: {
    xsRatio: 2.15,
    smRatio: 1.33,
    mdRatio: 0.55
  },
  header: rem(85),
  messages: {
    gutter: 0.25
  },
  pdpHero: {
    xsRatio: 1,
    smRatio: 2 / 3
  },
  productKnowledge: {
    maxWidth: rem(600)
  },
  productUsage: {
    xsRatio: 0.52,
    smRatio: 0.42,
    mdRatio: 0.38,
    maxHeight: rem(640)
  },
  softFooterMarquee: {
    xsRatio: 1.5,
    smRatio: 0.7,
    mdRatio: 0.375
  },
  softFooter: {
    xsRatio: 1.5,
    smRatio: 0.88,
    mdRatio: 0.4
  },
  webcam: {
    maxWidth: rem(480)
  }
};

const GLOBAL_GRID_VARIABLE = `gridColumn`;
const GLOBAL_GUTTER_VARIABLE = `gridGutter`;
const GLOBAL_GUTTER_FALLBACK = 0;
const GLOBAL_GRID_FALLBACK = spacing.three;
const GLOBAL_GRID_COLUMN = `var(--${GLOBAL_GRID_VARIABLE}, ${GLOBAL_GRID_FALLBACK})`;
const GLOBAL_GUTTER = `var(--${GLOBAL_GUTTER_VARIABLE}, ${GLOBAL_GUTTER_FALLBACK})`;

const getGlobalGridColumns = (columns = 1) =>
  `calc(${GLOBAL_GRID_COLUMN} * ${columns})`;

export const grid = {
  column: GLOBAL_GRID_COLUMN,
  getColumns: getGlobalGridColumns,
  gutter: GLOBAL_GUTTER
};
