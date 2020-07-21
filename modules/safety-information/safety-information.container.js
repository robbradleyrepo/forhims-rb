import { connect } from "react-redux";

import { SafetyInformation } from "./safety-information.component";
import { safetyInformationConnector } from "./safety-information.selectors";
import { PDP_SAFETY_INFORMATION_SWITCH_TEXT_CLOSED_STATE } from "../../constants/ActionTypes";

const dispatchers = dispatch => ({
  textToggleButtonClicked: ({ requestedClosedState }) =>
    dispatch({
      type: PDP_SAFETY_INFORMATION_SWITCH_TEXT_CLOSED_STATE,
      payload: { requestedClosedState }
    })
});

export const SafetyInformationContainer = connect(
  safetyInformationConnector,
  dispatchers
)(SafetyInformation);
