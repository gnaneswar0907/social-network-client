import React, { Component } from "react";

import FriendItem from "./FriendItem";

export default class Friends extends Component {
  render() {
    return (
      <div className="ui horizontal list">
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
      </div>
    );
  }
}
