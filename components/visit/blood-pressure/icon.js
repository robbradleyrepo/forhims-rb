import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const IconContainer = styled.div`
  span {
    color: ${props => props.color || "#000"};
    font-size: ${props => props.size || "inherit"};
    font-weight: 900;
  }
`;

const Icon = props => (
  <IconContainer
    className={classNames("bp-icon", { [props.className]: !!props.className })}
    color={props.color}
    size={props.size}
  >
    <span>{String.fromCharCode(props.code)}</span>
  </IconContainer>
);

Icon.propTypes = {
  className: PropTypes.string,
  code: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.string
};

Icon.displayName = "Icon";

export default Icon;
