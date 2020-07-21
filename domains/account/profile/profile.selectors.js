import { createStructuredSelector } from "reselect";
import { getUserProfile } from "../../../selectors/me";

export const profileConnector = createStructuredSelector({
  userProfile: getUserProfile
});
