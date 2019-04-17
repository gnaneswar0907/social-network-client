import React from "react";
import { connect } from "react-redux";

import Modal from "../Modal";
import history from "../../history";
import { userDPUpdate } from "../../actions/UserActions";

class UserDpModal extends React.Component {
  constructor(props) {
    super(props);
    this.uploadRef = React.createRef();
    this.state = { newdp: null };
  }

  onUploadClick = () => {
    if (this.state.newdp == null) {
      this.uploadRef.current.click();
    } else {
      return;
    }
  };

  onFileUplaod = () => {
    if (this.uploadRef.current.files && this.uploadRef.current.files[0]) {
      const file = this.uploadRef.current.files[0];
      const src = URL.createObjectURL(file);
      this.setState({ newdp: src });
    }
  };

  clearUploadedImage = () => {
    this.setState({ newdp: null });
  };

  dpUpdate = () => {
    let photo = {};
    if (this.state.newdp != null) {
      photo = { profilepic: this.uploadRef.current.files[0] };

      this.props.userDPUpdate("userid", photo);
    }
  };

  renderNewDP = () => {
    if (this.state.newdp != null) {
      return (
        <div className="ui centered medium image">
          <span
            onClick={this.clearUploadedImage}
            className="ui black right corner label"
          >
            <i className="delete icon" />
          </span>
          <img src={this.state.newdp} alt="newdp" />
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="ui icon header">
            <i className="cloud upload icon" />
            Upload Photo
          </div>
          <input
            ref={this.uploadRef}
            hidden
            type="file"
            multiple
            accept="image/gif, image/jpeg, image/png"
            onChange={this.onFileUplaod}
          />
        </React.Fragment>
      );
    }
  };

  renderContent = () => {
    return (
      <div className="ui placeholder segment" onClick={this.onUploadClick}>
        {this.renderNewDP()}
      </div>
    );
  };

  renderActions = (
    <React.Fragment>
      <button onClick={this.dpUpdate} className="ui positive button">
        Update
      </button>
      <button onClick={() => history.go(-1)} className="ui negative button">
        Cancel
      </button>
    </React.Fragment>
  );

  render() {
    return (
      <div>
        <Modal
          onDismiss={() => history.go(-1)}
          title="Update Profile Photo"
          content={this.renderContent()}
          actions={this.renderActions}
        />
      </div>
    );
  }
}

export default connect(
  null,
  {
    userDPUpdate
  }
)(UserDpModal);
