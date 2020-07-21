import React from "react";
import PropTypes from "prop-types";

import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { LoadingDiv } from "./loading.style";

export const Loading = ({ size = spacing.four, color = colors.black }) => (
  <LoadingDiv size={size} color={color} />
);

Loading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
};
