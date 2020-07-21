import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { text, boolean, select } from "@storybook/addon-knobs";

import { FiftyFiftyCallout } from "./fifty-fifty-callout.component";

const PreviewContainer = styled.div`
  background-color: peachpuff;
  min-height: 100vh;
  overflow: auto;
`;

const leftRightSelect = {
  left: "left",
  right: "right"
};

storiesOf("Modules|Fifty Fifty Callout", module).addWithJSX(
  "Default Fifty Fifty Callout",
  () => {
    const title = text("Title", "Hair");
    const description = text(
      "Description",
      "Hands want something to run through. The wind wants something to mess up. Graciously oblige by doing what you need to do to keep your hair on your head. 💁‍♂️"
    );
    const cta = text("CTA", "Get the goods");
    const imageId = text("Image ID", "hims-home-sex-01");
    const hoverImageId = text("Hover image id", "hims-home-sex-01-hover");
    const imageAltText = text(
      "Image Alt Text",
      "a plant with leaves falling off"
    );
    const hasButtonCta = boolean("Large Call to Action", true);
    const overlaps = boolean("Overlaps", true);
    const cardSide = select("Card Side", leftRightSelect, "left");
    const stacksOnTop = select("Stacks on Top", leftRightSelect, "left");

    return (
      <PreviewContainer>
        <FiftyFiftyCallout
          body={description}
          cardSide={cardSide}
          ctaText={cta}
          ctaUrl=""
          hasButtonCta={hasButtonCta}
          id="fifty-fifty-callout-storybook"
          imageAltText={imageAltText}
          imageId={imageId}
          hoverImageId={hoverImageId}
          overlap={overlaps}
          stacksOnTop={stacksOnTop}
          title={title}
        />
      </PreviewContainer>
    );
  }
);
