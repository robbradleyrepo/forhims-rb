// "use strict";

// import * as EXPERIMENTS from "../constants/Experiments";
// import config from "../config";
// import R from "ramda";
// import url from "./url";
// import { isClient } from "../utils";

// const _hasExperiments = () => isClient() && window.experiments;

// const _getProductById = id => products =>
//   R.filter(product => product.id === id, products);

// const _getNameAndVariantKey = product => {
//   const name = R.toLower(product.title);

//   return {
//     name,
//     variantKey: window.experiments.prices[name]
//   };
// };

// const _fetchProductFromState = (state, data) => {
//   const productId = EXPERIMENTS.products[data.name][data.variantKey];

//   return R.compose(_getProductById(productId))(state.products.byId)[productId];
// };

// const getProduct = (defaultProduct, state) => {
//   if (_hasExperiments()) {
//     const data = _getNameAndVariantKey(defaultProduct);

//     if (data.variantKey) {
//       return _fetchProductFromState(state, data);
//     }

//     return defaultProduct;
//   }

//   return defaultProduct;
// };

// const getProducts = (defaultProducts, state) => {
//   if (_hasExperiments()) {
//     return R.map(product => {
//       const data = _getNameAndVariantKey(product);

//       if (data.variantKey) {
//         return _fetchProductFromState(state, data);
//       }

//       return product;
//     }, defaultProducts);
//   }

//   return defaultProducts;
// };

// const isExemptFromExperiment = state => {
//   let route = url.route(state);
//   let params = url.queryParam(state);

//   return false;
// };

// module.exports = {
//   getProduct,
//   getProducts,
//   isExemptFromExperiment
// };
