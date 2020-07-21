import PropTypes from "prop-types";

export const modalPropTypes = {
  closeModal: PropTypes.func.isRequired
};

export const legalModalPropTypes = {
  handleClose: PropTypes.func.isRequired,
  content: PropTypes.string,
  title: PropTypes.string
};
