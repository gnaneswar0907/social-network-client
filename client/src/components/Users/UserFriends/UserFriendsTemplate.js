import React, { Component } from "react";

import FriendItem from "./FriendItem";

export default class UserFriendsTemplate extends Component {
  render() {
    return (
      <div className="ui  segments">
        <div className="ui top attached secondary segment">
          <div className="ui header">
            <i className="users icon" /> Friends
          </div>
        </div>
        <div className="ui attached segment">
          <div className="ui two stackable cards">
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
      </div>
    );
  }
}
