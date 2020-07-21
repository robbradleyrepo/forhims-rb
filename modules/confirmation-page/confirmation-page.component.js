import React from "react";
import PropTypes from "prop-types";

import { CenteredGridItem, Grid } from "../../components/layout";
import { Block } from "../../components/block";
import { P } from "../../components/fonts/p";

import {
  ConfirmationWrapper,
  ConfirmationNumber,
  ConfirmationText,
  SupportLink
} from "./confirmation-page.style";

export const ConfirmationPageComponent = ({ email, confirmationNumber }) => (
  <ConfirmationWrapper>
    <Grid container>
      <CenteredGridItem xs={13} sm={14} md={18} lg={16}>
        <Block>
          <Block pb={3} mb={4}>
            <ConfirmationNumber data-testid="CheckoutOrderConfirmationNumber">
              Your confirmation number is {confirmationNumber}
            </ConfirmationNumber>
            <ConfirmationText>
              Your future self called, he wants us to thank you! We emailed an
              order confirmation to {email}.
            </ConfirmationText>
            <ConfirmationText>
              👋 We’re new in town - and new to your inbox too. We want to make
              sure you receive timely information from your doctor, so please
              double check your spam and promotions folders and drag us over to
              primary where necessary.
            </ConfirmationText>
            <ConfirmationText>
              <Block mb={1}>Customer Support</Block>
              <SupportLink href="mailto:support_uk@forhims.co.uk">
                support_uk@forhims.co.uk
              </SupportLink>
            </ConfirmationText>
          </Block>
          <Block>
            <P secondary>
              * Refills are only available if the prescription received contains
              refills.
            </P>
          </Block>
        </Block>
      </CenteredGridItem>
    </Grid>
  </ConfirmationWrapper>
);

ConfirmationPageComponent.propTypes = {
  confirmationNumber: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  legalText: PropTypes.string
};
