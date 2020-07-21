import React from "react";
import PropTypes from "prop-types";

import { ActivityOverlayContainer } from "./activity-overlay.style";
import { Loading } from "../../components/loading";
import { spacing } from "../../theme/spacing";
import { colors } from "../../theme/colors";

export const ActivityOverlay = ({ visible = false }) =>
  visible ? (
    <ActivityOverlayContainer>
      <Loading size={spacing.five} color={colors.ui.callout} />
    </ActivityOverlayContainer>
  ) : null;

ActivityOverlay.defaultProps = {
  visible: false
};

ActivityOverlay.propTypes = {
  visible: PropTypes.bool
};
