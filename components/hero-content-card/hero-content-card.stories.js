import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import styled from "styled-components";
import { HeroContentCardComponent } from "./hero-content-card.component";
import {
  createMaxWidthMediaQuery,
  createMinWidthMediaQuery
} from "../../utils/breakpoints";
import { withRedux } from "../../utils/storybook";

const PreviewContainer = styled.div`
  max-width: 100vw;
  height: 100vh;

  ${createMinWidthMediaQuery("small")} {
    padding: 1rem 20vw;
  }
  ${createMaxWidthMediaQuery("small")} {
    padding: 1rem 0;
  }

  background-color: ${({ theme }) => theme.colors.canvas.brand};
`;

storiesOf("Components|Hero Content Card", module)
  .addDecorator(withRedux)
  .add("With Safety Information", () => {
    const productSummaryEyebrow = text(
      "Eyebrow Summary Text",
      "Fruity and Squishy"
    );
    const productName = text("Product Name", "Gummies");
    const description = text(
      "Description",
      `Lots of sugar and gelatin. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea com.`
    );
    const warningCaption = text(
      "Warning Text",
      "* Eat responsibly. Prescription products require a medical consultation via an online assessment after checkout."
    );

    const props = {
      productSummaryEyebrow,
      productName,
      description,
      warningCaption,
      showISI: true,
      handleViewSafetyInformation: action(
        "Hero Content Card, Scroll to safety text"
      ),
      productId: "testing213",
      buttonVariant: "AddToCartButton",
      tryNowText: text("Try Now Button Text", "Buy Now - 54.9 ￡")
    };

    return (
      <PreviewContainer>
        <HeroContentCardComponent {...props} />
      </PreviewContainer>
    );
  })
  .add("With Form + Safety Information", () => {
    const [isFormSuccessful, setFormSuccessful] = useState(false);

    const productSummaryEyebrow = text(
      "Eyebrow Summary Text",
      "Buy the Original"
    );
    const productName = text("Product Name", "Viagra Connect");
    const description = text(
      "Description",
      `For over 20 years, Viagra® has helped millions of men with ED feel confident and connected to their partners. But times change. Now men are buying genuine Viagra® online through Hims. We’ll match you with a physician licensed in your state to evaluate you for prescription options, including Viagra’s super-affordable generic equivalent. All this happens in a matter of minutes from the comfort of home, so you can treat ED easily, discreetly, and on your terms. As it should be.`
    );
    const warningCaption = text(
      "Warning Text",
      "* Prescription products require an online consultation with a physician who will determine if a prescription is appropriate. Risks of this medication can include nausea, dizziness, chest or arm pain and in rare cases, changes in vision or loss of sight. Seek emergency care right away if you have an erection that lasts longer than 4 hours or becomes painful. Do not drink alcohol to excess (e.g. 5 drinks) when taking this medicine."
    );

    const props = {
      productSummaryEyebrow,
      productName,
      description,
      warningCaption,
      showISI: true,
      handleViewSafetyInformation: action(
        "Hero Content Card, Scroll to safety text"
      ),
      productId: "testing213",
      isFormSuccessful,
      showForm: true,
      offerDescriptor: "Grab a FREE shampoo worth £10",
      offerCaption:
        "Offer is subject to availability and may be changed at any time.",
      offerCTA: "Grab a FREE shampoo",
      onFormSubmit: payload => {
        console.log("Form submitted with value", payload);
        setFormSuccessful(true);
        console.log("Setting form successful...");
      }
    };

    return (
      <PreviewContainer>
        <HeroContentCardComponent {...props} />
      </PreviewContainer>
    );
  })
  .add("With 'AddToCart' button variant", () => {
    const productSummaryEyebrow = text(
      "Eyebrow Summary Text",
      "Fruity and Squishy"
    );
    const productName = text("Product Name", "Gummies");
    const description = text(
      "Description",
      `Lots of sugar and gelatin. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea com.`
    );
    const warningCaption = text(
      "Warning Text",
      "* Eat responsibly. Prescription products require a medical consultation via an online assessment after checkout."
    );

    const props = {
      productSummaryEyebrow,
      productName,
      description,
      warningCaption,
      handleViewSafetyInformation: action(
        "Hero Content Card, Scroll to safety text"
      ),
      productId: "testing213",
      buttonVariant: "AddToCartButton",
      tryNowText: text("Try Now Button Text", "Buy Now - 54.9 ￡")
    };

    return (
      <PreviewContainer>
        <HeroContentCardComponent {...props} />
      </PreviewContainer>
    );
  })
  .add("With `ButtonLink` button variant", () => {
    const productSummaryEyebrow = text(
      "Eyebrow Summary Text",
      "Fruity and Squishy"
    );
    const productName = text("Product Name", "Gummies");
    const description = text(
      "Description",
      `Lots of sugar and gelatin. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea com.`
    );
    const warningCaption = text(
      "Warning Text",
      "* Eat responsibly. Prescription products require a medical consultation via an online assessment after checkout."
    );
    const props = {
      productSummaryEyebrow,
      productName,
      description,
      warningCaption,
      handleViewSafetyInformation: action(
        "Hero Content Card, Scroll to safety text"
      ),
      productId: "testing213",
      buttonVariant: "ButtonLink",
      buttonTo: text("Button href", "/some-link"),
      buttonLabel: text("Button label", "See Available Treatments")
    };

    return (
      <PreviewContainer>
        <HeroContentCardComponent {...props} />
      </PreviewContainer>
    );
  });
