import React, { Component } from "react";

import SingleItem from "./SingleItem";

export default class LeftFeed extends Component {
  render() {
    return (
      <div className="ui middle aligned  selection right floated list ">
        <SingleItem content="User Profile" link="/user/2" />
        <SingleItem content="News Feed" link="/home" />
        <SingleItem content="Messages" link="/user/messages" />
        <SingleItem content="Find Friends" link="/home/findfriends" />
        <SingleItem content="Requests" link="/home/friendRequests" />

        <div className="item" style={{ marginTop: "20px" }}>
          <div className="grey basic content header">Explore</div>
        </div>
        <SingleItem content="Pages" />
        <SingleItem content="Groups" />
        <SingleItem content="Events" />
        <SingleItem content="Market Place" />
      </div>
    );
  }
}
