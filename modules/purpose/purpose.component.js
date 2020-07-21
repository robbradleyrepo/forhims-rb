import React from "react";
import PropTypes from "prop-types";

import { CloudinaryPicture } from "../../components/picture";
import { Block } from "../../components/block";
import { Grid } from "../../components/layout/grid";
import { CenteredGridItem } from "../../components/layout/centered-grid-item";
import { PurposeTitle } from "./purpose.style";
import { Markdown } from "../../components/markdown";

export const Purpose = ({ title, content, image }) => (
  <Block width="100%" pt={6}>
    <Grid container>
      <CenteredGridItem xs={11} sm={12} md={16} lg={16}>
        <Block pb={3}>
          <Block py={4}>
            <PurposeTitle>{title}</PurposeTitle>
          </Block>
          <Markdown content={content} />
        </Block>
      </CenteredGridItem>
    </Grid>
    <Block pt={4}>
      <CloudinaryPicture image={image} />
    </Block>
  </Block>
);
Purpose.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string
};
