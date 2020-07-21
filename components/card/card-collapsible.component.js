import React from "react";
import PropTypes from "prop-types";
import ReactCSSCollapse from "react-css-collapse";
import { compose, withState, withHandlers } from "recompose";

import { Card } from "./card.component";
import { Block } from "../block";
import { ButtonReset } from "../elements";

import { transitions } from "../../theme/motion";
import { colors } from "../../theme/colors";
import { ArrowIcon } from "../icons/arrow-icon";

const withOpenToggle = compose(
  withState(
    "isOpen",
    "toggle",
    ({ isOpenByDefault = true }) => isOpenByDefault
  ),
  withHandlers({
    toggle: ({ toggle }) => () => toggle(isOpen => !isOpen)
  })
);

export const CardCollapsible = withOpenToggle(
  ({ children, isOpen, title, toggle }) => (
    <Card>
      <Block display="flex" alignItems="center">
        {title}
        <Block ml="auto">
          <ButtonReset onClick={toggle}>
            <ArrowIcon direction="down" color={colors.text.primary} />
          </ButtonReset>
        </Block>
      </Block>
      <ReactCSSCollapse
        isOpen={isOpen}
        transition={`height ${transitions.speed.slow} ${
          transitions.easing.spring
        }`}
      >
        <Block pt={3}>{children}</Block>
      </ReactCSSCollapse>
    </Card>
  )
);
CardCollapsible.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  isOpenByDefault: PropTypes.bool,
  title: PropTypes.element,
  toggle: PropTypes.func
};
