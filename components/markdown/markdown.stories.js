import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";

import { Markdown } from "./markdown.component";

storiesOf("Components|Markdown", module).addWithJSX("Markdown", () => {
  const exampleText = text(
    "Text",
    `
# Title

* bullet
* bullet

be the ~~paragraph~~ you want __to see__ in [this world](https://www.google.com)

this one is just a  
linebreak
  `
  );
  return <Markdown content={exampleText} />;
});
