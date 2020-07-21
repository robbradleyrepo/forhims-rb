import React from "react";
import { storiesOf } from "@storybook/react";

import DriversLicenseTitle from "./drivers-license-title";

storiesOf("Components|EMR/Photo/Instructions", module).add(
  "DriversLicenseTitle",
  () => {
    return <DriversLicenseTitle />;
  }
);
