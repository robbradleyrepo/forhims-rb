import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import { ProductKnowledgeImageLeft } from "./product-knowledge-image-left.component";
import { ProductKnowledgeDetail } from "../product-knowledge-detail";
import DesktopImage from "../../../../resources/images/sex/birthControl/Hers-pdp-sex-birthControl-5050-02-d-2x.jpg";
import { withProductCategorySelectorKnob } from "../../../../utils/storybook";
import {
  SkinAcneScarsIcon,
  SkinBrighteningAltIcon,
  SkinDarkSpotsIcon
} from "../../../../components/icons";

storiesOf("Modules|Products/Product Knowledge", module)
  .addDecorator(withProductCategorySelectorKnob)
  .addWithJSX("Image Left", () => {
    const title = text("Title", "what is it good for?");
    const titlePartTwo = text("Title part two (optional)", "");
    const description = text(
      "Description",
      `Overly shedding hair that could use a strengthening boost so that all of your hair doesn't end up in the corners of your home, shower drain, or pillowcases.`
    );

    const images = [DesktopImage, DesktopImage, DesktopImage, DesktopImage];

    const productDetails = [
      <ProductKnowledgeDetail
        key="listone"
        label="excess shedding"
        icon={<SkinAcneScarsIcon />}
      />,
      <ProductKnowledgeDetail
        key="listtwo"
        label="fine lines"
        icon={<SkinBrighteningAltIcon />}
      />,
      <ProductKnowledgeDetail
        key="listthree"
        label="pimples"
        icon={<SkinDarkSpotsIcon />}
      />
    ];
    return (
      <ProductKnowledgeImageLeft
        description={description}
        images={images}
        productDetails={productDetails}
        title={title}
        titlePartTwo={titlePartTwo}
      />
    );
  });
