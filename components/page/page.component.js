import React, { Fragment } from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { renderMetaLinks } from "../../utils/meta-links";
import { PageStyle } from "./page.style";

const formatTitle = (title, withSiteName = true) =>
  `${title} ${withSiteName ? "| hims" : ""}`;

const DEFAULT_LANG = "en-GB";
const htmlAttributes = {
  lang: DEFAULT_LANG
};

export const Page = ({
  description,
  links,
  sections,
  shouldPreventSearchEngineIndexing,
  title,
  withSiteName
}) => (
  <Fragment>
    <Helmet htmlAttributes={htmlAttributes}>
      <meta charset="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <title>{formatTitle(title, withSiteName)}</title>
      <meta property="og:title" content={formatTitle(title, withSiteName)} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/forhims/image/upload/v1547668046/HimsUK/hims-pdp-ed-blog5050-03.jpg"
      />
      {shouldPreventSearchEngineIndexing && (
        <meta name="robots" content="noindex" />
      )}
      {renderMetaLinks(links)}
    </Helmet>
    <PageStyle />
    {sections}
  </Fragment>
);

Page.defaultProps = {
  withSiteName: true
};

Page.propTypes = {
  description: PropTypes.string,
  shouldPreventSearchEngineIndexing: PropTypes.bool,
  sections: PropTypes.arrayOf(PropTypes.any),
  title: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({ href: PropTypes.string, hrefLang: PropTypes.string })
  ),
  withSiteName: PropTypes.bool
};
