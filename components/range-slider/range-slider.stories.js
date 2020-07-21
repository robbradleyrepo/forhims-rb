import React from "react";
import { storiesOf } from "@storybook/react";
import { number } from "@storybook/addon-knobs";
import styled from "styled-components";
import { RangeSlider } from "./range-slider.component";
import { colors } from "../../theme/colors";

const Wrapper = styled.div`
  padding: 50px;
  width: 400px;
`;

storiesOf("Components|Forms/Range Slider", module).addWithJSX("Default", () => (
  <Wrapper>
    <RangeSlider
      min={number("min", 60)}
      max={number("max", 120)}
      step={number("step", 1)}
      icon="▵"
      iconColor={colors.bloodPressure.systolic}
    />
  </Wrapper>
));
