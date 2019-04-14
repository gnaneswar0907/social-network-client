import React, { Component } from "react";
import { connect } from "react-redux";

import { getPosts } from "../../../actions/PostActions";

import faker from "faker";
import Comments from "./Comments";
import CreatePost from "./CreatePost";

import FeedItem from "./FeedItem";

class MainFeed extends Component {
  state = { hideComments: true, likecolor: "" };

  componentDidMount() {
    //this.props.getPosts(userid);
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
    return this.props.posts.map(post => {
      return <FeedItem id={post.id} post={post} />;
    });
  };

  render() {
    return (
      <div className="ui large feed">
        <CreatePost />
        <div className="ui raised link fluid card">
          <div className="content">
            <div className="right floated meta">
              <i className="clock icon" />1 Hour Ago
            </div>
            <div className="author">
              <img className="left floated avatar" src={faker.image.avatar()} />
              <div className="summary">
                <a className="user" style={{ paddingLeft: "5px" }}>
                  Elliot Fu
                </a>{" "}
                added you as a friend
              </div>
            </div>
            <div className="meta">
              <i className="icon users" style={{ paddingLeft: "5px" }} />
            </div>
          </div>
          <div className="content">
            <span className="right floated">
              <i className="heart like icon" />
              17 likes
            </span>
            <span onClick={this.setVisibility}>
              <i className="comment icon" />3 comments
            </span>
          </div>
          {this.renderComments()}
        </div>
        <div className="ui raised link fluid card">
          <div className="content">
            <div className="right floated meta date">
              <i className="clock icon" /> 4 days ago
            </div>
            <div className="author">
              <img className="left floated avatar" src={faker.image.avatar()} />
              <a className="user" style={{ paddingLeft: "5px" }}>
                Helen Troy
              </a>{" "}
              added 3 new illustrations
            </div>
            <div className="meta">
              <i className="icon users" style={{ paddingLeft: "5px" }} />
            </div>
          </div>
          <div className="content">
            <div className="medium images" style={{ padding: "10px" }}>
              <a>
                <img
                  style={{ padding: "5px" }}
                  src={faker.image.people(200, 200)}
                />
              </a>
              <a>
                <img
                  style={{ padding: "5px" }}
                  src={faker.image.image(200, 200)}
                />
              </a>
              <a>
                <img
                  style={{ padding: "5px" }}
                  src={faker.image.image(200, 200)}
                />
              </a>
            </div>
          </div>
          <div className="content">
            <span className="right floated">
              <i className="heart like icon" />
              17 likes
            </span>
            <span>
              <i className="comment icon" />3 comments
            </span>
          </div>
        </div>
        <div className="ui raised link fluid card">
          <div className="content">
            <div className="right floated meta date">
              <i className="clock icon" />2 Days Ago
            </div>
            <div className="author">
              <img className="left floated avatar" src={faker.image.avatar()} />
              <div className="summary">
                <a className="user" style={{ paddingLeft: "5px" }}>
                  Jenny Hess
                </a>{" "}
                added you as a friend
              </div>
            </div>
            <div className="meta">
              <i className="icon users" style={{ paddingLeft: "5px" }} />
            </div>
          </div>
          <div className="content">
            <span className="right floated">
              <i
                onClick={this.onLiked}
                className={`${this.state.likecolor} like icon`}
              />
              17 likes
            </span>
            <span>
              <i className="comment icon" />3 comments
            </span>
          </div>
        </div>
        <div className="ui raised link fluid card">
          <div className="content">
            <div className="right floated meta date">
              <i className="clock icon" />3 Days Ago
            </div>
            <div className="author">
              <img className="left floated avatar" src={faker.image.avatar()} />
              <div className="summary">
                <a className="user" style={{ paddingLeft: "5px" }}>
                  Jenny Hess
                </a>{" "}
                posted on his page
              </div>
            </div>
            <div className="meta">
              <i className="icon users" style={{ paddingLeft: "5px" }} />
            </div>
          </div>
          <div className="content">
            <p className="text">
              Ours is a life of constant reruns. We're always circling back to
              where we'd we started, then starting all over again. Even if we
              don't run extra laps that day, we surely will come back for more
              of the same another day soon.
            </p>
          </div>
          <div className="content">
            <span className="right floated">
              <i className="heart like icon" />
              17 likes
            </span>
            <span onClick={this.setVisibility}>
              <i className="comment icon" />3 comments
            </span>
          </div>
          {this.renderComments()}
        </div>
        <div className="ui raised link fluid card">
          <div className="content">
            <div className="right floated meta date">
              <i className="clock icon" /> 6 days ago
            </div>
            <div className="author">
              <img className="left floated avatar" src={faker.image.avatar()} />
              <a className="user" style={{ paddingLeft: "5px" }}>
                Justene Kitsune
              </a>{" "}
              added 2 new photos of you.
            </div>
            <div className="meta">
              <i className="icon users" style={{ paddingLeft: "5px" }} />
            </div>
          </div>
          <div className="content">
            <div className="medium images" style={{ padding: "10px" }}>
              <a>
                <img
                  style={{ padding: "5px" }}
                  src={faker.image.people(200, 200)}
                />
              </a>
              <a>
                <img
                  style={{ padding: "5px" }}
                  src={faker.image.image(200, 200)}
                />
              </a>
            </div>
          </div>
          <div className="content">
            <span className="right floated">
              <i className="heart like icon" />
              17 likes
            </span>
            <span onClick={this.setVisibility}>
              <i className="comment icon" />3 comments
            </span>
          </div>
          {this.renderComments()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
  };
};

export default connect(
  null,
  {
    getPosts
  }
)(MainFeed);
