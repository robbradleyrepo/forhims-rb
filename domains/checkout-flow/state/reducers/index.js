import { combineReducers } from "redux";

import { checkout } from "./checkout.reducer";
import { cart } from "./cart.reducer";
import { account } from "./account.reducer";
import { shipping } from "./shipping.reducer";
import { activity } from "./activity.reducer";

export default combineReducers({
  checkout,
  cart,
  account,
  shipping,
  activity
});
