import React from "react";
import { storiesOf } from "@storybook/react";

import DesktopImage from "../../../../resources/images/sex/birthControl/Hers-pdp-sex-birthControl-5050-02-d-2x.jpg";
import { withPreviewContainer } from "../../../../utils/storybook";

import { RelatedProductCard } from "./related-product-card.component";

storiesOf("Modules|Products/Related Products", module)
  .addDecorator(withPreviewContainer)
  .add("Related Product Card", () => {
    const mockProduct = {
      category: "hair",
      description: "This combination of products covers all the bases. Period.",
      images: [DesktopImage, DesktopImage, DesktopImage, DesktopImage],
      price: "$42.00",
      title: "conditioner",
      url: "/products/hair/123"
    };
    return <RelatedProductCard {...mockProduct} />;
  });
