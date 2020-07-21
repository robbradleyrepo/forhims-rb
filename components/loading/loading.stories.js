import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs/react";

import { Loading } from "./loading.component";
import { spacing } from "../../theme/spacing";
import { convertConstantsToStorySelect } from "../../utils/storybook";

storiesOf("Components|Loader", module).add("Default Loading Indicator", () => {
  const sizes = convertConstantsToStorySelect(spacing);
  const size = select("Loader Size", sizes, spacing.four);
  const color = text("Loader Color", "#000000");
  return (
    <React.Fragment>
      <Loading size={size} color={color} />
    </React.Fragment>
  );
});
