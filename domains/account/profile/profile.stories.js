import React from "react";
import { compose } from "recompose";

import { storiesOf } from "@storybook/react";
import { withRedux } from "../../../utils/storybook";
import { reduxForm } from "redux-form";

import { Profile } from "./profile.component";

storiesOf("Domains|Account/Profile", module)
  .addDecorator(withRedux)
  .add("Profile Page", () => {
    const WithForm = compose(reduxForm({ form: "profile" }))(Profile);
    return <WithForm />;
  });
