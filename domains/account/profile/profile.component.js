import React from "react";

import { AccountTitle, AccountPageContainer } from "../account.style";
import { BasicInfoContainer } from "./basic-info";
import { Block } from "../../../components/block";
import { CardCollapsible } from "../../../components/card";
import { Grid } from "../../../components/layout";
import { PasswordChangeContainer } from "./password-change";
import { PaymentContainer } from "../../payment";
import { PrescriptionsContainer } from "./prescriptions/prescriptions.container";
import { ProfileGridWrapper } from "./profile.style";
import { SHIPPING_CONTEXTS } from "../../shipping/shipping.constants";
import { ShippingContainer } from "../../checkout-flow/containers/shipping";

export const Profile = () => {
  return (
    <AccountPageContainer>
      <Grid container>
        <Grid item xs={13} smOffset={1} sm={14} md={10} mdOffset={2}>
          <ProfileGridWrapper position="left">
            <Block mb={4}>
              <CardCollapsible title={<AccountTitle>Profile</AccountTitle>}>
                <Block pt={3}>
                  <BasicInfoContainer />
                </Block>
              </CardCollapsible>
            </Block>
            <Block mb={4}>
              <CardCollapsible
                title={<AccountTitle>Prescriptions</AccountTitle>}
              >
                <Block pt={3}>
                  <PrescriptionsContainer />
                </Block>
              </CardCollapsible>
            </Block>
            <Block mb={4}>
              <CardCollapsible title={<AccountTitle>Password</AccountTitle>}>
                <PasswordChangeContainer />
              </CardCollapsible>
            </Block>
          </ProfileGridWrapper>
        </Grid>
        <Grid item xs={13} smOffset={1} sm={14} md={10}>
          <ProfileGridWrapper position="right">
            <Block mb={4}>
              <CardCollapsible
                title={<AccountTitle>Shipping Addresses</AccountTitle>}
              >
                <Block pt={3}>
                  <ShippingContainer context={SHIPPING_CONTEXTS.PROFILE} />
                </Block>
              </CardCollapsible>
            </Block>
            <Block mb={4}>
              <CardCollapsible
                title={<AccountTitle>Payment Methods</AccountTitle>}
              >
                <PaymentContainer isInCheckout={false} />
              </CardCollapsible>
            </Block>
          </ProfileGridWrapper>
        </Grid>
      </Grid>
    </AccountPageContainer>
  );
};
