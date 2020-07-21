import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";

import { Block } from "../../../../components/block";
import { Grid, CenteredGridItem } from "../../../../components/layout";
import { breakpoints } from "../../../../theme/breakpoints";
import { hasValue } from "../../../../utils";

import {
  BrandsListWrapper,
  Headline2OnPrimary,
  Headline4OnPrimary,
  BodyLargeOnPrimary,
  BodySmallOnPrimary,
  DescriptionWrapper,
  BrandsTableRow,
  BrandsProductRow
} from "./brands-list.style";

const BrandsTable = ({ items }) => (
  <Block>
    <MediaQuery minWidth={breakpoints.medium}>
      <BrandsTableRow container>
        <Grid item xs={13} sm={16} md={8}>
          <Block pb={2}>
            <BodySmallOnPrimary>our name</BodySmallOnPrimary>
          </Block>
        </Grid>
        <Grid item xs={13} sm={16} mdOffset={1} md={15}>
          <Block pb={2}>
            <BodySmallOnPrimary>also known as</BodySmallOnPrimary>
          </Block>
        </Grid>
      </BrandsTableRow>
    </MediaQuery>
    {items.map(({ title, description, legal }) => (
      <BrandsProductRow container key={title}>
        <Grid item xs={13} sm={16} md={8}>
          <Block>
            <Headline4OnPrimary>{title}</Headline4OnPrimary>
          </Block>
        </Grid>
        <Grid item xs={13} sm={16} mdOffset={1} md={15}>
          <DescriptionWrapper>
            <BodyLargeOnPrimary>{description}</BodyLargeOnPrimary>
            {hasValue(legal) && (
              <Block pt={3}>
                <BodySmallOnPrimary>{legal}</BodySmallOnPrimary>
              </Block>
            )}
          </DescriptionWrapper>
        </Grid>
      </BrandsProductRow>
    ))}
  </Block>
);
BrandsTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      legal: PropTypes.string,
      title: PropTypes.string
    })
  )
};

export const BrandsList = ({ description, items, title, id }) => (
  <BrandsListWrapper id={id}>
    <Grid container>
      <CenteredGridItem xs={13} sm={14} md={20}>
        <Block width="100%">
          <Block mb={4} pb={4}>
            <Block mb={3}>
              <Headline2OnPrimary>{title}</Headline2OnPrimary>
            </Block>
            <BodyLargeOnPrimary>{description}</BodyLargeOnPrimary>
          </Block>
          {hasValue(items) && (
            <Block>
              <BrandsTable items={items} />
            </Block>
          )}
        </Block>
      </CenteredGridItem>
    </Grid>
  </BrandsListWrapper>
);
BrandsList.propTypes = {
  description: PropTypes.string,
  id: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      legal: PropTypes.string,
      title: PropTypes.string
    })
  ),
  title: PropTypes.string
};
