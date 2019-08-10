import React, { Component } from "react";
import { connect } from "react-redux";

import { getPosts } from "../../actions/PostActions";

import FeedNavbar from "./FeedNavbar";
import MainFeed from "./CenterFeed/MainFeed";
import LeftFeed from "./LeftFeed/LeftFeed";
import Trending from "./RightFeed/Trending";
import NewFriends from "../friends/NewFriends";
import RequestItems from "../friends/RequestItems";

class HomeFeed extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  renderCenterColumn = posts => {
    if (this.props.middleColumn === "FindFriends") {
      return <NewFriends />;
    } else if (this.props.middleColumn === "FriendRequests") {
      return <RequestItems />;
    } else {
      return <MainFeed posts={posts} />;
    }
  };
  render() {
    //const posts = this.props.posts;
    if (
      this.props.posts &&
      this.props.posts.posts &&
      this.props.posts.userdata
    ) {
      return (
        <div id="home">
          <FeedNavbar
            userdata={this.props.posts.userdata}
            searchfilter="users"
          />
          <div className="ui grid container" style={{ marginTop: "10px" }}>
            <div className="two wide column">
              <div style={{ position: "fixed" }}>
                <LeftFeed userdata={this.props.posts.userdata} />
              </div>
            </div>
            <div className="ten wide  column">
              {this.renderCenterColumn(this.props.posts)}
            </div>
            <div className="four wide column">
              <div style={{ position: "fixed" }}>
                <Trending />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
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
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  {
    getPosts
  }
)(HomeFeed);
