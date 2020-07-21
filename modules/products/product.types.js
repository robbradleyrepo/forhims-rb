import PropTypes from "prop-types";

export const ProductProps = {
  bundleId: PropTypes.string,
  bundleIds: PropTypes.arrayOf(PropTypes.string),
  contents: PropTypes.any,
  description: PropTypes.string,
  id: PropTypes.string,
  isBundle: PropTypes.bool,
  meta: PropTypes.any,
  prescriptions: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.number,
  requiresConsultation: PropTypes.bool,
  requiresSubscription: PropTypes.bool,
  sku: PropTypes.string,
  status: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  taxCode: PropTypes.any,
  title: PropTypes.string,
  productDetail: PropTypes.string,
  purchaseDetail: PropTypes.string
};
