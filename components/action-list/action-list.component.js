import React from "react";
import PropTypes from "prop-types";
import ReactCSSCollapse from "react-css-collapse";
import { ListReset } from "../elements";
import { ActionListItem, ActionListItemButton } from "./action-list.style";
import { transitions } from "../../theme/motion";
import { zIndexes } from "../../theme/z-index";
import { Button } from "../button";
import { Block } from "../block";

export class ActionList extends React.Component {
  state = {
    isOpen: false
  };
  wrapperRef = React.createRef();
  handleClickListItem = actionOnClick => {
    const { isOpen } = this.state;
    actionOnClick();
    this.setState({ isOpen: !isOpen });
  };
  handleBlur = e => {
    if (!this.wrapperRef.current.contains(e.relatedTarget)) {
      this.setState({ isOpen: false });
    }
  };
  render() {
    const { actions, buttonLabel, className } = this.props;
    const { isOpen } = this.state;
    return (
      <Block
        display="inline-block"
        position="relative"
        ref={this.wrapperRef}
        onBlur={this.handleBlur}
        className={className}
      >
        <Button
          label={buttonLabel}
          onClick={() => this.setState({ isOpen: !isOpen })}
        />
        <Block position="absolute" width="100%" zIndex={zIndexes.foreground}>
          <ReactCSSCollapse
            isOpen={isOpen}
            transition={`height ${transitions.speed.fast} ${
              transitions.easing.default
            }`}
          >
            <ListReset>
              {actions.map(({ label, onClick, disabled }, index) => (
                <ActionListItem key={`action-${label}-${index}`}>
                  <ActionListItemButton
                    onClick={() => this.handleClickListItem(onClick)}
                    disabled={disabled}
                  >
                    {label}
                  </ActionListItemButton>
                </ActionListItem>
              ))}
            </ListReset>
          </ReactCSSCollapse>
        </Block>
      </Block>
    );
  }
}

ActionList.propTypes = {
  buttonLabel: PropTypes.string,
  actions: PropTypes.array,
  className: PropTypes.string
};
