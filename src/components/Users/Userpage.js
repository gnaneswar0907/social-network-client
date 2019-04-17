import React, { Component } from "react";

import UserHeader from "./UserHeader";
import UserContent from "./UserContent";
import FeedNavbar from "../NewsFeed/FeedNavbar";
import UserPageLeft from "./UserPageLeft";

export default class Userpage extends Component {
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
            <div className="ten wide column">
              <UserContent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
