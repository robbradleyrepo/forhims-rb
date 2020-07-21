import {
  CHECKOUT_GRAND_TOTAL_TITLE,
  CHECKOUT_MEDICAL_FEE_TITLE,
  CHECKOUT_PROMO_DISCOUNT_TITLE,
  CHECKOUT_SUB_TOTAL_TITLE
} from "../../checkout-flow-content.constants";
import { addTotalsToLineItems } from "./pricing-common";

const getLineItems = totals => ({
  subTotal: {
    label: CHECKOUT_SUB_TOTAL_TITLE
  },
  medicalFee: {
    label: CHECKOUT_MEDICAL_FEE_TITLE
  },
  discount: {
    label: CHECKOUT_PROMO_DISCOUNT_TITLE,
    isHighlighted: !!totals.discount
  },
  grandTotal: {
    label: CHECKOUT_GRAND_TOTAL_TITLE,
    isSeparated: true
  }
});

const getTotalsInCurrency = totals => {
  const lineItems = getLineItems(totals);

  return addTotalsToLineItems(totals, lineItems);
};

export const calculateTotalAndDiscount = (cart, subTotal) => {
  const { discount, medicalFee, grandTotal } = cart;

  return getTotalsInCurrency({
    medicalFee,
    discount: -discount,
    subTotal,
    grandTotal
  });
};
