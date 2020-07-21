import React from "react";
import PropTypes from "prop-types";

export const fillProps = (forceColor, color) =>
  forceColor ? { fill: color } : { className: "icon-styleable-color" };

export const SvgIcon = ({
  children,
  minX = 0,
  minY = 0,
  originalHeight,
  originalWidth,
  title = "",
  height
}) => {
  const aspectRatio = originalWidth / originalHeight;
  return (
    <svg
      width={height * aspectRatio}
      height={height}
      viewBox={`${minX} ${minY} ${originalWidth} ${originalHeight}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {title !== "" && <title>{title}</title>}
      {children}
    </svg>
  );
};

SvgIcon.propTypes = {
  children: PropTypes.node,
  height: PropTypes.number,
  minX: PropTypes.number,
  minY: PropTypes.number,
  originalHeight: PropTypes.number,
  originalWidth: PropTypes.number,
  title: PropTypes.string,
  rotate: PropTypes.number
};
