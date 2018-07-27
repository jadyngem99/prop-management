import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormTitle } from "../formTitle";
import { FormInput, FormButton } from "../formFields";
import TextLink from "../textLink";

class SignupForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormTitle className="sign-up-form__title" text="New User" />

        <Field
          className="sign-up-form__fullname"
          placeholder="Full Name"
          name="fullname"
          type="text"
          title="Fullname"
          component={FormInput}
        />

        <Field
          className="sign-up-form__unit"
          placeholder="Unit Number"
          name="unit"
          type="text"
          title="Unit #"
          component={FormInput}
        />

        <Field
          className="sign-up-form__email"
          placeholder="Email"
          name="email"
          type="email"
          title="Email"
          component={FormInput}
        />

        <Field
          className="sign-up-form__password"
          placeholder="Password"
          name="password"
          type="password"
          title="Password"
          component={FormInput}
        />

        <Field
          className="sign-up-form__create-account"
          name="createaccount"
          type="submit"
          title="Create Account"
          component={FormButton}
        />
        <div className="sign-up-form__text-link">
          <TextLink to="/signin" text="Already Registered? Login" />
        </div>
      </form>
    );
  }
}

SignupForm = reduxForm({
  form: "signup"
})(SignupForm);

export default SignupForm;
