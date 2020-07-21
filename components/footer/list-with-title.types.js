import PropTypes from "prop-types";

const LinkTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export const ListWithTitleTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape(LinkTypes)).isRequired,
  isCollapsible: PropTypes.bool
};
