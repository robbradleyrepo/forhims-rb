import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import styled from "styled-components";

import { TextLink } from "../fonts";

import { Curtain } from "./curtain.component";

const ExtraSpace = styled.div`
  height: 150vh;
`;

storiesOf("Components|Curtain", module).add("Curtain", () => {
  const visible = boolean("Curtain Visible", true);
  return (
    <React.Fragment>
      <Curtain visible={visible} onClick={action("curtain-click")} />
      <TextLink href="https://www.example.com" target="blank">
        can you click me under the curtain?
      </TextLink>
      <ExtraSpace />
      <p>Can you scroll to me under the curtain?</p>
    </React.Fragment>
  );
});
