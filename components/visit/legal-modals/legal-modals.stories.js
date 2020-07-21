import { storiesOf } from "@storybook/react";
import {
  PrivacyPolicyModalContent,
  ServiceTermsModalContent,
  UserTermsModalContent
} from "./legal-modals.component";
import { action } from "@storybook/addon-actions";
import React from "react";

storiesOf("Components|EMR/ Legal Modals", module)
  .add("User Terms", () => {
    return <UserTermsModalContent closeModal={action("close")} />;
  })
  .add("Service Terms", () => {
    return <ServiceTermsModalContent closeModal={action("close")} />;
  })
  .add("Privacy Policy Terms", () => {
    return <PrivacyPolicyModalContent closeModal={action("close")} />;
  });
