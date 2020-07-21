import PropTypes from "prop-types";

const BlogAuthorProps = {
  bio: PropTypes.string,
  email: PropTypes.string,
  facebookUrl: PropTypes.string,
  firstName: PropTypes.string,
  instagramUrl: PropTypes.string,
  lastName: PropTypes.string,
  linkedinUrl: PropTypes.string,
  pinterestUrl: PropTypes.string,
  profileImage: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
  twitterHandle: PropTypes.string
};

const BlogCategoryProps = {
  name: PropTypes.string,
  slug: PropTypes.string
};

export const BlogPostProps = {
  author: PropTypes.shape(BlogAuthorProps),
  categories: PropTypes.arrayOf(PropTypes.shape(BlogCategoryProps)),
  created: PropTypes.string,
  featuredImage: PropTypes.string,
  metaDescription: PropTypes.string,
  page: PropTypes.number,
  published: PropTypes.string,
  seoTitle: PropTypes.string,
  slug: PropTypes.string,
  status: PropTypes.string,
  summary: PropTypes.string,
  tags: PropTypes.array,
  title: PropTypes.string,
  url: PropTypes.string
};
