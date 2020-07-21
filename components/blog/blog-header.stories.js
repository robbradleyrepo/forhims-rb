import React from "react";
import R from "ramda";
import { storiesOf } from "@storybook/react";
import { BlogHeader } from "./blog-header.component";
import { Grid } from "../layout/grid/grid.component";
import { text, array } from "@storybook/addon-knobs";

storiesOf("Components|Blog", module).add("Header", () => {
  const title = text("Blog Title", "Blog Title Goes Here");
  const categories = array(
    "Categories",
    R.map(JSON.stringify)([
      {
        name: "Lifestyle",
        slug: "lifestyle"
      },
      { name: "Sex", slug: "sex" }
    ])
  );

  return (
    <Grid container>
      <Grid
        item
        xs={11}
        xsOffset={1}
        sm={10}
        smOffset={3}
        md={12}
        mdOffset={6}
        lg={12}
        lgOffset={6}
      >
        <BlogHeader
          slug="blog slug"
          {...{ title, categories: R.map(JSON.parse)(categories) }}
          featuredImage="https://cdn.buttercms.com/ksAP5V5QQm2MMXa42Yrw"
        />
      </Grid>
    </Grid>
  );
});
