import React from "react";
import PropTypes from "prop-types";

import { colors } from "../../../../theme/colors";
import { breakpoints } from "../../../../theme/breakpoints";
import MediaQuery from "react-responsive";

import { ButtonReset } from "../../../elements";
import {
  GlobalNavigationListItem,
  GlobalNavigationNotificationDot
} from "../global-navigation-item/global-navigation-item.style";

export const GlobalNavigationIconItem = ({
  icon: Icon,
  onClick,
  isOnPrimary = { desktop: false, mobile: false },
  label,
  isNotification = false
}) => (
  <GlobalNavigationListItem>
    <ButtonReset
      aria-label={label}
      onClick={onClick}
      data-testid="GlobalNavigationIconItem_Button"
    >
      <MediaQuery maxWidth={breakpoints.medium}>
        <Icon color={isOnPrimary.mobile ? colors.white : colors.black} />
      </MediaQuery>
      <MediaQuery minWidth={breakpoints.medium + 1}>
        <Icon color={isOnPrimary.desktop ? colors.white : colors.black} />
      </MediaQuery>
    </ButtonReset>
    {isNotification && <GlobalNavigationNotificationDot aria-hidden={true} />}
  </GlobalNavigationListItem>
);

GlobalNavigationIconItem.propTypes = {
  icon: PropTypes.func,
  isActive: PropTypes.bool,
  isNotification: PropTypes.bool,
  isIcon: PropTypes.bool,
  isOnPrimary: PropTypes.shape({
    desktop: PropTypes.bool,
    mobile: PropTypes.bool
  }),
  label: PropTypes.string,
  onClick: PropTypes.func
};
