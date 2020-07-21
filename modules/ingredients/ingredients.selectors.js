import R from "ramda";
import { createStructuredSelector, createSelector } from "reselect";
import { productDetailAssociations } from "../../content/content.constants";

import { selectCurrentProduct } from "../../selectors/products";

const selectIngredientsTitle = R.always("full ingredients list");

// TODO replace hardcoded default
const selectProductIngredientsSummary = createSelector(
  selectCurrentProduct,
  R.pathOr("", ["ingredients", "summary"])
);
// TODO replace hardcoded default
const selectProductIngredients = createSelector(selectCurrentProduct, product =>
  R.pathOr("", [product.id, "ingredients"], productDetailAssociations)
);

// TODO replace when all products have urls in object
const selectProductCategory = createSelector(
  selectCurrentProduct,
  product => R.pathOr(["skin"], ["tags"], product)[0]
);

export const ingredientsConnector = createStructuredSelector({
  title: selectIngredientsTitle,
  summary: selectProductIngredientsSummary,
  ingredients: selectProductIngredients,
  category: selectProductCategory
});
