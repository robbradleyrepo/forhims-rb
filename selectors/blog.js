"use strict";

import R from "ramda";

const selectBlogPosts = R.pathOr([], ["blog", "scope", "data"]);
const selectBlogDetails = R.pathOr(null, ["blog", "active", "data"]);
const selectIsBlogLoading = R.pathOr(true, ["blog", "scope", "loading"]);
const selectBlogCategories = R.pathOr([], ["blog", "categories", "data"]);
const selectParams = R.pathOr(null, ["params", "search"]);
const selectBlog = R.pathOr(null, ["blog"]);
const selectBlogPageCount = R.pathOr(null, ["blog", "scope", "meta", "count"]);

export default {
  selectBlogPosts,
  selectBlogDetails,
  selectIsBlogLoading,
  selectBlogCategories,
  selectParams,
  selectBlog,
  selectBlogPageCount
};
