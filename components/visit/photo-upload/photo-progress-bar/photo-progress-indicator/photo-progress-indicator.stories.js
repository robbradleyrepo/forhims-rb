import React from "react";
import { storiesOf } from "@storybook/react";
import { number, select } from "@storybook/addon-knobs";
import { PhotoProgressIndicator } from "./photo-progress-indicator.component";
import styled from "styled-components";

storiesOf("Components|EMR/Photo/Indicator", module).add("Step", () => {
  const step = select(
    "This step is:",
    {
      active: "the active step",
      completed: "a completed step",
      remaining: "a remaining step"
    },
    "completed"
  );

  const stepProps = {
    active: {
      isCompleted: false,
      isActiveStep: true
    },
    remaining: {
      isCompleted: false,
      isActiveStep: false
    },
    completed: {
      isCompleted: true,
      isActiveStep: false
    }
  };

  const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.canvas.primary};
  `;

  return (
    <Container>
      <PhotoProgressIndicator
        step={number("step number", 2)}
        {...stepProps[step]}
      />
    </Container>
  );
});
