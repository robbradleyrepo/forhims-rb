import React from "react";
import PropTypes from "prop-types";
import {
  IconTitleDescriptionStyle,
  Description
} from "./icon-title-description.style";
import { Headline4 } from "../../../components/fonts";
import { Block } from "../../../components/block";
import { ThemeIcon } from ".././../../components/icons/utils/theme-icon";

export const IconTitleDescription = ({ icon, title, description }) => {
  return (
    <IconTitleDescriptionStyle>
      {icon && (
        <Block mb={3}>
          <ThemeIcon icon={icon} height={48} />
        </Block>
      )}
      <Block px={3}>
        <Block mb={2}>
          <Headline4>{title}</Headline4>
        </Block>
        <Description>{description}</Description>
      </Block>
    </IconTitleDescriptionStyle>
  );
};

IconTitleDescription.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired
};
