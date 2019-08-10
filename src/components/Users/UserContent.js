import React, { Component } from "react";

import CreatePost from "../NewsFeed/CenterFeed/CreatePost";
import Comments from "../NewsFeed/CenterFeed/Comments";

//import { getUserPosts } from "../../actions/PostActions";
import FeedItem from "../NewsFeed/CenterFeed/FeedItem";

class UserContent extends Component {
  state = { hideComments: true };

  // componentDidMount() {
  //   this.props.getUserPosts();
  // }

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

  rednerPosts = ({ posts, userdata }) => {
    if (posts) {
      return posts.map(post => {
        return <FeedItem post={post} userdata={userdata} />;
      });
    } else {
      return <div>No posts to display</div>;
    }
  };

  render() {
    return (
      <div className="ui large feed">
        <CreatePost userdetails={this.props.posts.userdata} />
        {this.rednerPosts(this.props.posts)}
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     posts: state.posts
//   };
// };

export default UserContent;
