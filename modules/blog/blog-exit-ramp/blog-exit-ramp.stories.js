import React from "react";
import { storiesOf } from "@storybook/react";

import { BlogExitRamp } from "./blog-exit-ramp.component";
import { mockBlogPosts } from "../blog.mock";

storiesOf("Modules|Blog/Blog Exit Ramp", module).add(
  "Default Blog Exit Ramp",
  () => {
    const title = "want to learn more?";
    const description = `It’s not “Female Viagra” – it’s better. Learn more about how Addyi works with the female brain to help women increase their libido here.`;

    return (
      <BlogExitRamp
        title={title}
        description={description}
        posts={mockBlogPosts}
      />
    );
  }
);
