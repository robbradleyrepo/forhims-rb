export const COOKIE_ACTIONS = {
  PREFERENCE_CHANGE: "[Cookie] Preference Change"
};

export const cookiePreferenceChange = payload => ({
  type: COOKIE_ACTIONS.PREFERENCE_CHANGE,
  payload
});
