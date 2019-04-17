import React, { Component } from "react";

import FriendItem from "./FriendItem";

export default class UserFriends extends Component {
  render() {
    return (
      <div className="ui container">
        <div style={{ marginTop: "20px" }} className="ui two stackable cards">
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
        </div>
      </div>
    );
  }
}
