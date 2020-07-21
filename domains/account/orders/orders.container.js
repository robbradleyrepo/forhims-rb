import { connect } from "react-redux";
import { Orders } from "./orders.component";
import { lifecycle, compose } from "recompose";
import { ordersConnector } from "./orders.selectors";

import actions from "../../../actions";

const dispatchers = {
  ...actions.subscriptions,
  ...actions.order,
  ...actions.ui
};

const addLifecycle = lifecycle({
  componentDidMount() {
    const { fetchSubscriptions, fetchOrders } = this.props;
    fetchSubscriptions();
    fetchOrders();
  }
});

export const OrdersContainer = compose(
  connect(
    ordersConnector,
    dispatchers
  ),
  addLifecycle
)(Orders);
