import React from "react";
import { storiesOf } from "@storybook/react";
import { ImageAndText } from "./image-and-text.component";
import { text, boolean } from "@storybook/addon-knobs";

storiesOf("Modules|Image and Text", module).addWithJSX("Default", () => {
  const image = text("Cloudinary Image Id", "guide-forhims.png");

  const imageAltText = text("Image Alt Text", "Guide");

  const heading = text(
    "heading",
    `5 signs of thinning hair men should watch for in their 20s`
  );

  const mainText = text(
    "textOne",
    `Hair loss is something that happens to the majority of men at some point in time.`
  );

  const mainTextTwo = text(
    "textTwo",
    `Download the guide and start getting clued up on what you can do today that your future self will thank you for.`
  );

  const hasButtonCta = boolean("Large Call to Action", true);

  const ctaText = text("CTA Text", "Downlad Guide");

  const ctaUrl = text(
    "CTA URL",
    "/the-early-signs-of-balding-and-how-to-stop-them"
  );

  return (
    <ImageAndText
      image={image}
      imageAltText={imageAltText}
      heading={heading}
      text={mainText}
      textTwo={mainTextTwo}
      ctaText={ctaText}
      ctaUrl={ctaUrl}
      hasButtonCta={hasButtonCta}
    />
  );
});
