import React from "react";
import {
  Instructions,
  InstructionsHeaderLarge,
  InstructionsHeaderMedium
} from "./instructions.styles";
import MediaQuery from "react-responsive";
import { breakpoints } from "../../../../theme/breakpoints";

const Lips = () => (
  <Instructions>
    <MediaQuery minWidth={breakpoints.small + 1}>
      <InstructionsHeaderLarge>
        Please take a picture pointing to the location on your lips where cold
        sores typically form.
      </InstructionsHeaderLarge>
    </MediaQuery>
    <MediaQuery maxWidth={breakpoints.small}>
      <InstructionsHeaderMedium>
        Please take a picture pointing to the location on your lips where cold
        sores typically form.
      </InstructionsHeaderMedium>
    </MediaQuery>
  </Instructions>
);

Lips.displayName = "Lips";

export default Lips;
