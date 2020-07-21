import React from "react";
import PropTypes from "prop-types";

import {
  ProductUsageGridContainer,
  ProductUsageHeaderWrapper,
  ProductUsageDescriptionWrapper,
  ProductUsageSlider
} from "./product-usage.style";
import { BrandsList } from "./brands-list";

import { Grid, CenteredGridItem } from "../../../components/layout";
import { Headline2, P } from "../../../components/fonts";
import { Button } from "../../../components/button";
import { Block } from "../../../components/block";
import { BUTTON_VARIANTS } from "../../../theme/buttons";
import { hasValue } from "../../../utils";

// TODO: replace arrow with icon on button label
export const ProductUsageComponent = ({
  title,
  description,
  images,
  showDrawer,
  hasSafetyInformation = false,
  brandsOffered,
  brandsOfferedTitle,
  brandsOfferedDescription
}) => (
  <ProductUsageGridContainer container>
    <Grid
      item
      xs={13}
      sm={16}
      smOffset={2}
      md={9}
      mdOffset={2}
      lg={9}
      lgOffset={2}
    >
      <ProductUsageHeaderWrapper>
        <Headline2>{title}</Headline2>
      </ProductUsageHeaderWrapper>
    </Grid>
    <Grid
      item
      xs={13}
      sm={10}
      smOffset={2}
      md={8}
      mdOffset={1}
      lg={8}
      lgOffset={1}
    >
      <ProductUsageDescriptionWrapper>
        <P>{description}</P>
      </ProductUsageDescriptionWrapper>
    </Grid>
    <Grid
      item
      xs={13}
      sm={14}
      smOffset={2}
      md={22}
      mdOffset={2}
      lg={22}
      lgOffset={2}
    >
      <ProductUsageSlider slides={images} />
    </Grid>
    {hasValue(brandsOffered) && (
      <Block pt={5} width="100%">
        <BrandsList
          id="product-usage-brands"
          items={brandsOffered}
          title={brandsOfferedTitle}
          description={brandsOfferedDescription}
        />
      </Block>
    )}
    {hasSafetyInformation && (
      <CenteredGridItem xs={13} sm={8} md={12} lg={12}>
        <Block
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
        >
          <Block pb={4}>
            <Headline2>Important Safety Information</Headline2>
          </Block>
          <Button
            variant={BUTTON_VARIANTS.PRIMARY}
            onClick={() => showDrawer("safetyInformation")}
            label="read now >"
          />
        </Block>
      </CenteredGridItem>
    )}
  </ProductUsageGridContainer>
);

ProductUsageComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  showDrawer: PropTypes.func,
  hasSafetyInformation: PropTypes.bool,
  brandsOffered: PropTypes.array,
  brandsOfferedTitle: PropTypes.string,
  brandsOfferedDescription: PropTypes.string
};
