import { ActivityOverlay as ActivityOverlayComponent } from "./activity-overlay.component";
import { connect } from "react-redux";
import { activityOverlayConnector } from "./activity-overlay.selectors";

export const ActivityOverlay = connect(activityOverlayConnector)(
  ActivityOverlayComponent
);
