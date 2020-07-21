import React, { Component } from "react";
import PropTypes from "prop-types";
import { Loading } from "../loading";
import { spacing } from "../../theme/spacing";
import {
  RadioItemLabel,
  RadioItemWrapper,
  RadioItemRadioInput
} from "./radio.style";

export class Radio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: 0
    };
  }

  getItem(index, child) {}

  changeSelection(index) {
    this.setState(
      {
        selectedItem: index
      },
      () => {
        this.props.onChange(this.props.options[this.state.selectedItem].title);
      }
    );
  }

  getItems() {
    if (this.props.options) {
      return this.props.options.map((element, index) => {
        return (
          <RadioItemWrapper key={index}>
            <RadioItemRadioInput
              type="radio"
              name={this.props.radioName}
              checked={this.state.selectedItem === index}
              onChange={e => {}}
            />

            <RadioItemLabel
              onClick={() => {
                this.changeSelection(index);
              }}
            >
              {element.body}
            </RadioItemLabel>
          </RadioItemWrapper>
        );
      });
    }
    return <Loading color={"#000000"} spacing={spacing.four} />;
  }
  render() {
    return this.getItems();
  }
}

Radio.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array,
  radioName: PropTypes.string
};
