import React, { Component } from "react";

import UserForm from "./UserForm";
import UserHeader from "./UserHeader";
import FeedNavbar from "../NewsFeed/FeedNavbar";

class UserUpdate extends Component {
  render() {
    return (
      <div>
        <FeedNavbar />
        <div className="ui container">
          <UserHeader buttonAction="Go Back" buttonColor="negative" />
          <UserForm />
        </div>
      </div>
    );
  }
}

export default UserUpdate;
