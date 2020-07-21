import MediaQuery from "react-responsive";
import PropTypes from "prop-types";
import React from "react";

import { WithEyebrowTextRenderer } from "../with-eyebrow/with-eyebrow.renderer";
import { CenterAlignTextWrapper } from "../center-align-text.style";

import { breakpoints } from "../../../theme/breakpoints";
import { Grid, CenteredGridItem } from "../../../components/layout";
import { Block } from "../../../components/block";
import { ThemeIcon } from "../../../components/icons/utils/theme-icon";
import { colors } from "../../../theme/colors";

export const CenterAlignTextWithIcon = ({ id, smallText, largeText, icon }) => (
  <CenterAlignTextWrapper id={id} bgColor={colors.brand.default}>
    <Grid container>
      <CenteredGridItem xs={13} sm={12} md={14} lg={14}>
        <Block
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          py={6}
        >
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
          <Block mt={4}>
            <ThemeIcon icon={icon} height={48} />
          </Block>
        </Block>
      </CenteredGridItem>
    </Grid>
  </CenterAlignTextWrapper>
);

CenterAlignTextWithIcon.propTypes = {
  id: PropTypes.string,
  largeText: PropTypes.string.isRequired,
  smallText: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired
};
