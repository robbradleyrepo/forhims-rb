import { privacyPolicyCopy } from "./copy/privacy-policy";
import { ROUTE_PATHS, ROUTE_PATHS_US } from "../routes/routes.constants";

export const privacyPolicy = {
  componentType: "page",
  id: "0a98sdf0s0dahd",
  props: {
    title: "Privacy Policy (Including Cookie Policy)",
    id: "privacyPolicyPage",
    description: "Privacy Policy (Including Cookie Policy)",
    links: [
      {
        hrefLang: "en-us",
        href: ROUTE_PATHS.privacy
      },
      {
        hrefLang: "en-gb",
        href: ROUTE_PATHS_US.privacy
      }
    ],
    sections: [
      {
        componentType: "LegalPage",
        id: "privacyPolicyComponent",
        props: {
          copy: privacyPolicyCopy,
          title: "PRIVACY POLICY (INCLUDING COOKIE POLICY)",
          image: "hers-purpose-atf-2x"
        }
      }
    ]
  }
};
