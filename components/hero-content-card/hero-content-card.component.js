import React from "react";
import PropTypes from "prop-types";
import { Eyebrow } from "../eyebrow";
import { Block } from "../block";
import { AddToCartButton } from "../../modules/add-to-cart";
import { P } from "../fonts/p";
import { ButtonLink } from "../button";
import ShowMoreText from "react-show-more-text";
import { useForm } from "react-hook-form";
import { CheckboxField } from "../checkbox-field";
import { Markdown } from "../markdown";

// Utilises https://react-hook-form.com/api
// By invoking useForm, you will receive the following methods register, unregister, errors, watch, handleSubmit, reset, setError, clearError, setValue, getValues, triggerValidation, control and formState.

import {
  HeroContentCardWithBorder,
  HeroContentCardProductDescription,
  HeroContentCardCaption,
  HeroContentCardTitle,
  HeroContentCardSafetyInformationLink,
  HeroContentCardInput,
  HeroContentCardInputBarStyle,
  PrivacyPolicyLink,
  HeroCheckboxField
} from "./hero-content-card.style";

const AddToCartWrapper = ({ productId, tryNowText }) => (
  <AddToCartButton productId={productId} label={tryNowText} />
);
AddToCartWrapper.propTypes = {
  tryNowText: PropTypes.string,
  productId: PropTypes.string
};
const ButtonLinkWrapper = ({ to, label }) => (
  <ButtonLink to={to} label={label} />
);
ButtonLinkWrapper.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string
};
const buttonVariantComponents = {
  AddToCartButton: AddToCartWrapper,
  ButtonLink: ButtonLinkWrapper
};

function FormSuccessState() {
  return (
    <div>
      <p>
        <b>You're on the list!</b>
      </p>
      <p>
        <b>Keep an eye on your inbox.</b>
      </p>
      <p>We'll let you know as soon as it goes live.</p>
    </div>
  );
}

// Hook Form
function FormEmail({
  onFormSubmit,
  productId,
  formServerError,
  productName,
  offerDescriptor,
  offerCaption,
  offerCTA
}) {
  const { register, handleSubmit, errors: clientErrors, getValues } = useForm();

  let errors = {};

  if (clientErrors) {
    errors = clientErrors;
  }

  if (getValues().email && formServerError) {
    errors = {
      email: {
        message: formServerError
      }
    };
  }

  const hasErrors = !!errors.email;

  const onSubmit = (data, e) => {
    e.preventDefault();
    onFormSubmit({ productId, ...data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {offerDescriptor && (
        <legend>
          {offerDescriptor} when {productName} launches
          <p>{offerCaption}</p>
        </legend>
      )}

      <div className="formErrors">{errors.email && errors.email.message}</div>
      <div className="formElement">
        <label htmlFor="email">
          <HeroContentCardInput
            name="email"
            placeholder="Email Address"
            ref={register({
              required: "Email is a required field.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Please enter a valid email address."
              }
            })}
          />
          <HeroContentCardInputBarStyle
            className={hasErrors ? "error" : undefined}
          />
        </label>
      </div>
      <div className="formElement">
        <HeroCheckboxField>
          <CheckboxField
            className="checkbox"
            input={{
              name: "gdpr"
            }}
            label="Tick the box to receive marketing emails from hims. You can unsubscribe at any time."
            meta={{}}
            ref={register}
          />
        </HeroCheckboxField>
      </div>
      <HeroContentCardInput type="submit" value={offerCTA} />
      <PrivacyPolicyLink>
        For more information, check out our{" "}
        <a href="/privacy-policy" target="new">
          Privacy Policy
        </a>.
      </PrivacyPolicyLink>
    </form>
  );
}

FormEmail.propTypes = {
  productId: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  formServerError: PropTypes.string,
  productName: PropTypes.string,
  offerDescriptor: PropTypes.string,
  offerCaption: PropTypes.string,
  offerCTA: PropTypes.string
};

export const HeroContentCardComponent = ({
  productSummaryEyebrow,
  productName,
  description,
  buttonVariant = "AddToCartButton",
  tryNowText,
  buttonTo,
  buttonLabel,
  warningCaption,
  productId,
  secondaryDescriptor,
  showISI = false,
  handleViewSafetyInformation,
  showForm = false,
  offerDescriptor,
  offerCaption,
  offerCTA,
  onFormSubmit,
  isFormSuccessful = false,
  formServerError
}) => (
  <HeroContentCardWithBorder>
    <Block>
      <Block pb={3}>
        <Eyebrow>{productSummaryEyebrow}</Eyebrow>
      </Block>
      <HeroContentCardTitle>{productName}</HeroContentCardTitle>
      <HeroContentCardProductDescription>
        <P>{description}</P>
        <div>
          <Markdown content={secondaryDescriptor} escapeHtml={false} />
        </div>
      </HeroContentCardProductDescription>

      {!showForm &&
        buttonVariantComponents[buttonVariant]({
          productId,
          tryNowText,
          to: buttonTo,
          label: buttonLabel
        })}

      {showForm &&
        !isFormSuccessful && (
          <FormEmail
            formServerError={formServerError}
            productId={productId}
            productName={productName}
            onFormSubmit={onFormSubmit}
            offerDescriptor={offerDescriptor}
            offerCaption={offerCaption}
            offerCTA={offerCTA}
          />
        )}

      {showForm && isFormSuccessful && <FormSuccessState />}

      <HeroContentCardCaption as="div">
        <ShowMoreText lines={3} more="MORE" less="LESS" expanded={false}>
          {warningCaption}
        </ShowMoreText>
      </HeroContentCardCaption>

      {showISI && (
        <HeroContentCardSafetyInformationLink
          onClick={handleViewSafetyInformation}
        >
          IMPORTANT SAFETY INFORMATION
        </HeroContentCardSafetyInformationLink>
      )}
    </Block>
  </HeroContentCardWithBorder>
);

HeroContentCardComponent.propTypes = {
  productSummaryEyebrow: PropTypes.string,
  productName: PropTypes.string,
  description: PropTypes.string,
  tryNowText: PropTypes.string,
  warningCaption: PropTypes.string,
  scrollToSafetyInformation: PropTypes.func,
  productId: PropTypes.string,
  productDetail: PropTypes.string,
  buttonVariant: PropTypes.oneOf(Object.keys(buttonVariantComponents)),
  buttonTo: PropTypes.string,
  buttonLabel: PropTypes.string,
  secondaryDescriptor: PropTypes.string,
  showISI: PropTypes.bool,
  handleViewSafetyInformation: PropTypes.func,
  showForm: PropTypes.bool,
  offerDescriptor: PropTypes.string,
  offerCaption: PropTypes.string,
  offerCTA: PropTypes.string,
  onFormSubmit: PropTypes.func,
  isFormSuccessful: PropTypes.bool,
  formServerError: PropTypes.string
};
