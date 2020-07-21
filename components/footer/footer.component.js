import PropTypes from "prop-types";
import React from "react";

import { Grid } from "../layout/grid";
import { ColumnOfListsWithTitles } from "./column-of-lists.component";
import { FacebookIcon } from "../icons/facebook-icon";
import { InstagramIcon } from "../icons/instagram-icon";
import { TwitterIcon } from "../icons/twitter-icon";
import { MediumIcon } from "../icons/medium-icon";
import { IconLink } from "../icon-link";
import { Block } from "../block";
import { colors } from "../../theme/colors";

import {
  FooterStyle,
  FooterSmallLink,
  CopyrightAndLegalList,
  DisclaimerStyle,
  CopyrightItemWrapper,
  SocialLinkList,
  SocialLinkWrapper
} from "./footer.style";
import { MHRA } from "../mhra/mhra.component";

const iconToIconComponent = {
  facebook: <FacebookIcon color={colors.white} />,
  instagram: <InstagramIcon color={colors.white} />,
  twitter: <TwitterIcon color={colors.white} />,
  medium: <MediumIcon color={colors.white} />
};

export const Footer = ({ columns, iconLinks, legalLinks, copyright }) => {
  return (
    <FooterStyle>
      <Grid container>
        {columns.map((column, index) => (
          <Grid
            key={`footer-column-${index}`}
            item
            xsOffset={1}
            xs={11}
            smOffset={1}
            sm={index === 0 ? 6 : index === 3 ? 3 : 2}
            mdOffset={index === 0 ? 2 : 1}
            md={index === 0 ? 6 : 4}
            lgOffset={index === 0 ? 5 : 0}
            lg={index === 0 ? 5 : 3}
          >
            <Block width="100%">
              <ColumnOfListsWithTitles listsWithTitles={column} />
            </Block>
          </Grid>
        ))}
        <Grid
          item
          xsOffset={1}
          xs={11}
          smOffset={1}
          sm={5}
          mdOffset={2}
          md={14}
          lgOffset={5}
          lg={10}
        >
          <MHRA />
        </Grid>
        <Grid
          item
          xsOffset={1}
          xs={11}
          smOffset={1}
          sm={7}
          mdOffset={0}
          md={6}
          lgOffset={0}
          lg={4}
        >
          <SocialLinkList>
            {iconLinks.map(iconLink => (
              <SocialLinkWrapper key={iconLink.icon}>
                <IconLink
                  as="div"
                  icon={iconToIconComponent[iconLink.icon]}
                  href={iconLink.url}
                  borderColor={colors.white}
                  hoverBorderColor={colors.canvas.brand}
                  label={iconLink.label}
                />
              </SocialLinkWrapper>
            ))}
          </SocialLinkList>
        </Grid>
        <Grid
          item
          xsOffset={1}
          xs={11}
          smOffset={1}
          sm={13}
          mdOffset={2}
          md={17}
          lgOffset={5}
          lg={14}
        >
          <Block mb={4}>
            <DisclaimerStyle>
              *all photos are models and not actual patients.
            </DisclaimerStyle>
          </Block>
        </Grid>
        <Grid
          item
          xsOffset={1}
          xs={11}
          smOffset={1}
          sm={13}
          mdOffset={2}
          md={20}
          lgOffset={5}
          lg={14}
        >
          <Block mb={4} width="100%">
            <CopyrightAndLegalList>
              {legalLinks.map((link, index) => (
                <Block
                  key={`legal-link-${link.label}`}
                  mr={index < legalLinks.length ? 5 : 0}
                >
                  <FooterSmallLink to={link.url}>{link.label}</FooterSmallLink>
                </Block>
              ))}
              <CopyrightItemWrapper>{copyright}</CopyrightItemWrapper>
            </CopyrightAndLegalList>
          </Block>
        </Grid>
      </Grid>
    </FooterStyle>
  );
};

Footer.propTypes = {
  iconLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.array.isRequired,
  legalLinks: PropTypes.array.isRequired,
  copyright: PropTypes.string.isRequired
};
