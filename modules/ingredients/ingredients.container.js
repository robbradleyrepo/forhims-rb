import { connect } from "react-redux";

import { Ingredients } from "./ingredients.component";
import { ingredientsConnector } from "./ingredients.selectors";

export const IngredientsContainer = connect(ingredientsConnector)(Ingredients);
