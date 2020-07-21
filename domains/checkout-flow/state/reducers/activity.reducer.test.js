import { ACTIVITY_ACTIONS } from "../actions/activity.actions";

import { ACTIVITY_DEFAULT_STATE, activity } from "./activity.reducer";

describe("Checkout Activity Reducer", () => {
  it("Shows the activity indicator when required by the UI", () => {
    const action = {
      type: ACTIVITY_ACTIONS.SHOW
    };
    const nextState = activity(ACTIVITY_DEFAULT_STATE, action);
    expect(nextState).toMatchObject({ visible: true });
  });
  it("Hides the activity indicator when not required by the UI", () => {
    const action = {
      type: ACTIVITY_ACTIONS.HIDE
    };
    const mockState = {
      visible: true
    };
    const nextState = activity(mockState, action);
    expect(nextState).toMatchObject({
      visible: false
    });
  });
});
