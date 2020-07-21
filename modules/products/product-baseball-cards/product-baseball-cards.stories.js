import React from "react";
import { storiesOf } from "@storybook/react";

import { ProductBaseballCardsComponent } from "./product-baseball-cards.component";

const mockProduct = {
  title: "Sildenafil",
  description:
    "Proven to treat ED for a harder and and longer lasting erection.",
  price: 4200,
  url: "/products/hair/123",
  id: "DWraq9FV",
  tags: ["hair"]
};

const mockProducts = [mockProduct, mockProduct, mockProduct];

storiesOf("Modules|Products/Product Baseball Cards List", module)
  .add("Default Product Baseball Cards List", () => {
    const title = "Pricing";
    return (
      <ProductBaseballCardsComponent products={mockProducts} title={title} />
    );
  })
  .add("Product Baseball Cards List with Eyebrow", () => {
    const title = "Our Bestsellers";
    const eyebrow = "The one-stop shop for trusted self-care solutions";
    return (
      <ProductBaseballCardsComponent
        products={mockProducts}
        title={title}
        eyebrow={eyebrow}
      />
    );
  });
