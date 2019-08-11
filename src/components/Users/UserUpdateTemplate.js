import React, { Component } from "react";

import UserForm from "./UserForm";

export default class UserUpdateTemplate extends Component {
  render() {
    return (
      <div className="ui segments">
        <div className="ui top attached secondary segment">
          <div className="ui header">
            <i className="user md icon" /> Update your Details
          </div>
        </div>
        <div className="ui attached segment">
          <UserForm userDetail={this.props.userDetail} />
        </div>
      </div>
    );
  }
}
