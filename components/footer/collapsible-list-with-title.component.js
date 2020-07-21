import React from "react";
import {
  CollapsibleListTitle,
  FooterLink,
  LinkList,
  ToggleButton
} from "./footer.style";
import { ListWithTitleTypes } from "./list-with-title.types";
import ReactCSSCollapse from "react-css-collapse";
import { compose, withState, withHandlers } from "recompose";
import { transitions } from "../../theme/motion";
import { PlusIcon } from "../icons/plus-icon";
import { colors } from "../../theme/colors";

const withOpenToggle = compose(
  withState("isOpen", "toggle", false),
  withHandlers({
    toggle: ({ toggle }) => () => toggle(isOpen => !isOpen)
  })
);

export const CollapsibleListWithTitle = withOpenToggle(
  ({ title, items, toggle, isOpen }) => (
    <React.Fragment>
      <CollapsibleListTitle onClick={() => toggle()}>
        {title}
        <ToggleButton aria-label="Toggle List">
          <PlusIcon color={colors.white} />
        </ToggleButton>
      </CollapsibleListTitle>
      <ReactCSSCollapse
        isOpen={isOpen}
        transition={`height ${transitions.speed.slow} ${
          transitions.easing.default
        }`}
      >
        <LinkList>
          {items.map((item, index) => (
            <li key={`${item}-${index}`}>
              <FooterLink to={item.url}>{item.label}</FooterLink>
            </li>
          ))}
        </LinkList>
      </ReactCSSCollapse>
    </React.Fragment>
  )
);

CollapsibleListWithTitle.propTypes = ListWithTitleTypes;
