import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import { ProductSummary } from "./product-summary.component";

const PreviewContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
`;

storiesOf("Modules|Products/Product Summary", module).add("Default", () => {
  const title = text("Title", "What is Finasteride?");
  const description = text(
    "Description",
    "Finasteride is a medically approved medication that treats hair loss in men by blocking DHT (dihydrotestosterone). DHT is a hormone derived from testosterone thought to be the reason why many guys experience hair loss."
  );
  const badgeImage = text("Badge image", "hims-pdp-finasteride-summary-01");
  const mainImage = text("Main image", "hims-pills-03");

  return (
    <PreviewContainer>
      <ProductSummary
        title={title}
        description={description}
        badgeImage={badgeImage}
        mainImage={mainImage}
      />
    </PreviewContainer>
  );
});
