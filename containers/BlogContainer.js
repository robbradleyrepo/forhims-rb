import React from "react";
import { connect } from "react-redux";
import { pathOr } from "ramda";
import { compose } from "recompose";
import { blog } from "../selectors";
import { BlogComponent } from "../components/blog/blog.component";
import actions from "../actions";
import { Page } from "../components/page/page.component";

const {
  findBlogsByCategory,
  findBlogBySlug,
  findBlogCategories
} = actions.blog;

const dispatchers = {
  findBlogBySlug,
  findBlogCategories,
  findBlogsByCategory
};

const {
  selectBlogPosts,
  selectBlogDetails,
  selectIsBlogLoading,
  selectBlogCategories,
  selectParams,
  selectBlogPageCount
} = blog;

const mapStateToProps = state => {
  return {
    posts: selectBlogPosts(state),
    postDetails: selectBlogDetails(state),
    loading: selectIsBlogLoading(state),
    categories: selectBlogCategories(state),
    search: selectParams(state),
    page: selectBlogPageCount(state)
  };
};

const withHelmet = Blog => {
  const WrappedBlog = props => {
    const title = pathOr("Blog", ["blog", "active", "data", "seoTitle"], props);
    const description = pathOr(
      "Explore the hims Journal",
      ["blog", "active", "data", "metaDescription"],
      props
    );
    return (
      <Page
        sections={[<Blog key="blog-main" {...props} />]}
        title={title}
        description={description}
        withSiteName
      />
    );
  };
  return WrappedBlog;
};

export const BlogContainer = compose(
  connect(
    mapStateToProps,
    dispatchers
  ),
  withHelmet
)(BlogComponent);
