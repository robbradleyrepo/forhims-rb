import React from "react";
import PropTypes from "prop-types";

import { TextLink, RouterLink } from "../fonts";
import { transformUrlToRouterLinkProps } from "../../utils/routes";

export const Link = ({ className, children, ...props }) => {
  let compProps = transformUrlToRouterLinkProps(props.to || props.href || "");
  return compProps.href ? (
    <TextLink className={className} {...compProps}>
      {children}
    </TextLink>
  ) : (
    <RouterLink className={className} {...compProps}>
      {children}
    </RouterLink>
  );
};

Link.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
  to: PropTypes.string
};
