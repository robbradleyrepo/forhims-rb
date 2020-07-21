import React from "react";
import { storiesOf } from "@storybook/react";
import { text, number, boolean } from "@storybook/addon-knobs";
import {
  HoverSprite,
  HoverSpriteWithoutCloudinary
} from "./hover-sprite.component";

storiesOf("Modules|Hover Sprite", module)
  .add("without Cloudinary", () => {
    const desktopImageSrc = text(
      "desktopImageSrc",
      "https://d33l6bpfmrj02a.cloudfront.net/assets_1_9_9/images/home/Hims_Home_FullImage_01_hover_blankframe.jpg"
    );
    const mobileImageSrc = text(
      "mobileImgSrc",
      "https://res.cloudinary.com/forhims/image/upload/v1548444685/Hers-pdp-hair-kit02-softfooter-m-2x.jpg"
    );
    const duration = number("duration", 1);
    const ratio = number("ratio", 0.667);
    const steps = number("steps", 3);
    const vertical = boolean("vertical", false);
    const title = text("title", "a woman doing something with her hair");

    return (
      <React.Fragment>
        <HoverSpriteWithoutCloudinary
          desktopImageSrc={desktopImageSrc}
          duration={duration}
          mobileImageSrc={mobileImageSrc}
          ratio={ratio}
          steps={steps}
          title={title}
          vertical={vertical}
        />
        <p>Hover over the image for animation on medium & larger screens</p>
      </React.Fragment>
    );
  })
  .add("with Cloudinary", () => {
    const imageId = text(
      "imageId",
      "Hers-pdp-hair-kit02-softfooter-{imageSize}-2x"
    );
    const duration = number("duration", 1);
    const ratio = number("ratio", 0.667);
    const steps = number("steps", 3);
    const vertical = boolean("vertical", false);
    const title = text("title", "a woman doing something with her hair");

    return (
      <React.Fragment>
        <HoverSprite
          imageId={imageId}
          duration={duration}
          ratio={ratio}
          steps={steps}
          title={title}
          vertical={vertical}
        />
        <p>Hover over the image for animation on medium & larger screens</p>
      </React.Fragment>
    );
  });
