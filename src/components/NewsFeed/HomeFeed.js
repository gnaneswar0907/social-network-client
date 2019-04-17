import React, { Component } from "react";

import FeedNavbar from "./FeedNavbar";
import MainFeed from "./CenterFeed/MainFeed";
import LeftFeed from "./LeftFeed/LeftFeed";
import Trending from "./RightFeed/Trending";
import NewFriends from "../friends/NewFriends";
import RequestItems from "../friends/RequestItems";

class HomeFeed extends Component {
  renderCenterColumn = () => {
    if (this.props.middleColumn === "FindFriends") {
      return <NewFriends />;
    } else if (this.props.middleColumn === "FriendRequests") {
      return <RequestItems />;
    } else {
      return <MainFeed />;
    }
  };
  render() {
    return (
      <div id="home">
        <FeedNavbar searchfilter="users" />
        <div className="ui grid container" style={{ marginTop: "10px" }}>
          <div className="two wide column">
            <div style={{ position: "fixed" }}>
              <LeftFeed />
            </div>
          </div>
          <div className="ten wide  column">{this.renderCenterColumn()}</div>
          <div className="four wide column">
            <div style={{ position: "fixed" }}>
              <Trending />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeFeed;
