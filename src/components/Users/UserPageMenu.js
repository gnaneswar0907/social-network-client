import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UserPageMenu extends Component {
  render() {
    return (
      <div className="ui four item grey inverted secondary menu">
        <Link className="vertically fitted item">
          <div style={{ color: "#ffffff" }} className="ui header">
            About
          </div>
        </Link>
        <Link className=" vertically fitted item">
          <div style={{ color: "#ffffff" }} className="ui header">
            Photos
          </div>
        </Link>
        <Link className="vertically fitted item">
          <div style={{ color: "#ffffff" }} className="ui header">
            Friends
          </div>
        </Link>
        <Link className="vertically fitted item">
          <div style={{ color: "#ffffff" }} className="ui header">
            Update Info
          </div>
        </Link>
      </div>
    );
  }
}
