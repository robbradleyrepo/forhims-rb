import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../../components/layout/grid";
import { Markdown } from "../../../components/markdown";

import {
  TopLeftIconWrapper,
  BottomLeftIconWrapper,
  HeroWrapper,
  IconHeroLink,
  IconHeroText
} from "./icon-hero.style";
import {
  HairCleansesScalpIcon,
  SexBirthControlIcon
} from "../../../components/icons";

const HeadingRenderer = props => <IconHeroText {...props} />;
const LinkRenderer = ({ href, children }) => (
  <IconHeroLink to={href}>{children}</IconHeroLink>
);
LinkRenderer.propTypes = {
  href: PropTypes.string,
  children: PropTypes.any
};
export class IconHero extends Component {
  constructor(props) {
    super(props);

    this.color = "#537087";
    this.height = 50;
  }
  render() {
    return (
      <div id={this.props.id}>
        <HeroWrapper container>
          <TopLeftIconWrapper>
            <HairCleansesScalpIcon height={this.height} color={this.color} />
          </TopLeftIconWrapper>
          <Grid
            item
            xs={13}
            sm={12}
            smOffset={2}
            md={16}
            mdOffset={4}
            lg={16}
            lgOffset={4}
          >
            <Markdown
              content={this.props.description}
              renderers={{
                heading: HeadingRenderer,
                link: LinkRenderer
              }}
            />
          </Grid>
          <BottomLeftIconWrapper>
            <SexBirthControlIcon height={this.height} color={this.color} />
          </BottomLeftIconWrapper>
        </HeroWrapper>
      </div>
    );
  }
}

IconHero.propTypes = {
  description: PropTypes.any,
  id: PropTypes.string
};
