import { pharmacyTermsCopy } from "./copy/pharmacy-terms";

export const pharmacyTerms = {
  componentType: "page",
  id: "0a98sdf0s0dahd",
  props: {
    title: "Pharmacy Terms",
    id: "pharmacyTermsPage",
    description: "Pharmacy Terms",
    sections: [
      {
        componentType: "LegalPage",
        id: "pharmacyTermsComponent",
        props: {
          copy: pharmacyTermsCopy,
          title: "PHARMACY TERMS"
        }
      }
    ]
  }
};
