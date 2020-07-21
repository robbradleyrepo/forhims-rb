import React, { useCallback } from "react";

import PropTypes from "prop-types";

import { Hero } from "../../modules/hero";
import QuestionMultiChoice from "./question-multi-choice";
import Testimonials from "./testimonials";
import ExitCTA from "./exit-cta";
import Factoids from "./factoids";

const componentDefToComponent = {
  hero: Hero,
  "question-multi-choice": QuestionMultiChoice,
  "exit-cta": ExitCTA,
  testimonials: Testimonials,
  factoids: Factoids
};

const Leadgen = ({ productId, addToCart, content }) => {
  // onStartConsultation dispatch our add to cart action
  const onStartConsultation = useCallback(() => addToCart(productId), [
    addToCart,
    productId
  ]);

  return (
    <React.Fragment>
      {content.map(({ useComponent, props: sectionProps }, i) => {
        const Component = componentDefToComponent[useComponent] || null;

        // For certain components we need the onStartConsultation
        if (
          sectionProps &&
          ["hero", "factoids", "exit-cta"].includes(useComponent)
        )
          sectionProps["onStartConsultation"] = onStartConsultation;

        return (
          Component && (
            <Component key={productId + "section" + i} {...sectionProps} />
          )
        );
      })}
    </React.Fragment>
  );
};

export default Leadgen;

Leadgen.propTypes = {
  productId: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.any), // todo: make more descriptive

  // Redux action dispatchers
  addToCart: PropTypes.func.isRequired
};
