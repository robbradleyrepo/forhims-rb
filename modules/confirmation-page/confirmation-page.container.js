import { connect } from "react-redux";
import { ConfirmationPageComponent } from "./confirmation-page.component";
import { ConfirmationPageConnector } from "./confirmation-page.selectors";

export const ConfirmationPage = connect(ConfirmationPageConnector)(
  ConfirmationPageComponent
);
