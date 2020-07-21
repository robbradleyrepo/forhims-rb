"use strict";

import R from "ramda";

const PRODUCTS_TO_SHOW = 4;

const pickThreeProducts = (count, excludeProductId) =>
  R.compose(
    R.take(count),
    R.filter(x => x.id !== excludeProductId)
  );

const featureProducts = (state, excludeProductId, count = PRODUCTS_TO_SHOW) =>
  R.compose(
    R.defaultTo([]),
    R.reduce(
      (result, x) =>
        x.status === "out_of_stock"
          ? R.append(x, result)
          : R.prepend(x, result),
      []
    ),
    pickThreeProducts(count, excludeProductId),
    R.map(product => ({
      ...product,
      ...state.products.byId[product.id]
    })),
    R.filter(x => !R.contains(x.status, ["disabled", "archived"])), // exclude disabled products
    R.values,
    R.path(["products", "byTag", "hair"])
  )(state);

const featureArticles = (state, slugs) =>
  R.compose(
    R.defaultTo([]),
    R.filter(R.identity),
    R.map(id => state.blog.postsById[id])
  )(slugs);

module.exports = {
  featureArticles,
  featureProducts
};
