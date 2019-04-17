import React, { Component } from "react";

import SingleFriend from "./SingleFriend";

export default class NewFriends extends Component {
  render() {
    return (
      <div className="ui very relaxed divided items">
        <SingleFriend />
        <SingleFriend />
        <SingleFriend />
      </div>
    );
  }
}
