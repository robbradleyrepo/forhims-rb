import { connect } from "react-redux";

import { prescriptionsConnector } from "./prescriptions.selectors";
import { Prescriptions } from "./prescriptions.component";

const dispatchers = null;

export const PrescriptionsContainer = connect(
  prescriptionsConnector,
  dispatchers
)(Prescriptions);
