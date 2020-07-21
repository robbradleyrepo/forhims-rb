import { pathOr } from "ramda";

export const selectCookiesAccepted = pathOr(false, [
  "cookiePreferences",
  "accepted"
]);
