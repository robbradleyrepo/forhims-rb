import { LegalPageComponent } from "./legal-page.component";
import { getListOfStates } from "../../selectors/legal";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const legalPageConnector = createStructuredSelector({
  states: getListOfStates
});
export const LegalPage = connect(legalPageConnector)(LegalPageComponent);
