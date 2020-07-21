"use strict";

import R from "ramda";
import { createSelector } from "reselect";
import { pathName as selectPathname } from "./url";
import config from "../config";

import {
  productDetailAssociations,
  plpProductOrder
} from "../content/content.constants";

import { PRODUCT_ID_BY_NAME } from "../config/product-ids-by-name";

const removeInactiveProducts = R.filter(x => {
  return !R.contains(x.status, ["disabled", "archived"]);
});

const removeRenewalProducts = R.filter(x => !x.tags.includes("renewal"));

// todo: This should not be a long term part of the codebase
// These are products that we want to temporarily remove from the PLPs
const PLP_PRODUCT_BLACKLIST = [
  // PRODUCT_ID_BY_NAME.acne,
  PRODUCT_ID_BY_NAME.acneKit,
  // PRODUCT_ID_BY_NAME.aciclovir,
  PRODUCT_ID_BY_NAME.addyi,
  // PRODUCT_ID_BY_NAME.antiAging,
  PRODUCT_ID_BY_NAME.antiAgingKit,
  PRODUCT_ID_BY_NAME.melasma,
  PRODUCT_ID_BY_NAME.shampoo,
  PRODUCT_ID_BY_NAME.minoxidil,
  PRODUCT_ID_BY_NAME.vitamins,
  PRODUCT_ID_BY_NAME.birthControl,
  // PRODUCT_ID_BY_NAME.hairPowerPack,
  // PRODUCT_ID_BY_NAME.completeHairKit,
  PRODUCT_ID_BY_NAME.hairRenewal,
  PRODUCT_ID_BY_NAME.edRenewal,
  // PRODUCT_ID_BY_NAME.everyday,
  // PRODUCT_ID_BY_NAME.morningglow,
  // PRODUCT_ID_BY_NAME.wrinkle,
  // PRODUCT_ID_BY_NAME.propranolol,
  PRODUCT_ID_BY_NAME.sildenafil
];

const removeBlacklistedProducts = R.filter(
  x => !PLP_PRODUCT_BLACKLIST.includes(x.id)
);

const putOutofStockItemsAtEnd = R.reduce(
  (result, x) =>
    x.status === "out_of_stock" ? R.append(x, result) : R.prepend(x, result),
  []
);

const getProducts = (state, category) =>
  R.compose(
    putOutofStockItemsAtEnd,
    R.sortBy(R.prop("price")),
    removeRenewalProducts,
    removeInactiveProducts,
    removeBlacklistedProducts, // todo: should be a temporary inclusion (see fn definition)
    R.defaultTo([]),
    R.values,
    R.path(["products", "byTag", category])
  )(state);

const getFeaturedProducts = (state, category) =>
  R.pipe(R.uniqWith((a, b) => a.id === b.id))(getProducts(state, category));

const getProductListByProductIds = (productIds, state) =>
  R.compose(
    R.values,
    R.pick(productIds),
    R.path(["products", "byId"])
  )(state);

const hasMembershipFee = order => {
  const { edMembership } = config.products.idByName;
  return !!R.find(R.propEq("productId", edMembership))(order.items);
};

// const selectProductsByCategory = (state, props) => {
//   return R.defaultTo([], getProducts(state, props.category));
// };

const addAdditionalProductDetails = product => ({
  ...product,
  ...productDetailAssociations[product.id]
});

const selectFeaturedProductsByCategory = (state, props) => {
  // Get a list of all products
  const products = getFeaturedProducts(state, props.category);

  // We can use plpProductOrder to set a hardcoded "order" to our products
  const productOrder = plpProductOrder[props.category];

  // Return products sorted by productOrder and augmented by additionalProductDetails
  return R.pipe(
    // Add a sorting key based on the index in productOrder. If missing use Infinity
    R.map(obj =>
      R.assoc(
        "__sorting",
        productOrder && productOrder.includes(obj.id)
          ? productOrder.indexOf(obj.id)
          : Infinity,
        obj
      )
    ),
    // Sort by the sorting key
    R.sort(R.ascend(R.prop("__sorting"))),
    // Drop the sorting key
    R.map(R.dissoc("__sorting")),
    // Augment with any additional product details you need
    R.map(addAdditionalProductDetails)
  )(products);
};

const selectProductsById = createSelector(
  R.pathOr({}, ["products", "byId"]),
  removeInactiveProducts
);

const selectProductsByUrl = createSelector(
  selectProductsById,
  R.pipe(
    R.map(product =>
      R.assoc(
        "link",
        R.path([product.id, "link"], productDetailAssociations),
        product
      )
    ),
    R.values,
    R.groupBy(R.prop("link")),
    R.map(productsArray => productsArray[0])
  )
);

const selectCurrentProduct = createSelector(
  selectProductsByUrl,
  selectPathname,
  (productsByUrl, pathName) => productsByUrl[pathName]
);
const selectProductsWithTag = tag =>
  R.pipe(
    R.path(["products", "byTag", tag]),
    removeInactiveProducts,
    putOutofStockItemsAtEnd
  );

const selectTags = () =>
  R.pipe(
    R.path(["products", "byTag"]),
    R.keys
  );

// todo: Tags should be dynamic based on the product list we get from the server
const selectAllProducts = createSelector(selectTags, tags =>
  tags.reduce((acc, tag) => ({ ...acc, [tag]: selectProductsWithTag(tag) }), {})
);

const getProdById = allProducts => id =>
  R.find(R.propEq("id", id))(allProducts);

const selectProductsByIdOrFill = createSelector(
  selectAllProducts,
  products => (productIds = []) => {
    const tags = Object.keys(products);
    const allProducts = tags.reduce(
      (acc, productsInCategory) => [...acc, ...productsInCategory],
      []
    );
    const matchingProducts = R.map(getProdById(allProducts), productIds);
    const leftOverProducts = R.difference(allProducts, matchingProducts);
    return tags.reduce(
      (acc, tag) => ({
        ...acc,
        [tag]: R.take(3, products[tag])
      }),
      {
        all: [
          ...matchingProducts,
          ...R.take(3 - matchingProducts.length, leftOverProducts)
        ]
      }
    );
  }
);

module.exports = {
  getProducts,
  getProductListByProductIds,
  hasMembershipFee,
  // selectProductsByCategory,
  selectFeaturedProductsByCategory,
  selectProductsByUrl,
  selectCurrentProduct,
  selectProductsByIdOrFill,
  selectProductsById
};
