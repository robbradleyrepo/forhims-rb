"use strict";

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { ThemeProvider } from "styled-components";
import { themes } from "../theme";

import { DRAWER_POSITIONS } from "../constants/ui";
import { DrawerContainer as Drawer } from "../containers/DrawerContainer";
import { NavigationContainer } from "../containers/NavigationContainer";
import { CurtainContainer as Curtain } from "../containers/CurtainContainer";
import { GridGlobalStyle } from "../components/layout/grid/grid.style";
import { AppStyle } from "../theme/app.style";
import { StickyHeader } from "../components/sticky-header/sticky-header.component";
import { ScrollToTop } from "../components/scroll-top";
import { Footer } from "../components/footer/footer.component";
import { layoutConnector } from "../selectors/layout";
import { ListWithTitleTypes } from "../components/footer/list-with-title.types";
import { CouponBannerContainer } from "../components/coupon-banner/coupon-banner.container";

import { Toastr } from "../modules/toastr/toastr.component";
import { ModalContainer } from "../domains/modal/containers/modal.container";
import { Block } from "../components/block";

class LayoutView extends React.Component {
  render() {
    const {
      isUnderMaintenance,
      isNotOnMaintenancePage,
      footerColumns
    } = this.props;

    if (isUnderMaintenance && isNotOnMaintenancePage) {
      return (
        <div className="fill">
          <div className="">Be back!</div>
        </div>
      );
    }

    return (
      <ThemeProvider theme={themes.hims}>
        <ScrollToTop>
          <div id="top" />
          <GridGlobalStyle />
          <AppStyle />
          <Drawer key="drawer-left" position={DRAWER_POSITIONS.LEFT} />
          <Drawer
            key="drawer-right"
            position={DRAWER_POSITIONS.RIGHT}
            displayAboveNavigation
          />
          <Curtain />
          <StickyHeader sticky={NavigationContainer} />
          <Block
            display="flex"
            flex="1"
            flexDirection="column"
            className="content"
            minHeight="100%"
          >
            <Block flex="1" display="flex" flexDirection="column">
              {this.props.children}
            </Block>
            <Footer
              columns={footerColumns}
              legalLinks={[
                { url: "/user-terms", label: "User Terms" },
                { url: "/service-terms", label: "Service Terms" },
                { url: "/privacy-policy", label: "Privacy Policy" },
                { url: "/pharmacy-terms", label: "Pharmacy Terms" }
              ]}
              copyright={"Copyright 2020 HIMS. All rights reserved."}
              iconLinks={[
                {
                  icon: "facebook",
                  url: "https://www.facebook.com/wearehims",
                  label: "Facebook"
                },
                {
                  icon: "twitter",
                  url: "https://twitter.com/wearehims",
                  label: "Twitter"
                },
                {
                  icon: "instagram",
                  url: "https://www.instagram.com/hims",
                  label: "Instagram"
                },
                {
                  icon: "medium",
                  url: "https://medium.com/hims-hers",
                  label: "Medium"
                }
              ]}
            />
          </Block>
          <CouponBannerContainer />
          <Toastr />
          <ModalContainer />
        </ScrollToTop>
      </ThemeProvider>
    );
  }
}

LayoutView.propTypes = {
  children: PropTypes.object,
  custom: PropTypes.object,
  drawers: PropTypes.object,
  footerColumns: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.shape(ListWithTitleTypes))
  ),
  isUnderMaintenance: PropTypes.bool,
  isNotOnMaintenancePage: PropTypes.bool
};

LayoutView.displayName = "LayoutView";

export default connect(layoutConnector)(LayoutView);
