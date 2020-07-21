import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";
import React from "react";

import { FiftyFiftyTextContent } from "./fifty-fifty-text-content.component";

storiesOf("Components|Fifty Fifty Text Content", module)
  .add("Default Fifty Fifty Text Content", () => {
    const title = text("Title", "Save your hair");
    const body = text(
      "Body",
      "The best way to tell if you are losing your hair is to keep track of your hairline by periodically taking photos for reference."
    );
    const ctaText = text(
      "CTA Text",
      "Learn: How to tell if you’re losing your hair"
    );
    const ctaUrl = text(
      "CTA URL",
      "/the-early-signs-of-balding-and-how-to-stop-them"
    );

    const halfWidthPreview = boolean("Half width preview", false);

    return (
      <div style={{ width: halfWidthPreview ? "50%" : "100%" }}>
        <FiftyFiftyTextContent
          title={title}
          body={body}
          ctaText={ctaText}
          ctaUrl={ctaUrl}
        />
      </div>
    );
  })
  .add("Fifty Fifty Text Content with Button", () => {
    const title = text("Title", "Save your hair");
    const body = text(
      "Body",
      "The best way to tell if you are losing your hair is to keep track of your hairline by periodically taking photos for reference."
    );
    const ctaText = text("CTA Text", "Treat Hair");
    const ctaUrl = text(
      "CTA URL",
      "/the-early-signs-of-balding-and-how-to-stop-them"
    );

    const halfWidthPreview = boolean("Half width preview", false);

    return (
      <div style={{ width: halfWidthPreview ? "50%" : "100%" }}>
        <FiftyFiftyTextContent
          title={title}
          body={body}
          ctaText={ctaText}
          ctaUrl={ctaUrl}
          hasButtonCta
        />
      </div>
    );
  })
  .add("Fifty Fifty Text Content with List", () => {
    const title = text(
      "Title",
      "No doctors appointments, no waiting rooms, no awkward conversations"
    );
    const subTitle = text("subTitle", "How does it work?");

    const itemOne = text(
      "ItemOne",
      "Secure online consultation. Complete the consultation in the comfort of your own home"
    );
    const itemTwo = text(
      "ItemTwo",
      "The doctor will see you now. A doctor will review your completed consultation"
    );
    const itemThree = text(
      "ItemThree",
      "Delivered to your door. At your door after online doctor approval"
    );

    const items = [itemOne, itemTwo, itemThree];

    const halfWidthPreview = boolean("Half width preview", false);

    return (
      <div style={{ width: halfWidthPreview ? "50%" : "100%" }}>
        <FiftyFiftyTextContent
          title={title}
          subTitle={subTitle}
          items={items}
        />
      </div>
    );
  });
