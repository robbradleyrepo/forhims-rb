import React from "react";

import {
  Instructions,
  InstructionsHeaderLarge,
  InstructionsHeaderMedium,
  Emphasis
} from "./instructions.styles";
import MediaQuery from "react-responsive";
import { breakpoints } from "../../../../theme/breakpoints";

const DriversLicenseTitle = () => (
  <Instructions>
    <MediaQuery minWidth={breakpoints.small + 1}>
      <InstructionsHeaderLarge>
        Take a picture of a <Emphasis>government issued license</Emphasis> that
        has your picture.
      </InstructionsHeaderLarge>
    </MediaQuery>
    <MediaQuery maxWidth={breakpoints.small}>
      <InstructionsHeaderMedium>
        Take a picture of a <Emphasis>government issued license</Emphasis> that
        has your picture.
      </InstructionsHeaderMedium>
    </MediaQuery>
  </Instructions>
);

DriversLicenseTitle.displayName = "DriversLicenseTitle";

export default DriversLicenseTitle;
