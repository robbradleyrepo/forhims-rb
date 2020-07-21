import { connect } from "react-redux";
import { compose } from "recompose";

import actions from "../actions";
import { GlobalNavigationDrawerHeader } from "../components/navigation/global-navigation";

import { navigationConnector } from "../selectors/navigation";

import {
  showDrawerWithContentId,
  showDrawerWithCartAndSwitchToReviewIfNeeded
} from "../actions/drawer";

const { hideDrawer } = actions.ui;

const dispatchers = {
  showDrawer: showDrawerWithContentId,
  showDrawerCartOrReview: showDrawerWithCartAndSwitchToReviewIfNeeded,
  hideDrawer
};

export const DrawerNavigationContainer = compose(
  connect(
    navigationConnector,
    dispatchers
  )
)(GlobalNavigationDrawerHeader);
