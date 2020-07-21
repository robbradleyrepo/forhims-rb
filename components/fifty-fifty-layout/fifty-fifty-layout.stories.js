import { FiftyFiftyLayout } from "./fifty-fifty-layout.component";
import { P, Headline2 } from "../fonts";
import { storiesOf } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { select, text } from "@storybook/addon-knobs";

const FullWidthThing = styled.div`
  background-color: peachpuff;
  padding: 2rem;
  width: 100%;
`;

const HalfWidthThing = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  margin: auto;
  padding: 2rem;
  width: 100%;
  > * {
    width: 50%;
    margin: auto;
  }
`;

const defaultShortText = "What is Lorem Ipsum?";
const defaultLongText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the
1500s, when an unknown printer took a galley of type and scrambled it to
make a type specimen book. It has survived not only five centuries, but
also the leap into electronic typesetting, remaining essentially
unchanged. It was popularised in the 1960s with the release of Letraset
sheets containing Lorem Ipsum passages, and more recently with desktop
publishing software like Aldus PageMaker including versions of Lorem
Ipsum.`;

const stackingOrderOptions = { left: "left", right: "right" };

storiesOf("Components|Layout/Layout Components", module).addWithJSX(
  "Fifty-Fifty Layout",
  () => {
    const stackedOnTop = select("stacking order", stackingOrderOptions, "left");
    const shortText = text("short text", defaultShortText);
    const longText = text("long text", defaultLongText);

    return (
      <FiftyFiftyLayout stacksOnTop={stackedOnTop}>
        <HalfWidthThing>
          <Headline2>{shortText}</Headline2>
        </HalfWidthThing>
        <FullWidthThing>
          <P>{longText}</P>
        </FullWidthThing>
      </FiftyFiftyLayout>
    );
  }
);
