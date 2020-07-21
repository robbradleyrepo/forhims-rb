import { DRAWER_POSITIONS, DRAWER_STATES } from "../../constants/ui";

export const DRAWER_UI = {
  login: {
    id: "login",
    side: DRAWER_POSITIONS.RIGHT,
    display: DRAWER_STATES.HALF
  },
  cart: {
    id: "cart",
    side: DRAWER_POSITIONS.RIGHT,
    display: DRAWER_STATES.FULL
  },
  emr: {
    id: "visit",
    side: DRAWER_POSITIONS.RIGHT,
    display: DRAWER_STATES.FULL
  },
  shop: {
    id: "shop",
    side: DRAWER_POSITIONS.LEFT,
    display: DRAWER_STATES.HALF
  },
  learn: {
    id: "learn",
    side: DRAWER_POSITIONS.LEFT,
    display: DRAWER_STATES.HALF
  },
  account: {
    id: "account",
    side: DRAWER_POSITIONS.RIGHT,
    display: DRAWER_STATES.HALF
  },
  ingredients: {
    id: "ingredients",
    side: DRAWER_POSITIONS.RIGHT,
    display: DRAWER_STATES.HALF
  },
  brands: {
    id: "brands",
    side: DRAWER_POSITIONS.RIGHT,
    display: DRAWER_STATES.HALF
  },
  safetyInformation: {
    id: "safetyInformation",
    side: DRAWER_POSITIONS.RIGHT,
    display: DRAWER_STATES.HALF
  },
  actionItems: {
    id: "actionItems",
    side: DRAWER_POSITIONS.RIGHT,
    display: DRAWER_STATES.HALF
  }
};
