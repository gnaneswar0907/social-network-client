import React from "react";

import Modal from "./Modal";
import history from "../history";

class ErrorModal extends React.Component {
  renderContent = () => {
    if (this.props.location.state) {
      return (
        <div style={{ textAlign: "center" }} className="ui  negative message">
          <div className="header">
            Your user registration was not successful.
            <p>{this.props.location.state.msg}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ textAlign: "center" }} className="ui negative message">
          Something went wrong.
        </div>
      );
    }
  };

  renderActions = () => {
    return (
      <button onClick={() => history.go(-1)} className="ui negative button">
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

export default ErrorModal;
