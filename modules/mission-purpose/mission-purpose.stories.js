import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { MissionPurpose } from "./mission-purpose.component";

storiesOf("Modules", module).addWithJSX("Mission/Purpose", () => {
  const eyebrow = text("Eyebrow", "The Hims Mission");
  const body = text(
    "Body",
    `Create an open and empowered male culture that results in more proactivity around health and preventative self-care.`
  );
  const linkText = text("Link text", "Learn more about Hims");
  const linkUrl = text("Link URL", "/about");
  const imageId = text("Image ID", "hims-home-mission-01.jpg");

  const imageAltText = text("Image Alt Text", "Hair Brush");

  return (
    <MissionPurpose
      eyebrow={eyebrow}
      body={body}
      linkText={linkText}
      linkUrl={linkUrl}
      image={imageId}
      imageAltText={imageAltText}
    />
  );
});
