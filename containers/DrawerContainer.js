import React from "react";
import { connect } from "react-redux";
import { compose, mapProps, withState } from "recompose";

import { Drawer } from "../components/drawer";
import { showDrawerWithContentId } from "../actions/drawer";
import actions from "../actions";
import { drawerConnector } from "../selectors/drawer";
import {
  DRAWER_CONTENTS,
  CUSTOM_DRAWER_HIDE_ACTIONS
} from "../components/drawer/drawer-content.component";

const { hideDrawer } = actions.ui;
const { logout } = actions.auth;

const dispatchers = dispatch => ({
  hideDrawer: () => dispatch(hideDrawer()),
  showDrawer: id => dispatch(showDrawerWithContentId(id)),
  logout: () => dispatch(logout()),
  dispatch: dispatch
});

export const DrawerContainer = compose(
  connect(
    drawerConnector,
    dispatchers
  ),
  mapProps(props => {
    const ContentComponent = DRAWER_CONTENTS[props.contentId];
    const customCloseDrawerAction = CUSTOM_DRAWER_HIDE_ACTIONS(props.dispatch)[
      props.contentId
    ];
    return {
      ...props,
      content: ContentComponent && <ContentComponent {...props} />,
      hideDrawer: customCloseDrawerAction || props.hideDrawer
    };
  }),
  withState("isExpansionAnimationComplete", "setExpandedState", false)
)(Drawer);
