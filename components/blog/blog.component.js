import React, { Component } from "react";
import R from "ramda";
import Helmet from "react-helmet";
import { Loading } from "../loading/loading.component";
import { ListReset } from "../elements";
import { Block } from "../block";
import { hasValue } from "../../utils";

import { BlogPost } from "./blog-post.component";
import InfiniteScroll from "./infiniteScroll.component";
import { BlogIndexHero } from "./blog-index-hero.component";
import { BlogPostSummary } from "./blog-post-summary.component";
import { BlogCategoryNavigation } from "./blog-category-navigation.component";
import { renderMetaLinks } from "../../utils/meta-links";

const metaLinksForQuery = query => {
  const path = "/blog" + (query ? "/" + query : "");
  return [{ hrefLang: "en-us", href: path }, { hrefLang: "en-gb", href: path }];
};

export class BlogComponent extends Component {
  infiniteScrollContainerRef = null;

  state = {
    page: 1,
    pageSize: 10
  };

  componentDidMount() {
    const { posts } = this.props;

    // If the user lands on this page, posts and categories will already be pre-fetched
    if (!hasValue(posts)) {
      this.fetchPosts();
      this.fetchCategories();
    }
  }

  componentDidUpdate(previousProps) {
    // Doing this in DidUpdate as I am relying on props.params being updated in fetchPosts.
    this.maybeFetchPosts(previousProps.params.search, this.props.params.search);
  }

  fetchCategories() {
    this.props.findBlogCategories();
  }

  fetchPosts() {
    if (this.isSlugCategory(this.props.params.search)) {
      // category selected
      this.props.findBlogsByCategory({
        categorySlug: this.props.params.search || "",
        page: this.state.page,
        pageSize: this.state.pageSize
      });
    } else {
      // Blog post selected
      this.props.findBlogBySlug(this.props.params.search);
    }
  }

  getPostSummaries() {
    const posts = R.pathOr(null, ["posts"], this.props);
    return (
      hasValue(posts) && (
        <ListReset>
          {posts.map(postSummary => (
            <li key={`blog-post-summary-${postSummary.slug}`}>
              <Block mb={4}>
                <BlogPostSummary {...this.props} {...postSummary} />
              </Block>
            </li>
          ))}
        </ListReset>
      )
    );
  }

  getPostDetails() {
    const post = R.pathOr(null, ["postDetails"], this.props);
    return hasValue(post) && <BlogPost {...this.props} {...post} />;
  }

  incrementPageAndFetch() {
    let newPageCount =
      this.props.page / this.state.pageSize > this.state.page + 1
        ? this.state.page + 1
        : this.state.page;

    if (this.state.page !== newPageCount) {
      this.setState(
        {
          page: newPageCount
        },
        () => {
          this.fetchPosts();
        }
      );
    }
  }

  /**
   * More of a check on whether or not we are in a blog post.
   */
  isSlugCategory = slug => {
    if (this.props.categories) {
      return !slug || !!this.props.categories.find(cat => slug === cat.slug);
    }
  };

  maybeFetchPosts(search, oldSearch) {
    if (!this.props.posts || search !== oldSearch) {
      this.setState(
        {
          page: 1
        },
        () => {
          window.scrollTo(0, 0);
          this.fetchPosts();
        }
      );
    }
  }

  render() {
    const query = R.pathOr("", ["params", "search"], this.props);
    const isBlogLanding = this.isSlugCategory(query);
    const isLoading = R.propOr(false, "loading", this.props);
    const categories = R.propOr([], "categories", this.props);

    return (
      <Block minHeight="100vh">
        {isBlogLanding && (
          <Block>
            <Helmet>{renderMetaLinks(metaLinksForQuery(query))}</Helmet>
            <BlogIndexHero />
            <Block mb={5}>
              <BlogCategoryNavigation
                activeCategoryId={query}
                categories={categories}
                exploreUrl="/blog"
              />
            </Block>
          </Block>
        )}
        <Block
          ref={containerRef => (this.infiniteScrollContainerRef = containerRef)}
        >
          {isBlogLanding ? this.getPostSummaries() : this.getPostDetails()}
          <InfiniteScroll
            callBack={() => this.incrementPageAndFetch()}
            containerRef={this.infiniteScrollContainerRef}
          />
          {isLoading && <Loading />}
        </Block>
      </Block>
    );
  }
}
