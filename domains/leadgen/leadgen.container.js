import { connect } from "react-redux";

import { CART } from "../checkout-flow/state/actions";
import LeadgenComponent from "./leadgen.component";

const dispatchers = { addToCart: CART.addToCart };

export default connect(
  undefined,
  dispatchers
)(LeadgenComponent);
