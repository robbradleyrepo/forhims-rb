import React from "react";
import { PropTypes } from "prop-types";
import { FiftyFiftyLayout } from "../../components/fifty-fifty-layout";
import { CardWithBorder } from "../../components/card/card-with-border";
import { Headline4, UnderlinedRouterLink } from "../../components/fonts";
import { Eyebrow } from "../../components/eyebrow";
import { Block } from "../../components/block";
import {
  CardSide,
  ImageSide,
  CardInterior,
  LinkContainer,
  MissionPurposeWrapper,
  FillPicture
} from "./mission-purpose.style";

export const MissionPurpose = ({
  body,
  eyebrow,
  image,
  imageAltText,
  linkText,
  linkUrl
}) => {
  return (
    <MissionPurposeWrapper>
      <FiftyFiftyLayout>
        <CardSide>
          <CardWithBorder>
            <CardInterior>
              <Eyebrow as="h3">{eyebrow}</Eyebrow>
              <Block mt={4}>
                <Headline4 as="p">{body}</Headline4>
              </Block>
            </CardInterior>
            <LinkContainer>
              <UnderlinedRouterLink to={linkUrl}>
                {linkText}
              </UnderlinedRouterLink>
            </LinkContainer>
          </CardWithBorder>
        </CardSide>
        <ImageSide>
          <FillPicture image={image} title={imageAltText} />
        </ImageSide>
      </FiftyFiftyLayout>
    </MissionPurposeWrapper>
  );
};

MissionPurpose.propTypes = {
  body: PropTypes.string,
  eyebrow: PropTypes.string,
  image: PropTypes.string,
  imageAltText: PropTypes.string,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string
};
