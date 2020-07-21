import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { PropTypes } from "prop-types";

import actions from "../../../actions/index";

import { BlogExitRamp } from "../blog-exit-ramp";
import blogSelectors from "../../../selectors/blog";

const { findBlogsByCategory } = actions.blog;
const { selectBlogPosts } = blogSelectors;

const dispatchers = {
  findBlogsByCategory
};

const categoryBlogConnector = createStructuredSelector({
  posts: selectBlogPosts
});

/* ** Fetch Blog Posts by Category ** */
// Fetch blog posts on initial load
// Constructor event should be dispatched both Server Side and client rendering
// - This avoids the deprecated componentWillMount
// - and componentDidMount, which will not fire for SSR

// Note: Category IDs will be static on product pages
// This approach should be reconsidered for other components
// Where data is fetched based on dynamic props

class CategoryBlogComponent extends React.Component {
  constructor(props) {
    super(props);
    const { findBlogsByCategory, category } = this.props;
    findBlogsByCategory({ categorySlug: category });
  }
  render() {
    return <BlogExitRamp {...this.props} />;
  }
}

export const CategoryBlog = connect(
  categoryBlogConnector,
  dispatchers
)(CategoryBlogComponent);

CategoryBlogComponent.propTypes = {
  findBlogsByCategory: PropTypes.func,
  category: PropTypes.string
};

CategoryBlog.propTypes = {
  category: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string
};
