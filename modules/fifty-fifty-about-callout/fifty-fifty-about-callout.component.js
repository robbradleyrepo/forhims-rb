import React from "react";
import PropTypes from "prop-types";

import { FiftyFiftyTextContent } from "../../components/fifty-fifty-text-content";
import { ImageBlock } from "../image-block";

import { FiftyFiftyLayout } from "../../components/fifty-fifty-layout";
import {
  AboutImage,
  AboutText,
  FiftyFiftyAboutCalloutWrapper
} from "./fifty-fifty-about-callout.style";
import { CenteredGridItem } from "../../components/layout";
import { Grid } from "../../components/layout/grid";
import { breakpoints } from "../../theme/breakpoints";
import MediaQuery from "react-responsive";

export const FiftyFiftyAboutCallout = ({ body, id, imageId, title }) => {
  const Text = () => (
    <AboutText>
      <FiftyFiftyTextContent title={title} body={body} />
    </AboutText>
  );

  const Image = () => (
    <AboutImage>
      <ImageBlock image={imageId} title={title} id={`${id}-image`} />
    </AboutImage>
  );

  return (
    <FiftyFiftyAboutCalloutWrapper>
      <FiftyFiftyLayout stacksOnTop={"left"}>
        <React.Fragment>
          <MediaQuery maxWidth={breakpoints.medium}>
            <Grid container>
              <CenteredGridItem item xs={13} sm={12}>
                <Text />
              </CenteredGridItem>
            </Grid>
          </MediaQuery>
          <MediaQuery minWidth={breakpoints.medium}>
            <Text />
          </MediaQuery>
        </React.Fragment>
        <Image />
      </FiftyFiftyLayout>
    </FiftyFiftyAboutCalloutWrapper>
  );
};

FiftyFiftyAboutCallout.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  imageId: PropTypes.string.isRequired
};
