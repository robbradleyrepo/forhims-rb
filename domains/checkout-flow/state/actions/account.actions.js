export const ACCOUNT_ACTIONS = {
  CHANGE_VIEW: "[checkout - account] change view",
  LOGIN: "[checkout - account] login",
  LOGIN_SUCCESS: "[checkout - account] login success",
  FORGOT: "[checkout - account] forgot",
  REGISTER: "[checkout - account] register",
  REGISTER_SUCCESS: "[checkout - account] register success",
  DATE_OF_BIRTH: "[checkout - account] set date of birth"
};

export const ACCOUNT = {
  changeView: view => ({
    type: ACCOUNT_ACTIONS.CHANGE_VIEW,
    payload: { view }
  }),
  login: (resolve, reject) => ({
    type: ACCOUNT_ACTIONS.LOGIN,
    payload: { resolve, reject }
  }),
  loginSuccess: () => ({
    type: ACCOUNT_ACTIONS.LOGIN_SUCCESS
  }),
  forgot: (resolve, reject) => ({
    type: ACCOUNT_ACTIONS.FORGOT,
    payload: { resolve, reject }
  }),
  register: (resolve, reject) => ({
    type: ACCOUNT_ACTIONS.REGISTER,
    payload: { resolve, reject }
  }),
  registerSuccess: () => ({
    type: ACCOUNT_ACTIONS.REGISTER_SUCCESS
  }),
  dateOfBirth: (resolve, reject) => ({
    type: ACCOUNT_ACTIONS.DATE_OF_BIRTH,
    payload: { resolve, reject }
  }),
  showView: () => ({ type: ACCOUNT_ACTIONS.TOGGLE_VIEW })
};
