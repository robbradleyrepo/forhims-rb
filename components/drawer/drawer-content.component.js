import React from "react";

import { DrawerContentWrapper } from "./drawer.style";
import { AccountMenuContainer } from "./account-menu";
import { CheckoutFlowContainer } from "../../domains/checkout-flow";
import { AccountContainer } from "../../domains/checkout-flow/containers";
import { IngredientsContainer } from "../../modules/ingredients";
import { SafetyInformationContainer } from "../../modules/safety-information";
import VisitContent from "../../containers/VisitContainer";
import { Learn } from "./learn";
import { Shop } from "./shop";
import { ActionItems } from "../../domains/account/action-items";
import { SHIPPING } from "../../domains/checkout-flow/state/actions";
import { SHIPPING_VIEWS } from "../../domains/shipping";
import actions from "../../actions";

const LoginDrawerContent = () => (
  <DrawerContentWrapper>
    <AccountContainer />
  </DrawerContentWrapper>
);

export const DRAWER_CONTENTS = {
  login: LoginDrawerContent,
  cart: CheckoutFlowContainer,
  emr: VisitContent,
  shop: Shop,
  learn: Learn,
  account: AccountMenuContainer,
  ingredients: IngredientsContainer,
  safetyInformation: SafetyInformationContainer,
  actionItems: ActionItems
};

export const CUSTOM_DRAWER_HIDE_ACTIONS = dispatch => ({
  cart: () => {
    dispatch(actions.ui.hideDrawer());
    dispatch(SHIPPING.changeView(SHIPPING_VIEWS.LIST));
  }
});
