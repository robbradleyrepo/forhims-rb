"use strict";

import { all, compose, equals, not, path, pipe, prop, pathOr } from "ramda";
import { createSelector } from "reselect";

import { DRAWER_POSITIONS, DRAWER_STATES } from "../constants/ui";

const isDrawerClosed = equals(DRAWER_STATES.CLOSED);
const isDrawerOpen = pipe(
  isDrawerClosed,
  not
);

// Carryover from Hims codebase
// TODO: Refactor to use updated store

const isLoginActive = compose(
  equals("Authenticate"),
  path(["drawers", "right", "component"])
);

const isRightDrawerOpen = path(["drawers", "right", "visible"]);

export const isLoginOpen = state =>
  isLoginActive(state) && isRightDrawerOpen(state);

// Hers Drawer UI

export const selectUIState = prop("ui");

export const selectDrawersState = createSelector(
  selectUIState,
  prop("drawers")
);

export const selectLeftDrawerDisplayMode = createSelector(
  selectDrawersState,
  pathOr(DRAWER_STATES.CLOSED, [DRAWER_POSITIONS.LEFT, "display"])
);

export const selectRightDrawerDisplayMode = createSelector(
  selectDrawersState,
  pathOr(DRAWER_STATES.CLOSED, [DRAWER_POSITIONS.RIGHT, "display"])
);

export const selectIsDrawerOpen = createSelector(
  selectLeftDrawerDisplayMode,
  selectRightDrawerDisplayMode,
  (leftDisplay, rightDisplay) =>
    pipe(
      all(isDrawerClosed),
      not
    )([leftDisplay, rightDisplay])
);

export const selectOpenDrawerPosition = createSelector(
  selectLeftDrawerDisplayMode,
  selectRightDrawerDisplayMode,
  (leftDisplay, rightDisplay) =>
    isDrawerOpen(leftDisplay)
      ? DRAWER_POSITIONS.LEFT
      : isDrawerOpen(rightDisplay)
        ? DRAWER_POSITIONS.RIGHT
        : null
);

// TODO: Extend with more conditions once modal system is implemented
export const selectIsCurtainOpen = createSelector(
  selectIsDrawerOpen,
  isDrawerOpen => isDrawerOpen
);

export const selectDrawerContentId = state => {
  return state.ui.drawers.contentId;
};

export const selectIsCheckoutDrawerOpen = createSelector(
  selectDrawerContentId,
  equals("cart")
);

export const getPdpPageScrollToSafetyInformationRequestTimestamp = state => {
  return state.ui.pdpSafetyInformation
    .scrollToSafetyInformationRequestTimestamp;
};

export const getPdpPageSafetyInformationClosedState = state => {
  return state.ui.pdpSafetyInformation.isClosed;
};

export const selectCouponBannerState = createSelector(
  selectUIState,
  prop("couponBanner")
);

export const selectCouponBannerIsDismissed = createSelector(
  selectCouponBannerState,
  prop("isDismissed")
);
