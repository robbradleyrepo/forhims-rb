import React from "react";
import { PropTypes } from "prop-types";

import { Button } from "../../components/button/button.component";

export const AddToCartButtonComponent = ({
  fullWidth,
  label,
  handleAddToCartClick,
  testId,
  variant
}) => (
  <Button
    fullWidth={fullWidth}
    label={label}
    onClick={handleAddToCartClick}
    testId={testId || "AddToCartButton"}
    variant={variant}
  />
);

AddToCartButtonComponent.defaultProps = {
  fullWidth: true
};

AddToCartButtonComponent.propTypes = {
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  handleAddToCartClick: PropTypes.func,
  testId: PropTypes.string,
  variant: PropTypes.string
};
