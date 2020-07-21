import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import MediaQuery from "react-responsive";

import {
  convertConstantsToStorySelect,
  withRedux
} from "../../utils/storybook";
import { breakpoints } from "../../theme/breakpoints";
import { AddToCartButtonComponent } from "./add-to-cart-button.component";
import { FloatingAddToCart } from "./floating-add-to-cart.component";
import { P, Headline3 } from "../../components/fonts";
import { select } from "@storybook/addon-knobs";
import { BUTTON_VARIANTS } from "../../theme/buttons";

const Preview = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.secondaryLight};
  padding: ${({ theme }) => theme.spacing.four};
  min-height: 100vh;
`;

const variantSelect = (defaultChoice = BUTTON_VARIANTS.PRIMARY) =>
  select(
    "Button Variant",
    convertConstantsToStorySelect(BUTTON_VARIANTS),
    defaultChoice
  );

storiesOf("Modules|Add To Cart", module)
  .addDecorator(withRedux)
  .add("Add to Cart Button", () => {
    const variant = variantSelect();
    return (
      <AddToCartButtonComponent label="try now - $42.00" variant={variant} />
    );
  })
  .add("Floating Add to Cart (Mobile only)", () => {
    const variant = variantSelect(BUTTON_VARIANTS.ACCENT);
    return (
      <Preview>
        <MediaQuery minWidth={breakpoints.small}>
          <Headline3>resize required</Headline3>
          <P>
            Please resize the window below {breakpoints.small}px. This component
            will only display on mobile browsers.
          </P>
        </MediaQuery>
        <FloatingAddToCart
          label="try now - {{price, price}}"
          productId="1234"
          variant={variant}
        />
      </Preview>
    );
  });
