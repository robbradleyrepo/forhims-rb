import MediaQuery from "react-responsive";
import PropTypes from "prop-types";
import React from "react";

import { WithEyebrowTextRenderer } from "./with-eyebrow.renderer";
import { CenterAlignTextWrapper } from "../center-align-text.style";

import { breakpoints } from "../../../theme/breakpoints";
import { Grid, CenteredGridItem } from "../../../components/layout";
import { Block } from "../../../components/block";

import { EyebrowWrapper } from "./with-eyebrow.style";

export const CenterAlignTextWithEyebrow = ({
  id,
  smallText,
  largeText,
  eyebrowText = "on your terms"
}) => (
  <CenterAlignTextWrapper id={id}>
    <Grid container>
      <CenteredGridItem xs={13} sm={12} md={14} lg={14}>
        <Block
          display="flex"
          flexDirection="column"
          justifyContent="center"
          pb={6}
        >
          <EyebrowWrapper>{eyebrowText}</EyebrowWrapper>
          <MediaQuery
            maxWidth={breakpoints.medium}
            values={{ width: breakpoints.medium }}
          >
            {isCompactView =>
              isCompactView ? (
                <WithEyebrowTextRenderer content={smallText} />
              ) : (
                <WithEyebrowTextRenderer content={largeText} />
              )
            }
          </MediaQuery>
        </Block>
      </CenteredGridItem>
    </Grid>
  </CenterAlignTextWrapper>
);

CenterAlignTextWithEyebrow.propTypes = {
  id: PropTypes.string,
  largeText: PropTypes.string.isRequired,
  smallText: PropTypes.string.isRequired,
  eyebrowText: PropTypes.string.isRequired
};
