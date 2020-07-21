import React from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import { Login } from "../../../../components/checkout/login";
import { RegisterAccount } from "../../../../components/checkout/register-account";
import { ForgotPasswordComponent } from "../../../../components/checkout/forgot-password";

const LoginForm = reduxForm({
  form: "checkout-login"
})(Login);

const RegisterAccountForm = reduxForm({
  form: "checkout-register"
})(RegisterAccount);

const ForgotPasswordForm = reduxForm({
  form: "checkout-forgot"
})(ForgotPasswordComponent);

export const Account = ({
  activeView,
  handleChangeView,
  handleLoginSubmit,
  handleRegisterSubmit,
  handleForgotSubmit
}) => {
  switch (activeView) {
    case "login":
      return (
        <LoginForm
          handleLoginSubmit={handleLoginSubmit}
          onShowRegisterView={handleChangeView("register")}
          onShowForgotPasswordView={handleChangeView("forgot")}
        />
      );
    case "register":
      return (
        <RegisterAccountForm
          handleRegisterSubmit={handleRegisterSubmit}
          onShowLoginView={handleChangeView("login")}
        />
      );
    case "forgot":
      return (
        <ForgotPasswordForm
          handleForgotSubmit={handleForgotSubmit}
          onShowLoginView={handleChangeView("login")}
          onShowRegisterView={handleChangeView("register")}
        />
      );
  }
  return null;
};

Account.propTypes = {
  handleChangeView: PropTypes.func,
  handleLoginSubmit: PropTypes.func,
  handleRegisterSubmit: PropTypes.func,
  handleForgotSubmit: PropTypes.func,
  activeView: PropTypes.string.isRequired
};
