import React from "react";
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs/react";
import { IconButton } from "./icon-button.component";

import { ArrowIcon } from "../icons/arrow-icon";
import { CheckIcon } from "../icons/check-icon";

import { action } from "@storybook/addon-actions";
import { colors } from "../../theme/colors";

storiesOf("Components|Buttons/Icon Button", module).add("Generic", () => {
  const iconComponents = {
    arrow: <ArrowIcon />,
    check: <CheckIcon />
  };
  const icon = select("Icon", { arrow: "arrow", check: "check" }, "arrow");
  const borderColor = text("Border color", colors.canvas.primary);
  const hoverBorderColor = text("Border color on hover", colors.black);
  return (
    <IconButton
      onClick={action("scroll-button-onClick")}
      icon={iconComponents[icon]}
      borderColor={borderColor}
      hoverBorderColor={hoverBorderColor}
    />
  );
});
