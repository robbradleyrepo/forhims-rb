import { connect } from "react-redux";
import { DynamicPage } from "../../components/dynamic-page";
import { dynamicPageConnector } from "../../selectors/cms";

export const DynamicPageContainer = connect(dynamicPageConnector)(DynamicPage);
