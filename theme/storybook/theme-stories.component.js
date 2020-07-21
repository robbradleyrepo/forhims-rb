import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Headline1, Headline4 } from "../../components/fonts";
import { Grid } from "../../components/layout";
import { Block } from "../../components/block";

export const Row = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.ui.divider};
  margin-bottom: ${({ theme }) => theme.spacing.four};
  padding-bottom: ${({ theme }) => theme.spacing.three};
  width: 100%;
`;
export const BGContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
  padding: ${({ theme }) => theme.spacing.four} 0;
`;

export const DocumentationTitle = ({ title, secondary }) => (
  <Grid
    item
    xsOffset={1}
    xs={12}
    smOffset={1}
    sm={14}
    mdOffset={1}
    md={16}
    lg={13}
    lgOffset={1}
  >
    <Block width="100%" mb={3}>
      {secondary ? (
        <Headline4>{title}</Headline4>
      ) : (
        <Headline1>{title}</Headline1>
      )}
    </Block>
  </Grid>
);
DocumentationTitle.propTypes = {
  secondary: PropTypes.bool,
  title: PropTypes.string
};

export const TableTitle = ({ children }) => (
  <Grid item xs={12} xsOffset={1} sm={5} smOffset={1} md={4} mdOffset={1}>
    <Block>{children}</Block>
  </Grid>
);
TableTitle.propTypes = {
  children: PropTypes.node
};

export const TableContent = ({ children }) => (
  <Grid
    item
    xs={12}
    xsOffset={1}
    sm={8}
    smOffset={1}
    mdOffset={1}
    md={16}
    lgOffset={1}
    lg={13}
  >
    {children}
  </Grid>
);
TableContent.propTypes = {
  children: PropTypes.node
};
