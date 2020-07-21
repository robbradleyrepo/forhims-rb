import React from "react";
import { storiesOf } from "@storybook/react";
import { number, array } from "@storybook/addon-knobs";
import styled from "styled-components";
import { PhotoProgressBar } from "./photo-progress-bar.component";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.canvas.primary};
`;

storiesOf("Components|EMR/Photo/Indicator", module).add("Bar", () => {
  const ACTIVE_STEP = 3;
  const STEPS = ["SELFIE", "HEAD", "FACE", "ID"];

  return (
    <Container>
      <PhotoProgressBar
        activeStep={number("Active Step - zero indexed", ACTIVE_STEP)}
        steps={array("steps", STEPS)}
      />
    </Container>
  );
});
