import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";

import { breakpoints } from "../../../theme/breakpoints";
import { DrawerNavigationContainer } from "../../../containers/DrawerNavigationContainer";
import { DrawerListContentWrapper } from "../drawer.style";

import {
  PrimaryNavigationList,
  UserGreeting
} from "../../navigation/primary-navigation/primary-navigation-list";
import {
  PrimaryNavigationItem,
  PrimaryNavigationButtonItem,
  PrimaryNavigationLinkWithAlert
} from "../../navigation/primary-navigation/primary-navigation-item";
import { ROUTE_PATHS } from "../../../routes/routes.constants";

export const AccountMenu = ({
  isAuthenticated,
  userProfile,
  logout,
  hideDrawer,
  isPendingRenewal
}) =>
  isAuthenticated && (
    <React.Fragment>
      <MediaQuery maxWidth={breakpoints.medium}>
        <DrawerNavigationContainer linksToShow={["cart", "account"]} />
      </MediaQuery>
      <DrawerListContentWrapper position="right">
        <PrimaryNavigationList slowStart position="right">
          {userProfile.fullName && (
            <UserGreeting>{`Hi ${userProfile.fullName}`}</UserGreeting>
          )}
          {isPendingRenewal && (
            <PrimaryNavigationLinkWithAlert
              to={ROUTE_PATHS.orders}
              onClick={hideDrawer}
            >
              Renew Subscription
            </PrimaryNavigationLinkWithAlert>
          )}
          <PrimaryNavigationItem to={ROUTE_PATHS.profile} onClick={hideDrawer}>
            Profile
          </PrimaryNavigationItem>
          <PrimaryNavigationItem to={ROUTE_PATHS.orders} onClick={hideDrawer}>
            Orders
          </PrimaryNavigationItem>
          <PrimaryNavigationButtonItem onClick={logout}>
            Logout
          </PrimaryNavigationButtonItem>
        </PrimaryNavigationList>
      </DrawerListContentWrapper>
    </React.Fragment>
  );

AccountMenu.propTypes = {
  hideDrawer: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  isPendingRenewal: PropTypes.bool,
  userProfile: PropTypes.object,
  showDrawer: PropTypes.func,
  hasRequiredActions: PropTypes.bool.isRequired
};
