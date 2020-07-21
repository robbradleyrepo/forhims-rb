import React from "react";
import styled from "styled-components";

import { storiesOf } from "@storybook/react";

import { ProductKnowledgeDetail } from "./product-knowledge-detail.component";

const PreviewContainer = styled.div`
  height: 100vh;
  position: relative;
  width: 50vw;
`;

storiesOf("Modules|Products/Product Knowledge/With Bullet Text", module).add(
  "Product detail",
  () => {
    return (
      <PreviewContainer>
        <ProductKnowledgeDetail label={"excess shedding"} bulletText={"01"} />
      </PreviewContainer>
    );
  }
);
