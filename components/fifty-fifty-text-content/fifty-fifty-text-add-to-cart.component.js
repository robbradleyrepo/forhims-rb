import { UnderlinedRouterLink } from "../fonts";
import React from "react";
import PropTypes from "prop-types";
import { AddToCartLink } from "./fifty-fifty-text-content.style";

export const FiftyFiftyTextAddToCartLink = ({
  handleAddToCartClick,
  ctaText
}) => (
  <AddToCartLink as={UnderlinedRouterLink} onClick={handleAddToCartClick}>
    {ctaText}
  </AddToCartLink>
);

FiftyFiftyTextAddToCartLink.propTypes = {
  handleAddToCartClick: PropTypes.func,
  ctaText: PropTypes.string
};
