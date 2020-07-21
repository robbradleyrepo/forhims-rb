import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { text, select, boolean } from "@storybook/addon-knobs";

import { FiftyFiftyWithOverlap } from "./fifty-fifty-with-overlap.component";

const PreviewContainer = styled.div`
  background-color: peachpuff;
  min-height: 100vh;
  overflow: auto;
`;

const FillImage = styled.img`
  width: 100%;
  display: block;
`;

storiesOf("Modules|Fifty Fifty with overlap", module)
  .addWithJSX("Static", () => {
    const eyebrow = text("Eyebrow", "what is it good for?");
    const title = text("Title", "Hair");
    const description = text(
      "Description",
      "Hands want something to run through. The wind wants something to mess up. Graciously oblige by doing what you need to do to keep your hair on your head. 💁‍♂️"
    );
    const cta = text("CTA", "Get the goods");

    const CardContent = () => (
      <React.Fragment>
        <h4>{eyebrow}</h4>
        <h2>{title}</h2>
        <p>{description}</p>
        <button>{cta}</button>
      </React.Fragment>
    );

    return (
      <PreviewContainer>
        <h2>Overlap</h2>
        <FiftyFiftyWithOverlap
          cardSide="right"
          overlap={true}
          stacksOnTop="right"
        >
          <FillImage src="https://via.placeholder.com/600x400" alt="" />
          <CardContent />
        </FiftyFiftyWithOverlap>

        <FiftyFiftyWithOverlap
          cardSide="left"
          overlap={true}
          stacksOnTop="left"
        >
          <CardContent />
          <FillImage src="https://via.placeholder.com/400x600" alt="" />
        </FiftyFiftyWithOverlap>

        <h2>No Overlap</h2>
        <FiftyFiftyWithOverlap cardSide="right" stacksOnTop="right">
          <FillImage src="https://via.placeholder.com/600x400" alt="" />
          <CardContent />
        </FiftyFiftyWithOverlap>

        <FiftyFiftyWithOverlap cardSide="left" stacksOnTop="right">
          <CardContent />
          <FillImage src="https://via.placeholder.com/600x400" alt="" />
        </FiftyFiftyWithOverlap>
      </PreviewContainer>
    );
  })
  .addWithJSX("Interactive", () => {
    const makeLeftRightSelect = (label, defaultValue = "left") =>
      select(label, { left: "left", right: "right" }, defaultValue);

    const imageUrl = text("image url", "https://via.placeholder.com/600x300");

    const cardSide = makeLeftRightSelect("cardSide", "right");
    const overlap = boolean("overlap", true);
    const stacksOnTop = makeLeftRightSelect("stacksOnTop", "right");

    const eyebrow = text("Eyebrow", "what is it good for?");
    const title = text("Title", "Hair");
    const description = text(
      "Description",
      "Hands want something to run through. The wind wants something to mess up. Graciously oblige by doing what you need to do to keep your hair on your head. 💁‍♂️"
    );
    const cta = text("CTA", "Get the goods");

    const CardContent = () => (
      <React.Fragment>
        <h4>{eyebrow}</h4>
        <h2>{title}</h2>
        <p>{description}</p>
        <button>{cta}</button>
      </React.Fragment>
    );

    return (
      <PreviewContainer>
        <FiftyFiftyWithOverlap
          cardSide={cardSide}
          overlap={overlap}
          stacksOnTop={stacksOnTop}
        >
          <FillImage src={imageUrl} alt="" />
          <CardContent />
        </FiftyFiftyWithOverlap>
      </PreviewContainer>
    );
  });
