import * as React from "react";
import { Header } from "./header";
import { storiesOf } from "@storybook/react";
import { number } from "@storybook/addon-knobs";

storiesOf("Components|EMR/Header", module).add("Header", () => (
  <Header percentage={number("percentage", 30)} />
));
