import React from "react";
import PropTypes from "prop-types";

import { CheckoutFooter, CheckoutTitle } from "../../checkout.style";
import { Block } from "../../../block";
import { Button } from "../../../button";
import { P } from "../../../fonts/p";
import { CartEmptyPlaceholder } from "./cart-empty.style";

export const CartEmpty = ({ onCtaClick }) => (
  <React.Fragment>
    <Block textAlign="center" mt={5} mx={4} pb={5}>
      <CheckoutTitle>Your cart is empty</CheckoutTitle>
      <Block mb={5}>
        <P>Oops! You have nothing here</P>
      </Block>
      <CartEmptyPlaceholder />
    </Block>
    <CheckoutFooter>
      <Button label="EXPLORE TREATMENTS" onClick={onCtaClick} fullWidth />
    </CheckoutFooter>
  </React.Fragment>
);

CartEmpty.propTypes = {
  onCtaClick: PropTypes.func
};
