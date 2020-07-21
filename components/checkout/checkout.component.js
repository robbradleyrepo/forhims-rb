import React from "react";
import PropTypes from "prop-types";

import {
  CheckoutFlexColumn,
  CheckoutContainer,
  CheckoutContent,
  CheckoutPageWrapper,
  CheckoutTitle
} from "./checkout.style";
import { Block } from "../block";
import { FormError } from "../form-error";

export const Checkout = ({
  children,
  showEmptyCartBackgroundImage,
  stepTitle,
  isVisitStatusPending
  // activeStep,
  // enabledSteps,
  // goToStep,
}) => (
  <CheckoutFlexColumn
    showEmptyCartBackgroundImage={showEmptyCartBackgroundImage}
    maxWidth="80rem"
  >
    {!showEmptyCartBackgroundImage && (
      <React.Fragment>
        <Block textAlign="center" mt={4} mb={4} display="block">
          <CheckoutTitle>{stepTitle}</CheckoutTitle>
        </Block>
        {/*
        todo: checkoutNavigation is currently hidden... making this a redundant spacer
        <CheckoutHeader>
          <CheckoutNavigation
            goToStep={goToStep}
            enabledSteps={enabledSteps}
            activeStep={activeStep}
          />
        </CheckoutHeader> */}
        {isVisitStatusPending && (
          <Block mt={2} mb={3} pl={5} pr={5}>
            <FormError>
              <Block textAlign="center">
                You have an outstanding visit. Press "NEXT" to complete the
                current purchase.
              </Block>
            </FormError>
          </Block>
        )}
      </React.Fragment>
    )}
    <CheckoutContainer>
      <CheckoutContent>
        <CheckoutPageWrapper>{children}</CheckoutPageWrapper>
      </CheckoutContent>
    </CheckoutContainer>
  </CheckoutFlexColumn>
);

Checkout.propTypes = {
  activeStep: PropTypes.string.isRequired,
  children: PropTypes.node,
  enabledSteps: PropTypes.any,
  goToStep: PropTypes.func.isRequired,
  showEmptyCartBackgroundImage: PropTypes.bool.isRequired,
  stepTitle: PropTypes.string.isRequired,
  isVisitStatusPending: PropTypes.bool.isRequired
};
