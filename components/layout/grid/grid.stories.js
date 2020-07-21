import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { number, boolean } from "@storybook/addon-knobs";
import { linkTo } from "@storybook/addon-links";

import { Headline4, P, Caption, BodySmall, TextLink } from "../../fonts";
import { Block } from "../../block";
import {
  BGContainer,
  Row,
  DocumentationTitle,
  TableContent,
  TableTitle
} from "../../../theme/storybook/theme-stories.component";
import { CenteredGridItem } from "../centered-grid-item";

import { Grid } from "./grid.component";

const PreviewContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
  min-height: 100vh;
`;

const SampleGridContainer = styled(Grid)`
  background-color: ${({ theme }) => theme.colors.canvas.white};
`;

const GridContent = styled.div`
  align-items: center;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.canvas.secondaryLight : theme.colors.canvas.primary};
  display: flex;
  justify-content: center;
  height: 15rem;
  width: 100%;
`;

storiesOf("Components|Layout/Grid", module)
  .add("Responsive Grid Layout", () => {
    const xs = number("Column span of item 1 @ xs", 13);
    const sm = number("Column span of item 1 @ sm", 8);
    const md = number("Column span of item 1 @ md", 15);
    const lg = number("Column span of item 1 @ lg ", 18);
    return (
      <PreviewContainer>
        <Grid container>
          <Grid item xs={xs} sm={sm} md={md} lg={lg}>
            <GridContent active>
              <Headline4>Grid item 1</Headline4>
            </GridContent>
          </Grid>
          <Grid item xs={13} sm={8} md={9} lg={6}>
            <GridContent>
              <Headline4>Grid item 2</Headline4>
            </GridContent>
          </Grid>
        </Grid>
      </PreviewContainer>
    );
  })
  .addWithJSX("Nested Grid Layout", () => {
    return (
      <PreviewContainer>
        <SampleGridContainer container>
          <Grid xs={13} sm={16} md={12} lg={12} item>
            <GridContent>
              <Block width="100%">
                <Grid container>
                  <Grid xs={13} smOffset={2} sm={12} mdOffset={3} md={18} item>
                    <GridContent active>
                      Nested Grid Item - 3/4 of parent content
                    </GridContent>
                  </Grid>
                </Grid>
              </Block>
            </GridContent>
          </Grid>
        </SampleGridContainer>
      </PreviewContainer>
    );
  })
  .add("Grid Container with Visible Columns", () => {
    const showColumns = boolean("Show Columns?", true);
    const SampleGrid = styled(Grid)`
      align-items: center;
      background-color: ${({ theme }) => theme.colors.canvas.secondary};
      display: flex;
      min-height: 50vh;
    `;
    return (
      <PreviewContainer>
        <SampleGridContainer container showColumns={showColumns}>
          <SampleGrid item xs={4} sm={8} md={12} lg={12}>
            <P>Grid item 1</P>
          </SampleGrid>
          <SampleGrid
            item
            xsOffset={1}
            xs={4}
            sm={4}
            smOffset={2}
            md={4}
            mdOffset={3}
            lg={4}
            lgOffset={4}
          >
            <P>Grid item 2</P>
          </SampleGrid>
          {/* Ensure grid debug label always sits on next line in this example */}
          <Grid xs={13} sm={16} md={24} item>
            <Block p={4} />
          </Grid>
        </SampleGridContainer>
      </PreviewContainer>
    );
  });

storiesOf("Theme|Spacing", module).add("Grid", () => {
  const SampleGrid = styled(Grid)`
    background-color: ${({ theme }) => theme.colors.canvas.white};
    border: 1px solid ${({ theme }) => theme.colors.ui.divider};
  `;
  const ItemContents = styled(Caption)`
    font-family: ${({ theme }) => theme.fonts.brandSecondary};
    margin: 1rem;
    padding: 0.5rem;
    text-align: center;
    width: 100%;
  `;
  return (
    <BGContainer>
      <Row>
        <DocumentationTitle title="Grid System" />
      </Row>
      <Row>
        <Grid container>
          <CenteredGridItem xs={13} sm={14} md={22}>
            <Block>
              <P>
                The global grid system is used to generate layouts using
                responsive columns.
              </P>
              <P>
                For creating separation between the top and bottom of components
                or modules, use the{" "}
                <TextLink onClick={linkTo("Theme|Spacing", "Vertical Spacing")}>
                  Vertical Spacing
                </TextLink>{" "}
                scale.
              </P>
            </Block>
          </CenteredGridItem>
        </Grid>
      </Row>

      <Grid container>
        <Row>
          <Grid container>
            <TableTitle>
              <BodySmall>Extra Small</BodySmall>
              <BodySmall secondary>(0 - 767px)</BodySmall>
            </TableTitle>
            <TableContent>
              <Block>
                <P>Main container has 13 fluid columns with 24px gutters</P>
              </Block>
            </TableContent>
          </Grid>
        </Row>
        <Row>
          <Grid container>
            <TableTitle>
              <BodySmall>Small</BodySmall>
              <BodySmall secondary>(768 - 1024px)</BodySmall>
            </TableTitle>
            <TableContent>
              <Block>
                <P>Grid container has 16 fluid columns</P>
              </Block>
            </TableContent>
          </Grid>
        </Row>
        <Row>
          <Grid container>
            <TableTitle>
              <BodySmall>Medium</BodySmall>
              <BodySmall secondary>(1024 - 1439px)</BodySmall>
            </TableTitle>
            <TableContent>
              <Block>
                <P>Grid container has 24 fluid columns</P>
              </Block>
            </TableContent>
          </Grid>
        </Row>
        <Row>
          <Grid container>
            <TableTitle>
              <BodySmall>Large</BodySmall>
              <BodySmall secondary>(1440 - 2560px)</BodySmall>
            </TableTitle>
            <TableContent>
              <Block>
                <P>Grid container has 24 fluid columns</P>
              </Block>
            </TableContent>
          </Grid>
        </Row>
      </Grid>
      <Grid container>
        <SampleGrid item xs={13} sm={16} md={24} lg={24}>
          <ItemContents>{`xs={13} sm={16} md={24} lg={24}`}</ItemContents>
        </SampleGrid>

        <SampleGrid item xs={13} sm={8} md={8} lg={12}>
          <ItemContents>{`xs={13} sm={8} md={8} lg={12}`}</ItemContents>
        </SampleGrid>
        <SampleGrid item xs={13} sm={8} md={8} lg={12}>
          <ItemContents>{`xs={13} sm={8} md={8} lg={12}`}</ItemContents>
        </SampleGrid>

        <SampleGrid item xs={13} sm={4} md={8} lg={6}>
          <ItemContents>{`xs={13} sm={4} md={8} lg={6}`}</ItemContents>
        </SampleGrid>
        <SampleGrid item xs={13} sm={4} md={8} lg={6}>
          <ItemContents>{`xs={13} sm={4} md={8} lg={6}`}</ItemContents>
        </SampleGrid>
        <SampleGrid item xs={13} sm={4} md={8} lg={6}>
          <ItemContents>{`xs={13} sm={4} md={8} lg={6}`}</ItemContents>
        </SampleGrid>
        <SampleGrid item xs={13} sm={4} md={8} lg={6}>
          <ItemContents>{`xs={13} sm={4} md={8} lg={6}`}</ItemContents>
        </SampleGrid>
      </Grid>
    </BGContainer>
  );
});
