import React, { Component } from "react";

import UserHeader from "./UserHeader";
import UserContent from "./UserContent";
import FeedNavbar from "../NewsFeed/FeedNavbar";
import UserPageLeft from "./UserPageLeft";
import UserAboutTemplate from "./about/UserAboutTemplate";
import UserPhotosTemplate from "./UserPhotos/UserPhotosTemplate";
import UserFriendsTemplate from "./UserFriends/UserFriendsTemplate";
import UserUpdateTemplate from "./UserUpdateTemplate";

export default class Userpage extends Component {
  renderContent = () => {
    if (this.props.content === "about") {
      return <UserAboutTemplate />;
    } else if (this.props.content === "photos") {
      return <UserPhotosTemplate />;
    } else if (this.props.content === "friends") {
      return <UserFriendsTemplate />;
    } else if (this.props.content === "update") {
      return <UserUpdateTemplate />;
    } else {
      return (
        <React.Fragment>
          <div className="six wide column">
            <div>
              <UserPageLeft />
            </div>
          </div>
          <div className="ten wide column">
            <UserContent />
          </div>
        </React.Fragment>
      );
    }
  };
  render() {
    const contentClass = this.props.content == null ? "grid" : "";
    return (
      <div className="ui grid">
        <div className="row">
          <FeedNavbar searchfilter="posts" />
        </div>
        <div style={{ marginTop: "42px" }} className="ui container">
          <UserHeader
            button={this.props.content === "update" ? "updateform" : ""}
          />
          <div className={`ui ${contentClass} container`}>
            {this.renderContent()}
          </div>
        </div>
      </div>
    );
  }
}
