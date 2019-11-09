import React, { Component } from "react";
import { Link } from "react-router-dom";

import { about, userUpdate, userPhotos, userFriends } from "../../urls";

export default class UserPageMenu extends Component {
  render() {
    return (
      <div className="ui four item grey inverted secondary tabular menu">
        <Link to={about} className="vertically fitted item">
          <div style={{ color: "#ffffff" }} className="ui header">
            About
          </div>
        </Link>
        <Link to={userPhotos} className=" vertically fitted item">
          <div style={{ color: "#ffffff" }} className="ui header">
            Photos
          </div>
        </Link>
        <Link to={userFriends} className="vertically fitted item">
          <div style={{ color: "#ffffff" }} className="ui header">
            Friends
          </div>
        </Link>
        <Link to={userUpdate} className="vertically fitted item">
          <div style={{ color: "#ffffff" }} className="ui header">
            Update Info
          </div>
        </Link>
      </div>
    );
  }
}
