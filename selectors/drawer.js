import { createStructuredSelector, createSelector } from "reselect";
import { isEmpty, not, pipe, values, pathOr } from "ramda";
import { DRAWER_POSITIONS } from "../constants/ui";
import {
  selectLeftDrawerDisplayMode,
  selectRightDrawerDisplayMode,
  selectOpenDrawerPosition,
  selectDrawerContentId
} from "./ui";
import { isModalOpen } from "./modal";
import { getUserProfile, selectIsAuthenticated } from "./me";
import { getPendingVisits } from "./emr";
import { findRenewalOrders } from "./order";
import { getMessagesWithAction } from "./messages";
import { selectHasAnyPendingRenewal } from "./subscriptions";
import { DRAWER_UI } from "../components/drawer/drawer-content.constants";
import { DRAWER_THEMES } from "../components/drawer/drawer.style";

const getDrawerSelector = (state, props) =>
  props.position === DRAWER_POSITIONS.LEFT
    ? selectLeftDrawerDisplayMode(state)
    : selectRightDrawerDisplayMode(state);

const selectRequiredActions = createSelector(
  getPendingVisits,
  findRenewalOrders,
  getMessagesWithAction,
  (visits, orders, messages) => ({
    visits: values(visits),
    orders: values(orders),
    messages: values(messages)
  })
);

const selectHasRequiredActions = createSelector(
  selectRequiredActions,
  pipe(
    isEmpty,
    not
  )
);

const selectOpenDrawerTheme = createSelector(selectDrawerContentId, contentId =>
  pathOr(DRAWER_THEMES.LIGHT, [contentId, "theme"], DRAWER_UI)
);

export const drawerConnector = createStructuredSelector({
  display: getDrawerSelector,
  contentId: selectDrawerContentId,
  openDrawerPosition: selectOpenDrawerPosition,
  isModalDisplayed: isModalOpen,
  isAuthenticated: selectIsAuthenticated,
  isPendingRenewal: selectHasAnyPendingRenewal,
  userProfile: getUserProfile,
  hasRequiredActions: selectHasRequiredActions,
  requiredActions: selectRequiredActions,
  drawerTheme: selectOpenDrawerTheme
});
