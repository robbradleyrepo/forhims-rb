import { connect } from "react-redux";

import { ProductUsageComponent } from "./product-usage.component";

import { showDrawerWithContentId } from "../../../actions/drawer";

const dispatchers = { showDrawer: showDrawerWithContentId };

export const ProductUsage = connect(
  null,
  dispatchers
)(ProductUsageComponent);
