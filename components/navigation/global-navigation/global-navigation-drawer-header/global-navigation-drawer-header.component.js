import React from "react";
import PropTypes from "prop-types";
import { contains, equals } from "ramda";

import { DrawerNavigationGridContainer } from "./global-navigation-drawer-header.style";
import { GlobalNavigationItem } from "../global-navigation-item";
import { GlobalNavigationList } from "../global-navigation-header/global-navigation-header.style";
import { Grid } from "../../../layout/grid";
import { translate } from "../../../../i18n";

const GLOBAL_NAV_LINKS = ["shop", "learn", "cart", "login", "account"];

export const GlobalNavigationDrawerHeader = ({
  showDrawer,
  showDrawerCartOrReview,
  linksToShow,
  contentId
}) => {
  const shouldShowLink = link => contains(link, linksToShow);
  const isActiveLink = equals(contentId);
  return (
    <DrawerNavigationGridContainer container>
      <Grid item xs={12} xsOffset={1} sm={14} smOffset={1} md={22} mdOffset={1}>
        <GlobalNavigationList>
          {shouldShowLink("shop") && (
            <GlobalNavigationItem
              isActive={isActiveLink("shop")}
              onClick={() => {
                showDrawer("shop");
              }}
            >
              {translate("navigation.shop")}
            </GlobalNavigationItem>
          )}
          {shouldShowLink("learn") && (
            <GlobalNavigationItem
              isActive={isActiveLink("learn")}
              onClick={() => {
                showDrawer("learn");
              }}
            >
              {translate("navigation.learn")}
            </GlobalNavigationItem>
          )}
        </GlobalNavigationList>

        <GlobalNavigationList isRightAligned>
          {shouldShowLink("cart") && (
            <GlobalNavigationItem
              isActive={isActiveLink("cart")}
              onClick={() => {
                showDrawerCartOrReview();
              }}
            >
              {translate("navigation.cart")}
            </GlobalNavigationItem>
          )}
          {shouldShowLink("login") && (
            <GlobalNavigationItem
              isActive={isActiveLink("login")}
              onClick={() => {
                showDrawer("login");
              }}
            >
              {translate("navigation.login")}
            </GlobalNavigationItem>
          )}
          {shouldShowLink("account") && (
            <GlobalNavigationItem
              isActive={isActiveLink("account")}
              onClick={() => {
                showDrawer("account");
              }}
            >
              {translate("navigation.account")}
            </GlobalNavigationItem>
          )}
        </GlobalNavigationList>
      </Grid>
    </DrawerNavigationGridContainer>
  );
};

GlobalNavigationDrawerHeader.propTypes = {
  showDrawer: PropTypes.func,
  showDrawerCartOrReview: PropTypes.func,
  hasScrolled: PropTypes.bool,
  linksToShow: PropTypes.arrayOf(PropTypes.oneOf(GLOBAL_NAV_LINKS)),
  contentId: PropTypes.string
};
