import React from "react";
import { storiesOf } from "@storybook/react";

import DesktopImage from "../../../../resources/images/sex/birthControl/hers-plp-sex-birthControl-background-d-2x.jpg";
import SecondaryImage from "../../../../resources/images/sex/birthControl/hers-plp-sex-birthControl-hover-d-2x.jpg";
import ProductImage from "../../../../resources/images/sex/birthControl//hers-plp-sex-birthControl-product-d-2x.png";
import { withPreviewContainer } from "../../../../utils/storybook";

import { ProductListCard } from "./product-list-card.component";

storiesOf("Modules|Products/Product List", module)
  .addDecorator(withPreviewContainer)
  .add("Product List Card", () => {
    const mockProduct = {
      category: "hair",
      description: "This combination of products covers all the bases. Period.",
      images: [DesktopImage, DesktopImage, DesktopImage, DesktopImage],
      secondaryImages: [
        SecondaryImage,
        SecondaryImage,
        SecondaryImage,
        SecondaryImage
      ],
      productImages: [ProductImage, ProductImage, ProductImage, ProductImage],
      price: "$42.00",
      title: "conditioner",
      url: "/products/hair/123"
    };
    return <ProductListCard {...mockProduct} />;
  });
