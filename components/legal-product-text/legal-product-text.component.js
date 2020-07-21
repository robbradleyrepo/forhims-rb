import React from "react";
import PropTypes from "prop-types";

import { Block } from "../block";
import { LegalTextLine } from "./legal-product-text.style";

// const RX_PRODUCT_TEXT =
//   "*Prescription products require an online consultation with a physician after checkout who will determine if the prescription is appropriate. Important safety information applies";

const RX_PRODUCT_TEXT = "* Subject to pharmacist approval";

export const LegalProductText = ({ requiresConsultation }) => (
  <Block width="100%" pt={3}>
    {requiresConsultation && <LegalTextLine>{RX_PRODUCT_TEXT}</LegalTextLine>}
  </Block>
);
LegalProductText.propTypes = {
  requiresConsultation: PropTypes.bool
};
