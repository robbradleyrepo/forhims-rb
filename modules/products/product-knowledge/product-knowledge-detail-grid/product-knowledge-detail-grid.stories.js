import React from "react";
import styled from "styled-components";

import { storiesOf } from "@storybook/react";

import { ProductKnowledgeDetailGrid } from "./product-knowledge-detail-grid.component";
import { ProductKnowledgeDetail } from "../product-knowledge-detail/product-knowledge-detail.component";
import {
  HairStrongerNailsIcon,
  HairCleansesScalpIcon,
  HairLossDropsIcon,
  HairRegrowingIcon
} from "../../../../components/icons";

const PreviewContainer = styled.div`
  height: 100vh;
  position: relative;
  width: 50vw;
`;

storiesOf("Modules|Products/Product Knowledge", module).add(
  "Product detail grid",
  () => {
    const productDetails = [
      [
        <ProductKnowledgeDetail
          key="12312"
          label="it is for sure"
          icon={<HairStrongerNailsIcon />}
        />,
        <ProductKnowledgeDetail
          key="2;kl34j5"
          label="now go put on your socks"
          icon={<HairCleansesScalpIcon />}
        />,
        <ProductKnowledgeDetail
          key=";1l23j4"
          label="house hippos"
          icon={<HairLossDropsIcon />}
        />,
        <ProductKnowledgeDetail
          key=";1l23j4"
          label="growing in numbers"
          icon={<HairRegrowingIcon />}
        />
      ]
    ];
    return (
      <PreviewContainer>
        <ProductKnowledgeDetailGrid productDetails={productDetails} />
      </PreviewContainer>
    );
  }
);
