import React from "react";
import {
  assoc,
  keys,
  pipe,
  reduce,
  join,
  over,
  lensIndex,
  toUpper,
  toLower,
  map
} from "ramda";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { reducer as reduxFormReducer } from "redux-form";

import styled, { ThemeProvider } from "styled-components";
import { getTheme } from "../theme";
import { select } from "@storybook/addon-knobs/react";
import { reducer } from "react-redux-toastr";
import { SHIPPING_VIEWS } from "../domains/shipping/shipping.constants";

const swapKeysWithValues = source =>
  pipe(
    keys,
    reduce((obj, k) => assoc(source[k], k, obj), {})
  )(source);

const toTitleCase = val =>
  pipe(
    toLower,
    over(lensIndex(0), toUpper),
    join("")
  )(val);

// Convert a constants map to Storybook Select knob format
// Select knobs take your dropdown selection as the object key
// ex. { KEYNAME: 'value' } => { value: 'Keyname' }
export const convertConstantsToStorySelect = obj =>
  pipe(
    swapKeysWithValues,
    map(toTitleCase)
  )(obj);

// Convert named theme values to Storybook Select knob format
// Populates the dropdown with keys for use in styled-system getters
// ex. { bodyMedium: '1rem' } => { bodyMedium: 'bodyMedium' }
export const themeKeysToStorySelect = source =>
  pipe(
    keys,
    reduce((obj, k) => assoc(k, k, obj), {})
  )(source);

/**
 * Create reducer & store once, outside of the withRedux decorator so that redux does not throw this warning:
 * <Provider> does not support changing `store` on the fly...
 */
const rootReducer = combineReducers({
  form: reduxFormReducer,
  toastr: reducer,
  me: {},
  products: {
    byId: {}
  },
  treatmentPlanByProductId: {},
  checkoutTemp: {
    account: {
      activeView: null
    },
    shipping: {
      activeView: SHIPPING_VIEWS.NEW
    }
  }
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const withRedux = storyFn => {
  return <Provider store={store}>{storyFn()}</Provider>;
};

export const withProductCategorySelectorKnob = storyFn => {
  const productCategory = select(
    "Product Category",
    {
      hair: "hair",
      sex: "sex",
      skin: "skin",
      invalid: "invalid"
    },
    "hair"
  );

  return (
    <ThemeProvider theme={getTheme(productCategory)}>{storyFn()}</ThemeProvider>
  );
};
export const withThemeSelectorKnob = storyFn => {
  const theme = select(
    "Theme",
    {
      hers: "hers",
      hair: "hers: hair",
      sex: "hers: sex",
      skin: "hers: skin"
    },
    "hers"
  );

  return <ThemeProvider theme={getTheme(theme)}>{storyFn()}</ThemeProvider>;
};

const ExtraSpace = styled.div`
  height: 120vh;
`;

export const withForcedScrolling = storyFn => (
  <React.Fragment>
    <p>scroll down ⬇️</p>
    <ExtraSpace />
    {storyFn()}
    <ExtraSpace />
  </React.Fragment>
);

const PreviewContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.secondaryLight};
  height: 100vh;
  max-width: 50%;
  min-width: 360px;
  position: relative;
`;

export const withPreviewContainer = storyFn => (
  <PreviewContainer>{storyFn()}</PreviewContainer>
);
