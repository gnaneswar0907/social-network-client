import React, { Component } from "react";
import { Link } from "react-router-dom";

import faker from "faker";
import UserPageMenu from "./UserPageMenu";
import "./Overlay.css";

export default class UserHeader extends Component {
  render() {
    const buttonLink =
      this.props.buttonColor === "positive" ? "/user/edit/2" : "/user/2";
    const renderDP = () => {
      if (faker.image.image()) {
        return <img src={faker.image.image()} alt="profilephoto" />;
      } else {
        return <div className="ui placeholder" />;
      }
    };
    return (
      <div className="ui segments">
        <div className="ui inverted black segment">
          <div className="ui small circular image" id="dp">
            <div className="ui dimmer">
              <Link className="ui inverted button" to={`/user/id/dp/`}>
                Update Photo
              </Link>
            </div>
            {renderDP()}
          </div>
        </div>
        <div className="ui overlay">
          <UserPageMenu />
        </div>
      </div>
    );
  }
}
