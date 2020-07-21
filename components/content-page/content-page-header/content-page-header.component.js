import React from "react";
import { CenteredGridItem, Grid } from "../../layout";
import PropTypes from "prop-types";
import {
  DarkBackgroundBlock,
  Headline2Wrapper,
  EyebrowBlock,
  PhotoContainer
} from "./content-page-header.style";
import { Block } from "../../block";

export const ContentPageHeader = ({ eyebrow, title, image }) => (
  <Block>
    <DarkBackgroundBlock />
    <Grid container>
      <Grid
        item
        xs={11}
        xsOffset={1}
        sm={10}
        smOffset={3}
        md={12}
        mdOffset={6}
        lg={12}
        lgOffset={6}
      >
        <Grid item>
          <EyebrowBlock display="flex" justifyContent="center" width="100%">
            {eyebrow}
          </EyebrowBlock>
        </Grid>
      </Grid>
      <Grid item md={10} mdOffset={7}>
        <Block display="flex" justifyContent="center" width="100%">
          <Headline2Wrapper>{title}</Headline2Wrapper>
        </Block>
      </Grid>
      <CenteredGridItem xs={13} sm={14} md={20} lg={22}>
        <PhotoContainer>
          <Block mt={5}>{image}</Block>
        </PhotoContainer>
      </CenteredGridItem>
    </Grid>
  </Block>
);

ContentPageHeader.propTypes = {
  eyebrow: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  title: PropTypes.string,
  image: PropTypes.element
};
