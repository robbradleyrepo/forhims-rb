import React from "react";
import { toPairs, pipe, multiply } from "ramda";
import { storiesOf } from "@storybook/react";
import styled, { withTheme } from "styled-components";
import { stripUnit } from "polished";

import { BodySmall } from "../components/fonts";
import { Grid } from "../components/layout";
import { Block } from "../components/block";
import { BASE_FONT_SIZE } from "../theme/typography";

import {
  BGContainer,
  Row,
  DocumentationTitle,
  TableContent,
  TableTitle
} from "./storybook/theme-stories.component";

const toFontSize = multiply(BASE_FONT_SIZE);
const addPx = val => `${val}px`;
const remToPx = remValue =>
  pipe(
    stripUnit,
    toFontSize,
    addPx
  )(remValue);

const SpacingBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.text.primary};
  height: ${({ spacing }) => spacing};
  width: ${({ spacing }) => spacing};
`;

const SpacingPreviewComponent = withTheme(({ theme }) => {
  return (
    <Grid container>
      <Row>
        <DocumentationTitle title="Vertical Spacing" />
      </Row>
      <Row>
        {toPairs(theme.spacing).map(([name, spacing]) => (
          <Block key={`theme-spacing-${name}`} width="100%" pb={4}>
            <Grid container>
              <TableTitle>
                <BodySmall>
                  {spacing} ({remToPx(spacing)})
                </BodySmall>
                <BodySmall secondary>{name}</BodySmall>
              </TableTitle>
              <TableContent>
                <SpacingBlock spacing={spacing} />
              </TableContent>
            </Grid>
          </Block>
        ))}
      </Row>
    </Grid>
  );
});

storiesOf("Theme|Spacing", module).add("Vertical Spacing", () => {
  return (
    <BGContainer>
      <SpacingPreviewComponent />
    </BGContainer>
  );
});
