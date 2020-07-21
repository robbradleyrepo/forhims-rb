import React from "react";
import PropTypes from "prop-types";
import { Grid } from "../../components/layout";
import { SoftFooterWrapper } from "./soft-footer.style";
import { Headline4, P } from "../../components/fonts";
import { Block } from "../../components/block";
import { CloudinaryPicture } from "../../components/picture";
import { colors } from "../../theme/colors";

export const SoftFooter = ({
  bgColor = colors.canvas.frostGrey,
  eyebrowText,
  image,
  imageAltText,
  text
}) => (
  <SoftFooterWrapper bgColor={bgColor}>
    <Grid container>
      <Grid item xsOffset={1} xs={10} smOffset={1} sm={10} mdOffset={2} md={10}>
        <Block
          mt={4}
          flexDirection="column"
          display="flex"
          justifyContent="center"
        >
          {eyebrowText && <P>{eyebrowText}</P>}
          <Headline4 as="p">{text}</Headline4>
        </Block>
      </Grid>
      <Grid item md={12}>
        <CloudinaryPicture image={image} title={imageAltText} />
      </Grid>
    </Grid>
  </SoftFooterWrapper>
);

SoftFooter.propTypes = {
  bgColor: PropTypes.string,
  eyebrowText: PropTypes.string,
  image: PropTypes.string,
  imageAltText: PropTypes.string,
  text: PropTypes.string
};
