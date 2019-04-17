import React, { Component } from "react";

import UserForm from "./UserForm";
import UserHeader from "./UserHeader";
import FeedNavbar from "../NewsFeed/FeedNavbar";

class UserUpdate extends Component {
  render() {
    return (
      <div className="ui grid">
        <div className="row">
          <FeedNavbar />
        </div>
        <div style={{ marginTop: "42px" }} className="ui container">
          <UserHeader button="updateform" />
          <UserForm />
        </div>
      </div>
    );
  }
}

export default UserUpdate;
