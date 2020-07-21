import React from "react";
import styled from "styled-components";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { ActionList } from "./action-list.component";

storiesOf("Components|Action List", module).add("Default Action List", () => {
  const PreviewContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.canvas.primary};
    width: 100%;
    height: 100vh;
  `;
  const buttonLabel = text("Button label", "Actions");
  const actionOne = text("Action one", "Snooze");
  const actionOneOnClick = action("one onClick");
  const actionTwo = text("Action two", "Cancel");
  const actionTwoOnClick = action("two onClick");

  return (
    <PreviewContainer>
      <ActionList
        buttonLabel={buttonLabel}
        actions={[
          { label: actionOne, onClick: actionOneOnClick },
          { label: actionTwo, onClick: actionTwoOnClick }
        ]}
      />
    </PreviewContainer>
  );
});
