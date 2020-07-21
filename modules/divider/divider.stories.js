import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { Divider } from "./divider.component";

export const PreviewContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
`;

export const ExampleModule = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
  display: flex;
  justify-content: center;
  min-height: 12rem;
`;

storiesOf("Modules|Divider", module).add("Default Divider", () => (
  <PreviewContainer>
    <ExampleModule>
      <p>This is some example content in a module</p>
    </ExampleModule>
    <Divider />
    <ExampleModule>
      <p>This is some example content in another module</p>
    </ExampleModule>
  </PreviewContainer>
));
