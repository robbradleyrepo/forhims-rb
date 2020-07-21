import React from "react";
import { storiesOf } from "@storybook/react";

import { ImageBlock } from "./image-block.component";

storiesOf("Modules|Images/Image Block", module)
  .addWithJSX("Default Image Block", () => {
    return <ImageBlock image="hims-home-sex-01" title="Storybook test" />;
  })
  .addWithJSX("With hover image", () => {
    return (
      <ImageBlock
        image="hims-home-sex-01"
        hoverImage="hims-home-sex-01-hover"
        title="Storybook test"
      />
    );
  });
