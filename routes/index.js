import R from "ramda";
import React from "react";

import * as containers from "../containers";
import BailyHealth from "../views/BaileyHealth";
import CreditCardDisclosure from "../views/CreditCardDisclosure.js";
import Layout from "../views/Layout.js";
import NoticeOfPrivacyPractices from "../views/NoticeOfPrivacyPractices";
import { BlogContainer } from "../containers/BlogContainer";
import { getCoupons } from "../selectors/coupon";
import { selectCouponRedirectTarget } from "../selectors/cms";
import { Route, IndexRoute, Redirect } from "react-router";
import { DynamicPageContainer } from "../containers/dynamic-page";
import { Profile } from "../domains/account/profile/profile.component";
import ResetPasswordContainer from "../domains/account/reset-password/reset-password.container";
import { OrdersContainer } from "../domains/account/orders/orders.container";
import { withRedirectOnLogout } from "../utils/routes";
import { TreatmentPlansContainer } from "../domains/treatments/treatment-plans";
import { ROUTE_PATHS } from "./routes.constants";

const { Application } = containers;

const storeToState = store => store.getState();

const stateToRoute = R.path(["routing", "locationBeforeTransitions"]);

/**
 * ROUTE_PATHS exists in a constant path in order to slowly mirror Clubroom/hers structure.
 * This export of a const paths is in order to maintain legacy compatibility.
 * @author Max <mbarry@forhims.com>
 */
export const paths = ROUTE_PATHS;

const ON_ENTER = {
  authenticate: R.curry((store, nextState, replace) => {
    let state = storeToState(store);
    let location = stateToRoute(state);
    if (!state.token) {
      replace({ pathname: "/", query: { redirect: location.pathname } });
    }
  }),
  validateMessageRoute: R.curry((store, nextState, replace) => {
    ON_ENTER.authenticate(store, nextState, replace);
    let state = storeToState(store);
    !state.messages.active && replace({ pathname: "/messages" });
  }),
  redirectStaleRoutes: R.curry((store, nextState, replace) => {
    let state = storeToState(store);
    let route = stateToRoute(state);
    replace({ pathname: route.pathname.replace("/hair", "/hair-loss") });
  }),
  redirectToNewKit: R.curry((store, nextState, replace) => {
    replace({ pathname: "/hair-loss/complete-hair-kit" });
  }),
  redirectStaleEdRoutes: R.curry((store, nextState, replace) => {
    let state = storeToState(store);
    let route = stateToRoute(state);
    replace({
      pathname: route.pathname.replace("/sex", "/erectile-dysfunction")
    });
  }),
  redirectShampoo: R.curry((store, nextState, replace) => {
    replace({ pathname: "/hair-loss/dht-blocker-shampoo" });
  }),
  redirectSkin: R.curry((store, nextState, replace) => {
    replace({ pathname: "/skin-care" });
  }),
  redirectMouth: R.curry((store, nextState, replace) => {
    replace({ pathname: "/oral-care" });
  }),
  redirectInactiveCoupon: R.curry((store, coupon, nextState, replace) => {
    let state = storeToState(store);

    replace({
      ...nextState.location,
      query: { ...nextState.location.query, inactive_coupon: coupon },
      pathname: selectCouponRedirectTarget(state) || paths.root
    });
  })
};

const RouteEntry = store => {
  const auth = ON_ENTER.authenticate(store);
  const coupons = getCoupons(storeToState(store));

  return (
    <Route component={Layout}>
      {/* Coupons */}
      {R.map(coupon => {
        // If the coupon is inactive then when we enter the route
        // we want to redirect to the underlying product page
        const onEnter = coupon.active
          ? undefined
          : ON_ENTER.redirectInactiveCoupon(store, coupon.page);

        return (
          <Route
            key={coupon.page}
            path={coupon.page}
            component={DynamicPageContainer}
            onEnter={onEnter}
          />
        );
      }, R.takeLast(1, coupons))}

      <Route path={paths.login} component={Application} />
      {/* <Route path="purpose" component={Letter} /> */}
      <Route path={paths.blog} component={BlogContainer} />
      <Route path={paths.register} component={Application} />
      <Route path={paths.hair} onEnter={ON_ENTER.redirectStaleRoutes(store)}>
        <Route
          path={paths.allGlob}
          onEnter={ON_ENTER.redirectStaleRoutes(store)}
        />
      </Route>

      {/* /reset is followed from a forgotten password email */}
      <Route path={ROUTE_PATHS.reset} component={ResetPasswordContainer} />

      <Route
        onEnter={auth}
        path={paths.orders}
        component={withRedirectOnLogout(OrdersContainer)}
      />
      <Route
        onEnter={auth}
        path={paths.profile}
        component={withRedirectOnLogout(Profile)}
      />

      {/* legal docs routes */}
      <Route
        path={paths.creditCardDisclosure}
        component={CreditCardDisclosure}
      />
      <Route path="credit-card-disclosure" component={CreditCardDisclosure} />
      <Route
        path={paths.noticeOfPrivacyPractices}
        component={NoticeOfPrivacyPractices}
      />
      <Route path={paths.baileyHealth}>
        <IndexRoute component={() => <div />} />
        {R.map(state => {
          return (
            <Route
              key={state.name}
              path={R.toLower(state.name.split(/\s+/).join("-"))}
              component={() =>
                React.createElement(BailyHealth, { state: state })
              }
            />
          );
        }, R.defaultTo([], storeToState(store).states.data))}
      </Route>
      <Route path={paths.visit} component={containers.visit} />
      <Route path={paths.treatment} component={TreatmentPlansContainer} />

      {/* TMP: code in the redirects from old Sildenafil to new Sildenafil P. Needs to be a 301 */}
      <Redirect from={paths.pdpSexSildenafil} to={paths.pdpSexSildenafilP} />
      <Redirect from={paths.quizes.sildenafil} to={paths.leadgen.sildenafilp} />
      <Redirect
        from={paths.leadgen.sildenafil}
        to={paths.leadgen.sildenafilp}
      />

      <Route path={paths.allGlob} component={DynamicPageContainer} />
    </Route>
  );
};

/**
 * TODO: Some 404s will get rendered by React, would be better if missing assets get dropped before
 */
RouteEntry.displayName = "RouteEntry";

export default RouteEntry;
