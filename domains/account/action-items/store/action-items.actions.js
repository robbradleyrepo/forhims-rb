export const ACTION_ITEMS_ACTIONS = {
  REQUIRED_ACTION_RESUME_VISIT:
    "[checkout - account] select a required action to resume visit"
};

export const ACTION_ITEMS = {
  requiredActionResumeVisit: visitId => ({
    type: ACTION_ITEMS_ACTIONS.REQUIRED_ACTION_RESUME_VISIT,
    payload: { visitId }
  })
};
