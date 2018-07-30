import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import SigninForm from "./signinForm";

class Signin extends Component {
  onSubmit = fields => {
    console.log("trying");
  };
  render() {
    return (
      <div className="sign-in">
        <SigninForm onSubmit={event => this.onSubmit(event)} />
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Signin);
