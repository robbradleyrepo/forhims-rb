import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { CloseDrawerButton } from "./close-drawer-button.component";

storiesOf("Components|Buttons/Icon Button", module).add("Close Drawer", () => {
  const drawer = select("Drawer", { left: "left", right: "right" }, "left");
  return (
    <CloseDrawerButton
      onClick={action("close-drawer-onClick")}
      drawer={drawer}
    />
  );
});
