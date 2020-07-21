import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import WebcamCapture from "./index";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  text-align: center;
`;

storiesOf("Components|EMR/Webcam", module).add("Head", () => {
  return (
    <Container>
      <WebcamCapture
        direction={text("examplePhoto", "example")}
        setImage={action("setImage")}
      />
    </Container>
  );
});
