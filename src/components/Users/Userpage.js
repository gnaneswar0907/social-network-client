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

class Userpage extends Component {
  componentDidMount() {
    console.log(this.props);
    const { username } = this.props.match.params;
    this.props.userDetail(username);
  }

  renderContent = () => {
    if (this.props.content === "about") {
      if (this.props.user) {
        return <UserAboutTemplate userDetail={this.props.user} />;
      }
    } else if (this.props.content === "photos") {
      if (this.props.user) {
        return <UserPhotosTemplate userDetail={this.props.user} />;
      }
    } else if (this.props.content === "friends") {
      if (this.props.user) {
        return <UserFriendsTemplate userDetail={this.props.user} />;
      }
    } else if (this.props.content === "update") {
      if (this.props.user) {
        return <UserUpdateTemplate userDetail={this.props.user} />;
      }
    } else {
      return (
        <React.Fragment>
          <div className="seven wide column">
            <div>
              <UserPageLeft />
            </div>
          </div>
          <div className="nine wide column">
            <UserContent username={this.props.match.params.username} />
          </div>
        </React.Fragment>
      );
    }
  };

  renderHeader = () => {
    if (this.props.user) {
      return (
        <UserHeader
          userDetail={this.props.user}
          button={this.props.content === "update" ? "updateform" : ""}
        />
      );
    }
  };

  render() {
    const contentClass = this.props.content == null ? "grid" : "";
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

const mapStateToPros = ({ user }) => {
  return {
    user: user.userDetail
  };
};

export default connect(
  mapStateToPros,
  {
    userDetail
  }
)(Userpage);
