import { PRODUCT_ID_BY_NAME } from "../../config/product-ids-by-name";

export const CHECKOUT_MEDICAL_FEE_TITLE = "Medical Fee";
export const CHECKOUT_MEDICAL_FEE_COST = 0;
export const CHECKOUT_PROMO_DISCOUNT_TITLE = "Promo Discount";
export const CHECKOUT_SUB_TOTAL_TITLE = "Order Sub-total*";
export const CHECKOUT_GRAND_TOTAL_TITLE = "Grand Total";
export const CHECKOUT_CONSULTATION_TITLES = {
  [PRODUCT_ID_BY_NAME.finasteride]: "Hair Loss Consultation",
  [PRODUCT_ID_BY_NAME.hairRenewal]: "Hair Loss Renewal Consultation",
  [PRODUCT_ID_BY_NAME.sildenafil]: "Erectile Dysfunction Consultation",
  [PRODUCT_ID_BY_NAME.edRenewal]: "Erectile Dysfunction Renewal Consultation"
};
