import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import { equals, gt } from "ramda";
import { Link } from "react-router";
import ReactFocusLock from "react-focus-lock";

import { MenuIcon } from "../../../icons/menu-icon";
import { HimsLogo } from "../../../hims-logo";
import { GlobalNavigationItem } from "../global-navigation-item";
import { GlobalNavigationIconItem } from "../global-navigation-icon-item";
import { Grid } from "../../../layout/grid";
import { breakpoints } from "../../../../theme/breakpoints";
import { DrawerClose } from "../../../drawer";
import { DRAWER_POSITIONS } from "../../../../constants/ui";
import { hasValue } from "../../../../utils";
import { translate } from "../../../../i18n";

import {
  GlobalNavigationContainer,
  GlobalNavigationList,
  GlobalNavigationWrapper,
  GlobalNavDrawerCloseWrapper,
  HeaderLogoWrapper
} from "./global-navigation-header.style";

const hasCartItems = numberOfItems =>
  hasValue(numberOfItems) && gt(numberOfItems, 0);

// The close drawer button lives in the GlobalNavigationHeader as well as in the
// drawer component so that in the case where the global navigation links should
// show over the drawer component, the close button is still clickable

export const GlobalNavigationHeader = ({
  showDrawer,
  showDrawerCartOrReview,
  hasScrolled,
  openDrawerPosition,
  hideDrawer,
  contentId,
  isAuthenticated,
  drawerIsOpen,
  isPendingRenewal = false,
  logoColorBySize = () => null,
  cartItems
}) => {
  const isActiveLink = equals(contentId);
  return (
    <GlobalNavigationContainer
      hasScrolled={hasScrolled}
      drawerIsOpen={drawerIsOpen}
    >
      <GlobalNavigationWrapper container>
        <Grid item xs={13} sm={14} smOffset={1} md={22} mdOffset={1}>
          <GlobalNavigationList>
            <MediaQuery maxWidth={breakpoints.medium}>
              <GlobalNavigationIconItem
                icon={MenuIcon}
                label="View Menu"
                isNotification={isPendingRenewal}
                onClick={() => {
                  showDrawer("shop");
                }}
              />
            </MediaQuery>
            <MediaQuery minWidth={breakpoints.medium + 1}>
              <ReactFocusLock
                disabled={!drawerIsOpen}
                group="drawer"
                autoFocus={false}
              >
                <GlobalNavigationItem
                  isActive={isActiveLink("shop")}
                  onClick={() => {
                    showDrawer("shop");
                  }}
                >
                  {translate("navigation.shop")}
                </GlobalNavigationItem>
                <GlobalNavigationItem
                  isActive={isActiveLink("learn")}
                  onClick={() => {
                    showDrawer("learn");
                  }}
                >
                  {translate("navigation.learn")}
                </GlobalNavigationItem>
              </ReactFocusLock>
            </MediaQuery>
          </GlobalNavigationList>
          {drawerIsOpen && (
            <MediaQuery maxWidth={breakpoints.medium}>
              {isCompactView => (
                <ReactFocusLock
                  disabled={!drawerIsOpen}
                  group="drawer"
                  autoFocus={false}
                >
                  <GlobalNavDrawerCloseWrapper
                    position={openDrawerPosition}
                    isFullWidth={isCompactView}
                  >
                    <DrawerClose
                      position={openDrawerPosition}
                      hideDrawer={hideDrawer}
                    />
                  </GlobalNavDrawerCloseWrapper>
                </ReactFocusLock>
              )}
            </MediaQuery>
          )}

          <MediaQuery maxWidth={breakpoints.medium}>
            <Link aria-label="Home" to="/">
              <HeaderLogoWrapper openDrawerPosition={openDrawerPosition}>
                <HimsLogo color={logoColorBySize("mobile")} height={34} />
              </HeaderLogoWrapper>
            </Link>
          </MediaQuery>
          <MediaQuery minWidth={breakpoints.medium + 1}>
            <Link to="/">
              <HeaderLogoWrapper openDrawerPosition={openDrawerPosition}>
                <HimsLogo color={logoColorBySize("desktop")} height={34} />
              </HeaderLogoWrapper>
            </Link>
          </MediaQuery>

          <GlobalNavigationList isRightAligned>
            <GlobalNavigationItem
              isActive={isActiveLink("cart")}
              onClick={() => {
                showDrawerCartOrReview();
              }}
              isMobileAlwaysPrimary
            >
              {hasCartItems(cartItems)
                ? `${translate("navigation.cart")} (${cartItems})`
                : translate("navigation.cart")}
            </GlobalNavigationItem>
            <MediaQuery minWidth={breakpoints.medium + 1}>
              {!isAuthenticated && (
                <GlobalNavigationItem
                  isActive={isActiveLink("login")}
                  onClick={() => {
                    showDrawer("login");
                  }}
                  testId="GlobalNavigationLogin"
                >
                  {translate("navigation.login")}
                </GlobalNavigationItem>
              )}
              {isAuthenticated && (
                <GlobalNavigationItem
                  isActive={isActiveLink("account")}
                  isNotification={isPendingRenewal}
                  onClick={() => {
                    showDrawer("account");
                  }}
                  testId="GlobalNavigationAccount"
                >
                  {translate("navigation.account")}
                </GlobalNavigationItem>
              )}
            </MediaQuery>
          </GlobalNavigationList>
        </Grid>
      </GlobalNavigationWrapper>
    </GlobalNavigationContainer>
  );
};

GlobalNavigationHeader.propTypes = {
  showDrawer: PropTypes.func,
  showDrawerCartOrReview: PropTypes.func,
  hasScrolled: PropTypes.bool,
  openDrawerPosition: PropTypes.oneOf([
    DRAWER_POSITIONS.LEFT,
    DRAWER_POSITIONS.RIGHT
  ]),
  hideDrawer: PropTypes.func,
  contentId: PropTypes.string,
  isAuthenticated: PropTypes.bool,
  isPendingRenewal: PropTypes.bool,
  drawerIsOpen: PropTypes.bool,
  logoColorBySize: PropTypes.func,
  cartItems: PropTypes.number
};
