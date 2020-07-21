import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";

import { breakpoints } from "../../../theme/breakpoints";
import { DrawerNavigationContainer } from "../../../containers/DrawerNavigationContainer";
import { DrawerListContentWrapper } from "../drawer.style";
import { PrimaryNavigationList } from "../../navigation/primary-navigation/primary-navigation-list";
import {
  PrimaryNavigationItem,
  PrimaryNavigationItemWithDescription
} from "../../navigation/primary-navigation/primary-navigation-item";

export const Learn = ({ hideDrawer }) => (
  <React.Fragment>
    <MediaQuery maxWidth={breakpoints.medium}>
      <DrawerNavigationContainer linksToShow={["shop", "learn"]} />
    </MediaQuery>
    <DrawerListContentWrapper>
      <PrimaryNavigationList key="list" slowStart={true}>
        <PrimaryNavigationItemWithDescription
          to={"/blog"}
          description={"(it's french, but it's our blog)"}
          onClick={hideDrawer}
        >
          {"Savoir Faire"}
        </PrimaryNavigationItemWithDescription>

        <PrimaryNavigationItem to={"/purpose"} onClick={hideDrawer}>
          {""}
        </PrimaryNavigationItem>
        <PrimaryNavigationItem to={"/about"} onClick={hideDrawer}>
          {"About Us"}
        </PrimaryNavigationItem>
      </PrimaryNavigationList>
    </DrawerListContentWrapper>
  </React.Fragment>
);

Learn.propTypes = {
  hideDrawer: PropTypes.func
};
