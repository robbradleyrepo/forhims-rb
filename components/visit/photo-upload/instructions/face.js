import PropTypes from "prop-types";
import React from "react";
import {
  Instructions,
  InstructionsHeaderMedium,
  InstructionsHeaderLarge,
  Emphasis
} from "./instructions.styles";
import MediaQuery from "react-responsive";
import { breakpoints } from "../../../../theme/breakpoints";

const grammar = direction => (direction ? "the" : "your");

const orientation = direction =>
  direction ? `${direction} side of your ` : "";

const Face = ({ direction }) => (
  <Instructions>
    <MediaQuery minWidth={breakpoints.small + 1}>
      <InstructionsHeaderLarge>
        Take a photo of {grammar(direction)}{" "}
        <Emphasis>{`${orientation(direction)}face`}</Emphasis>
      </InstructionsHeaderLarge>
    </MediaQuery>
    <MediaQuery maxWidth={breakpoints.small}>
      <InstructionsHeaderMedium>
        Take a photo of {grammar(direction)}{" "}
        <Emphasis>{`${orientation(direction)}face`}</Emphasis>
      </InstructionsHeaderMedium>
    </MediaQuery>
  </Instructions>
);

Face.propTypes = {
  direction: PropTypes.string
};

export default Face;
