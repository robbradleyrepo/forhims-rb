import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { ImageTornado } from "./image-tornado.component";

storiesOf("Modules|Image Tornado", module).addWithJSX("Image Tornado", () => {
  const buttonLabel = text("Button Label", "our purpose");

  const description = text(
    "Description",
    `you know your body. we have the solutions. taking care is now easier—  
and that’s a beautiful thing.`
  );
  const buttonUrl = text("Button url", "/purpose");

  return (
    <ImageTornado
      description={description}
      buttonLabel={buttonLabel}
      buttonUrl={buttonUrl}
      images={[
        "https://via.placeholder.com/720x910.jpg",
        "https://via.placeholder.com/720x910.jpg",
        "https://via.placeholder.com/2880x2980.jpg",
        "https://via.placeholder.com/2880x2980.jpg"
      ]}
    />
  );
});
