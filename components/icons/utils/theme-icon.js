import React from "react";
import { withTheme } from "styled-components";
import PropTypes from "prop-types";
import { withProps, compose } from "recompose";
import { pathOr } from "ramda";

const ThemeIconComponent = ({
  iconComponent: IconComponent,
  theme,
  ...props
}) => <IconComponent color={theme.colors.text.secondary} {...props} />;

ThemeIconComponent.propTypes = {
  iconComponent: PropTypes.func.isRequired
};

// converts `<Icon />` (the component) to `Icon` (the function)
const withIconComponentToIcon = withProps(
  props =>
    pathOr(null, ["icon", "type"], props)
      ? { iconComponent: props.icon.type }
      : {}
);

export const ThemeIcon = compose(
  withIconComponentToIcon,
  withTheme
)(ThemeIconComponent);

ThemeIcon.propTypes = {
  icon: PropTypes.element,
  iconComponent: PropTypes.func,
  theme: PropTypes.object
};
