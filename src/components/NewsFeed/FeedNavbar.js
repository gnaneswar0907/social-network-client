import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logoutUser } from "../../actions/UserActions";
import faker from "faker";
import { home, userpage } from "../../urls";
import SearchBar from "./SearchBar";

class FeedNavbar extends Component {
  render() {
    if (this.props.searchfilter === "users") {
      this.filter = "users";
    } else {
      this.filter = "posts";
    }
    if (this.props.userdata) {
      return (
        <div className="ui blue fluid inverted secondary labeled icon top fixed menu">
          <div className="vertically fitted  item">
            <Link
              to={home}
              className="header item"
              style={{ marginLeft: "250px" }}
            >
              <i className="plug icon" />
            </Link>
          </div>
          <div className="vertically fitted item">
            <SearchBar filters={this.filter} />
          </div>
          <div
            className="vertically fitted  item"
            style={{ marginLeft: "150px" }}
          >
            <Link to={`${userpage}/id`} className="ui blue label">
              <img
                className="ui avatar image"
                src={this.props.userdata.avatar}
                alt="userphoto"
              />
              {this.props.userdata.name}
            </Link>
          </div>
          <div
            className="vertically fitted  item"
            style={{ marginLeft: "10px" }}
          >
            <Link to={home} className="ui blue label">
              Home
            </Link>
          </div>
          <div
            className="vertically fitted  item"
            style={{ marginLeft: "80px" }}
          >
            <div
              style={{ cursor: "pointer" }}
              onClick={() => this.props.logoutUser()}
              className="ui blue label"
            >
              Log out <i className="log out icon" />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="ui blue fluid inverted secondary labeled icon top fixed menu">
          <div className="vertically fitted  item">
            <Link
              to={home}
              className="header item"
              style={{ marginLeft: "250px" }}
            >
              <i className="plug icon" />
            </Link>
          </div>
          <div className="vertically fitted item">
            <SearchBar filters={this.filter} />
          </div>
          <div
            className="vertically fitted  item"
            style={{ marginLeft: "150px" }}
          >
            <Link to={`${userpage}/id`} className="ui blue label">
              <img className="ui avatar image" src="" alt="userdp" />
              UserName
            </Link>
          </div>
          <div
            className="vertically fitted  item"
            style={{ marginLeft: "10px" }}
          >
            <Link to={home} className="ui blue label">
              Home
            </Link>
          </div>
          <div
            className="vertically fitted  item"
            style={{ marginLeft: "80px" }}
          >
            <div
              style={{ cursor: "pointer" }}
              onClick={() => this.props.logoutUser()}
              className="ui blue label"
            >
              Log out <i className="log out icon" />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default connect(
  null,
  { logoutUser }
)(FeedNavbar);
