import React from "react";
import { map, pipe } from "ramda";

const hrefLangToDomain = {
  "en-us": "https://www.forhims.com",
  "en-gb": "https://www.forhims.co.uk"
};

/**
 * prepend a domain name from `hrefLangToDomain` in front of the path stored in `href`
 * to make an absolute URL
 */
const updateHref = ({ href, hrefLang }) => ({
  hrefLang,
  href: hrefLangToDomain[hrefLang] + href
});

// I'm not sure why eslint is complaining here, renderLink is not a component
// eslint-disable-next-line react/prop-types
const renderLink = ({ href, hrefLang }) => (
  <link key={href} rel="alternate" hrefLang={hrefLang} href={href} />
);

/**
 * React Helmet does not like rendering Components,
 * so this is a function rather than a `<LinkTags>` component
 * so that it can be used between `<Helmet>` and `</Helmet>`
 * https://github.com/nfl/react-helmet/issues/326
 */
export const renderMetaLinks = (links = []) =>
  map(
    pipe(
      updateHref,
      renderLink
    ),
    links
  );
