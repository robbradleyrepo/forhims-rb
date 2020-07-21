import PropTypes from "prop-types";
import React from "react";
import { Block } from "../../block";
import { Grid, CenteredGridItem } from "../../layout";

export const ContentPageBody = ({ content }) => {
  return (
    <Grid container>
      <CenteredGridItem xs={13} sm={12} md={14} lg={14}>
        <Block my={5} pb={4} width="100%">
          {content}
        </Block>
      </CenteredGridItem>
    </Grid>
  );
};

ContentPageBody.displayName = "TermsAndConditions";

ContentPageBody.propTypes = {
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};
