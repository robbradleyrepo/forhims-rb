import React from "react";
import PropTypes from "prop-types";
import { storiesOf } from "@storybook/react";
import styled, { withTheme } from "styled-components";

import { BodySmall, Headline2 } from "../components/fonts";
import { Grid } from "../components/layout";
import { Block } from "../components/block";
import { withThemeSelectorKnob } from "../utils/storybook";

import {
  BGContainer,
  Row,
  DocumentationTitle,
  TableContent,
  TableTitle
} from "./storybook/theme-stories.component";

const BrandPrimary = styled(Headline2)`
  font-weight: ${({ theme, fontWeight }) => theme.fontWeights[fontWeight]};
`;
const BrandSecondary = styled(BrandPrimary)`
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
`;

const TypeExampleRow = ({ name, label, children }) => (
  <Row>
    <Grid container>
      <TableTitle>
        <BodySmall>{name}</BodySmall>
        <BodySmall secondary>{label}</BodySmall>
      </TableTitle>
      <TableContent>
        <Block>{children}</Block>
      </TableContent>
    </Grid>
  </Row>
);
TypeExampleRow.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node
};

const TypePreviewComponent = withTheme(({ theme }) => {
  const example = "Sexual health in your control, finally.";
  return (
    <Grid container>
      <Row>
        <DocumentationTitle title="Typefaces" />
      </Row>
      <Block key="brand-serif" width="100%" pb={4}>
        <TypeExampleRow name="Brand Serif Regular" label="Ivar Text">
          <BrandPrimary>{example}</BrandPrimary>
        </TypeExampleRow>
        <TypeExampleRow name="Brand Serif Medium" label="Ivar Text">
          <BrandPrimary fontWeight="medium">{example}</BrandPrimary>
        </TypeExampleRow>
        <TypeExampleRow name="Brand Serif Semi-Bold" label="Ivar Text">
          <BrandPrimary fontWeight="semiBold">{example}</BrandPrimary>
        </TypeExampleRow>
        <Row />
        <TypeExampleRow name="Brand Sans Regular" label="Sofia Pro">
          <BrandSecondary>{example}</BrandSecondary>
        </TypeExampleRow>
        <TypeExampleRow name="Brand Sans Medium" label="Sofia Pro">
          <BrandSecondary fontWeight="medium">{example}</BrandSecondary>
        </TypeExampleRow>
        <TypeExampleRow name="Brand Sans Semi-Bold" label="Sofia Pro">
          <BrandSecondary fontWeight="semiBold">{example}</BrandSecondary>
        </TypeExampleRow>
      </Block>
    </Grid>
  );
});

storiesOf("Theme|Typography", module)
  .addDecorator(withThemeSelectorKnob)
  .add("Typography Styles", () => {
    return (
      <BGContainer>
        <TypePreviewComponent />
      </BGContainer>
    );
  });
