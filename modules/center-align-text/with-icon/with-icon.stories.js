import React from "react";
import { storiesOf } from "@storybook/react";
import { text, object } from "@storybook/addon-knobs";
import { withProductCategorySelectorKnob } from "../../../utils/storybook";
import { CenterAlignTextWithIcon } from "./with-icon.component";
import { Block } from "../../../components/block";
import { SexMadeByWomenIcon } from "../../../components/icons";

const defaultSmallText = `As women who value our health, We’re here to do what we do best— Roll up our sleeves to get shit done right.
\n\nWelcome to Hers.  
Earned it. Now care for it.`;

const defaultLargeText = `As women who value our health, We’re here to do what we do best— Roll up our sleeves to get shit done right.
\n\nWelcome to Hers.  
Earned it. Now care for it.`;

const defaultBgImages = {
  xs: "https://via.placeholder.com/360x360",
  sm: "https://via.placeholder.com/768x768",
  md: "https://via.placeholder.com/1024x500",
  lg: "https://via.placeholder.com/1440x680"
};

storiesOf("Modules|(Big Fancy) Center Aligned Text/With Icon", module)
  .addDecorator(withProductCategorySelectorKnob)
  .add("Markdown Renderer", () => {
    const largeText = text("Large Text", defaultLargeText);
    const smallText = text("Small Text", defaultSmallText);
    const bgImages = object("Background Images", defaultBgImages);

    return (
      <Block height="100vh">
        <CenterAlignTextWithIcon
          largeText={largeText}
          smallText={smallText}
          bgImages={bgImages}
          icon={<SexMadeByWomenIcon />}
        />
      </Block>
    );
  });
