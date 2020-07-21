import { Side, Section } from "./fifty-fifty-layout.style";
import PropTypes from "prop-types";
import React from "react";
import MediaQuery from "react-responsive";
import { breakpoints } from "../../theme/breakpoints";

export const FiftyFiftyLayout = ({ children, stacksOnTop = "left" }) => {
  const [left, right] = React.Children.toArray(children);

  return (
    <Section>
      <MediaQuery maxWidth={breakpoints.medium}>
        {/* change order of elements in DOM for better screen reader experience */}
        {stacksOnTop === "left" ? (
          <React.Fragment>
            <Side>{left}</Side>
            <Side>{right}</Side>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Side>{right}</Side>
            <Side>{left}</Side>
          </React.Fragment>
        )}
      </MediaQuery>
      <MediaQuery minWidth={breakpoints.medium}>
        <Side>{left}</Side>
        <Side>{right}</Side>
      </MediaQuery>
    </Section>
  );
};

FiftyFiftyLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  stacksOnTop: PropTypes.oneOf(["left", "right"])
};
