import React, { Component } from "react";
import { Link } from "react-router-dom";

import history from "../../history";
import { profilephoto, userpage, passwordChange } from "../../urls";
import UserPageMenu from "./UserPageMenu";
import "./Overlay.css";

export default class UserHeader extends Component {
  renderMenu = () => {
    if (this.props.button === "updateform") {
      return (
        <div className="ui right aligned tertiary segment">
          <Link
            to={`${passwordChange}`}
            style={{ marginRight: "20px" }}
            className="ui teal button"
          >
            Change Password
          </Link>
          <div
            onClick={() => history.push(`${userpage}/id`)}
            className="ui negative button"
          >
            Go Back
          </div>
        </div>
      );
    } else {
      return (
        <div className="ui overlay">
          <UserPageMenu />
        </div>
      );
    }
  };
  render() {
    if (this.props.userDetail) {
      const { handle, avatar } = this.props.userDetail;
      return (
        <div className="ui segments">
          <div className="ui inverted black segment">
            <Link
              to={`${userpage}/${handle}`}
              style={{ marginLeft: "30px" }}
              className="ui small circular image"
            >
              <img
                src={`data:image/jpeg;base64,${avatar}`}
                alt="profilephoto"
              />
            </Link>
          </div>
          {this.renderMenu()}
        </div>
      );
    } else {
      return (
        <div className="ui segments">
          <div className="ui inverted black segment">
            <div className="ui small circular image">
              <div className="ui placeholder" />
            </div>
          </div>
          {this.renderMenu()}
        </div>
      );
    }
  }
}
