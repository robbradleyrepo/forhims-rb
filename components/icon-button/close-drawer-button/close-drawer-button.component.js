import React from "react";
import PropTypes from "prop-types";
import { pathOr, values } from "ramda";
import { withTheme } from "styled-components";

import { ArrowIcon } from "../../icons/arrow-icon";
import { IconButton } from "../icon-button.component";

import { DRAWER_POSITIONS } from "../../../constants/ui";

import { colors } from "../../../theme/colors";
import { DRAWER_THEMES } from "../../../theme/modules";

export const CloseDrawerButtonComponent = ({
  onClick,
  drawer = DRAWER_POSITIONS.LEFT,
  drawerTheme = DRAWER_THEMES.LIGHT,
  theme
}) => {
  const iconColor = pathOr(
    null,
    ["modules", "drawers", drawerTheme, "iconColor"],
    theme
  );
  const strokeColor = pathOr(
    null,
    ["modules", "drawers", drawerTheme, "strokeColor"],
    theme
  );
  return (
    <IconButton
      icon={<ArrowIcon direction={drawer} color={iconColor} />}
      hoverBorderColor={colors.ui.overlay}
      borderColor={strokeColor}
      onClick={onClick}
      testId="CloseDrawerButton"
      label="Close"
    />
  );
};

CloseDrawerButtonComponent.propTypes = {
  onClick: PropTypes.func,
  drawer: PropTypes.oneOf([DRAWER_POSITIONS.LEFT, DRAWER_POSITIONS.RIGHT]),
  drawerTheme: PropTypes.oneOf(values(DRAWER_THEMES)),
  theme: PropTypes.object
};

export const CloseDrawerButton = withTheme(CloseDrawerButtonComponent);
