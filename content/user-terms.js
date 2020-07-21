import { userTermsCopy } from "./copy/user-terms";

export const userTerms = {
  componentType: "page",
  id: "0a98sdf0s0dahd",
  props: {
    title: "User Terms",
    id: "userTermsPage",
    description: "User Terms",
    sections: [
      {
        componentType: "LegalPage",
        id: "userTermsComponent",
        props: {
          copy: userTermsCopy,
          title: "USER TERMS"
        }
      }
    ]
  }
};
