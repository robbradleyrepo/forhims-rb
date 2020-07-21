import { browserHistory } from "react-router";
import { pathOr, equals, cond, test, pipe, assoc, __, T } from "ramda";
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import { createStructuredSelector, createSelector } from "reselect";
import { isNotNil } from "../utils";

const selectIsLoggedIn = createSelector(pathOr(null, ["token"]), isNotNil);

export const protectedRouteConnector = createStructuredSelector({
  isLoggedIn: selectIsLoggedIn
});

export const withRedirectOnLogout = compose(
  connect(protectedRouteConnector),
  lifecycle({
    componentDidUpdate(prevProps) {
      if (
        !equals(prevProps.isLoggedIn, this.props.isLoggedIn) &&
        !this.props.isLoggedIn
      ) {
        browserHistory.push("/");
      }
    }
  })
);

const isExternalLink = test(/^(https?:)?\/\//);
const isTextLink = test(/^(mailto|tel):/);

export const transformUrlToRouterLinkProps = cond([
  [
    isExternalLink,
    pipe(
      assoc("href", __, {}),
      assoc("target", "_blank"),
      assoc("rel", "noopener")
    )
  ],
  [isTextLink, assoc("href", __, {})],
  [T, assoc("to", __, {})]
]);
