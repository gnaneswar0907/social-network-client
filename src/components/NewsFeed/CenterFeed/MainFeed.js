import React, { Component } from "react";
import { connect } from "react-redux";

import { getPosts } from "../../../actions/PostActions";

import Comments from "./Comments";
import CreatePost from "./CreatePost";

import FeedItem from "./FeedItem";

class MainFeed extends Component {
  state = { hideComments: true, likecolor: "" };

  componentDidMount() {
    this.props.getPosts();
  }

  onLiked = (userid, postid) => {
    this.setState({ likecolor: "red" });
  };

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
        return <FeedItem id={post.id} post={post} />;
      });
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
  {
    getPosts
  }
)(MainFeed);
