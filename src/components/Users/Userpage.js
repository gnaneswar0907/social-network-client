import React, { Component } from "react";
import { connect } from "react-redux";

import UserHeader from "./UserHeader";
import UserContent from "./UserContent";
import FeedNavbar from "../NewsFeed/FeedNavbar";
import UserPageLeft from "./UserPageLeft";
import UserAboutTemplate from "./about/UserAboutTemplate";
import UserPhotosTemplate from "./UserPhotos/UserPhotosTemplate";
import UserFriendsTemplate from "./UserFriends/UserFriendsTemplate";
import UserUpdateTemplate from "./UserUpdateTemplate";

import { userDetail } from "../../actions/UserActions";
import { getUserPosts } from "../../actions/PostActions";

class Userpage extends Component {
  componentDidMount() {
    this.props.getUserPosts();
    this.props.userDetail();
  }

  renderContent = () => {
    if (this.props.content === "about") {
      if (this.props.userdetail) {
        return <UserAboutTemplate userdetail={this.props.userdetail} />;
      } else {
        return <UserAboutTemplate />;
      }
    } else if (this.props.content === "photos") {
      if (this.props.userdetail) {
        return <UserPhotosTemplate userdetail={this.props.userdetail} />;
      } else {
        return <UserPhotosTemplate />;
      }
    } else if (this.props.content === "friends") {
      if (this.props.userdetail) {
        return <UserFriendsTemplate userdetail={this.props.userdetail} />;
      } else {
        return <UserFriendsTemplate />;
      }
    } else if (this.props.content === "update") {
      if (this.props.userdetail) {
        return <UserUpdateTemplate userdetail={this.props.userdetail} />;
      } else {
        return <UserUpdateTemplate />;
      }
    } else {
      return (
        <React.Fragment>
          <div className="six wide column">
            <div>
              <UserPageLeft />
            </div>
          </div>
          <div className="ten wide column">
            <UserContent posts={this.props.posts} />
          </div>
        </React.Fragment>
      );
    }
  };

  renderHeader = () => {
    if (this.props.posts.userdata) {
      return (
        <UserHeader
          userdata={this.props.posts.userdata}
          button={this.props.content === "update" ? "updateform" : ""}
        />
      );
    } else {
      return (
        <UserHeader
          button={this.props.content === "update" ? "updateform" : ""}
        />
      );
    }
  };

  render() {
    const contentClass = this.props.content == null ? "grid" : "";
    if (this.props.posts) {
      return (
        <div className="ui grid">
          <div className="row">
            <FeedNavbar
              userdata={this.props.posts.userdata}
              searchfilter="posts"
            />
          </div>
          <div style={{ marginTop: "42px" }} className="ui container">
            {this.renderHeader()}
            <div className={`ui ${contentClass} container`}>
              {this.renderContent()}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="ui grid">
          <div className="row">
            <FeedNavbar searchfilter="posts" />
          </div>
          <div style={{ marginTop: "42px" }} className="ui container">
            {this.renderHeader()}
            <div className={`ui ${contentClass} container`}>
              {this.renderContent()}
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToPros = state => {
  return {
    posts: state.posts,
    userdetail: state.users
  };
};

export default connect(
  mapStateToPros,
  {
    userDetail,
    getUserPosts
  }
)(Userpage);
