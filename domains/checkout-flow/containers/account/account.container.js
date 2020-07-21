import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";

import { ACCOUNT } from "../../state/actions";
import { accountConnector } from "../../state/selectors/account";
import { Account } from "../../components/account";

const actions = {
  changeView: ACCOUNT.changeView,
  login: ACCOUNT.login,
  register: ACCOUNT.register,
  forgot: ACCOUNT.forgot
};

export const AccountContainer = compose(
  connect(
    accountConnector,
    actions
  ),
  withHandlers({
    handleChangeView: props => view => () => {
      props.changeView(view);
    },
    handleLoginSubmit: props => () =>
      new Promise((resolve, reject) => {
        props.login(resolve, reject);
      }),
    handleRegisterSubmit: props => () =>
      new Promise((resolve, reject) => {
        props.register(resolve, reject);
      }),
    handleForgotSubmit: props => () =>
      new Promise((resolve, reject) => {
        props.forgot(resolve, reject);
      })
  })
)(Account);
