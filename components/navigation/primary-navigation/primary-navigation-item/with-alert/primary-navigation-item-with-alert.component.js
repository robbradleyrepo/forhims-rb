import PropTypes from "prop-types";
import React from "react";
import {
  PrimaryNavigationButtonItem,
  PrimaryNavigationItem
} from "../plain/primary-navigation-item.component";
import { AlertIcon } from "../../../../icons/alert-icon";
import { colors } from "../../../../../theme/colors";
import { NavigationItemWithAlertContainer } from "./primary-navigation-item-with-alert.style";

export const PrimaryNavigationItemWithAlert = ({
  children,
  className,
  onClick
}) => (
  <PrimaryNavigationButtonItem className={className} onClick={onClick}>
    <NavigationItemWithAlertContainer>
      <AlertIcon color={colors.text.callout} />
      {children}
    </NavigationItemWithAlertContainer>
  </PrimaryNavigationButtonItem>
);

PrimaryNavigationItemWithAlert.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func
};

PrimaryNavigationItemWithAlert.displayName = "PrimaryNavigationItemWithAlert";

export const PrimaryNavigationLinkWithAlert = ({ children, ...props }) => (
  <PrimaryNavigationItem {...props}>
    <NavigationItemWithAlertContainer>
      <AlertIcon color={colors.text.callout} />
      {children}
    </NavigationItemWithAlertContainer>
  </PrimaryNavigationItem>
);

PrimaryNavigationItemWithAlert.propTypes = PrimaryNavigationItem.propTypes;

PrimaryNavigationItemWithAlert.displayName = "PrimaryNavigationLinkWithAlert";
