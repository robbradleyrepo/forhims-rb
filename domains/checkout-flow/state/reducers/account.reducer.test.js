import { ACCOUNT_ACTIONS } from "../actions";

import { account, ACCOUNT_DEFAULT_STATE } from "./account.reducer";

describe("Account Reducer", () => {
  it("Should switch the UI to the requested view", () => {
    const nextView = "edit";
    const action = {
      type: ACCOUNT_ACTIONS.CHANGE_VIEW,
      payload: { view: nextView }
    };
    const nextState = account(ACCOUNT_DEFAULT_STATE, action);
    expect(nextState).toMatchObject({ activeView: nextView });
  });
  it("Returns a default state for any other actions", () => {
    const action = {
      type: "delete your account"
    };
    const nextState = account(ACCOUNT_DEFAULT_STATE, action);
    expect(nextState).toEqual(ACCOUNT_DEFAULT_STATE);
  });
});
