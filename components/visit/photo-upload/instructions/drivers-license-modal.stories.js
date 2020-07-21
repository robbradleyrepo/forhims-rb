import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import DriversLicenseModal from "./drivers-license-modal";

storiesOf("Components|EMR/Photo/Instructions", module).add(
  "DriversLicenseModal",
  () => {
    return <DriversLicenseModal closeModal={action("closeModal")} />;
  }
);
