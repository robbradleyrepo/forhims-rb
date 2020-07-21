import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router";
import { PrimaryNavigationStyle } from "../primary-navigation-item.style";
import { ButtonReset } from "../../../../elements";

export const PrimaryNavigationItem = styled(Link)`
  ${PrimaryNavigationStyle};
`;

PrimaryNavigationItem.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string
};

export const PrimaryNavigationButtonItem = styled(ButtonReset)`
  ${PrimaryNavigationStyle};
  display: inline-block;
`;

PrimaryNavigationItem.displayName = "PrimaryNavigationItem";
