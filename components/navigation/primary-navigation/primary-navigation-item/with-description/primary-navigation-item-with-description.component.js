import PropTypes from "prop-types";
import React from "react";
import { PrimaryNavigationItem } from "../plain/primary-navigation-item.component";
import { DescriptionStyle } from "./primary-navigation-item-with-description.style";

export const PrimaryNavigationItemWithDescription = ({
  description,
  children,
  ...otherProps
}) => (
  <PrimaryNavigationItem {...otherProps}>
    {children}
    <DescriptionStyle>{description}</DescriptionStyle>
  </PrimaryNavigationItem>
);

PrimaryNavigationItemWithDescription.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  to: PropTypes.string,
  description: PropTypes.string
};

PrimaryNavigationItemWithDescription.displayName =
  "PrimaryNavigationItemWithDescription";
