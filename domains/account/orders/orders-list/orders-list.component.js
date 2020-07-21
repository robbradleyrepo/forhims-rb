import React from "react";
import PropTypes from "prop-types";
import { equals } from "ramda";

import { OrdersListWrapper } from "../orders.style";
import { Order } from "../order";

export const OrdersList = ({
  selectedOrderId,
  selectOrder,
  orders,
  refill
}) => {
  return (
    <OrdersListWrapper>
      {orders.map((order, i) => {
        const isActiveOrder =
          selectedOrderId && equals(selectedOrderId, order.id);
        return (
          <li key={`orders-list-item-${order.id}-${i}`}>
            <Order
              {...order}
              refill={refill}
              isActiveOrder={isActiveOrder}
              handleClickOrder={() =>
                selectOrder(isActiveOrder ? null : order.id)
              }
            />
          </li>
        );
      })}
    </OrdersListWrapper>
  );
};
OrdersList.propTypes = {
  selectedOrderId: PropTypes.string,
  selectOrder: PropTypes.func,
  orders: PropTypes.array,
  refill: PropTypes.bool
};
