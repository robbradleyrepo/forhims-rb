import React from "react";

import { storiesOf } from "@storybook/react";

import Hero from "./hero.component";

storiesOf("Domains|Lead Gen/Components", module).add("Hero", () => (
  <Hero
    title="helping guys get it up"
    subTitle="the FDA-approved ED pill that’s effective, affordable and discreet."
    image="HimsUK-pdp-ED-atf-{imageSize}-2x-reverse"
    imageDimensions={[
      { width: 720, height: 720 },
      { width: 720, height: 720 },
      { width: 2880, height: 1660 },
      { width: 2880, height: 1660 }
    ]}
  />
));
