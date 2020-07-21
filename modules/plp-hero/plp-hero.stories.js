import React from "react";
import { storiesOf } from "@storybook/react";
import { text, color } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { withProductCategorySelectorKnob } from "../../utils/storybook";
import { PlpHero } from "./plp-hero.component";
import DesktopImage from "../../resources/images/sex/hers-plp-sex-ATF-d-2x.jpg";
import MobileImage from "../../resources/images/sex/hers-plp-sex-ATF-m-2x.jpg";

storiesOf("Modules|Hero", module)
  .addDecorator(withProductCategorySelectorKnob)
  .addWithJSX("PLP Hero", () => {
    const buttonLabel = text("Button Label", "shop the hair kit");

    const description = text(
      "Description",
      `Hormonal changes affect our hair. Finally, a solution that can work alongside our journey.`
    );
    const title = text("Title", "Hair loss looks different on us.");

    const handleButtonClick = action("plp hero click");
    const images = [MobileImage, MobileImage, DesktopImage, DesktopImage];
    const bgColor = color("background color", "pink");

    return (
      <PlpHero
        buttonLabel={buttonLabel}
        description={description}
        handleButtonClick={handleButtonClick}
        images={images}
        title={title}
        bgColor={bgColor}
      />
    );
  });
