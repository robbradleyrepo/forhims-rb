import { serviceTermsCopy } from "./copy/service-terms";

export const serviceTerms = {
  componentType: "page",
  id: "0a98sdf0s0dahd",
  props: {
    title: "Service Terms",
    id: "serviceTermsPage",
    description: "Service Terms",
    sections: [
      {
        componentType: "LegalPage",
        id: "serviceTermsComponent",
        props: {
          copy: serviceTermsCopy,
          title: "SERVICE TERMS"
        }
      }
    ]
  }
};
