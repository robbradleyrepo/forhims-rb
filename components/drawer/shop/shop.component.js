import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import { Link } from "react-router";

import { breakpoints } from "../../../theme/breakpoints";
import { DrawerNavigationContainer } from "../../../containers/DrawerNavigationContainer";
import { DrawerListContentWrapper } from "../drawer.style";
import { PrimaryNavigationList } from "../../navigation/primary-navigation/primary-navigation-list";
import { PrimaryNavigationItem } from "../../navigation/primary-navigation/primary-navigation-item";

import {
  GlobalNavigationItemButton,
  GlobalNavigationItemLink
} from "../../navigation/global-navigation/global-navigation-item/global-navigation-item.style";
import { Block } from "../../block";

import { translate } from "../../../i18n";
import { ROUTE_PATHS } from "../../../routes/routes.constants";

export const Shop = ({
  showDrawer,
  hideDrawer,
  isAuthenticated,
  isPendingRenewal
}) => (
  <React.Fragment>
    <MediaQuery maxWidth={breakpoints.medium}>
      <DrawerNavigationContainer linksToShow={["shop", "learn"]} />
    </MediaQuery>
    <DrawerListContentWrapper>
      <PrimaryNavigationList key="list" slowStart={true}>
        <PrimaryNavigationItem to={ROUTE_PATHS.plpSex} onClick={hideDrawer}>
          {translate("categories.sex")}
        </PrimaryNavigationItem>
        <PrimaryNavigationItem to={ROUTE_PATHS.plpHair} onClick={hideDrawer}>
          {translate("categories.hair")}
        </PrimaryNavigationItem>
        {/* <PrimaryNavigationItem to={ROUTE_PATHS.plpSkin} onClick={hideDrawer}>
          {translate("categories.skin")}
        </PrimaryNavigationItem> */}
        {/* <PrimaryNavigationItem
          to={ROUTE_PATHS.pdpMouthAciclovir}
          onClick={hideDrawer}
        > 
          {translate("categories.mouth")} */}
      </PrimaryNavigationList>
      <MediaQuery maxWidth={breakpoints.medium}>
        <Block pt={4}>
          {isAuthenticated ? (
            <React.Fragment>
              <GlobalNavigationItemButton
                isOnPrimary
                isActive={false}
                onClick={() => {
                  showDrawer("account");
                }}
              >
                {translate("navigation.account")}
              </GlobalNavigationItemButton>
              {isPendingRenewal && (
                <GlobalNavigationItemLink
                  isOnPrimary
                  isActive={false}
                  isAlert={true}
                  to={ROUTE_PATHS.orders}
                  as={Link}
                  onClick={hideDrawer}
                >
                  Renew Subscription
                </GlobalNavigationItemLink>
              )}
            </React.Fragment>
          ) : (
            <GlobalNavigationItemButton
              isActive={false}
              onClick={() => {
                showDrawer("login");
              }}
              isOnPrimary
            >
              {translate("navigation.login")}
            </GlobalNavigationItemButton>
          )}
        </Block>
      </MediaQuery>
    </DrawerListContentWrapper>
  </React.Fragment>
);
Shop.propTypes = {
  showDrawer: PropTypes.func,
  hideDrawer: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  isPendingRenewal: PropTypes.bool
};
