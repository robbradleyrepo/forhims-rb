import PropTypes from "prop-types";

export const CartProductProps = {
  description: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  requiresSubscription: PropTypes.bool,
  title: PropTypes.string,
  errorMessage: PropTypes.string
};

export const CartLineItemProps = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isHighlighted: PropTypes.bool
};
