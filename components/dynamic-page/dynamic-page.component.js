import React from "react";
import pascalCase from "pascal-case";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

import NotFound from "../../views/NotFound";
import { getTheme } from "../../theme";
import { Button, ButtonLink } from "../button/button.component";
import { Block } from "../block";
import { Page } from "../page/page.component";
import Leadgen from "../../domains/leadgen";
import { TreatmentPlan } from "../../domains/treatments/treatment-plan";
import { Markdown } from "../markdown";
import * as Modules from "../../modules/index";
import * as Icons from "../../components/icons";
import { ProductKnowledgeDetail } from "../../modules/products/product-knowledge/product-knowledge-detail";
import { IconTitleDescription } from "../../modules/icon-title-description-list/icon-title-description/index";

const Fallback = props => <div {...props}>Bad Component Specified!</div>;

// TODO: Map components differently through well defined exports
//  (should be able to `import components from "../components"`)
const components = {
  ...Icons,
  ...Modules,
  Block,
  Button,
  ButtonLink,
  IconTitleDescription,
  Markdown,
  Page,
  ProductKnowledgeDetail,
  TreatmentPlan,
  Leadgen
};
export const buildComponent = componentDef => {
  // console.log(components, componentDef.componentType);
  const Component =
    components[pascalCase(componentDef.componentType)] || Fallback;
  const props = { ...(componentDef.props || {}) };

  // TODO: Benchmark this against `while`
  for (let field in props) {
    const propValue = props[field];
    if (hasComponentDefinition(propValue)) {
      props[field] = Array.isArray(propValue)
        ? propValue.map(
            item => (hasComponentDefinition(item) ? buildComponent(item) : item)
          )
        : buildComponent(propValue);
    }
  }

  return <Component key={componentDef.id} {...props} />;
};

/**
 * Returns true if `value` is an object that contains a `componentType` property,
 *  or `value` is an array that contains an object with a `componentType` property.
 */
export const hasComponentDefinition = value => {
  // this happens occasionally with Contentful and transformers
  if (!value) return false;

  return Array.isArray(value)
    ? !!value.find(item => !!item.componentType)
    : !!value.componentType;
};

export const DynamicPage = ({ data }) => {
  return (
    <ThemeProvider theme={getTheme(data.theme)}>
      {data !== false ? buildComponent(data) : <NotFound />}
    </ThemeProvider>
  );
};

DynamicPage.propTypes = {
  data: PropTypes.any
};
