import React from "react";
import PropTypes from "prop-types";

import { Block } from "../../block";
import { Button } from "../../button";
import { spacing } from "../../../theme/spacing";
import { Headline4, P } from "../../fonts";

export const MultipleOrderOffense = ({ onClick }) => (
  <Block textAlign="center">
    <Block mb={spacing.four}>
      <Headline4>Looks like you're trying to take care of them all!</Headline4>
    </Block>
    <Block mb={spacing.four}>
      <P>
        Let's take this one step at a time. Please complete your current
        purchase and consultation and then come back to create other orders.
      </P>
    </Block>
    <Button label="Checkout" onClick={onClick} />
  </Block>
);

MultipleOrderOffense.propTypes = {
  onClick: PropTypes.func.isRequired
};
