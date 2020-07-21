import React from "react";

import { ButtonLink } from "../button";
import { UnderlinedRouterLink } from "../fonts";
import { AddToCart } from "../../modules/add-to-cart/add-to-cart-generic.container";
import { FiftyFiftyTextAddToCartLink } from "./fifty-fifty-text-add-to-cart.component";

const AddToCartRouterLink = AddToCart(FiftyFiftyTextAddToCartLink);

export const FiftyFiftyCTA = ({
  ctaLabel,
  ctaUrl,
  ctaText,
  hasButtonCta,
  productId
}) => {
  if (productId) {
    return <AddToCartRouterLink {...{ productId, ctaText }} />;
  }
  if (hasButtonCta)
    return (
      <ButtonLink accessibilityLabel={ctaLabel} to={ctaUrl} label={ctaText} />
    );
  else {
    return (
      <UnderlinedRouterLink aria-label={ctaLabel} to={ctaUrl}>
        {ctaText}
      </UnderlinedRouterLink>
    );
  }
};
