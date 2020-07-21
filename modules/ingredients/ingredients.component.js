import React from "react";
import PropTypes from "prop-types";
import { Headline2, Headline4 } from "../../components/fonts";
import { Markdown } from "../../components/markdown";
import {
  IngredientsWrapper,
  IngredientsTitleWrapper,
  IngredientsSummaryWrapper,
  IngredientsListWrapper
} from "./ingredients.style";

export const Ingredients = ({ title, summary, ingredients, category }) => (
  <IngredientsWrapper>
    <IngredientsTitleWrapper>
      <Headline2>{title}</Headline2>
    </IngredientsTitleWrapper>
    {summary && (
      <IngredientsSummaryWrapper category={category}>
        <Headline4>{summary}</Headline4>
      </IngredientsSummaryWrapper>
    )}
    <IngredientsListWrapper>
      <Markdown content={ingredients} />
    </IngredientsListWrapper>
  </IngredientsWrapper>
);

Ingredients.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  ingredients: PropTypes.string,
  category: PropTypes.string
};
