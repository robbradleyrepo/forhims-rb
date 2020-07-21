import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";

import { breakpoints } from "../../theme/breakpoints";

import { Side, Card, NotCard } from "./fifty-fifty-with-overlap.style";

export const FiftyFiftyWithOverlap = ({
  overlap = false,
  stacksOnTop,
  children,
  cardSide
}) => {
  const [firstChild, secondChild] = React.Children.toArray(children);

  return (
    <section>
      <MediaQuery maxWidth={breakpoints.medium - 1}>
        {stacksOnTop === "left" &&
          (cardSide === "right" ? (
            <React.Fragment>
              <NotCard>{firstChild}</NotCard>
              <Card>{secondChild}</Card>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Card>{firstChild}</Card>
              <NotCard>{secondChild}</NotCard>
            </React.Fragment>
          ))}

        {stacksOnTop === "right" &&
          (cardSide === "left" ? (
            <React.Fragment>
              <NotCard>{secondChild}</NotCard>
              <Card>{firstChild}</Card>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Card>{secondChild}</Card>
              <NotCard>{firstChild}</NotCard>
            </React.Fragment>
          ))}
      </MediaQuery>

      <MediaQuery minWidth={breakpoints.medium}>
        <Side side="left" overlap={overlap} isOnTop={cardSide === "right"}>
          {cardSide === "right" ? (
            <NotCard>{firstChild}</NotCard>
          ) : (
            <Card>{firstChild}</Card>
          )}
        </Side>
        <Side side="right" overlap={overlap} isOnTop={cardSide === "left"}>
          {cardSide === "left" ? (
            <NotCard>{secondChild}</NotCard>
          ) : (
            <Card>{secondChild}</Card>
          )}
        </Side>
      </MediaQuery>
    </section>
  );
};

const leftOrRightPropType = PropTypes.oneOf(["left", "right"]);

FiftyFiftyWithOverlap.propTypes = {
  cardSide: leftOrRightPropType,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  overlap: PropTypes.bool,
  stacksOnTop: leftOrRightPropType
};
