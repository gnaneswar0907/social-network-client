import React, { Component } from "react";

import UserHeader from "./UserHeader";
import UserContent from "./UserContent";
import FeedNavbar from "../NewsFeed/FeedNavbar";
import UserPageLeft from "./UserPageLeft";
import UserAbout from "./about/UserAbout";
import UserPhotos from "./UserPhotos/UserPhotos";
import UserFriends from "./UserFriends/UserFriends";
import UserUpdate from "./UserUpdate";

export default class Userpage extends Component {
  state = { content: "" };

  renderContent = () => {
    if (this.state.content === "about") {
      return <UserAbout />;
    } else if (this.state.content === "photos") {
      return <UserPhotos />;
    } else if (this.state.content === "friends") {
      return <UserFriends />;
    } else if (this.state.content === "update") {
      return <UserUpdate />;
    } else {
      return <UserContent />;
    }
  };

  render() {
    return (
      <div className="ui grid">
        <div className="row">
          <FeedNavbar searchfilter="posts" />
        </div>
        <div style={{ marginTop: "42px" }} className="ui container">
          <UserHeader buttonAction="Update Info" buttonColor="positive" />
          <div className="ui grid container">
            <div className="six wide column">
              <div>
                <UserPageLeft />
              </div>
            </div>
            <div className="ten wide column">{this.renderContent()}</div>
          </div>
        </div>
      </div>
    );
  }
}
