import React, { Component } from "react";
import { connect } from "react-redux";

import { getPosts } from "../../../actions/PostActions";

import faker from "faker";
import Comments from "./Comments";
import CreatePost from "./CreatePost";

import FeedItem from "./FeedItem";

class MainFeed extends Component {
  state = { hideComments: true, likecolor: "" };

  // componentDidMount() {
  //   this.props.getPosts();
  // }

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

  renderPosts = ({ posts, userdata }) => {
    return posts.map(post => {
      return <FeedItem id={post.id} post={post} userdata={userdata} />;
    });
  };

  render() {
    const posts = this.props.posts;
    if (posts && posts.userdata && posts.posts) {
      return (
        <div className="ui large feed">
          <CreatePost userdetails={posts.userdata} />
          {this.renderPosts(posts)}
        </div>
      );
    } else {
      return (
        <div className="ui large feed">
          <CreatePost />
        </div>
      );
    }
  }
}

// const mapStateToProps = state => {
//   return {
//     posts: state.posts
//   };
// };

// export default connect(
//   mapStateToProps,
//   {
//     getPosts
//   }
// )(MainFeed);

export default MainFeed;
