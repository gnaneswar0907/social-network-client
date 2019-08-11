import React, { Component } from "react";
import { connect } from "react-redux";

import CreatePost from "../NewsFeed/CenterFeed/CreatePost";
import Comments from "../NewsFeed/CenterFeed/Comments";

import { getUserPosts } from "../../actions/PostActions";
import FeedItem from "../NewsFeed/CenterFeed/FeedItem";

class UserContent extends Component {
  state = { hideComments: true };

  componentDidMount() {
    this.props.getUserPosts(this.props.username);
  }

  setVisibility = () => {
    if (this.state.hideComments) {
      this.setState({ hideComments: false });
    } else {
      this.setState({ hideComments: true });
    }
  };

  renderComments = () => {
    if (this.state.hideComments) {
      return <div />;
    } else {
      return (
        <div className="content">
          <Comments />
        </div>
      );
    }
  };

  renderPosts = () => {
    const { posts } = this.props;
    if (posts) {
      return posts.map(post => {
        return <FeedItem post={post} />;
      });
    } else {
      return <div>No posts to display</div>;
    }
  };

  render() {
    return (
      <div className="ui large feed">
        <CreatePost />
        {this.renderPosts()}
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts
  };
};

export default connect(
  mapStateToProps,
  { getUserPosts }
)(UserContent);
