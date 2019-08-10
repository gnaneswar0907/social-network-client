import React, { Component } from "react";

import history from "../../history";
import Modal from "../Modal";

export default class PasswordChangeModal extends Component {
  validateNewPassword = () => {
    const error = "";
  };

  renderActions = () => {
    return (
      <React.Fragment>
        <div className="ui positive button">Update Password</div>
        <div onClick={() => history.go(-1)} className="ui negative button">
          Cancel
        </div>
      </React.Fragment>
    );
  };

  renderContent = () => {
    return (
      <div style={{ padding: "30px" }} className="ui container">
        <form className="ui form">
          <div style={{ paddingBottom: "20px" }} className="field">
            <div className="ui labeled input">
              <div className="ui brown label">Old Password</div>
              <input type="password" placeholder="Enter Old password" />
            </div>
          </div>

          <div style={{ paddingTop: "20px" }} className="field">
            <div className="ui labeled input">
              <div className="ui brown label">New Password</div>
              <input
                onChange={this.validateNewPassword}
                type="password"
                placeholder="Enter New password"
              />
            </div>
          </div>
        </form>
      </div>
    );
  };
  render() {
    return (
      <Modal
        onDismiss={() => history.go(-1)}
        title="Change Password"
        content={this.renderContent()}
        actions={this.renderActions()}
      />
    );
  }
}
