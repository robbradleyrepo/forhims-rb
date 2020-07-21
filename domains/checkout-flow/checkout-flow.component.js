import React from "react";
import PropTypes from "prop-types";
import { Checkout } from "../../components/checkout";
import { SHIPPING_CONTEXTS } from "../shipping/shipping.constants";

export const CheckoutFlow = ({
  activeStep,
  activeStepConfig,
  enabledSteps,
  goToStep,
  showEmptyCartBackgroundImage,
  isVisitStatusPending
}) => {
  const { component: StepComponent, title } = activeStepConfig;
  return (
    <React.Fragment>
      <Checkout
        goToStep={goToStep}
        enabledSteps={enabledSteps}
        activeStep={activeStep}
        stepTitle={title}
        showEmptyCartBackgroundImage={showEmptyCartBackgroundImage}
        isVisitStatusPending={isVisitStatusPending}
      >
        <StepComponent context={SHIPPING_CONTEXTS.CHECKOUT} />
      </Checkout>
    </React.Fragment>
  );
};

CheckoutFlow.propTypes = {
  activeStep: PropTypes.string.isRequired,
  activeStepConfig: PropTypes.shape({
    component: PropTypes.func,
    title: PropTypes.string
  }),
  enabledSteps: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.object
  ]).isRequired,
  goToStep: PropTypes.func.isRequired,
  showEmptyCartBackgroundImage: PropTypes.bool,
  isVisitStatusPending: PropTypes.bool.isRequired
};
