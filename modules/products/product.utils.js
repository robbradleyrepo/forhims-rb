import { withHandlers } from "recompose";

import { hasValue } from "../../utils";

export const withOtcAddToCartHandler = withHandlers({
  onProductClick: ({ addToCart, id, requiresConsultation }) => {
    return event => {
      if (hasValue(id) && !requiresConsultation) {
        // Prevent redirect to link on button click
        event.preventDefault();
        addToCart(id);
      }
    };
  }
});
