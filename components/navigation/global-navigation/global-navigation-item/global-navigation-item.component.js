import React from "react";
import PropTypes from "prop-types";

import {
  GlobalNavigationItemButton,
  GlobalNavigationListItem
} from "./global-navigation-item.style";

export const GlobalNavigationItem = ({
  children,
  isActive,
  onClick,
  isIcon,
  isNotification = false,
  isAlert = false,
  testId = null
}) => (
  <GlobalNavigationListItem>
    <GlobalNavigationItemButton
      isActive={isActive}
      isAlert={isAlert}
      isNotification={isNotification}
      onClick={onClick}
      isIcon={isIcon}
      data-testid={testId}
    >
      {children}
    </GlobalNavigationItemButton>
  </GlobalNavigationListItem>
);

GlobalNavigationItem.propTypes = {
  children: PropTypes.node,
  isActive: PropTypes.bool,
  isAlert: PropTypes.bool,
  isNotification: PropTypes.bool,
  isIcon: PropTypes.bool,
  isMobileAlwaysPrimary: PropTypes.bool,
  isOnPrimary: PropTypes.shape({
    desktop: PropTypes.bool,
    mobile: PropTypes.bool
  }),
  onClick: PropTypes.func,
  testId: PropTypes.string
};
