import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";

import { TableItemStyle, ModuleWrapper } from "./description-table.style";
import { Block } from "../../components/block";
import { Grid } from "../../components/layout";
import { breakpoints } from "../../theme/breakpoints";
import { Headline2, P } from "../../components/fonts";

// 2 per row
const xsIsFirst = index => index % 2 === 0;
const xsShowLeftBorder = index => index % 2 !== 0;
const xsShowBottomBorder = (index, count) => count - index > 2;

// 5 per row
const mdIsFirst = index => index % 5 === 0;
const mdShowLeftBorder = index => index % 5 !== 0;
const mdShowBottomBorder = (index, count) => count - index > 5;

export const DescriptionTable = ({ title, description, items, id }) => (
  <ModuleWrapper id={id}>
    <Block mb={3} textAlign="center">
      <Headline2>{title}</Headline2>
    </Block>
    <Block mb={5} textAlign="center">
      <P>{description}</P>
    </Block>
    <Grid container>
      {items.map(({ icon, title, description }, index) => (
        <Grid
          key={`DescriptionTable-${title}-${description}`}
          xs={6.5}
          xsOffset={0}
          sm={6}
          smOffset={xsIsFirst(index) ? 2 : 0}
          md={4}
          mdOffset={mdIsFirst(index) ? 2 : 0}
          item
          showBorder={false}
        >
          <MediaQuery maxWidth={breakpoints.medium}>
            <TableItemStyle
              leftBorder={xsShowLeftBorder(index)}
              bottomBorder={xsShowBottomBorder(index, items.length)}
            >
              {title}
            </TableItemStyle>
          </MediaQuery>
          <MediaQuery minWidth={breakpoints.medium + 1}>
            <TableItemStyle
              leftBorder={mdShowLeftBorder(index)}
              bottomBorder={mdShowBottomBorder(index, items.length)}
            >
              {title}
            </TableItemStyle>
          </MediaQuery>
        </Grid>
      ))}
    </Grid>
  </ModuleWrapper>
);

DescriptionTable.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string
    })
  ).isRequired
};
