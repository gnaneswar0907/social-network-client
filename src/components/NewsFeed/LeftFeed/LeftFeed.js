import React, { Component } from "react";
import { connect } from "react-redux";

import { userpage, home, messages, requests, findfriends } from "../../../urls";
import SingleItem from "./SingleItem";

class LeftFeed extends Component {
  render() {
    if (this.props.user) {
      return (
        <div className="ui middle aligned  selection right floated list ">
          <SingleItem
            user={this.props.user}
            link={`${userpage}/${this.props.user.handle}`}
          />
          <SingleItem content="News Feed" link={home} />
          <SingleItem content="Messages" link={messages} />
          <SingleItem content="Find Friends" link={findfriends} />
          <SingleItem content="Requests" link={requests} />
        </div>
      );
    } else {
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
}

const mapStateToProps = ({ user }) => {
  return {
    user: user.current
  };
};

export default connect(
  mapStateToProps,
  {}
)(LeftFeed);
