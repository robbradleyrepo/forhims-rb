import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

// Generic solution for managing page scroll until we find edge cases
// See: https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md

class ScrollToTopComponent extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

ScrollToTopComponent.propTypes = {
  location: PropTypes.object,
  children: PropTypes.node
};

export const ScrollToTop = withRouter(ScrollToTopComponent);
