import React from "react";
import styled from "styled-components";

import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { Headline } from "./headline.component";

const PreviewContainer = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
`;

storiesOf("Modules|Headline", module)
  .add("Default", () => {
    const headlineText = text("Headline Text", "That's where we come in");
    return (
      <PreviewContainer>
        <Headline headlineText={headlineText} />
      </PreviewContainer>
    );
  })
  .add("With Eyebrow", () => {
    const headlineText = text("Headline Text", "That's where we come in");
    const eyebrowText = text("Eyebrow Text", "Trusted, easy and affordable.");

    return (
      <PreviewContainer>
        <Headline headlineText={headlineText} eyebrowText={eyebrowText} />
      </PreviewContainer>
    );
  });
