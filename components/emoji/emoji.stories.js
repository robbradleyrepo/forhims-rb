import React from "react";
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs/react";

import { fontSizes } from "../../theme/typography";
import { themeKeysToStorySelect } from "../../utils/storybook";
import { P } from "../fonts";

import { Emoji } from "./emoji.component";

const fontSizeSelect = themeKeysToStorySelect(fontSizes);

storiesOf("Components|Emoji", module)
  .addWithJSX("Default Emoji", () => {
    const exampleText = text("Emoji", "🙋🏼‍♂️");
    return <Emoji>{exampleText}</Emoji>;
  })
  .addWithJSX("Custom Sized Emoji", () => {
    const exampleText = text("Emoji", "🍆");
    const size = select("Size", fontSizeSelect, "displayLarge");
    return <Emoji size={size}>{exampleText}</Emoji>;
  })
  .addWithJSX("Emoji in Context", () => {
    const exampleText = text("Emoji", "🙋‍♂️🙋🏿‍♂️🙋🏻‍♂️‍🙋🏾‍♂️‍");
    const inlineSize = select("Size", fontSizeSelect, "bodyMedium");
    return (
      <P>
        We’re a men’s wellness brand made for every man. Seriously, every man.{" "}
        <Emoji size={inlineSize}>{exampleText}</Emoji>
      </P>
    );
  });
