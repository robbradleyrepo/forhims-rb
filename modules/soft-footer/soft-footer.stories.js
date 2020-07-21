import React from "react";
import { storiesOf } from "@storybook/react";
import { SoftFooter } from "./soft-footer.component";
import { text } from "@storybook/addon-knobs";

storiesOf("Modules|Soft Footer", module).addWithJSX(
  "Default Soft Footer",
  () => {
    const image = text("Cloudinary Image Id", "hims-softfooter-01.jpg");

    const bgColor = text("Bg Color", "frostGray");

    const imageAltText = text("Image Alt Text", "wine glass");

    const mainText = text(
      "text",
      `Classic signs of balding: your hair is acting differently, you're finding hair everywhere, and you see your hair is getting bigger. Do something while you still have some hair!`
    );

    const eyebrowText = text(
      "eyebrow text",
      "Prevention is more effective than denial"
    );

    return (
      <SoftFooter
        bgColor={bgColor}
        eyebrowText={eyebrowText}
        image={image}
        imageAltText={imageAltText}
        text={mainText}
      />
    );
  }
);
