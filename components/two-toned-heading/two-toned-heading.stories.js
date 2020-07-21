import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs/react";
import React from "react";

import {
  Headline0,
  Headline1,
  Headline2,
  Headline3,
  Headline4
} from "../fonts";

import { TwoTonedHeading } from "./two-toned-heading.component";

export const Heading = ({ level, ...props }) => {
  switch (parseInt(level, 10)) {
    case 0:
      return <Headline0 {...props} />;
    case 1:
      return <Headline1 {...props} />;
    case 2:
      return <Headline2 {...props} />;
    case 3:
      return <Headline3 {...props} />;
    default:
      return <Headline4 {...props} />;
  }
};

storiesOf("Components|Two Toned Heading", module).add(
  "Two Toned Heading",
  () => {
    const level = select(
      "Heading Level",
      {
        "0": "Headline0",
        "1": "Headline1",
        "2": "Headline2",
        "3": "Headline3",
        "4": "Headline4"
      },
      1
    );
    const part1 = text("Part 1", "the");
    const part2 = text("Part 2", "shampoo");
    return (
      <Heading level={level}>
        <TwoTonedHeading>
          <span>{part1}</span>
          <span>{part2}</span>
        </TwoTonedHeading>
      </Heading>
    );
  }
);
