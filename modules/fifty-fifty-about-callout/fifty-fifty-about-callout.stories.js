import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import { FiftyFiftyAboutCallout } from "./fifty-fifty-about-callout.component";

const PreviewContainer = styled.div`
  background-color: peachpuff;
  min-height: 100vh;
  overflow: auto;
`;

storiesOf("Modules|Fifty Fifty Callout", module).addWithJSX(
  "Specialized for About Page",
  () => {
    const title = text("Title", "Title Here");
    const body = text(
      "Body",
      "Hands want something to run through. The wind wants something to mess up. Graciously oblige by doing what you need to do to keep your hair on your head. 💁‍♂️"
    );
    const imageId = text("Image ID", "hims-about-callout-01");

    return (
      <PreviewContainer>
        <FiftyFiftyAboutCallout
          id="fifty-fifty-callout-storybook"
          {...{ title, body, imageId }}
        />
      </PreviewContainer>
    );
  }
);
