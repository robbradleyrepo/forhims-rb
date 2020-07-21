import React from "react";
import { storiesOf } from "@storybook/react";
import { object } from "@storybook/addon-knobs/react";
import { DynamicPage } from "./dynamic-page.component";

storiesOf("Components|Dynamic Page", module).add("Primary", () => {
  const defaultValue = {
    componentType: "page",
    props: {
      sections: [
        {
          componentType: "button",
          props: {
            label: "Click Me!"
          }
        },
        {
          componentType: "markdown",
          props: {
            content: `# CMS Page
Link to [home](/)
Link to [Google](https://www.google.com)

* bullet
* bullet

1. number
1. number

be the ~~paragraph~~ you *want* to see on the world

this one is just a
linebreak`
          }
        }
      ]
    }
  };

  const data = object("Data", defaultValue);

  return <DynamicPage data={data} />;
});
