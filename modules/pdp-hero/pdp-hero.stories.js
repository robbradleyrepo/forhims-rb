import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import {
  withProductCategorySelectorKnob,
  withRedux
} from "../../utils/storybook";
import { SquiggleIcon } from "../../components/icons/squiggle-icon";
import { PdpHero } from "./pdp-hero.component";
import DesktopImage from "../../resources/images/sex/birthControl/Hers-pdp-sex-birthControl-atf-d-2x.png";
import MobileImage from "../../resources/images/sex/birthControl/Hers-pdp-sex-birthControl-atf-m-2x.png";

storiesOf("Modules|Hero", module)
  .addDecorator(withProductCategorySelectorKnob)
  .addDecorator(withRedux)
  .addWithJSX("PDP Hero", () => {
    const addToCartButtonLabel = text("Buy Button Label", "try today - $XX.00");

    const description = text(
      "Description",
      `__the pill__ -   Sounds simple, but we believe access to birth control shouldn’t feel like an obstacle course. The time it takes to go to your gyno, the hassle of receiving your new pack on time, or the several phone calls you make to find out why your insurance is no longer paying for this, can now be a distant memory.`
    );
    const titlePartOne = text("Title Part 1", "Addyi ");
    const titlePartTwo = text(
      "Title Part 2",
      "® (flibanserin) 100mg tablets  "
    );

    const icon = SquiggleIcon;
    const productDetails = [
      {
        label: "excess shedding",
        icon
      },
      {
        label: "strengthening",
        icon
      }
    ];

    const handleBuyButtonClick = action("cta click");
    const images = [MobileImage, MobileImage, DesktopImage, DesktopImage];
    const legalText = text(
      "Legal text",
      `__I might be really long__

If the legal team has a lot to say

* what
* [will](http://www.example.com)
* they
* say?
`
    );

    return (
      <PdpHero
        addToCartButtonLabel={addToCartButtonLabel}
        description={description}
        handleBuyButtonClick={handleBuyButtonClick}
        images={images}
        titlePartOne={titlePartOne}
        titlePartTwo={titlePartTwo}
        productDetails={productDetails}
        legalText={legalText}
      />
    );
  });
