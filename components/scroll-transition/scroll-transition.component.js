import React from "react";
import PropTypes from "prop-types";
import Observer from "react-intersection-observer";

import { isClient } from "../../utils";

// Polyfill intersection-observer for safari, IE
// TODO: Enable dynamic polyfilling in Webpack build
if (isClient()) {
  const IntersectionObserverPolyfill = require("intersection-observer"); // eslint-disable-line
}

export const ScrollTransition = ({ children, ...props }) => {
  const { offset, threshold, triggerOnce = true } = props;
  return (
    <Observer
      rootMargin={offset}
      threshold={threshold}
      triggerOnce={triggerOnce}
    >
      {({ inView, ref }) => (
        <span ref={ref}>{children({ isVisible: inView })}</span>
      )}
    </Observer>
  );
};
ScrollTransition.propTypes = {
  children: PropTypes.func.isRequired,
  offset: PropTypes.number,
  threshold: PropTypes.number,
  triggerOnce: PropTypes.bool
};
