import { AccountPageContainer, AccountEmptyWrapper } from "../account.style";
import { Headline3 } from "../../../components/fonts/h3";
import { OrdersHeader, OrdersBody } from "./orders.style";
import { RouterLink } from "../../../components/fonts";
import { OrdersList } from "./orders-list";
import PropTypes from "prop-types";
import React from "react";
import { SubscriptionsListContainer } from "./subscriptions-list";

const SubmitSucceededMessage = () => (
  <div>
    {`Your subscription was successfully updated. Your changes will be reflected
  in your next expected delivery.`}
  </div>
);

const OrdersLoadingMessage = () => (
  <AccountPageContainer>
    <AccountEmptyWrapper>
      <Headline3>{`Loading your orders...`}</Headline3>
    </AccountEmptyWrapper>
  </AccountPageContainer>
);

const NoOrdersMessage = () => (
  <AccountPageContainer>
    <AccountEmptyWrapper>
      <Headline3>{`You don't have any orders yet!`}</Headline3>
      <RouterLink to="/">Go to the store</RouterLink>
    </AccountEmptyWrapper>
  </AccountPageContainer>
);

export class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOrderId: null
    };
  }

  selectOrder = orderId => {
    this.setState({ selectedOrderId: orderId });
  };

  render() {
    const {
      submitSucceeded,
      loading,
      hasNoOrders,
      oneOffOrders,
      hasSubscriptions
    } = this.props;
    const { selectedOrderId } = this.state;
    if (loading) {
      return <OrdersLoadingMessage />;
    } else if (!loading && hasNoOrders) {
      return <NoOrdersMessage />;
    } else {
      const hasOneOffOrders = !!oneOffOrders.length;
      return (
        <AccountPageContainer>
          {hasSubscriptions && (
            <div>
              <OrdersHeader>
                {submitSucceeded && <SubmitSucceededMessage />}
                <Headline3>My Subscriptions</Headline3>
              </OrdersHeader>
              <OrdersBody>
                <SubscriptionsListContainer
                  selectedOrderId={selectedOrderId}
                  selectOrder={this.selectOrder}
                />
              </OrdersBody>
            </div>
          )}
          {hasOneOffOrders && (
            <div>
              <OrdersHeader>
                <Headline3>
                  {hasSubscriptions ? "My Other Orders" : "My Orders"}
                </Headline3>
              </OrdersHeader>
              <OrdersBody>
                <OrdersList
                  selectedOrderId={selectedOrderId}
                  selectOrder={this.selectOrder}
                  orders={oneOffOrders}
                />
              </OrdersBody>
            </div>
          )}
        </AccountPageContainer>
      );
    }
  }
}

Orders.propTypes = {
  submitSucceeded: PropTypes.bool,
  loading: PropTypes.bool,
  hasNoOrders: PropTypes.bool,
  oneOffOrders: PropTypes.array,
  hasSubscriptions: PropTypes.bool
};

Orders.displayName = "Orders";
