import MediaQuery from "react-responsive";
import PropTypes from "prop-types";
import React from "react";

import { CenterAlignMarkdownTextRenderer } from "./center-align-markdown-text.renderer";
import {
  CenterAlignTextWithImageWrapper,
  FillBg,
  CenterAlignTextContent
} from "./center-align-text.style";

import { breakpoints } from "../../theme/breakpoints";
import { Grid, CenteredGridItem } from "../../components/layout";
import { Block } from "../../components/block";
import {
  createCloudinaryMobileUrl,
  createCloudinaryDesktopUrl
} from "../../utils/cloudinary";

export const CenterAlignMarkdownText = ({
  bgImages,
  id,
  smallText,
  largeText
}) => {
  const images = [
    createCloudinaryMobileUrl(bgImages),
    createCloudinaryMobileUrl(bgImages),
    createCloudinaryDesktopUrl(bgImages),
    createCloudinaryDesktopUrl(bgImages)
  ];
  return (
    <CenterAlignTextWithImageWrapper id={id}>
      <FillBg images={images} showLoader title="" />
      <CenterAlignTextContent>
        <Grid container>
          <CenteredGridItem xs={13} sm={12} md={18} lg={18}>
            <Block display="flex" flex="1" justifyContent="center">
              <MediaQuery
                maxWidth={breakpoints.medium}
                values={{ width: breakpoints.medium }}
              >
                {isCompactView =>
                  isCompactView ? (
                    <CenterAlignMarkdownTextRenderer content={smallText} />
                  ) : (
                    <CenterAlignMarkdownTextRenderer content={largeText} />
                  )
                }
              </MediaQuery>
            </Block>
          </CenteredGridItem>
        </Grid>
      </CenterAlignTextContent>
    </CenterAlignTextWithImageWrapper>
  );
};

CenterAlignMarkdownText.propTypes = {
  bgImages: PropTypes.string.isRequired,
  id: PropTypes.string,
  largeText: PropTypes.string.isRequired,
  smallText: PropTypes.string.isRequired
};
