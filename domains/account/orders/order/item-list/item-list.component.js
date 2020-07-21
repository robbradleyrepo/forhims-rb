import React from "react";
import PropTypes from "prop-types";

import { ListReset } from "../../../../../components/elements";

export const ItemList = ({ items }) => (
  <ListReset>
    {items.map(({ quantity, productId, title }, i) => (
      <li
        key={`order-item-${productId}-${quantity}-${i}`}
      >{`${title} x${quantity}`}</li>
    ))}
  </ListReset>
);

ItemList.propTypes = {
  items: PropTypes.array.isRequired
};
