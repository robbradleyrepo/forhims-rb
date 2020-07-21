import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import {
  RangeInput,
  RangeSliderWrapper,
  RangeSliderMin,
  RangeSliderMax,
  RangeValue,
  RangeInputWrapper,
  RangePathTrack,
  RangePathTrackInner,
  RangeBoundsWrapper,
  IconPathTrack,
  ThumbIcon
} from "./range-slider.style";

export class RangeSlider extends Component {
  state = {
    value: 0,
    dragging: false
  };

  componentDidMount() {
    this.setState({ value: this.props.value });
  }

  handleChange = event => this.setState({ value: event.target.value });
  handleMouseDown = () => this.setState({ dragging: true });
  handleMouseUp = () => this.setState({ dragging: false });

  getPathWidth = (min, max, value) => (100 * (value - min)) / (max - min);

  render() {
    const { min = 0, max = 100, step = 1, icon, iconColor } = this.props;
    const { value, dragging } = this.state;
    const { handleChange, handleMouseDown, handleMouseUp, getPathWidth } = this;
    const pathWidth = getPathWidth(min, max, value);
    return (
      <Fragment>
        <RangeSliderWrapper>
          <RangeInputWrapper>
            <RangeInput
              min={min}
              max={max}
              step={step}
              value={value}
              onChange={handleChange}
              onTouchStart={handleMouseDown}
              onTouchEnd={handleMouseUp}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            />
            {icon && (
              <IconPathTrack>
                <ThumbIcon left={pathWidth} color={iconColor}>
                  {icon}
                </ThumbIcon>
              </IconPathTrack>
            )}
            <RangePathTrack>
              {value && value > 0 && <RangePathTrackInner width={pathWidth} />}
              {dragging && (
                <RangeValue left={pathWidth}>{value || min}</RangeValue>
              )}
            </RangePathTrack>
            <RangeBoundsWrapper>
              <RangeSliderMin>{min}</RangeSliderMin>
              <RangeSliderMax>{max}</RangeSliderMax>
            </RangeBoundsWrapper>
          </RangeInputWrapper>
        </RangeSliderWrapper>
      </Fragment>
    );
  }
}

RangeSlider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  icon: PropTypes.string,
  iconColor: PropTypes.string
};
