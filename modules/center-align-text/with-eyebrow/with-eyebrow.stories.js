import React from "react";
import { storiesOf } from "@storybook/react";
import { text, object } from "@storybook/addon-knobs";
import { withProductCategorySelectorKnob } from "../../../utils/storybook";
import { CenterAlignTextWithEyebrow } from "./with-eyebrow.component";

const defaultSmallText = `the [struggle](#) to receive [birth control](#) is absurd. We’d like to change that.`;

const defaultLargeText = `the [struggle](#) to receive [birth control](#) is absurd. We’d like to change that.`;

const defaultEyebrowText = `Here's the crucial bit`;

const defaultBgImages = {
  xs: "https://via.placeholder.com/360x360",
  sm: "https://via.placeholder.com/768x768",
  md: "https://via.placeholder.com/1024x500",
  lg: "https://via.placeholder.com/1440x680"
};

storiesOf("Modules|(Big Fancy) Center Aligned Text/With Eyebrow", module)
  .addDecorator(withProductCategorySelectorKnob)
  .add("Center Aligned Text With Eyebrow", () => {
    const largeText = text("Large Text", defaultLargeText);
    const smallText = text("Small Text", defaultSmallText);
    const eyebrowText = text("Eyebrow Text", defaultEyebrowText);
    const bgImages = object("Background Images", defaultBgImages);

    return (
      <React.Fragment>
        <CenterAlignTextWithEyebrow
          largeText={largeText}
          smallText={smallText}
          bgImages={bgImages}
          eyebrowText={eyebrowText}
        />
      </React.Fragment>
    );
  });
