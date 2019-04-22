import React, { Component } from "react";
import { Link } from "react-router-dom";

import faker from "faker";
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
    const renderDP = () => {
      if (faker.image.image()) {
        return <img src={faker.image.image()} alt="profilephoto" />;
      } else {
        return <div className="ui placeholder" />;
      }
    };
    return (
      <div className="ui segments">
        <div style={{ zIndex: "0" }} className="ui inverted black segment">
          <div className="ui small circular image" id="dp">
            <div className="ui dimmer">
              <Link className="ui inverted button" to={profilephoto}>
                Update Photo
              </Link>
            </div>
            {renderDP()}
          </div>
        </div>
        {this.renderMenu()}
      </div>
    );
  }
}
