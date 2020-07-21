import React from "react";
import { storiesOf } from "@storybook/react";

import { TrustPilotBadge } from "./trust-pilot-badge.component";

storiesOf("Components|Trust Pilot Badge", module).add(
  "Default Trust Pilot Badge",
  () => {
    return <TrustPilotBadge />;
  }
);
