import {
  AccountContainer,
  DateOfBirthContainer,
  CartContainer,
  ReviewOrderContainer,
  ShippingContainer
} from "./containers";
import { PaymentContainer } from "../payment";

// TODO: De-dupe these, they're also in the navigation component
export const CHECKOUT_STEP_NAMES = {
  ACCOUNT: "profile",
  CART: "cart",
  REVIEW_ORDER: "confirmation",
  DATE_OF_BIRTH: "date-of-birth",
  PAYMENT: "payment",
  SHIPPING: "shipping",
  VISIT: "visit"
};

export const CHECKOUT_STEP_ORDER = [
  CHECKOUT_STEP_NAMES.ACCOUNT,
  CHECKOUT_STEP_NAMES.VISIT,
  CHECKOUT_STEP_NAMES.CART,
  CHECKOUT_STEP_NAMES.DATE_OF_BIRTH,
  CHECKOUT_STEP_NAMES.SHIPPING,
  CHECKOUT_STEP_NAMES.PAYMENT,
  CHECKOUT_STEP_NAMES.REVIEW_ORDER
];

export const CHECKOUT_FLOW_STEPS = {
  [CHECKOUT_STEP_NAMES.CART]: {
    component: CartContainer,
    title: "You're Almost Done"
  },
  [CHECKOUT_STEP_NAMES.DATE_OF_BIRTH]: {
    component: DateOfBirthContainer,
    title: "Date of Birth"
  },
  [CHECKOUT_STEP_NAMES.ACCOUNT]: {
    component: AccountContainer,
    title: "Step 1: Create your account"
  },
  [CHECKOUT_STEP_NAMES.SHIPPING]: {
    component: ShippingContainer,
    title: "Shipping"
  },
  [CHECKOUT_STEP_NAMES.PAYMENT]: {
    component: PaymentContainer,
    title: "Payment"
  },
  [CHECKOUT_STEP_NAMES.REVIEW_ORDER]: {
    component: ReviewOrderContainer,
    title: "Review Order"
  },
  [CHECKOUT_STEP_NAMES.VISIT]: {
    component: AccountContainer,
    title: "VISIT"
  }
};
