import PropTypes from "prop-types";
import React from "react";
import {
  InstructionsHeaderLarge,
  InstructionsHeaderMedium,
  Emphasis,
  Instructions
} from "./instructions.styles";
import MediaQuery from "react-responsive";
import { breakpoints } from "../../../../theme/breakpoints";

const orientation = direction => (direction ? `${direction} of your ` : "");

const Head = ({ direction }) => (
  <Instructions>
    <MediaQuery minWidth={breakpoints.small + 1}>
      <InstructionsHeaderLarge>
        Take a photo of the{" "}
        <Emphasis>{`${orientation(direction)}head`}</Emphasis>
      </InstructionsHeaderLarge>
    </MediaQuery>
    <MediaQuery maxWidth={breakpoints.small}>
      <InstructionsHeaderMedium>
        Take a photo of the{" "}
        <Emphasis>{`${orientation(direction)}head`}</Emphasis>
      </InstructionsHeaderMedium>
    </MediaQuery>
  </Instructions>
);

Head.propTypes = {
  direction: PropTypes.string
};

export default Head;
