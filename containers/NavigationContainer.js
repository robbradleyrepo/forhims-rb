import { connect } from "react-redux";

import actions from "../actions";
import { GlobalNavigationHeader } from "../components/navigation/global-navigation";
import { navigationConnector } from "../selectors/navigation";
import {
  showDrawerWithCartAndSwitchToReviewIfNeeded,
  showDrawerWithContentId
} from "../actions/drawer";

const { hideDrawer } = actions.ui;

const dispatchers = {
  showDrawer: showDrawerWithContentId,
  showDrawerCartOrReview: showDrawerWithCartAndSwitchToReviewIfNeeded,
  hideDrawer
};

export const NavigationContainer = connect(
  navigationConnector,
  dispatchers
)(GlobalNavigationHeader);
