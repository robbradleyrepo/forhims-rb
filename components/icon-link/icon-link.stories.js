import React from "react";
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs/react";
import { IconLink } from "./icon-link.component";

import { ArrowIcon } from "../icons/arrow-icon";
import { CheckIcon } from "../icons/check-icon";

import { colors } from "../../theme/colors";

storiesOf("Components|Buttons/Icon Link", module).add("Generic", () => {
  const iconComponents = {
    arrow: <ArrowIcon />,
    check: <CheckIcon />
  };
  const url = text("url", "http://www.example.com");
  const icon = select("Icon", { arrow: "arrow", check: "check" }, "arrow");
  const borderColor = text("Border color", colors.canvas.primary);
  const hoverBorderColor = text("Border color on hover", colors.black);
  return (
    <IconLink
      href={url}
      icon={iconComponents[icon]}
      borderColor={borderColor}
      hoverBorderColor={hoverBorderColor}
    />
  );
});
