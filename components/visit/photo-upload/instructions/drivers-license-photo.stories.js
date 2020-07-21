import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import DriversLicensePhoto from "./drivers-license-photo";

storiesOf("Components|EMR/Photo/Instructions", module).add(
  "DriversLicensePhoto",
  () => {
    return (
      <DriversLicensePhoto
        closeModal={action("driver-license-closeModal")}
        openModal={action("driver-license-openModal")}
      />
    );
  }
);
