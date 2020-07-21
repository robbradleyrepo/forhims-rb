import React from "react";
import PropTypes from "prop-types";

import { BlockWithTheme } from "./color-block.style";

export const ColorBlock = ({ backgroundColor, sections }) => (
  <BlockWithTheme backgroundColor={backgroundColor}>{sections}</BlockWithTheme>
);

ColorBlock.propTypes = {
  backgroundColor: PropTypes.string,
  sections: PropTypes.array.isRequired
};
