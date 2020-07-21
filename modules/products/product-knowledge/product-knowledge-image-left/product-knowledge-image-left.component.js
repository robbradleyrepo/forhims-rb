import React from "react";
import PropTypes from "prop-types";

import { Grid } from "../../../../components/layout";
import {
  PhotoContainerGridItem,
  ProductKnowledgeGridContainer,
  CenteredPicture,
  FadeInContentContainer
} from "../product-knowledge.style";
import { ProductKnowledgeContent } from "../product-knowledge-content";
import { ScrollTransition } from "../../../../components/scroll-transition";

export const ProductKnowledgeImageLeft = ({
  id,
  images,
  title,
  titlePartTwo,
  description,
  productDetails = [],
  colorBlock = false
}) => (
  <ProductKnowledgeGridContainer id={id} container>
    <PhotoContainerGridItem
      item
      xs={13}
      sm={12}
      smOffset={2}
      md={10}
      mdOffset={3}
      lg={10}
      lgOffset={3}
    >
      <CenteredPicture
        image={images}
        title=""
        colorBlock={colorBlock}
        width={1200}
        height={1200}
        showLoader
      />
    </PhotoContainerGridItem>

    <Grid
      item
      xs={13}
      smOffset={2}
      sm={10}
      mdOffset={1}
      md={7}
      lgOffset={1}
      lg={7}
    >
      <ScrollTransition>
        {({ isVisible }) => (
          <FadeInContentContainer isVisible={isVisible}>
            <ProductKnowledgeContent
              title={title}
              titlePartTwo={titlePartTwo}
              description={description}
              productDetails={productDetails}
              imageIsLeft
            />
          </FadeInContentContainer>
        )}
      </ScrollTransition>
    </Grid>
  </ProductKnowledgeGridContainer>
);

ProductKnowledgeImageLeft.propTypes = {
  description: PropTypes.string,
  id: PropTypes.string,
  images: PropTypes.string,
  title: PropTypes.string.isRequired,
  productDetails: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  colorBlock: PropTypes.bool,
  titlePartTwo: PropTypes.string
};
