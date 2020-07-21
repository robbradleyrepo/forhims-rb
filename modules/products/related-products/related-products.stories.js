import React from "react";
import { storiesOf } from "@storybook/react";

import DesktopImage from "../../../resources/images/sex/birthControl/Hers-pdp-sex-birthControl-5050-02-d-2x.jpg";

import { RelatedProducts } from "./related-products.component";

storiesOf("Modules|Products/Related Products", module).add(
  "Cross Sell Products",
  () => {
    const mockProduct = {
      title: "conditioner",
      description: "This combination of products covers all the bases. Period.",
      price: "$42.00",
      url: "/products/hair/123",
      images: [DesktopImage, DesktopImage, DesktopImage, DesktopImage]
    };

    const title = "more treatments to take care of yourself";
    const mockProducts = [
      { ...mockProduct, category: "hair" },
      { ...mockProduct, category: "sex" },
      { ...mockProduct, category: "skin" }
    ];
    return <RelatedProducts products={mockProducts} title={title} />;
  }
);
