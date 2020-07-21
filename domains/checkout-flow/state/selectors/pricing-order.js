import { hasValue } from "../../../../utils";
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

const getTotalsInCurrency = (totals, hasRequiredConsultation) => {
  const lineItems = getLineItems(totals, hasRequiredConsultation);

  return addTotalsToLineItems(totals, lineItems);
};

export const calculateTotalAndDiscount = (order, hasRequiredConsultation) => {
  if (!hasValue(order)) {
    return [];
  }
  const { discount, grandTotal, total, medical } = order;
  const subTotal = total + discount;

  return getTotalsInCurrency(
    {
      discount: -discount,
      grandTotal,
      medicalFee: medical,
      subTotal
    },
    hasRequiredConsultation
  );
};
