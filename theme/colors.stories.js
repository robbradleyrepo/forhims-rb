import React from "react";
import { toPairs, filter } from "ramda";
import PropTypes from "prop-types";
import { storiesOf } from "@storybook/react";
import styled, { withTheme } from "styled-components";

import { BodySmall, Headline4 } from "../components/fonts";
import { Grid } from "../components/layout";
import { Block } from "../components/block";
import { withThemeSelectorKnob } from "../utils/storybook";

import {
  BGContainer,
  Row,
  DocumentationTitle
} from "./storybook/theme-stories.component";

const ColorBlock = styled.div`
  background-color: ${({ color }) => color};
  height: 0;
  padding-bottom: 100%;
`;

const ColorP = styled(BodySmall)`
  transition-duration: ${({ theme }) => theme.transitions.speed.default};
  transition-property: color;
  transition-timing-function: ${({ theme }) =>
    theme.transitions.easing.default};
`;

const ColorPreview = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.white};
  box-shadow: ${({ theme }) => theme.boxShadows.medium};
  padding: ${({ theme }) => theme.spacing.three};
  transition-duration: ${({ theme }) => theme.transitions.speed.default};
  transition-property: background, box-shadow;
  transition-timing-function: ${({ theme }) =>
    theme.transitions.easing.default};
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.text.primary};
    box-shadow: ${({ theme }) => theme.boxShadows.large};
    ${ColorP} {
      color: ${({ color }) => color};
    }
  }
`;

const ColorComponent = ({ color, name }) => (
  <ColorPreview color={color}>
    <Block mb={3}>
      <ColorBlock color={color} />
    </Block>
    <ColorP>{name}</ColorP>
    <ColorP>{color}</ColorP>
  </ColorPreview>
);
ColorComponent.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string
};

const ColorItem = ({ name, color }) => (
  <Grid
    item
    key={`${name}-${color}`}
    xs={5}
    xsOffset={1}
    sm={4}
    smOffset={1}
    md={4}
    mdOffset={1}
  >
    <Block width="100%" pb={4}>
      <ColorComponent name={name} color={color} />
    </Block>
  </Grid>
);
ColorItem.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string
};

const ColorTitle = ({ title }) => (
  <Grid item xsOffset={1} xs={12} smOffset={1} sm={15} mdOffset={1} md={23}>
    <Block width="100%" mb={3}>
      <Headline4>{title} colors</Headline4>
    </Block>
  </Grid>
);
ColorTitle.propTypes = {
  title: PropTypes.string
};

const renderColors = colorMap =>
  toPairs(colorMap).map(([name, color]) => (
    <ColorItem key={`${name}-${color}`} name={name} color={color} />
  ));

const ColorPreviewComponent = withTheme(({ theme }) => {
  // Standard colours at theme.colors root
  const coreColors = filter(color => typeof color === "string")(theme.colors);
  // Nested color objects - representing surface, text etc
  const colorMaps = filter(color => typeof color === "object")(theme.colors);
  return (
    <Grid container>
      <Row>
        <DocumentationTitle title="Theme Colors" />
      </Row>
      {toPairs(colorMaps).map(([name, colorList]) => (
        <Row key={`row-${name}`}>
          <DocumentationTitle secondary title={name} />
          <Grid container>{renderColors(colorList)}</Grid>
        </Row>
      ))}
      <Row>
        <DocumentationTitle secondary title="Core Colors" />
        <Grid container>{renderColors(coreColors)}</Grid>
      </Row>
    </Grid>
  );
});

storiesOf("Theme|Colors", module)
  .addDecorator(withThemeSelectorKnob)
  .add("Colors", () => {
    return (
      <BGContainer>
        <ColorPreviewComponent />
      </BGContainer>
    );
  });
