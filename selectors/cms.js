import R from "ramda";
import { createSelector, createStructuredSelector } from "reselect";
import { searchIndexBlacklist, pageMaskList } from "../config";

const sanitizeRoute = R.pipe(
  R.toLower,
  R.replace(/^\//, "")
);

const selectCmsPages = R.pathOr({}, ["cms", "pages"]);

const selectProductPageMap = R.pathOr({}, ["cms", "products"]);

const selectCurrentRoute = R.path([
  "routing",
  "locationBeforeTransitions",
  "pathname"
]);

const selectMatchedCoupon = R.pathOr({ productId: false }, [
  "coupons",
  "list",
  "data",
  0
]);

const selectMatchedCouponProductId = createSelector(
  selectMatchedCoupon,
  R.propOr(false, "productId")
);

const selectMatchedCouponActive = createSelector(
  selectMatchedCoupon,
  R.propOr(false, "active")
);

const selectMatchedCouponPage = createSelector(
  selectMatchedCoupon,
  R.propOr(false, "page")
);

// All coupons it matches against will be lowercased
export const selectTrimmedCurrentRoute = createSelector(
  selectCurrentRoute,
  sanitizeRoute
);

export const selectCurrentRouteMapsToCoupon = createSelector(
  selectTrimmedCurrentRoute,
  selectMatchedCouponPage,
  R.equals
);

/**
 * Masks are when we want to store a page under a different URL,
 * for example when we run a campaign we want attribution for but don't have a coupon.
 *
 * This function will just get the route. The actual accessing of the page content is done in selectCmsPage
 *
 * @author Max Barry <mbarry@forhims.com>
 */
export const selectCurrentRouteMapsToMask = createSelector(
  selectCmsPages,
  selectTrimmedCurrentRoute,
  () => pageMaskList,
  (pages, route, masks) => {
    // Is our route a page that is being masked?
    // Be a little forgiving for leading slash; /something OR something
    // AND be a little forgiving for trailing slash; something/ OR something
    // AND be a little forgiving for upper and lower case
    const mask = masks.find(
      m => sanitizeRoute(m.as) === route.replace(/\/$/, "")
    );
    // What should that mask be? and do we have a CMS page for it?
    return mask && pages[mask.mask] ? mask.mask : false;
  }
);

export const selectCmsPage = createSelector(
  selectCurrentRoute,
  selectCmsPages,
  selectProductPageMap,
  selectMatchedCouponProductId,
  selectCurrentRouteMapsToCoupon,
  selectCurrentRouteMapsToMask,
  (
    currentRoute,
    pages,
    productPageMap,
    couponProductId,
    currentPageMapsToCoupon,
    currentPageMapsToMask
  ) => {
    // Try to get the page with the route. Very vanilla
    let page = pages[currentRoute];

    // If you have a mask then return the page for this
    if (currentPageMapsToMask) page = pages[currentPageMapsToMask];

    // If you have a coupon page then show that
    if (currentPageMapsToCoupon && couponProductId)
      page = pages[productPageMap[couponProductId]];

    return page || false;
  }
);

const selectSearchIndexBlacklist = () => searchIndexBlacklist;

const selectCurrentRouteIsInSearchIndexBlacklist = createSelector(
  selectCurrentRoute,
  selectSearchIndexBlacklist,
  (currentRoute, searchIndexBlacklist) =>
    searchIndexBlacklist.includes(currentRoute)
);

// add shouldPreventSearchEngineIndexing prop to the page if it isn't there already
export const selectCmsPageWithSearchIndexingPreference = createSelector(
  selectCmsPage,
  selectCurrentRouteMapsToCoupon,
  selectCurrentRouteIsInSearchIndexBlacklist,
  (page, currentPageMapsToCoupon, currentRouteIsInSearchIndexBlacklist) => {
    // if there's no page, return early instead of applying search indexing preferences to a non-existent page
    if (!page) {
      return page;
    }

    const searchIndexingPreferencePath = [
      "props",
      "shouldPreventSearchEngineIndexing"
    ];

    return R.isNil(R.path(searchIndexingPreferencePath, page))
      ? R.assocPath(
          searchIndexingPreferencePath,
          currentPageMapsToCoupon || currentRouteIsInSearchIndexBlacklist,
          page
        )
      : page;
  }
);

export const selectCouponRedirectTarget = createSelector(
  selectProductPageMap,
  selectMatchedCouponProductId,
  selectMatchedCouponActive,
  (productPageMap, couponProductId, couponActive) => {
    // Is this actually a coupon page?
    const isCouponPage = productPageMap[couponProductId] !== undefined;

    // If it isn't a coupon page OR it is a coupon page and the coupon is active, then return undefined
    if (!isCouponPage || couponActive) return undefined;

    // At this point we are on a coupon page for an inactive coupon.
    // In which case we need to redirect to the default PDP page for this product.
    return productPageMap[couponProductId];
  }
);

export const dynamicPageConnector = createStructuredSelector({
  data: selectCmsPageWithSearchIndexingPreference
});
