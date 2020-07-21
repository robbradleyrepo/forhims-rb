import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";

import {
  PhotoContainerGridItem,
  ProductKnowledgeGridContainer,
  CenteredPicture,
  FadeInContentContainer
} from "../product-knowledge.style";
import { ProductKnowledgeContent } from "../product-knowledge-content";
import { Grid } from "../../../../components/layout";
import { breakpoints } from "../../../../theme/breakpoints";
import { ScrollTransition } from "../../../../components/scroll-transition";

export const ProductKnowledgeImageRight = ({
  id,
  images,
  title,
  titlePartTwo,
  description,
  productDetails = [],
  colorBlock = false
}) => {
  const Content = () => (
    <Grid
      item
      xs={13}
      smOffset={2}
      sm={10}
      mdOffset={3}
      md={7}
      lgOffset={3}
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
              imageIsLeft={false}
            />
          </FadeInContentContainer>
        )}
      </ScrollTransition>
    </Grid>
  );
  const Photo = () => (
    <PhotoContainerGridItem
      item
      xs={13}
      sm={12}
      smOffset={2}
      md={10}
      mdOffset={2}
      lg={10}
      lgOffset={2}
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
  );
  return (
    <ProductKnowledgeGridContainer id={id} container>
      <MediaQuery maxWidth={breakpoints.medium}>
        <React.Fragment>
          <Photo />
          <Content />
        </React.Fragment>
      </MediaQuery>
      <MediaQuery minWidth={breakpoints.medium + 1}>
        <React.Fragment>
          <Content />
          <Photo />
        </React.Fragment>
      </MediaQuery>
    </ProductKnowledgeGridContainer>
  );
};

ProductKnowledgeImageRight.propTypes = {
  description: PropTypes.string,
  id: PropTypes.string,
  images: PropTypes.any,
  title: PropTypes.string.isRequired,
  productDetails: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element,
      label: PropTypes.string
    })
  ),
  colorBlock: PropTypes.bool,
  titlePartTwo: PropTypes.string
};
