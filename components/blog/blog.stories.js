import React from "react";
import { storiesOf } from "@storybook/react";
import R from "ramda";

import { UnderlinedRouterLink } from "../text-link";

import { BlogCategoryNavigation } from "./blog-category-navigation.component";
import { BlogIndexHero } from "./blog-index-hero.component";

storiesOf("Components|Blog", module)
  .add("Blog Index Hero", () => <BlogIndexHero />)
  .add("Category Navigation", () => (
    <BlogCategoryNavigation
      exploreUrl="/blog"
      categories={R.range(1, 10).map(number => (
        <li key={number}>
          <UnderlinedRouterLink to={`/${number}`}>
            Link {number}
          </UnderlinedRouterLink>
        </li>
      ))}
    />
  ));
