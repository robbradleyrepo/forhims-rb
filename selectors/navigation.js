import { createStructuredSelector, createSelector } from "reselect";
import { match, pipe, isEmpty, not, equals, cond, always, T } from "ramda";
import { hasValue, isNotNil } from "../utils";
import { isLeft, isRight } from "../components/drawer/drawer.utils";

import { pathName as selectPathname } from "./url";
import { selectOpenDrawerPosition, selectDrawerContentId } from "./ui";
import { selectActiveCouponRoute } from "./coupon";
import { selectHasAnyPendingRenewal } from "./subscriptions";
import { selectNumberOfItemsInCart } from "../domains/checkout-flow/state/selectors/cart";

import { globalNavLinkStyles } from "../components/navigation/global-navigation/global-navigation-header.constants";

export const isMatchingRoute = routeToMatch => path =>
  hasValue(routeToMatch)
    ? pipe(
        match(routeToMatch),
        isEmpty,
        not
      )(path)
    : false;

const isPdpPathname = pipe(
  match(/\/(sexual-health|skin-care|hair-loss)\/.+/),
  isEmpty,
  not
);
const isHomepagePathname = equals("/");

const isProfilePathname = pipe(
  match(/^(\/(profile|orders|messages)(\/.*)?)$/g),
  isEmpty,
  not
);

const isConfirmationPathname = isMatchingRoute("confirmation");
const isTreatmentPlanPathname = isMatchingRoute("treatment");
const isPrivacyPolicyPathname = isMatchingRoute("privacy-policy");
const isUserTermsPathname = isMatchingRoute("user-terms");
const isServiceTermsPathname = isMatchingRoute("service-terms");

const selectBaseNavLinkStyles = createSelector(
  selectPathname,
  selectActiveCouponRoute,
  (pathName, activeCouponRoute) =>
    cond([
      [isPdpPathname, always(globalNavLinkStyles.pdp)],
      [isHomepagePathname, always(globalNavLinkStyles.homepage)],
      [isProfilePathname, always(globalNavLinkStyles.profile)],
      [isConfirmationPathname, always(globalNavLinkStyles.confirmation)],
      [isTreatmentPlanPathname, always(globalNavLinkStyles.treatment)],
      [isPrivacyPolicyPathname, always(globalNavLinkStyles.legalPages)],
      [isUserTermsPathname, always(globalNavLinkStyles.legalPages)],
      [isServiceTermsPathname, always(globalNavLinkStyles.legalPages)],
      [isMatchingRoute(activeCouponRoute), always(globalNavLinkStyles.pdp)],
      [T, always(globalNavLinkStyles.default)]
    ])(pathName)
);

export const selectIsAuthenticated = state => !R.isNil(state.me);

const selectDrawerIsOpen = createSelector(selectOpenDrawerPosition, isNotNil);

export const selectNavLinkStylesBeforeScroll = createSelector(
  selectBaseNavLinkStyles,
  selectOpenDrawerPosition,
  (baseNavLinkStyles, openDrawerPosition) =>
    isLeft(openDrawerPosition)
      ? globalNavLinkStyles.leftDrawerOpen
      : isRight(openDrawerPosition)
        ? globalNavLinkStyles.rightDrawerOpen
        : baseNavLinkStyles
);

export const navigationConnector = createStructuredSelector({
  contentId: selectDrawerContentId,
  openDrawerPosition: selectOpenDrawerPosition,
  isAuthenticated: selectIsAuthenticated,
  isPendingRenewal: selectHasAnyPendingRenewal,
  drawerIsOpen: selectDrawerIsOpen,
  cartItems: selectNumberOfItemsInCart
});
