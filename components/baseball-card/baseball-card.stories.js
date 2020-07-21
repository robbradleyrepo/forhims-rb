import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { object, text } from "@storybook/addon-knobs";

import { BaseballCard } from "./baseball-card.component";

const PreviewContainer = styled.div`
  max-width: 50vw;
  padding: 2rem;
`;

storiesOf("Components|Baseball Card", module)
  .add("Product Baseball Card", () => {
    const productDetail = text("Product detail (optional)", "50 mg pills");
    const purchaseDetail = text("Purchase detail (optional)", "Free delivery.");
    const mockProduct = {
      id: "DWraq9FV",
      category: "Hair",
      description:
        "Treats male-pattern baldness, at the crown and the middle of the scalp",
      price: "$34.00",
      title: "Hair Loss Treatment",
      url: "/products/hair/123",
      productDetail,
      purchaseDetail
    };
    const product = object("Product", mockProduct);
    return (
      <PreviewContainer>
        <BaseballCard {...product} />
      </PreviewContainer>
    );
  })
  .add("Disabled Baseball Card", () => {
    const mockProduct = {
      id: "DWraq9FV",
      category: "Hair",
      description: "This combination of products covers all the bases. Period.",
      price: "$42.00",
      title: "conditioner",
      url: "/products/hair/123"
    };
    const product = object("Product", mockProduct);
    return (
      <PreviewContainer>
        <BaseballCard {...product} disabled />
      </PreviewContainer>
    );
  });
