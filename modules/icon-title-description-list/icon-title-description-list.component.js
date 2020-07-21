import React from "react";
import PropTypes from "prop-types";
import { equals } from "ramda";

import {
  ListItemStyle,
  ModuleWrapper
} from "./icon-title-description-list.style";
import { Headline3 } from "../../components/fonts/h3";

import { Grid } from "../../components/layout";
import { Block } from "../../components/block";

const isFirst = equals(0);

export const IconTitleDescriptionList = ({ id, title, children = [] }) => (
  <ModuleWrapper id={id}>
    {title && (
      <Block textAlign="center" mb={5}>
        <Headline3>{title}</Headline3>
      </Block>
    )}
    <Grid container>
      {React.Children.map(children, (child, index) => (
        <Grid
          key={`IconTitleDescriptionListStyle-${child.props.description}`}
          xs={11}
          xsOffset={1}
          sm={12}
          smOffset={2}
          md={6}
          mdOffset={isFirst(index) ? 3 : 0}
          item
        >
          <ListItemStyle showBorder={!isFirst(index)}>{child}</ListItemStyle>
        </Grid>
      ))}
    </Grid>
  </ModuleWrapper>
);

IconTitleDescriptionList.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};
