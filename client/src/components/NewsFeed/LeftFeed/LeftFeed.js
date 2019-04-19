import React, { Component } from "react";

import { userpage, home, messages, requests, findfriends } from "../../../urls";
import SingleItem from "./SingleItem";

export default class LeftFeed extends Component {
  render() {
    return (
      <div className="ui middle aligned  selection right floated list ">
        <SingleItem content="User Profile" link={`${userpage}/id`} />
        <SingleItem content="News Feed" link={home} />
        <SingleItem content="Messages" link={messages} />
        <SingleItem content="Find Friends" link={findfriends} />
        <SingleItem content="Requests" link={requests} />
      </div>
    );
  }
}
