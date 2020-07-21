import React, { useState } from "react";
import { connect } from "react-redux";
import { HeroContentCardComponent } from "./hero-content-card.component";
import { heroContentCardConnector } from "./hero-content-card.selectors";
import config from "../../config";
import * as http from "../../utils/http";

const { url, env, paths } = config.api;

const MARKETING_LEAD_VALIDATION_MESSAGES = {
  badEmail: "Please enter a valid email address.", // code 23514
  default: "Oops! Looks like something went wrong. Please try again."
};

// todo: move to config at some point
const MARKETING_LEAD_CAMPAIGN_NAME = "waitlist";

function HeroContentCardContainer(props) {
  const [isFormSuccessful, setFormSuccessful] = useState(false);
  const [formServerError, setFormServerError] = useState(null);

  const onFormSubmit = async payload => {
    // Form is a pretty simple 2 field form
    // e.g. { email: 'something@example.com', productId: 'kajdkas'}
    const { email, ...metadata } = payload;

    try {
      await http.post({
        payload: {
          email,
          metadata,
          campaign: MARKETING_LEAD_CAMPAIGN_NAME
        },
        url: `${url}/${env}/${paths.registerMarketingLead}`,
        authorize: false
      });

      setFormSuccessful(true);
    } catch (error) {
      if (error.message.includes("marketing_lead_email_check")) {
        setFormServerError(MARKETING_LEAD_VALIDATION_MESSAGES.badEmail);
      } else {
        setFormServerError(MARKETING_LEAD_VALIDATION_MESSAGES.default);
      }
    }
  };

  return (
    <HeroContentCardComponent
      {...props}
      onFormSubmit={onFormSubmit}
      isFormSuccessful={isFormSuccessful}
      formServerError={formServerError}
    />
  );
}

export const HeroContentCard = connect(heroContentCardConnector)(
  HeroContentCardContainer
);
