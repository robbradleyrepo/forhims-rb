import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { LegalPageComponent } from "./legal-page.component";

storiesOf("Modules|Legal Page", module).addWithJSX("Basic", () => {
  const copy = text("copy", `I am __markdown enabled text__`);
  const image = text("image", "hers-purpose-atf-2x");
  return (
    <LegalPageComponent
      copy={copy}
      title="Hers terms and conditions"
      image={image}
    />
  );
});
