import React, { Component } from "react";

import Modal from "./Modal";
import history from "../history";

export default class SuccessModal extends Component {
  renderContent = () => {
    if (this.props.location.state) {
      return (
        <div style={{ textAlign: "center" }} className="ui  positive message">
          <div className="header">
            <p>{this.props.location.state.msg}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ textAlign: "center" }} className="ui positive message">
          Successfully Done!!!
        </div>
      );
    }
  };

  renderActions = () => {
    return (
      <button onClick={() => history.go(-1)} className="ui positive button">
        OK
      </button>
    );
  };

  render() {
    return (
      <Modal
        onDismiss={() => history.go(-1)}
        title={
          this.props.location.state ? this.props.location.state.title : "Error"
        }
        content={this.renderContent()}
        actions={this.renderActions()}
      />
    );
  }
}
