import React from "react";
import { storiesOf } from "@storybook/react";

import AddyiBGImage from "../../../resources/images/sex/birthControl/hers-plp-sex-birthControl-background-d-2x.jpg";
import AddyiSecondaryImage from "../../../resources/images/sex/birthControl/hers-plp-sex-birthControl-hover-d-2x.jpg";
import AddyiProductImage from "../../../resources/images/sex/birthControl//hers-plp-sex-birthControl-product-d-2x.png";

import { ProductListComponent } from "./product-list.component";

storiesOf("Modules|Products/Product List", module).add(
  "Product List Grid",
  () => {
    const mockProduct = {
      title: "addyi tablets",
      description: "This combination of products covers all the bases. Period.",
      price: 4200,
      url: "/products/hair/123",
      imageSrc: AddyiBGImage,
      hoverImageSrc: AddyiSecondaryImage,
      productImageSrc: AddyiProductImage
    };

    const title = "more treatments to take care of yourself";
    const mockProducts = [mockProduct, mockProduct, mockProduct];
    return <ProductListComponent products={mockProducts} title={title} />;
  }
);
