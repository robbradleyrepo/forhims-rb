import React from "react";
import PropTypes from "prop-types";
import { PoseGroup } from "react-pose";

import {
  AnimatedNavigationList,
  AnimatedNavigationListItem
} from "./primary-navigation-list.style";

export const PrimaryNavigationList = ({
  slowStart,
  children,
  position = "left"
}) => (
  <nav>
    <PoseGroup animateOnMount>
      <AnimatedNavigationList key="primary-nav-list" position={position}>
        {children.map((item, i) => (
          <AnimatedNavigationListItem
            key={`item-${item.to}-${i}`}
            i={i}
            slowStart={slowStart}
            position={position}
          >
            {item}
          </AnimatedNavigationListItem>
        ))}
      </AnimatedNavigationList>
    </PoseGroup>
  </nav>
);

PrimaryNavigationList.propTypes = {
  isVisible: PropTypes.bool,
  slowStart: PropTypes.bool,
  children: PropTypes.node,
  position: PropTypes.oneOf(["left", "right"])
};
